const liveAssetBase = 'https://nakahara-clinic.com';

export type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavItem[];
};

export type ImageItem = {
  readonly src: string;
  readonly alt: string;
};

export type HoursRow = {
  readonly label: string;
  readonly note: string;
  readonly marks: readonly string[];
};

export type ButtonLink = {
  readonly label: string;
  readonly href: string;
  readonly variant?: 'solid' | 'outline' | 'muted';
};

export const site = {
  template: 'trust',
  meta: {
    title: '中原クリニック｜岐阜市 乳がん検診（乳腺外来）・肛門科（痔外来）',
    description:
      '岐阜市の中原クリニックは、内科・外科・消化器内科（胃カメラ）・肛門科（痔外来）・乳腺外来・在宅診療に対応するクリニックです。',
    keywords: [
      '岐阜市',
      '乳がん検診',
      '乳腺外来',
      '肛門科',
      '痔外来',
      '胃カメラ',
      '在宅診療',
    ],
    url: 'https://nakahara-clinic.com/',
    icon: '/favicon.ico',
  },
  clinic: {
    name: '中原クリニック',
    logo: `${liveAssetBase}/img/common/logo01.png`,
    footerLogo: `${liveAssetBase}/img/common/logo02.png`,
    postalCode: '500-8301',
    address: '岐阜市浪花町2丁目15番地',
    tel: '058-254-1711',
    departments:
      '内科・外科・消化器内科・肛門外科・乳腺外科・リハビリテーション科・在宅医療',
  },
  nav: [
    {
      label: '診療内容',
      href: '/menu/',
      children: [
        { label: '診療内容一覧', href: '/menu/' },
        { label: '花粉症外来', href: '/menu/kafun.html' },
        { label: '在宅診療', href: '/menu/zaitaku.html' },
        { label: 'インフルエンザ予防接種', href: '/menu/influenza.html' },
        { label: '新型コロナ予防接種', href: '/menu/covid19.html' },
      ],
    },
    {
      label: '専門外来',
      href: '/special/',
      children: [
        { label: '乳腺外来', href: '/special/' },
        { label: 'エコーとマンモどっちがいい?', href: '/special/echo-mammo.html' },
        { label: '消化器内科（胃カメラ）', href: '/special/gastro.html' },
        { label: '痔（肛門）外来', href: '/special/pile.html' },
      ],
    },
    { label: 'クリニック案内', href: '/about/' },
    { label: '院長紹介', href: '/staff/' },
    { label: '交通アクセス', href: '/access/' },
    { label: '受診される方へ', href: '/first/' },
  ] satisfies NavItem[],
  hero: {
    title: ['安心・信頼できる', 'あなたのまちの かかりつけ医'],
    lead: '専門の目と、地域の心で。岐阜のまちに暮らす、あなたと家族のために。',
    smallSlides: [
      { src: `${liveAssetBase}/img/top/mv01_01_pc.webp`, alt: '医師と患者さん' },
      { src: `${liveAssetBase}/img/top/mv01_02_pc.webp`, alt: '診察の様子' },
    ],
    largeSlides: [
      { src: `${liveAssetBase}/img/top/mv02_01_pc.webp`, alt: 'クリニック外観' },
      { src: `${liveAssetBase}/img/top/mv02_02_pc.webp`, alt: '院内の様子' },
    ],
  },
  hours: {
    heading: '診療時間',
    days: ['月', '火', '水', '木', '金', '土', '日'],
    rows: [
      {
        label: '9:00 - 12:00',
        note: '受付～11:30',
        marks: ['●', '●', '●', '●', '●', '●', 'ー'],
      },
      {
        label: '16:00 - 18:30',
        note: '受付～18:00',
        marks: ['●', '●', 'ー', '●', '●', 'ー', 'ー'],
      },
    ] satisfies HoursRow[],
  },
  notices: [
    {
      title: '臨時休診のお知らせ',
      body: '6/17(水)～6/20(土)は、院長の所用により休診とさせていただきます。',
    },
    {
      title: 'オンライン診療をはじめました',
      body: '再診の慢性疾患や、乳腺・痔・花粉症などでお困りの方もご相談いただけます。',
      link: {
        label: 'curon(クロン)専用ページはこちら',
        href: 'https://app.curon.co/clinic/detail/RYffHG2KDPt9U0_q32McrRA_y3rX3WNOHX79L0RPZSA',
        variant: 'solid',
      },
    },
  ],
  sections: {
    notices: {
      title: '医院からのお知らせ',
    },
    services: {
      titleLines: ['からだの悩みに寄り添う', '専門診療を行っています'],
      moreLabel: '詳しくはこちら',
    },
    reasons: {
      connector: 'が',
      suffix: '選ばれてきた理由',
    },
    symptomGuides: {
      titleLines: ['困っていることは', 'ありませんか？'],
      lead: '症状・お悩みから、ぴったりの診療科をご案内します',
    },
    gallery: {
      title: '施設のご案内',
      ariaLabel: '施設写真',
    },
    updates: {
      title: '更新情報',
      archiveLink: {
        label: '過去の更新情報',
        href: '/news/',
      },
    },
  },
  message: {
    title: '専門の目と、地域の心で',
    subtitle: '岐阜のまちに暮らす、あなたと家族のために',
    body: [
      '専門は特に胃、大腸、肛門などの消化器の病気。また、超音波検査による乳がん検診です。',
      '名古屋逓信病院では消化器外科、呼吸器外科、乳腺外来を担当していました。',
      '風邪や花粉症などの病気から、胃や腸、肛門などの消化器に関する病気、乳がん検診まで幅広く診察いたします。',
    ],
    image: {
      src: `${liveAssetBase}/img/top/pic_message01.webp`,
      alt: '院長 中原錬三',
    },
    caption: '院長 中原錬三',
    links: [
      { label: '乳腺外来WEB予約', href: 'https://airrsv.net/nakahara-cl/calendar', variant: 'solid' },
      { label: '受診方法はこちら', href: '/first/' },
      { label: '院長紹介', href: '/staff/', variant: 'muted' },
    ] satisfies ButtonLink[],
  },
  services: [
    {
      title: '乳腺外来',
      description: '胸のしこりや痛みなど、乳房の不安はお気軽にご相談ください。',
      href: '/special/',
      icon: `${liveAssetBase}/img/top/icon_menu01.svg`,
    },
    {
      title: '肛門科（痔外来）',
      description: '痔や肛門の痛み・出血など、相談しにくい症状も丁寧に診察します。',
      href: '/special/pile.html',
      icon: `${liveAssetBase}/img/top/icon_menu02.svg`,
    },
    {
      title: '在宅診療',
      description: '通院が難しい方のために、ご自宅へ医師が伺い診療します。',
      href: '/menu/zaitaku.html',
      icon: `${liveAssetBase}/img/top/icon_menu03.svg`,
    },
    {
      title: '胃カメラ',
      description: '鼻から行う胃カメラ検査に対応しています。',
      href: '/special/gastro.html',
      icon: `${liveAssetBase}/img/top/icon_menu04.svg`,
    },
  ],
  reasons: [
    {
      title: '外科医だからできる、全身サポート',
      body: '外科医としての長年の経験をいかし、術後の管理から専門性の高い領域、日常の体調不良まで幅広く対応いたします。',
      image: { src: `${liveAssetBase}/img/top/img_reason01.svg`, alt: '全身サポート' },
    },
    {
      title: '通えなくても支え続ける、在宅診療',
      body: '外来への通院が難しくなった方や、ご自宅での療養を希望される方のために、在宅診療を行っています。',
      image: { src: `${liveAssetBase}/img/top/img_reason02.svg`, alt: '在宅診療' },
      link: { label: '在宅診療について', href: '/menu/zaitaku.html' },
    },
    {
      title: '安心の医療連携で、頼れるかかりつけ医',
      body: '地域の基幹病院と密に連携し、切れ目のない医療提供に努めています。',
      image: { src: `${liveAssetBase}/img/top/img_reason03.svg`, alt: '医療連携' },
    },
  ],
  symptomGuides: [
    {
      title: '体調不良・身近なお悩み',
      items: ['風邪をひいた、発熱、咳、のどの痛み', '胃が痛い、胸やけ、検診で胃の異常を指摘された'],
      links: [
        { label: '内科', href: '/menu/', icon: `${liveAssetBase}/img/top/icon_menu05.svg` },
        { label: '消化器内科（胃カメラ）', href: '/special/gastro.html', icon: `${liveAssetBase}/img/top/icon_menu04.svg` },
      ],
    },
    {
      title: 'デリケートなお悩み',
      items: ['乳房のしこり、違和感、痛みが気になる', '痔の症状（出血・痛み・違和感）で困っている'],
      links: [
        { label: '乳腺外来', href: '/special/', icon: `${liveAssetBase}/img/top/icon_menu01.svg` },
        { label: '肛門科', href: '/special/pile.html', icon: `${liveAssetBase}/img/top/icon_menu02.svg` },
      ],
    },
    {
      title: 'ケガ・やけどをした',
      items: ['切り傷・すり傷・やけどなど'],
      links: [{ label: '外科', href: '/menu/', icon: `${liveAssetBase}/img/top/icon_menu06.svg` }],
    },
    {
      title: '通院が難しい',
      items: ['外来への通院が難しい、ご自宅で療養したい'],
      links: [{ label: '在宅診療', href: '/menu/zaitaku.html', icon: `${liveAssetBase}/img/top/icon_menu03.svg` }],
    },
    {
      title: '健康を守りたい',
      items: ['予防接種・健康診断を受けたい'],
      links: [{ label: '予防接種・健康診断', href: '/menu/', icon: `${liveAssetBase}/img/top/icon_menu07.svg` }],
    },
  ],
  gallery: [
    { src: `${liveAssetBase}/img/top/pic_view01.jpg`, alt: 'クリニック外観' },
    { src: `${liveAssetBase}/img/top/pic_view02.jpg`, alt: '受付' },
    { src: `${liveAssetBase}/img/top/pic_view03.jpg`, alt: '待合室' },
    { src: `${liveAssetBase}/img/top/pic_view04.jpg`, alt: '診察室' },
  ] satisfies ImageItem[],
  updates: [
    {
      date: '2026.06.20',
      text: '梅雨の湿気で体がだるく感じる方が増えます。気圧の変化による頭痛・倦怠感も我慢せず相談を。',
    },
    {
      date: '2026.06.02',
      text: '6/13(土)の診療は、中原裕基医師が担当いたします。',
    },
    {
      date: '2026.05.27',
      text: '6/17(水)～6/20(土)は、院長の所用により休診とさせていただきます。',
    },
  ],
  access: {
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.2888608177072!2d136.74741727635967!3d35.42287374412219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003a9548164dff5%3A0x97522e3e125cf95f!2z5Lit5Y6f44Kv44Oq44OL44OD44Kv!5e0!3m2!1sja!2sjp!4v1766328504793!5m2!1sja!2sjp',
  },
  calendar: {
    heading: 'Calendar',
    note: '…休診　…午後休診　…その他',
    days: [
      { date: '2026/06/17', label: '休診' },
      { date: '2026/06/18', label: '休診' },
      { date: '2026/06/19', label: '休診' },
      { date: '2026/06/20', label: '休診' },
    ],
  },
  floatingActions: {
    pageTopAriaLabel: 'ページ上部へ戻る',
    pageTopLabelLines: ['PAGE', 'TOP'],
    tel: {
      labelLines: ['電話', '相談'],
    },
    reservation: {
      label: '乳腺外来 WEB予約',
      href: 'https://airrsv.net/nakahara-cl/calendar',
    },
  },
  labels: {
    topPageSuffix: 'トップページ',
    menuToggle: 'メニューを開閉',
    googleMapSuffix: 'Google Map',
    copyrightPrefix: 'Copyright (c)',
    copyrightSuffix: 'All Rights Reserved.',
  },
} as const;

export type SiteData = typeof site;
