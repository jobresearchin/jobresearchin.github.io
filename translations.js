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
        administrative: "事務作業の代行",
        website: "Webサイトの作成委託",
        tour: "ツアーの開催"
      }
    },

    // --- 1. Hero Section ---
    hero: {
      title: "研究を当たり前に",
      subtitle: "研究参加・募集の新しい形を提供します",
      participantBtnText: "研究に参加する",
      participantBtnLink: " https://www.jobresearchin.com/",
      researcherBtnText: "研究者・企業の方はこちら",
      researcherBtnLink: "#researchers",
      businessesTitle: "その他の事業はこちら",
      businessesInquiry: '私たちは、研究を身近にするための複数の事業を展開しています。詳しい情報をご希望の場合は、お問い合わせください。'
    },

    // --- 2. Service Overview ---
    overview: {
      title: "研究者と参加者を繋ぐ新しいプラットフォーム",
      subtitle: "私たちのサービスは、研究開発を加速させたい研究者と、社会貢献に関心のある参加者を繋ぐプラットフォームです。",
      feature1: {
        title: "研究者向け：質の高い募集と事務代行",
        desc: "求める条件に合った参加者を、スピーディーかつ効率的に募集。また、事務作業の代行によって時間をより研究に注げます。"
      },
      feature2: {
        title: "参加者向け：簡単な登録",
        desc: "専門知識は不要。簡単な登録で気軽に参加できます。多くの研究を掲載。自分に合った研究に参加可能です。"
      },
      feature3: {
        title: "双方に：透明性の高い仕組み",
        desc: "研究内容や条件、謝礼などが事前に明確に提示され、双方が納得して繋がります。"
      },
      detailsButton: "詳細な事業説明"
    },

    // --- 3a. Researchers Section ---
    researchers: {
      title: "研究者・企業の方へ",
      subtitle: "募集の手間を削減し、研究に集中できる環境を提供します。",
      point1: "多様な参加者プールにアクセスし、最適な候補者を効率的に見つけられます。",
      point2: "募集ページの作成から管理までオンラインで完結。研究本来の業務に集中できます。",
      point3: "従来のリクルーティング手法に比べ、時間とコストを大幅に削減します。",
      btnText: "募集のフォームはこちら",
      btnLink: "https://docs.google.com/forms/d/e/1FAIpQLSeGU0gv5vPKHWXFn2RSIWguIK6LoM7q5X4OB7d1dOSUrRkRnA/viewform"
    },

    // --- 3b. Participants Section ---
    participants: {
      title: "実験・調査に参加したい方へ",
      subtitle: "あなたの「協力したい」という気持ちが、未来を創る力になります。",
      point1: "あなたの経験や時間が、新しい発見や技術革新の礎となり、社会に貢献できます。",
      point2: "興味や関心に合わせて、豊富な研究プロジェクトの中から参加したいものを選べます。",
      point3: "参加する実験や調査に応じて、明確な謝礼が提供され、あなたの貢献が評価されます。",
      btnText: "参加できる研究を探す",
      btnLink: "https://www.jobresearchin.com/"
    },

    // --- 3c. Usage Guide Section ---
    guide: {
      title: "Researchinの使い方（参加者向けガイド）",
      subtitle: "研究参加の流れを3つのステップでご説明します。",
      step1: {
        title: "1. 募集一覧から気になる研究を探す",
        description: "トップページの検索バーや一覧表から、実施期間、研究タイトル、所属機関、謝礼額を確認します。気になる研究をクリックすると詳細ページへ移動できます。",
        image: "images/Researchin_explain1.png",
        alt: "研究募集一覧の画面"
      },
      step2: {
        title: "2. 研究詳細ページで参加条件と実施概要を確認する",
        description: "タイトル、実施期間（例：2025年10月10日〜10月31日）、謝礼（例：2000JPY）、実施場所（オンライン／研究室）を確認します。実験内容や問い合わせ先の案内がある場合は、必要に応じて主催者へ質問して不明点を解消します。参加条件が「特になし」の場合でも、日程や環境（オンライン可否）を自分の都合と照らし合わせて判断します。",
        image: "images/Researchin_explain2.png",
        alt: "研究詳細ページの画面"
      },
      step3: {
        title: "3. 応募フォームを開く",
        description: "研究詳細ページの「応募する」ボタンを押すと、応募フォーム（「研究への応募」）が表示されます。",
        image: "images/Researchin_explain3.png",
        alt: "応募フォームの画面"
      },
      detailedSteps: {
        title: "詳細な参加手順",
        step4: {
          title: "4. 基本情報を入力する（必須）",
          description: "フルネーム（漢字／カタカナ）、メールアドレス、性別、生年月日を入力します。入力は誤字や半角・全角に注意し、メールは受信可能なアドレスを使用してください。"
        },
        step5: {
          title: "5. 振込先情報を入力する（必須）",
          description: "銀行名、支店名、口座種類（普通／当座）、口座番号を正確に記入します。謝礼の振り込みに必要なため、誤りがないか必ず再確認します。"
        },
        step6: {
          title: "6. 任意情報の入力（必要に応じて）",
          description: "身体情報（身長・体重・利き手）、国籍・使用言語、学歴・職業・業種、家族・経済情報（世帯年収、婚姻状況、同居人数、子どもの有無）などを選択または記入します。視力（裸眼・矯正）、色覚特性、生活習慣（喫煙・飲酒）、アレルギー、既往歴・現在の健康状態は、研究の適格性判断や安全管理に役立ちます。該当事項があれば詳細欄に具体的に記入します。"
        },
        step7: {
          title: "7. 内容を確認して送信",
          description: "入力内容を見直し、間違いがないことを確認したら「応募する」または「送信」ボタンを押します。送信後は確認メールが届くことがあるため、受信設定を整えておきます。"
        },
        step8: {
          title: "8. 参加までの流れ",
          description: "主催者から日程調整や事前説明の連絡が来ます。オンライン実施の場合は接続環境（通信、カメラ・マイク）を事前に準備してください。実験当日は案内に従って参加し、終了後に謝礼が指定口座へ振り込まれます。"
        }
      },
      helpSection: {
        title: "困ったときは",
        description: "詳細ページの問い合わせボタンから主催者へ連絡できます。会社情報やプライバシーポリシー・利用規約はページ下部から確認できます。"
      }
    },

    // --- 4. Upcoming Features ---
    features: {
      title: "進化し続けるプラットフォーム",
      subtitle: "私たちは、ユーザーの皆様の声に耳を傾け、サービスの改善を続けます。近日中に、以下の機能が追加される予定です。",
      feature1: {
        title: "謝礼支払いの代行機能",
        desc: "面倒な謝礼の支払い手続きをプラットフォームが代行。研究者は募集から支払いまで、ワンストップで完結できます。"
      },
      feature2: {
        title: "キャンセル防止機能",
        desc: "無断キャンセルを繰り返す参加者へのペナルティや、参加率の高いユーザーを評価する仕組みを導入し、募集の信頼性を高めます。"
      },
      feature3: {
        title: "リピーターへのインセンティブ機能",
        desc: "複数回の研究に協力していただいた参加者へ、追加の謝礼や特典を提供するインセンティブプログラムを導入します。"
      },
      feature4: {
        title: "AIによる募集効果の分析",
        desc: "AIが募集ページの閲覧数や応募率を分析し、より効果的な募集文や条件設定を提案。募集効果の最大化を支援します。"
      }
    },

    // --- 5. Company Info Sections ---
    businesses: {
      title: "事業紹介",
      item1: { title: "事務作業の代行", desc: "研究者や企業の煩雑な事務作業を代行し、業務に集中できる環境をサポートします。" },
      item2: { title: "Webサイトの作成委託", desc: "専門的なWebサイトの企画から制作・運用までを請け負います。" },
      item3: {
        title: "ツアーの開催", desc: "学術機関・企業の研究施設のツアー企画・運営を行います。"
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
          title: "事務作業の代行",
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
          title: "Webサイトの作成委託",
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
          title: "ツアーの開催",
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
          date: "2025-10-11",
          displayDate: "2025年10月11日",
          category: "お知らせ",
          title: "Webサイトをリニューアルしました",
          excerpt: "より使いやすく、分かりやすいWebサイトにリニューアルいたしました。",
          link: null
        }
      ]
    },

    // --- Administrative Support Service Page ---
    adminService: {
      title: "事務作業の代行",
      subtitle: "研究者や企業の煩雑な事務作業を代行し、業務に集中できる環境をサポートします。",
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
      benefitsTitle: "このサービスを利用するメリット",
      benefits: [
        "研究や本業により多くの時間を割くことができます",
        "専門的な事務作業を経験豊富なスタッフが担当します",
        "作業の品質と効率性が向上します",
        "コスト削減と業務効率化を同時に実現できます",
        "繁忙期の業務負荷を軽減できます"
      ],
      contactTitle: "事務作業代行に関するお問い合わせ",
      contactText: "事務作業代行サービスについて詳しく知りたい方、お見積りをご希望の方は、お気軽にお問い合わせください。",
      contactButton: "お問い合わせフォーム",
      contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
    },

    // --- Website Development Service Page ---
    webService: {
      title: "Webサイトの作成委託",
      subtitle: "専門的なWebサイトの企画から制作・運用までを請け負います。",
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
      benefitsTitle: "このサービスを利用するメリット",
      benefits: [
        "専門性の高いWebサイトで研究成果や事業内容を効果的に発信できます",
        "最新の技術とデザインで競合他社との差別化を図れます",
        "SEO対策により、より多くの人に情報を届けることができます",
        "継続的なサポートにより、常に最適な状態を維持できます",
        "専門知識不要で簡単にコンテンツを更新できます"
      ],
      contactTitle: "Webサイト制作に関するお問い合わせ",
      contactText: "Webサイト制作サービスについて詳しく知りたい方、お見積りをご希望の方は、お気軽にお問い合わせください。",
      contactButton: "お問い合わせフォーム",
      contactForm: "https://docs.google.com/forms/d/e/1FAIpQLScT9sKNc-MrP8il6V1qEGsINFswQY1npg1XRDtwLhr4yMjZeA/viewform"
    },

    // --- Tour Organization Service Page ---
    tourService: {
      title: "ツアーの開催",
      subtitle: "学術機関・企業の研究施設のツアー企画・運営を行います。",
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
      benefitsTitle: "このサービスを利用するメリット",
      benefits: [
        "研究成果を社会に広く発信し、研究への理解を促進できます",
        "新たな研究協力者やパートナーとの出会いの機会を創出できます",
        "研究機関のブランディングと社会貢献活動を同時に実現できます",
        "専門的な企画・運営により、効果的なイベントを開催できます",
        "参加者との交流を通じて、新たな研究のヒントを得ることができます"
      ],
      contactTitle: "ツアー開催に関するお問い合わせ",
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
          name: "柳澤 京佐",
          title: "CMO",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/%E4%BA%AC%E4%BD%90-%E6%9F%B3%E6%BE%A4-76a3a7368/",
          }
        },
        {
          name: "小笠原 佳人",
          title: "Stack System Inc. CEO & Engineer",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/yachtpa3/"
          }
        },
        {
          name: "内藤 剛汰",
          title: "Supporter",
          affiliation: null,
          socials: {
            github: "https://github.com/konaito"
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
      ceo: "今井崇人",
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
        administrative: "Administrative Support",
        website: "Website Development",
        tour: "Tour Organization"
      }
    },

    // --- 1. Hero Section ---
    hero: {
      title: "IN TO RESEARCH",
      subtitle: "",
      participantBtnText: "Access Platform →",
      participantBtnLink: "https://www.jobresearchin.com/",
      researcherBtnText: "For Researchers",
      researcherBtnLink: "#researchers",
      businessesTitle: "Our Other Businesses",
      businessesInquiry: "We are developing multiple businesses to make research more accessible. Please contact us for more information."
    },

    // --- 2. Service Overview ---
    overview: {
      title: "A New Platform Connecting Researchers and Participants",
      subtitle: "Our service is a platform that connects researchers who want to accelerate R&D with participants interested in contributing to society.",
      feature1: {
        title: "For Researchers: High-Quality Recruitment & Admin Support",
        desc: "Quickly and efficiently recruit participants who meet your criteria. Our administrative support allows you to focus more time on your research."
      },
      feature2: {
        title: "For Participants: Easy Registration",
        desc: "No expert knowledge required. You can easily participate with a simple registration. We list many studies, so you can join one that fits you."
      },
      feature3: {
        title: "For Both: A Transparent System",
        desc: "Study details, conditions, and compensation are clearly presented upfront, ensuring both parties connect with a mutual understanding."
      },
      detailsButton: "Detailed Business Description"
    },

    // --- 3a. Researchers Section ---
    researchers: {
      title: "For Researchers",
      subtitle: "We reduce the hassle of recruitment and provide an environment where you can focus on your research.",
      point1: "Access a diverse pool of participants to efficiently find the most suitable candidates.",
      point2: "Complete the entire recruitment process online, from creating pages to managing participants, so you can focus on your core research.",
      point3: "Significantly reduce time and costs compared to traditional recruiting methods.",
      btnText: "Recruitment Form",
      btnLink: "https://docs.google.com/forms/d/e/1FAIpQLSeGU0gv5vPKHWXFn2RSIWguIK6LoM7q5X4OB7d1dOSUrRkRnA/viewform"
    },

    // --- 3b. Participants Section ---
    participants: {
      title: "For Those Wanting to Participate in Studies",
      subtitle: "Your desire to cooperate becomes the power to create the future.",
      point1: "Your experience and time become the foundation for new discoveries and technological innovations, allowing you to contribute to society.",
      point2: "Choose from a wide range of research projects that match your interests and passions.",
      point3: "Receive fair compensation for your contribution, with a system that properly values your participation.",
      btnText: "Find Available Studies",
      btnLink: "https://www.jobresearchin.com/"
    },

    // --- 3c. Usage Guide Section ---
    guide: {
      title: "How to Use Researchin (Participant Guide)",
      subtitle: "We explain the research participation process in 3 simple steps.",
      step1: {
        title: "1. Find Interesting Research from the Listing",
        description: "Use the search bar or listing on the top page to check implementation periods, research titles, affiliated institutions, and compensation amounts. Click on research that interests you to go to the detailed page.",
        image: "images/Researchin_explain1.png",
        alt: "Research listing screen"
      },
      step2: {
        title: "2. Check Participation Conditions and Implementation Overview on the Research Detail Page",
        description: "Check the title, implementation period (e.g., October 10-31, 2025), compensation (e.g., 2000 JPY), and implementation location (online/laboratory). If there are experiment details or contact information, ask the organizer questions as needed to clarify any uncertainties. Even if the participation condition is 'no special requirements,' consider the schedule and environment (online availability) against your convenience.",
        image: "images/Researchin_explain2.png",
        alt: "Research detail page screen"
      },
      step3: {
        title: "3. Open the Application Form",
        description: "Press the 'Apply' button on the research detail page to display the application form ('Research Application').",
        image: "images/Researchin_explain3.png",
        alt: "Application form screen"
      },
      detailedSteps: {
        title: "Detailed Participation Steps",
        step4: {
          title: "4. Enter Basic Information (Required)",
          description: "Enter your full name (Kanji/Katakana), email address, gender, and date of birth. Be careful with typos and half-width/full-width characters, and use an email address that can receive messages."
        },
        step5: {
          title: "5. Enter Bank Transfer Information (Required)",
          description: "Accurately enter bank name, branch name, account type (savings/checking), and account number. Since this is necessary for compensation transfer, double-check for errors."
        },
        step6: {
          title: "6. Enter Optional Information (As Needed)",
          description: "Select or enter physical information (height, weight, handedness), nationality/language used, education/occupation/industry, family/economic information (household income, marital status, number of cohabitants, presence of children). Vision (naked eye/corrected), color vision characteristics, lifestyle habits (smoking/drinking), allergies, medical history/current health status help with research eligibility judgment and safety management. If applicable, enter specific details in the detailed fields."
        },
        step7: {
          title: "7. Review and Submit",
          description: "Review the entered content and confirm there are no errors, then press the 'Apply' or 'Submit' button. After submission, you may receive a confirmation email, so prepare your reception settings."
        },
        step8: {
          title: "8. Process Until Participation",
          description: "The organizer will contact you for schedule coordination and advance explanations. For online implementation, prepare your connection environment (communication, camera/microphone) in advance. On the experiment day, participate according to the guidance, and compensation will be transferred to your designated account after completion."
        }
      },
      helpSection: {
        title: "When You Need Help",
        description: "You can contact the organizer through the inquiry button on the detail page. Company information, privacy policy, and terms of service can be found at the bottom of the page."
      }
    },

    // --- 4. Upcoming Features ---
    features: {
      title: "An Ever-Evolving Platform",
      subtitle: "We listen to our users and continuously improve our service. The following features are scheduled to be added soon.",
      feature1: {
        title: "Reward Payment Processing",
        desc: "The platform will handle the troublesome reward payment process, allowing researchers to manage everything from recruitment to payment in one stop."
      },
      feature2: {
        title: "Cancellation Prevention",
        desc: "By introducing penalties for no-shows and a system to reward reliable participants, we will increase the reliability of recruitment."
      },
      feature3: {
        title: "Incentives for Repeaters",
        desc: "An incentive program that provides additional rewards and benefits to participants who have cooperated in multiple studies."
      },
      feature4: {
        title: "AI-Powered Recruitment Analytics",
        desc: "Our AI will analyze recruitment page views and application rates to suggest more effective wording and conditions, helping maximize your recruitment."
      }
    },

    // --- 5. Company Info Sections ---
    businesses: {
      title: "Our Businesses",
      item1: { title: "Administrative Support", desc: "We handle burdensome administrative tasks for researchers and companies, allowing them to focus on their core work." },
      item2: { title: "Website Development", desc: "We undertake everything from planning to production and operation of specialized websites to effectively communicate research content." },
      item3: { title: "Tour Organization", desc: "We plan and host tours to research facilities and related companies, connecting the general public with the front lines of research." }
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
          title: "Administrative Support",
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
          title: "Website Development",
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
          title: "Tour Organization",
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

    // --- News Page ---
    news: {
      title: "News",
      subtitle: "Stay updated with the latest from Researchin.",
      description: "Latest news, updates, and event information from Researchin.",
      readMore: "Read More",
      noNews: "No news available at this time.",
      items: [
        {
          date: "2025-10-11",
          displayDate: "October 11, 2025",
          category: "Announcement",
          title: "Website Renewal",
          excerpt: "We have renewed our website to make it more user-friendly and informative.",
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
          name: "Kyosuke Yanagisawa",
          title: "CMO",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/%E4%BA%AC%E4%BD%90-%E6%9F%B3%E6%BE%A4-76a3a7368/",
          }
        },
        {
          name: "Yoshito Ogasawara",
          title: "Stack System Inc. CEO & Engineer",
          affiliation: null,
          socials: {
            linkedin: "https://www.linkedin.com/in/yachtpa3/"
          }
        },
        {
          name: "Kota Naito",
          title: "FYBE CEO & Engineer",
          affiliation: null,
          socials: {
            github: "https://github.com/konaito"
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
      address: "〒1150-0043 Shibuya Dogenzaka Tokyu Building 2F-C, 1-10-8 Dogenzaka, Shibuya-ku, Tokyo"
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