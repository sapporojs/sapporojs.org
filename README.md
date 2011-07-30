# Web site for Sapporo.js

http://sapporojs.org

### 動作確認環境

* Mac OS X Snow Leopard
* Node.js 0.4.10
* Looseleaf 0.3.2 Crayon

### セットアップ

1. Node.js ( http://nodejs.org/ ) をインストールする  
Mac OS X を利用している場合、 Homebrew ( http://mxcl.github.com/homebrew/ ) を利用すると手軽にインストールできます。  
> $ brew install nodejs
2. npm ( http://npmjs.org/ ) をインストールする
3. Looseleaf ( http://looseleafjs.org/ ) をインストールする
4. ソースコードを取得して配置する
5. conf.json を編集し、管理者名とパスワードを記入する  
以下のフォーマットで設定してください。  
> "admin": {  
>     "id": "xxxxx",  
>     "pass": "xxxxx"  
> }
6. web サーバを起動する  
> $ node app.js
