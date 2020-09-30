# nem-library-browserify-sample

nem-library を用いた Node.js で動作するコードを browserify を使ってブラウザで読込んで使える JavaScript ファイルに変換する方法のサンプルです。

## 環境構築

### 1. このレポジトリをクローン

```sh
git clone https://github.com/YasunoriMATSUOKA/nem-library-browserify-sample.git
```

または

```sh
git clone git@github.com:YasunoriMATSUOKA/nem-library-browserify-sample.git
```

### 2. nem-library-browserify-sample ディレクトリに移動

```sh
cd nem-library-browserify-sample
```

### 3. npm install 実行

npm install することで、rxjs と nem-library がインストールされます。

```sh
npm install
```

### 3. npm パッケージ browserify をグローバルにインストール

```sh
npm install -g browserify
```

## Node.js で source.js が動作することを確認

source.js は Node.js 単体で動作する JavaScript ファイルです。

ダミーの秘密鍵(:単純すぎて不安全で実用には絶えない秘密鍵のため、参考として直接ソースコードに記述して使っていますが、本来秘密鍵はこのような使い方をしてはならないことは覚えておいてください)からアドレスを算出し、コンソールに表示するというシンプルなプログラムです。

試しに以下コマンドを実行し、アドレスがターミナルに表示されることを確認しておきましょう。

```sh
node source.js
```

実行結果

```sh
NADTQLXORWKFWDCR4MP4ESLNHRACB55C5ZNLROYI
```

## Node.js では動くがブラウザではそのままは動かない

ブラウザでも同様のことをしたいとなった場合、source.js を直接ブラウザで読み込んでも、残念ながら適切に動作させることはできません。
ブラウザでは require というメソッドがサポートされていないためです。

## browserify

一つの方法として、browserify というツールを用いて、require が使われた「そのままではブラウザで動作しないソースコード(source.js)」を「ブラウザでも動作するソースコード(bundle.js というファイル名でここでは作業を進める)」に変換し、変換後の bundle.js をブラウザから読み込んで実行することで、ブラウザで nem-library を使って動作させることができます。

以下コマンドを実行すると bundle.js というファイルが生成されると思います。

```sh
browserify source.js -o bundle.js
```

index.html では、そこで生成された bundle.js というファイルを読み込んでいます。

実際に上記 browserify のコマンドを実行後に index.html をブラウザで開いてみると、開発者ツールのコンソールタブの中にアドレスが表示されていることが確認できると思います。
