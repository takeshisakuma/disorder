# disOrder

Web 制作用のボイラープレート

- Pug、Sass(Dart-Sass)、TypeScript のコンパイル
- JavaScript のバンドル
- Jest
- CSS、JavaScript のコード整形

## 準備

```
$ git clone https://github.com/takeshisakuma/disorder
$ cd disorder
$ npm ci
$ npx simple-git-hooks
```

## データ

## 使用

### 制作時

```
$ npm run watch:all
```

### コード整形

```
$ npm run format:all
```

### テスト(Jest)

```
$ npm run test
```

## 公開

## 不要ファイル削除、minify

```
$ npm run prepare:all
```

## アップロード

dist 配下のファイルをそのままアップロード
