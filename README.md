# iryonomitisirube-templates

## Component dictionary

Template parts are named in `docs/component-dictionary.md`.
Machine-readable part metadata is in `src/data/componentCatalog.ts`.

医院向けNext.jsテンプレートです。中原クリニックの完成済みサイト構成を参考に、文章・画像・電話番号・住所・診療時間を差し替えやすい形へ分割しています。

## 編集する場所

医院ごとの差し替えは、原則として `src/data/site.ts` に集約します。

- 医院名、住所、電話番号、診療科
- ヘッダーのナビゲーション
- メインビジュアルの文言と画像
- 診療時間
- お知らせ、更新情報
- 院長紹介、専門診療、選ばれる理由
- 症状別導線、施設写真
- Googleマップ、予約URL

画像をローカル管理する場合は `public/images/clinic/` に配置し、`site.ts` の画像パスを `/images/clinic/xxx.jpg` のように差し替えてください。

## 開発

```bash
npm install
npm run dev
```

## Netlify

`next.config.js` は静的書き出し用に `output: 'export'` を設定しています。Netlifyでは `netlify.toml` の通り、ビルドコマンドは `npm run build`、公開ディレクトリは `out` です。

## 既存資料

`テンプレパーツ/index.html` は元の静的HTML参考資料として残しています。

