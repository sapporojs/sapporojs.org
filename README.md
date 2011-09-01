# Web site for Sapporo.js

http://sapporojs.org

### 動作確認環境

* Mac OS X Snow Leopard
* Node.js 0.4.11

### セットアップ

1. Node.js ( http://nodejs.org/ ) をインストールする  
Mac OS X を利用している場合、 Homebrew ( http://mxcl.github.com/homebrew/ ) を利用すると手軽にインストールできます。  
 <pre>
 $ brew install node
 </pre>
2. npm ( http://npmjs.org/ ) をインストールする
3. ソースコードを取得して配置する
  <pre>
    $ git clone git://github.com/tricknotes/sapporojs-web.git
  </pre>
4. 関連パッケージをインストールする
  <pre>
    $ cd sapporojs-web
    $ npm install .
  </pre>
5. conf.json を編集し、管理者名とパスワードを記入する  
以下のフォーマットで設定してください。
 <pre>
 "admin": {
      "id": "xxxxx",
      "pass": "xxxxx"
 }
</pre>
6. web サーバを起動する
 <pre>
 $ node app.js
 </pre>
