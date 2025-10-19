# Researcher Dashboard (Researchin) — Design Doc

目的: 研究者が「募集作成→応募受付→選考・日程調整→実施→謝礼処理→アーカイブ」を迷わず高速に回せる管理画面を設計する。運用上の監査性と低摩擦な選考フローを重視。

推奨する設計の立て方（どこに作るか）

オプション A — 別リポジトリの SPA（推奨）
- 概要: React + TypeScript（または Vue 3 + TypeScript）でフル機能管理画面を作成し、専用バックエンド API（Node/Express / NestJS / Serverless）を用意。
- 理由: 複雑な状態管理、リアルタイム更新（WebSocket/Server-Sent Events）、認証・権限分離、スケールが容易。開発チームの分離や独立デプロイが可能。
- 配置: 新しいリポジトリ `researchin-dashboard`。
- ホスティング: Vercel / Netlify (フロント) + Vercel Serverless / AWS Lambda / Cloud Run (API)、DB: PostgreSQL (RDS/Cloud SQL)

オプション B — 同リポジトリ内の専用ディレクトリ（簡易プロトタイプ）
- 概要: この Eleventy リポジトリ内に `/admin` または `/dashboard` ディレクトリを作り、静的なプロトタイプや簡易管理 UI を作成。小〜中規模の運用や内部ツールであれば短期間で立ち上がる。
- 制約: 静的生成だけではリアルタイム性や認証が限定的。動的操作は外部 API が必須（サーバーレス関数）。
- 配置: `./dashboard/`（フロント） + `./api/` または別サービスの API。

どちらを選ぶべきか
- 長期的かつ本番運用（複数研究者、複雑な権限、支払ワークフロー、監査）→ オプション A
- まずは内部運用・早い試作（ドキュメント/ワイヤ→チーム内検証）→ オプション B

提案スタック（推奨）
- フロント: React + TypeScript, Vite, TailwindCSS（または既存の CSS を流用）
- 状態管理: React Query（サーバ同期）、Zustand（UIローカル状態）
- バックエンド: Node.js + Express or NestJS（TypeScript）、または serverless functions (Vercel/AWS)
- DB: PostgreSQL
- 認証: OAuth2 + OIDC (Google/Institution) または SSO、管理者向けは MFAを推奨
- ストレージ: S3互換（同意文書のPDF等）
- ロギング/監査: Append-only AuditLog テーブル + ops logs to S3

データモデル（主要テーブル）
- Research
  - id, title, slug, status, start_date, end_date, location (online|on-site), compensation, created_by, created_at, updated_at
- Applicant
  - id, full_name, full_name_kana, email, gender, birthdate, phone, created_at
- Application
  - id, research_id, applicant_id, stage, submitted_at, data (json), is_qualified, notes
- Payment
  - id, application_id, amount, status (pending/processed/error), method (bank_transfer), bank_details (encrypted), processed_by, processed_at
- Consent
  - id, application_id, version, accepted_at, ip, user_agent
- AuditLog
  - id, entity_type, entity_id, action, data (json), performed_by, performed_at

主要 API のサンプル（短い契約）
- GET /api/researches?status=募集中
  - returns: [{id,title,status,applications_count,unhandled_count, start_date,end_date,compensation}]
- GET /api/researches/:id
  - returns research + aggregate metrics + recent applications
- POST /api/researches
  - body: {title, start_date, end_date, compensation, location, form_schema}
- PATCH /api/researches/:id/status
  - body: {status}
- GET /api/researches/:id/applications?stage=new
  - returns list with pagination
- PATCH /api/applications/:id
  - body: {stage, notes, assigned_to}
- POST /api/payments/bulkProcess
  - body: [{application_id, amount, bank_account_id}]

画面（ページ）一覧と主要 UI 要素
- Global: ヘッダー（研究切替、検索、通知）、サイドバー
- Dashboard (ホーム)
  - KPI カード、優先度キュー（ToDo）、最新応募、支払キュー
- Research List
  - テーブル（フィルタ・ソート・一括操作）
- Research Detail
  - 上部サマリカード、応募タブ（テーブル/カンバン切替）、日程タブ（カレンダー）、同意・コンテンツ管理、レポート
- Applicant List / Kanban
  - カードに次アクション・連絡ボタン・タグ
- Applicant Detail (Slide-over)
  - 応募フォーム原票、メッセージ、同意履歴、スケジュール、振込情報、監査ログ
- Payments
  - 支払リスト、検証ステータス、エクスポート
- Settings
  - フォーム設計、テンプレ管理、ロール・権限

監査・セキュリティ
- すべての編集・決済操作は AuditLog に記録
- 同意はバージョン管理して保管（PDF, checksum）
- 銀行口座情報は暗号化で保存、表示はマスキング
- 権限設計: 管理者 / 研究者 / オペレーター
- 重要操作の二段階承認（例: 一括振込）

アクセシビリティ & ローカライズ
- 日本語優先 UI として和暦表示のオプション、数値フォーマット
- A11y: キーボード操作、ARIAラベル、十分なコントラスト

実装ロードマップ（短期→長期）
- M0 (設計): 2025/Q4 - 設計合意、API スペック、DB スキーマ
- M1 (MVP): 2週間 - Research CRUD、Application 表示、簡易選考（ステージ移動）、CSV エクスポート
- M2: 4週間 - カンバン、スケジュール連携、テンプレメッセージ
- M3: 6〜8週間 - 支払ワークフロー、口座検証、監査ログ
- M4: 10〜12週間 - 本番ハードニング、SAML/SSO、RBAC、レポート

ファイル配置例
- Separate SPA repo
  - /src/components, /src/pages/Dashboard, /src/pages/Research, /src/services/api.ts, /infra/functions
- Same repo prototype
  - /dashboard/index.html (wireframes), /dashboard/static, /api/* (serverless functions)

短期の実作業（私がすぐできること）
1) このリポジトリに `designs/researcher-dashboard.md` を追加（完了）。
2) 要望があれば素早く: Eleventy 上での静的ワイヤ（`/dashboard` HTML）を作成するか、別リポジトリで React テンプレートをスキャフォールドできます。
3) API スキーマや DB スキーマの詳細設計を作成します。

次にどうしますか？
- A: 別リポジトリで SPA を立てる（推奨）。私が `researchin-dashboard` の初期 scaffold (Vite + React + TypeScript + Tailwind) を作成します。
- B: このリポジトリ内で Eleventy を使った静的プロトタイプを作る。まずは `/dashboard/index.njk` のワイヤを作成します。
- C: まずは API/DB スキーマ詳細を詰めてから UI プロトタイプ作成に進む。

選択を教えてください。さらに、選んだ場合は優先する画面（例：Dashboard、応募者カンバン、支払一覧）を教えてください。

---
Created: (auto)
