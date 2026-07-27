module.exports = [
  {
    key: "ja",
    // --- Meta & Header ---
    meta: {
      title: "研究を当たり前に | Researchin",
      description: "研究者と参加者を繋ぐ新たなプラットフォーム。研究者には円滑な募集と事務負担の軽減を、参加者には気軽に関われる機会を提供します。",
      siteName: "Researchin"
    },
    header: {
      navOverview: "事業説明",
      navResearchers: "研究者の方へ",
      navParticipants: "参加者の方へ",
      navServices: "サービス一覧",
      navNews: "ニュース",
      navTeam: "メンバー",
      navCompany: "会社概要",
      navContact: "お問い合わせ",
      navContactLink: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform",
      servicesMenu: {
        administrative: "研究事務サポート",
        website: "研究・事業サイト制作",
        tour: "研究施設ツアー・イベント"
      }
    },

    // --- 1. Hero Section ---
    hero: {
      title: "研究する人と、参加する人をつなぐ。",
      subtitle: "研究・調査の募集と応募をスムーズに",
      participantBtnText: "研究に参加する",
      participantBtnLink: "https://www.jobresearchin.com/",
      researcherBtnText: "研究者・企業の方はこちら",
      researcherBtnLink: "#researchers",
      businessesTitle: "その他の事業はこちら",
      businessesInquiry: '私たちは、研究を身近にするための複数の事業を展開しています。詳しい情報をご希望の場合は、お問い合わせください。'
    },

    // --- 2. Service Overview ---
    overview: {
      title: "募集と参加を、スムーズに。",
      subtitle: "Researchinは、研究者・企業の参加者募集と、協力したい方の研究探しをつなぐプラットフォームです。",
      feature1: {
        title: "募集から管理まで一つに",
        desc: "募集ページの作成、応募受付、参加者情報の管理をオンラインで一元化。必要に応じて事務作業も支援します。"
      },
      feature2: {
        title: "内容を比べて応募",
        desc: "専門知識は必要ありません。研究内容、日程、場所、参加条件、謝礼を確認し、自分に合う研究へ応募できます。"
      },
      feature3: {
        title: "大切な条件を応募前に",
        desc: "研究内容、実施方法、参加条件、謝礼を事前に明示。不明点は主催者に問い合わせたうえで判断できます。"
      },
      detailsButton: "詳細な事業説明"
    },

    // --- 3a. Researchers Section ---
    researchers: {
      title: "研究者・企業の方へ",
      subtitle: "募集ページの作成から応募管理までを整え、研究に向き合う時間を増やします。",
      point1: "研究内容と参加条件が伝わる募集ページを作成し、対象となる方へ届けます。",
      point2: "応募受付、参加者情報、連絡状況をオンラインでまとめて管理できます。",
      point3: "研究ごとの条件や進め方に合わせ、必要な事務作業を支援します。",
      btnText: "参加者募集を相談する",
      btnLink: "https://docs.google.com/forms/d/e/1FAIpQLSeGU0gv5vPKHWXFn2RSIWguIK6LoM7q5X4OB7d1dOSUrRkRnA/viewform"
    },

    // --- 3b. Participants Section ---
    participants: {
      title: "実験・調査に参加したい方へ",
      subtitle: "内容や条件を比べて、興味のある実験・調査に応募できます。",
      point1: "研究の目的や参加内容を読み、納得したうえで応募できます。",
      point2: "日程、場所、参加条件から、自分に合う実験・調査を探せます。",
      point3: "謝礼の有無や金額は募集ページで事前に確認できます。",
      btnText: "参加できる研究を探す",
      btnLink: "https://www.jobresearchin.com/"
    },

    // --- 3c. Usage Guide Section ---
    guide: {
      title: "Researchinの使い方（参加者向けガイド）",
      subtitle: "研究参加の流れを3ステップで紹介します。",
      step1: {
        title: "募集一覧から研究を探す",
        description: "一覧では、研究タイトル、実施期間、所属機関、謝礼を確認できます。検索や絞り込みを使い、気になる募集を開いてください。",
        image: "images/Researchin_explain1.png",
        alt: "研究募集一覧の画面"
      },
      step2: {
        title: "参加条件と内容を確認する",
        description: "詳細ページで、研究の目的、参加内容、参加条件、日時、場所（オンライン／現地）、謝礼、問い合わせ先を確認します。不明点があれば、応募前に主催者へ問い合わせてください。",
        image: "images/Researchin_explain2.png",
        alt: "研究詳細ページの画面"
      },
      step3: {
        title: "応募フォームを開く",
        description: "内容と条件に納得できたら、「応募する」からフォームを開きます。",
        image: "images/Researchin_explain3.png",
        alt: "応募フォームの画面"
      },
      detailedSteps: {
        title: "詳細な参加手順",
        step4: {
          title: "4. 基本情報を入力する（必須）",
          description: "氏名、メールアドレス、性別、生年月日など、必須項目を入力します。主催者からの連絡を受け取れるメールアドレスを使用してください。"
        },
        step5: {
          title: "5. 謝礼の受け取り情報を入力する（必要な場合）",
          description: "謝礼があり、振込先の登録を求められた場合は、銀行名、支店名、口座種別、口座番号を入力します。送信前に誤りがないか確認してください。"
        },
        step6: {
          title: "6. 任意情報の入力（必要に応じて）",
          description: "研究によって、身体情報、職業、生活習慣、既往歴などを確認する場合があります。参加条件や安全確認に使われるため、該当する項目を正確に入力してください。"
        },
        step7: {
          title: "7. 内容を確認して送信",
          description: "入力内容を確認し、「応募する」または「送信」を押します。確認メールが届かない場合は、迷惑メールフォルダや受信設定を確認してください。"
        },
        step8: {
          title: "8. 参加までの流れ",
          description: "応募後、主催者から日程や参加方法の連絡があります。案内に沿って準備・参加し、謝礼がある場合は終了後に指定口座へ振り込まれます。"
        }
      },
      helpSection: {
        title: "困ったときは",
        description: "詳細ページの問い合わせボタンから主催者へ連絡できます。会社情報やプライバシーポリシー・利用規約はページ下部から確認できます。"
      }
    },

    // --- 4. Upcoming Features ---
    features: {
      title: "今後のアップデート",
      subtitle: "募集と参加をより使いやすくするため、次の機能を順次検討・開発しています。",
      feature1: {
        title: "謝礼支払いの一括管理",
        desc: "参加者への謝礼支払いを、研究ごとにまとめて管理できる機能を開発しています。"
      },
      feature2: {
        title: "参加実績の確認",
        desc: "参加履歴をもとに無断キャンセルを減らし、安心して予定を組める仕組みを検討しています。"
      },
      feature3: {
        title: "継続参加の特典",
        desc: "複数の研究に参加した方へ、追加謝礼や特典を設定できる機能を検討しています。"
      },
      feature4: {
        title: "募集結果の分析と改善提案",
        desc: "閲覧数や応募率を確認し、募集文や条件を見直すヒントを得られる機能を開発しています。"
      }
    },

    // --- 5. Company Info Sections ---
    businesses: {
      title: "事業紹介",
      item1: { title: "研究事務サポート", desc: "書類作成、日程調整、応募者対応など、研究に伴う事務作業を必要な範囲で支援します。" },
      item2: { title: "研究・事業サイト制作", desc: "目的と読み手を整理し、研究機関や企業の情報が伝わるWebサイトを企画・制作します。" },
      item3: {
        title: "研究施設ツアー・イベント", desc: "研究施設の見学ツアーや科学イベントを、企画から参加者募集、当日運営まで支援します。"
      }
    },

    // --- Services Page ---
    services: {
      title: "サービス一覧",
      subtitle: "私たちが提供する様々なサービスをご紹介します。",
      description: "Researchinが提供する各種サービスの詳細情報をご覧いただけます。",
      featuresTitle: "特徴・サービス内容",
      contactButton: "お問い合わせ",
      contactTitle: "サービスに関するお問い合わせ",
      contactText: "各サービスについて詳しく知りたい方、ご相談をご希望の方は、お気軽にお問い合わせください。",
      items: [
        {
          title: "研究事務サポート",
          description: "研究者や企業の煩雑な事務作業を代行し、業務に集中できる環境をサポートします。",
          icon: "images/icon-admin.svg",
          features: [
            "研究関連書類の作成・管理",
            "スケジュール調整・会議設定",
            "データ入力・整理作業",
            "メール対応・連絡調整",
            "各種申請手続きの代行"
          ],
          contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
        },
        {
          title: "研究・事業サイト制作",
          description: "専門的なWebサイトの企画から制作・運用までを請け負います。",
          icon: "images/icon-web.svg",
          features: [
            "レスポンシブWebデザイン",
            "研究機関・企業向けサイト制作",
            "SEO対策・アクセス解析",
            "コンテンツ管理システム構築",
            "継続的な保守・運用サポート"
          ],
          contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
        },
        {
          title: "研究施設ツアー・イベント",
          description: "学術機関・企業の研究施設のツアー企画・運営を行います。",
          icon: "images/icon-tour.svg",
          features: [
            "研究施設見学ツアーの企画",
            "一般向け科学イベントの運営",
            "産学連携イベントの開催",
            "専門ガイドの手配",
            "参加者募集・管理"
          ],
          contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
        }
      ]
    },

    // --- News Page ---
    news: {
      title: "ニュース",
      subtitle: "Researchinの最新情報をお届けします。",
      description: "Researchinの最新ニュース、アップデート、イベント情報をご覧いただけます。",
      readMore: "続きを読む",
      noNews: "現在、お知らせはありません。",
      items: [
        {
          date: "2026-07-27",
          displayDate: "2026年7月27日",
          category: "お知らせ",
          title: "代表・今井崇人が経産省「J-StarX」UC Berkeley Haasプログラムに採択",
          excerpt: "当社代表の今井崇人が、経済産業省の起業家海外派遣プログラム「J-StarX」におけるUC Berkeley Haas School of Businessのプログラムに採択されました。",
          link: null
        }
      ]
    },

    // --- Administrative Support Service Page ---
    adminService: {
      title: "研究事務サポート",
      subtitle: "書類作成、日程調整、応募者対応など、研究に伴う事務作業を必要な範囲で支援します。",
      description: "研究者・企業向けの事務作業代行サービスの詳細情報です。",
      overviewTitle: "サービス概要",
      overview: "研究活動や企業活動において発生する様々な事務作業を専門的に代行いたします。書類作成からスケジュール管理、データ整理まで、お客様のニーズに合わせて幅広く対応し、本業により集中していただける環境を提供します。",
      featuresTitle: "主なサービス内容",
      features: [
        {
          title: "研究関連書類の作成・管理",
          description: "研究計画書、報告書、申請書類などの作成から管理まで、研究活動に必要な書類業務を代行します。"
        },
        {
          title: "スケジュール調整・会議設定",
          description: "研究会議や実験スケジュールの調整、会議室の予約、参加者への連絡などを代行します。"
        },
        {
          title: "データ入力・整理作業",
          description: "実験データの入力、アンケート結果の集計、データベースの整理など、データ関連業務を効率的に処理します。"
        },
        {
          title: "メール対応・連絡調整",
          description: "日常的なメール対応や関係者との連絡調整を代行し、コミュニケーション業務の負担を軽減します。"
        },
        {
          title: "各種申請手続きの代行",
          description: "研究助成金の申請手続きや学会発表の申込みなど、複雑な手続き業務をサポートします。"
        }
      ],
      benefitsTitle: "導入のメリット",
      benefits: [
        "研究や本業により多くの時間を割くことができます",
        "専門的な事務作業を経験豊富なスタッフが担当します",
        "作業の品質と効率性が向上します",
        "コスト削減と業務効率化を同時に実現できます",
        "繁忙期の業務負荷を軽減できます"
      ],
      contactTitle: "研究事務のご相談",
      contactText: "事務作業代行サービスについて詳しく知りたい方、お見積りをご希望の方は、お気軽にお問い合わせください。",
      contactButton: "お問い合わせフォーム",
      contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
    },

    // --- Website Development Service Page ---
    webService: {
      title: "研究・事業サイト制作",
      subtitle: "目的と読み手を整理し、研究機関や企業の情報が伝わるWebサイトを企画・制作します。",
      description: "研究機関・企業向けのWebサイト制作サービスの詳細情報です。",
      overviewTitle: "サービス概要",
      overview: "研究機関や企業のニーズに特化したWebサイトの企画・制作・運用を一貫してサポートします。最新の技術と豊富な経験を活かし、効果的で使いやすいWebサイトを提供いたします。",
      featuresTitle: "主なサービス内容",
      features: [
        {
          title: "レスポンシブWebデザイン",
          description: "PC、タブレット、スマートフォンなど、あらゆるデバイスで最適に表示されるWebサイトを制作します。"
        },
        {
          title: "研究機関・企業向けサイト制作",
          description: "研究内容の紹介、企業情報の発信など、専門性を活かしたWebサイトを設計・制作します。"
        },
        {
          title: "SEO対策・アクセス解析",
          description: "検索エンジン最適化とアクセス解析により、Webサイトの効果を最大化します。"
        },
        {
          title: "コンテンツ管理システム構築",
          description: "お客様が簡単にコンテンツを更新できるCMSを構築し、継続的な運用をサポートします。"
        },
        {
          title: "継続的な保守・運用サポート",
          description: "サイト公開後も継続的な保守・更新・改善提案により、Webサイトの価値を維持・向上させます。"
        }
      ],
      benefitsTitle: "導入のメリット",
      benefits: [
        "専門性の高いWebサイトで研究成果や事業内容を効果的に発信できます",
        "最新の技術とデザインで競合他社との差別化を図れます",
        "SEO対策により、より多くの人に情報を届けることができます",
        "継続的なサポートにより、常に最適な状態を維持できます",
        "専門知識不要で簡単にコンテンツを更新できます"
      ],
      contactTitle: "Webサイト制作のご相談",
      contactText: "Webサイト制作サービスについて詳しく知りたい方、お見積りをご希望の方は、お気軽にお問い合わせください。",
      contactButton: "お問い合わせフォーム",
      contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
    },

    // --- Tour Organization Service Page ---
    tourService: {
      title: "研究施設ツアー・イベント",
      subtitle: "研究施設の見学ツアーや科学イベントを、企画から参加者募集、当日運営まで支援します。",
      description: "研究施設見学ツアーの企画・運営サービスの詳細情報です。",
      overviewTitle: "サービス概要",
      overview: "研究機関や企業の研究施設を一般の方々に紹介するツアーの企画から運営まで、トータルにサポートします。研究の成果を社会に広め、研究への理解と関心を深めていただく機会を提供します。",
      featuresTitle: "主なサービス内容",
      features: [
        {
          title: "研究施設見学ツアーの企画",
          description: "研究施設の特徴を活かした見学ツアーの企画・立案から実施まで、全工程をサポートします。"
        },
        {
          title: "一般向け科学イベントの運営",
          description: "研究成果を分かりやすく紹介するイベントやワークショップの企画・運営を行います。"
        },
        {
          title: "産学連携イベントの開催",
          description: "企業と学術機関を繋ぐイベントやシンポジウムの企画・運営をサポートします。"
        },
        {
          title: "専門ガイドの手配",
          description: "研究内容に精通した専門ガイドの手配により、質の高い解説と案内を提供します。"
        },
        {
          title: "参加者募集・管理",
          description: "効果的な広報活動による参加者募集から、当日の受付・管理まで一貫して対応します。"
        }
      ],
      benefitsTitle: "導入のメリット",
      benefits: [
        "研究成果を社会に広く発信し、研究への理解を促進できます",
        "新たな研究協力者やパートナーとの出会いの機会を創出できます",
        "研究機関のブランディングと社会貢献活動を同時に実現できます",
        "専門的な企画・運営により、効果的なイベントを開催できます",
        "参加者との交流を通じて、新たな研究のヒントを得ることができます"
      ],
      contactTitle: "ツアー・イベントのご相談",
      contactText: "ツアー開催サービスについて詳しく知りたい方、企画のご相談をご希望の方は、お気軽にお問い合わせください。",
      contactButton: "お問い合わせフォーム",
      contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
    },

    team: {
      title: "メンバー",
      members: [
        {
          name: "今井 崇人",
          title: "CEO",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/takahitoimai/",
          }
        },
        {
          name: "波多 紘希",
          title: "CSO",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/koki-hata-aab3b0379/",
          }
        },
        {
          name: "トーシフ イブネ イクバル",
          title: "CTO",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/tausif-ibne-iqbal-0232a937a/",
          }
        },
        {
          name: "小笠原 佳人",
          title: "技術顧問",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/yachtpa3/"
          }
        }
      ]
    },

    companyProfile: {
      title: "会社概要",
      nameLabel: "会社名",
      name: "Researchin株式会社",
      foundedLabel: "設立",
      founded: "2025年8月20日",
      ceoLabel: "代表者",
      ceo: "今井 崇人",
      addressLabel: "所在地",
      address: "〒150-0043 東京都渋谷区道玄坂1丁目10番8号渋谷区道玄坂東急ビル2F-C"
    },

    // --- Footer ---
    footer: {
      contactPrefix: "ご連絡はこちら:",
      contactEmail: "info@jobresearchin.com",
      contact: "お問い合わせ",
      contactLink: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform",
      terms: "利用規約",
      privacy: "プライバシーポリシー"
    }
  },
  {
    key: "en",
    // --- Meta & Header ---
    meta: {
      title: "Making Research Commonplace | Researchin",
      description: "A new platform connecting researchers and participants. We offer streamlined recruitment and reduced administrative burdens for researchers, and accessible opportunities for participants.",
      siteName: "Researchin"
    },
    header: {
      navOverview: "Business Description",
      navResearchers: "For Researchers",
      navParticipants: "For Participants",
      navServices: "Services",
      navNews: "News",
      navTeam: "Team",
      navCompany: "Company",
      navContact: "Contact",
      navContactLink: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform",
      servicesMenu: {
        administrative: "Research Admin Support",
        website: "Research Websites",
        tour: "Research Tours & Events"
      }
    },

    // --- 1. Hero Section ---
    hero: {
      title: "Where researchers and participants meet.",
      subtitle: "Smooth recruitment and applications for studies and surveys.",
      participantBtnText: "Find a study",
      participantBtnLink: "https://www.jobresearchin.com/",
      researcherBtnText: "For Researchers",
      researcherBtnLink: "#researchers",
      businessesTitle: "Our Other Businesses",
      businessesInquiry: "We are developing multiple businesses to make research more accessible. Please contact us for more information."
    },

    // --- 2. Service Overview ---
    overview: {
      title: "Recruit and join, clearly.",
      subtitle: "Researchin helps researchers and organizations recruit participants, while giving people one place to find studies they can join.",
      feature1: {
        title: "Recruit and manage in one place",
        desc: "Create a study listing, accept applications, and manage participant information online. Administrative support is available when needed."
      },
      feature2: {
        title: "Compare before applying",
        desc: "No specialist knowledge is required. Review the study, schedule, location, eligibility, and compensation before choosing what fits."
      },
      feature3: {
        title: "Know the terms upfront",
        desc: "Study details, format, eligibility, and compensation are shown before you apply. Contact the organizer if anything is unclear."
      },
      detailsButton: "Detailed Business Description"
    },

    // --- 3a. Researchers Section ---
    researchers: {
      title: "For Researchers",
      subtitle: "Set up your listing and manage applications in one place, leaving more time for the research itself.",
      point1: "Create a clear listing that explains the study and eligibility requirements to potential participants.",
      point2: "Manage applications, participant information, and contact status online in one place.",
      point3: "Get administrative support tailored to the requirements and workflow of each study.",
      btnText: "Discuss participant recruitment",
      btnLink: "https://docs.google.com/forms/d/e/1FAIpQLSeGU0gv5vPKHWXFn2RSIWguIK6LoM7q5X4OB7d1dOSUrRkRnA/viewform"
    },

    // --- 3b. Participants Section ---
    participants: {
      title: "For Participants",
      subtitle: "Compare the details and requirements, then apply to studies that interest you.",
      point1: "Read the purpose of the study and what participation involves before you decide to apply.",
      point2: "Find studies that fit your schedule, location, and eligibility.",
      point3: "Check whether compensation is offered and how much before you apply.",
      btnText: "Find Available Studies",
      btnLink: "https://www.jobresearchin.com/"
    },

    // --- 3c. Usage Guide Section ---
    guide: {
      title: "How to Use Researchin (Participant Guide)",
      subtitle: "From discovery to application in 3 steps.",
      step1: {
        title: "Find a study",
        description: "The study list shows the title, dates, host institution, and compensation. Use search or filters, then open any listing you want to learn more about.",
        image: "images/Researchin_explain1-en.png",
        alt: "Research listing screen"
      },
      step2: {
        title: "Review the details",
        description: "Review the study purpose, what you will do, eligibility, date and time, location (online or in person), compensation, and contact details. Ask the organizer before applying if anything is unclear.",
        image: "images/Researchin_explain2-en.png",
        alt: "Research detail page screen"
      },
      step3: {
        title: "Open the application",
        description: "Once you understand and accept the details, select “Apply” to open the application form.",
        image: "images/Researchin_explain3-en.png",
        alt: "Application form screen"
      },
      detailedSteps: {
        title: "Detailed Participation Steps",
        step4: {
          title: "4. Enter Basic Information (Required)",
          description: "Enter the required details, including your name, email address, gender, and date of birth. Use an address where the organizer can reach you."
        },
        step5: {
          title: "5. Enter payment details when required",
          description: "If compensation is offered and payment details are requested, enter the bank, branch, account type, and account number. Check every field before submitting."
        },
        step6: {
          title: "6. Enter Optional Information (As Needed)",
          description: "Some studies ask about your physical profile, occupation, daily habits, or medical history. Answer accurately because this information may be used to confirm eligibility and safety."
        },
        step7: {
          title: "7. Review and Submit",
          description: "Review your answers, then select “Apply” or “Submit.” If no confirmation arrives, check your spam folder and email settings."
        },
        step8: {
          title: "8. Process Until Participation",
          description: "The organizer will contact you with the schedule and instructions. Follow their guidance to prepare and take part. If compensation is offered, it will be paid to your designated account after completion."
        }
      },
      helpSection: {
        title: "When You Need Help",
        description: "You can contact the organizer through the inquiry button on the detail page. Company information, privacy policy, and terms of service can be found at the bottom of the page."
      }
    },

    // --- 4. Upcoming Features ---
    features: {
      title: "What’s next",
      subtitle: "We are exploring and developing these features to make recruitment and participation easier.",
      feature1: {
        title: "Centralized compensation payments",
        desc: "We’re developing a way to manage participant compensation by study in one place."
      },
      feature2: {
        title: "Participation history",
        desc: "We’re exploring ways to use participation history to reduce no-shows and make scheduling more dependable."
      },
      feature3: {
        title: "Benefits for repeat participation",
        desc: "We’re exploring a feature that lets organizers offer additional compensation or benefits to repeat participants."
      },
      feature4: {
        title: "Recruitment insights",
        desc: "We’re developing tools to review page views and application rates, with practical prompts for improving listings and eligibility criteria."
      }
    },

    // --- 5. Company Info Sections ---
    businesses: {
      title: "Our Businesses",
      item1: { title: "Research Admin Support", desc: "We help with the administrative work around research, including documents, scheduling, and applicant communication." },
      item2: { title: "Research Websites", desc: "We plan and build websites that clearly communicate the work of research institutions and organizations to the people they need to reach." },
      item3: { title: "Research Tours & Events", desc: "We support research facility tours and science events, from planning and participant recruitment through on-site delivery." }
    },

    // --- Services Page ---
    services: {
      title: "Our Services",
      subtitle: "Discover the various services we provide.",
      description: "Detailed information about the services offered by Researchin.",
      featuresTitle: "Features & Service Details",
      contactButton: "Contact Us",
      contactTitle: "Inquiries About Our Services",
      contactText: "If you would like to learn more about any of our services or have questions, please feel free to contact us.",
      items: [
        {
          title: "Research Admin Support",
          description: "We handle burdensome administrative tasks for researchers and companies, allowing them to focus on their core work.",
          icon: "images/icon-admin.svg",
          features: [
            "Research document creation & management",
            "Schedule coordination & meeting setup",
            "Data entry & organization",
            "Email correspondence & communication coordination",
            "Various application procedures"
          ],
          contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
        },
        {
          title: "Research Websites",
          description: "We undertake everything from planning to production and operation of specialized websites.",
          icon: "images/icon-web.svg",
          features: [
            "Responsive web design",
            "Research institution & corporate website development",
            "SEO optimization & analytics",
            "Content management system setup",
            "Ongoing maintenance & support"
          ],
          contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
        },
        {
          title: "Research Tours & Events",
          description: "We plan and host tours to research facilities and related companies.",
          icon: "images/icon-tour.svg",
          features: [
            "Research facility tour planning",
            "Public science event management",
            "Industry-academia collaboration events",
            "Professional guide arrangement",
            "Participant recruitment & management"
          ],
          contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
        }
      ]
    },

    // --- Research Administration Support Page ---
    adminService: {
      title: "Research Admin Support",
      subtitle: "Practical help with the documents, scheduling, and participant communication that sit around research.",
      description: "Administrative support for research teams and organizations.",
      overviewTitle: "Service overview",
      overview: "We support the day-to-day administrative work that accompanies research, from preparing documents and coordinating schedules to organizing data and communicating with applicants. The scope is tailored to each project so research teams can spend more time on their core work.",
      featuresTitle: "What we can support",
      features: [
        { title: "Research documents", description: "Preparation and organization of research plans, reports, applications, and related project documents." },
        { title: "Scheduling and meetings", description: "Coordination of study schedules, meetings, rooms, and participant communications." },
        { title: "Data entry and organization", description: "Structured entry and organization of study data, survey responses, and project records." },
        { title: "Applicant communication", description: "Support for routine email, status updates, and coordination with applicants and project partners." },
        { title: "Applications and procedures", description: "Administrative support for grant applications, conference submissions, and other project procedures." }
      ],
      benefitsTitle: "How this helps",
      benefits: [
        "Keep more time available for research and core project work",
        "Choose support that matches the actual scope of the project",
        "Maintain clear, consistent administrative records",
        "Reduce pressure during recruitment and other busy periods",
        "Bring documents, schedules, and communication into one workflow"
      ],
      contactTitle: "Discuss research administration",
      contactText: "Tell us what work is taking time away from your research. We will discuss the scope and a practical way to support it.",
      contactButton: "Contact us",
      contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
    },

    // --- Research & Corporate Websites Page ---
    webService: {
      title: "Research Websites",
      subtitle: "Websites planned around what you need to explain and who needs to understand it.",
      description: "Website planning and production for research institutions, projects, and organizations.",
      overviewTitle: "Service overview",
      overview: "We plan and build websites for research teams and organizations. We start by clarifying the purpose, audience, and information structure, then create a responsive site that makes specialist work easier to understand and maintain.",
      featuresTitle: "What we can support",
      features: [
        { title: "Responsive design", description: "Layouts designed to remain clear and usable across desktop, tablet, and mobile screens." },
        { title: "Research and corporate sites", description: "Information architecture and production for laboratories, projects, institutions, and companies." },
        { title: "Search and measurement", description: "Foundational search optimization and analytics setup to understand how information is being found." },
        { title: "Content management", description: "A suitable editing workflow so the team can keep essential information up to date." },
        { title: "Ongoing maintenance", description: "Support for updates, maintenance, and practical improvements after launch." }
      ],
      benefitsTitle: "How this helps",
      benefits: [
        "Explain specialist work clearly to the people you need to reach",
        "Give visitors a consistent experience on any device",
        "Organize content around real reader questions",
        "Keep important information easier to update",
        "Plan maintenance and improvements beyond the launch"
      ],
      contactTitle: "Talk to us about a website",
      contactText: "Share the purpose of the site, its audience, and the information you need to publish. We will help shape the right scope.",
      contactButton: "Contact us",
      contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
    },

    // --- Research Tours & Events Page ---
    tourService: {
      title: "Research Tours & Events",
      subtitle: "Planning and delivery support for research facility tours and public-facing science events.",
      description: "Planning and operational support for research tours and events.",
      overviewTitle: "Service overview",
      overview: "We help research institutions and organizations open their work to a wider audience through facility tours and events. Support can cover concept development, participant recruitment, guides, communication, and on-the-day operations.",
      featuresTitle: "What we can support",
      features: [
        { title: "Facility tour planning", description: "A tour plan shaped around the facility, its research, the audience, and operational constraints." },
        { title: "Public science events", description: "Planning and delivery of talks, demonstrations, and workshops for non-specialist audiences." },
        { title: "Industry-academia events", description: "Operational support for events that bring research institutions, companies, and partners together." },
        { title: "Guides and interpretation", description: "Coordination of guides and explanations that make specialist work accessible to visitors." },
        { title: "Recruitment and attendance", description: "Participant recruitment, registration, pre-event communication, reception, and attendance management." }
      ],
      benefitsTitle: "How this helps",
      benefits: [
        "Share research with audiences beyond the institution",
        "Create a clear, welcoming visitor experience",
        "Coordinate recruitment and on-site operations in one plan",
        "Match explanations and activities to the audience",
        "Build useful points of contact with participants and partners"
      ],
      contactTitle: "Talk to us about a tour or event",
      contactText: "Tell us about the facility, audience, timing, and experience you want to create. We will discuss the practical next steps.",
      contactButton: "Contact us",
      contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
    },

    // --- News Page ---
    news: {
      title: "News",
      subtitle: "Stay updated with the latest from Researchin.",
      description: "Latest news, updates, and event information from Researchin.",
      readMore: "Read More",
      noNews: "No news available at this time.",
      items: [
        {
          date: "2026-07-27",
          displayDate: "July 27, 2026",
          category: "Announcement",
          title: "CEO Takahito Imai Selected for METI’s J-StarX UC Berkeley Haas Program",
          excerpt: "Our CEO, Takahito Imai, has been selected for the UC Berkeley Haas School of Business program under J-StarX, the Ministry of Economy, Trade and Industry’s overseas entrepreneurship program.",
          link: null
        }
      ]
    },
    team: {
      title: "Team",
      members: [
        {
          name: "Takahito Imai",
          title: "CEO",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/takahitoimai/",
          }
        },
        {
          name: "Koki Hata",
          title: "CSO",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/koki-hata-aab3b0379/",
          }
        },
        {
          name: "Tausif Ibne Iqbal",
          title: "CTO",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/tausif-ibne-iqbal-0232a937a/",
          }
        },
        {
          name: "Yoshito Ogasawara",
          title: "Advisor",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/yachtpa3/"
          }
        }
      ]
    },

    companyProfile: {
      title: "Company Profile",
      nameLabel: "Company Name",
      name: "Researchin Inc.",
      foundedLabel: "Founded",
      founded: "August 20, 2025",
      ceoLabel: "CEO",
      ceo: "Takahito Imai",
      addressLabel: "Address",
      address: "150-0043 Shibuya Dogenzaka Tokyu Building 2F-C, 1-10-8 Dogenzaka, Shibuya-ku, Tokyo"
    },

    // --- Footer ---
    footer: {
      contactPrefix: "Contact:",
      contactEmail: "info@jobresearchin.com",
      contact: "Contact",
      contactLink: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    }
  }
];
