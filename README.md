# Web site for Sapporo.js

http://sapporojs.org

## 動作確認環境

* Mac OS X Snow Leopard
* Node.js 0.4.11

## セットアップ

1) [Node.js]( http://nodejs.org/ ) をインストールする  
Mac OS X を利用している場合、 [Homebrew]( http://mxcl.github.com/homebrew/ ) を利用すると手軽にインストールできます。

```sh
$ brew install node
```

2) [npm]( http://npmjs.org/ ) をインストールする

3) ソースコードを取得して配置する

```sh
$ git clone git://github.com/tricknotes/sapporojs-web.git
```

4) 関連パッケージをインストールする

```sh
$ cd sapporojs-web
$ npm install .
```

5) conf.json を編集し、管理者名とパスワードを記入する  
以下のフォーマットで設定してください。

```json
"admin": {
  "id": "xxxxx",
  "pass": "xxxxx"
}
```

6) web サーバを起動する

```sh
$ node app.js
```

## ML

こちらからご登録ください。

* http://qwik.jp/sapporojs/

## How to Collaborate

ML と併せて [Pivotal Tracker]( https://www.pivotaltracker.com ) にもご登録ください。

* https://www.pivotaltracker.com/projects/340997
