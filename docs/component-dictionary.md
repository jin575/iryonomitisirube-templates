# 呼び起こし辞書

このファイルは、医院向けNext.jsテンプレートの部品を今後呼び起こしやすくするための正式な名札です。

画面の見た目を保つため、現時点ではファイル名変更やコンポーネント名変更はしていません。  
今後は「日本語の呼び名」「仮名」「英語の保存名」のどれで指示しても、対象ファイルを探せるようにします。

## 呼び方のルール

- 「信頼型ヒーローを使って」なら `Hero_01` / `HeroTrust` / `components/Hero.tsx` を見る。
- 「右下の予約ボタンは残して」なら `CTA_01` / `FloatingReservationCTA` / `components/FloatingActions.tsx` を見る。
- 「スクロール演出は触らないで」なら `Motion_05` / `ScrollEffects` / `components/ClientEffects.tsx` と `app/globals.css` を触らない。
- 医院名、住所、電話、診療時間、文章、画像URLは原則 `src/data/site.ts` を見る。
- セクション順を変えるときは `src/data/templates.ts` と `components/SectionRenderer.tsx` を見る。

## 呼び起こし辞書

| グループ | 仮名 | 日本語の呼び名 | 英語の保存名 | 実際のファイル名 | 役割 | 動きの有無 | 使う場面 | 触る時の注意点 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hero系 | Hero_01 | 信頼型ヒーロー | HeroTrust | components/Hero.tsx | ページ最上部で医院の第一印象、メインコピー、診療時間を見せる | あり | 安心感や信頼感を最初に見せたい時 | 画像フェードと診療時間表を含む |
| CTA系 | CTA_01 | 右下の予約・電話ボタン | FloatingReservationCTA | components/FloatingActions.tsx | 電話、予約、ページトップ導線を画面右下に固定する | あり | 予約や電話を常に押せるようにしたい時 | スマホで本文と重ならないか確認する |
| お知らせ系 | Notice_01 | 重要なお知らせカード | ClinicNoticeCards | components/NoticeSection.tsx | 休診、予約開始、重要案内などを目立たせる | なし | 患者さんに最初に知ってほしい案内がある時 | 中身は src/data/site.ts の notices を編集する |
| お知らせ系 | Updates_01 | 更新情報リスト | NewsUpdatesList | components/UpdatesSection.tsx | 日付付きのお知らせを一覧で見せる | なし | 新着情報や医院ブログを置きたい時 | 急ぎの案内は Notice_01 を使う |
| 院長・理念系 | Message_01 | 院長メッセージ | DoctorMessage | components/MessageSection.tsx | 院長の考え方、診療方針、顔写真を見せる | なし | 納得型、院長個人型で信頼を深めたい時 | 文章と写真は src/data/site.ts の message を編集する |
| 診療内容系 | Services_01 | 診療内容カード | ServicesCards | components/ServicesSection.tsx | 主要な診療内容をカードで並べる | なし | 診療科目や専門診療を一覧で見せたい時 | カード数が増えるとスマホの縦幅が伸びる |
| 診療内容系 | Reasons_01 | 選ばれる理由 | TrustReasons | components/ReasonsSection.tsx | 医院の強みや選ばれる理由を説明する | なし | 安心材料、専門性、地域性を補足したい時 | 医院名入りの文言が自然か確認する |
| 診療内容系 | Guide_01 | 症状別案内 | SymptomGuide | components/SymptomGuideSection.tsx | 症状や悩みから診療ページへ誘導する | なし | 患者さんの迷いを減らしたい時 | 症状名とリンク先の対応を確認する |
| 写真・ギャラリー系 | Gallery_01 | 施設写真スライダー | FacilityGallery | components/GallerySection.tsx | 外観、受付、待合室、診察室などを見せる | あり | 来院前の安心感や清潔感を見せたい時 | 画像比率が大きく違うと不自然に見える |
| アクセス・診療時間系 | Hours_01 | 診療時間表 | ClinicHoursTable | components/HoursTable.tsx | 曜日ごとの診療時間を表で見せる | なし | ヒーローやアクセス周辺に診療時間を出したい時 | 中身は src/data/site.ts の hours を編集する |
| 共通部品 | Header_01 | 上部メニュー | ClinicHeader | components/Header.tsx | ロゴ、ナビ、電話番号、スマホメニューを表示する | あり | 全ページ共通の入口を作る時 | 固定表示、影、スマホメニューがある |
| 共通部品 | Footer_01 | 下部医院情報 | ClinicFooter | components/Footer.tsx | 医院名、住所、電話、診療時間、Google Mapをまとめる | なし | ページ末尾に医院情報を置く時 | 住所、電話、地図URLは src/data/site.ts を編集する |
| 共通部品 | Title_01 | セクション見出し | SectionTitle | components/SectionTitle.tsx | 各セクションのタイトル表示を揃える | なし | 新しいセクションにも同じ見出しを使う時 | 変更すると複数セクションへ影響する |
| 動き専用 | Motion_05 | スクロール演出 | ScrollEffects | components/ClientEffects.tsx | ヘッダー影とふわっと表示を担当する | あり | スクロール時の動きだけ調整したい時 | app/globals.css の reveal、in、scrolled と連動 |
| テンプレート制御 | Template_01 | セクション並べ替え係 | SectionRenderer | components/SectionRenderer.tsx | templates.ts の順番通りにセクションを表示する | なし | セクション順を変えたい時 | 新セクション追加時は switch 文にも追加する |
| テンプレート制御 | Template_02 | テンプレート順番表 | TemplateRegistry | src/data/templates.ts | trust などのテンプレート名とセクション順を管理する | なし | 即決型、納得型などの順番違いを作る時 | Header、Footer、FloatingActions は含めない |
| データ管理 | Data_01 | 医院情報データ | ClinicSiteData | src/data/site.ts | 医院名、住所、電話、画像、文言、診療時間を集約する | なし | 医院ごとの内容だけ差し替える時 | components に医院固有情報を直書きしない |
| ページ構成 | Page_01 | トップページ組み立て | HomePageShell | app/page.tsx | Header、SectionRenderer、Footer、FloatingActions を並べる | なし | ページ全体の大枠を確認したい時 | main の中だけをテンプレート切替対象にする |
| CSS | Style_01 | 全体デザインCSS | GlobalStyles | app/globals.css | 全セクションの見た目、スマホ表示、動きを管理する | あり | 色、余白、レスポンシブ、動きを変えたい時 | 複数部品に同時影響しやすい |
| 画像置き場 | Asset_01 | 公開画像置き場 | PublicAssets | public/ | Next.jsで直接公開する画像やアイコンを置く | なし | 医院ごとの写真をローカル管理にしたい時 | site.ts の画像パスと実ファイル名を一致させる |
| 旧サイト参考 | Legacy_01 | 元の静的HTML参考サイト | LegacyStaticHtml | テンプレパーツ/index.html | Next.js化前の静的HTML参考ファイル | なし | 元サイトと比較したい時 | 通常は編集しない |

## 動きのある部品

| 仮名 | 日本語の呼び名 | 英語の保存名 | 対象ファイル | 何が動くか | いつ動くか | 仕組み | 干渉しやすさ | 壊れやすい注意点 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Motion_01 | ヒーロー画像フェード | HeroCrossFade | components/Hero.tsx, app/globals.css | ヒーロー内の画像が切り替わる | ページ表示後に自動 | CSSだけ | 中 | 画像枚数、画像サイズ、xfade系CSSを同時に確認 |
| Motion_02 | 施設写真スライダー | GalleryAutoScroll | components/GallerySection.tsx, app/globals.css | 施設写真が横方向に流れる | ページ表示後に自動 | CSSだけ | 中 | 画像枚数や横幅で速度と余白が変わる |
| Motion_03 | ページトップボタン | PageTopButton | components/FloatingActions.tsx, app/globals.css | クリックで上部へ滑らかに戻る | PAGE TOPを押した時 | JavaScriptとCSS | 低 | window.scrollTo を使っている |
| Motion_04 | スマホメニュー開閉 | MobileMenuToggle | components/Header.tsx, app/globals.css | スマホメニューが開閉する | メニューボタンを押した時 | React stateとCSS | 中 | ナビ構造やヘッダーCSS変更時に確認 |
| Motion_05 | スクロール演出 | ScrollEffects | components/ClientEffects.tsx, app/globals.css | ヘッダーの影とreveal表示が変わる | スクロール時、要素が画面に入った時 | JavaScriptとCSS | 中 | reveal、in、scrolled のクラス名を揃える |

## 用途別の呼び分け

### Hero系

- 即決型ヒーロー: まだ未作成。電話、予約、診療時間、アクセスを最優先にする将来用。
- 信頼型ヒーロー: `Hero_01`。現在のトップで使っている、安心感と診療時間を見せる部品。
- 院長個人型ヒーロー: まだ未作成。院長の顔や理念を最優先にする将来用。
- ブランド型ヒーロー: まだ未作成。写真や第一印象を強く見せる将来用。

### CTA系

- 固定CTA: `CTA_01`。右下に常に表示する予約、電話、ページトップ。
- セクション内CTA: `Message_01` 内のリンクボタンなど。必要になったら独立部品化する。

### お知らせ系

- 重要なお知らせ: `Notice_01`。休診や予約など、今すぐ見せたい案内。
- 更新情報: `Updates_01`。日付付きの通常更新。

### 診療内容系

- 診療内容カード: `Services_01`。診療科目を一覧で見せる。
- 選ばれる理由: `Reasons_01`。医院の強みを説明する。
- 症状別案内: `Guide_01`。悩みから診療内容へ誘導する。

### 院長・理念系

- 院長メッセージ: `Message_01`。院長の顔、理念、診療方針を見せる。

### 写真・ギャラリー系

- 施設写真スライダー: `Gallery_01`。院内や外観写真を流して見せる。

### アクセス・診療時間系

- 診療時間表: `Hours_01`。現在はヒーロー内で使っている。
- アクセス専用セクション: まだ未作成。将来、即決型テンプレートで先頭近くに出す候補。

## 今後の指示例

- 「信頼型ヒーローを即決型ヒーローに差し替えて」
- 「右下の予約・電話ボタンは残して」
- 「スクロール演出は触らないで」
- 「院長メッセージを上に出して」
- 「症状別案内を診療内容カードより上に出して」
- 「施設写真スライダーを外して」

## 正式データ

同じ内容をCodexが検索しやすい形で `src/data/componentCatalog.ts` にも保存しています。
