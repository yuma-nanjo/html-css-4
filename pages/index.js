import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NAGISA</title>
      </Head>
      <header className="header">
        <div className="inner01">
          <div className="site">NAGISA</div>
        </div>
        <div className="inner02">
          <nav className="nav">
            <ul>
              <li>
                <Link href="/">
                  <a>ホーム</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>会社概要</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <figure>
          <img src="/img/workspace.jpg" alt="" />
        </figure>

        <div className="text">
          <div className="subtitle">Workspace Technical Design</div>
          <h1>
            ワークスペースの
            <br />
            施工・デザイン設計
          </h1>
          <p>
            新しい時代に求められるワークスペースの施工・デザインを行います。仕事内容や作業に合わせ、最適でモダンな環境を作り出します。
          </p>
          <Link href="/">
            <a className="btn">お問い合わせ</a>
          </Link>
        </div>
      </section>

      <section className="msg msgtop">
        <h2>ご自宅からオフィスまで</h2>
        <p>
          NAGISAの施工・デザイン設計では、スペースを確保するアイデアからインテリアの剪定、空間との調和、ネットワーク環境の準備、セキュリティの確保など、ワークスペースに求められるさまざまな要件をクリアしていきます。
        </p>
      </section>

      <section className="systems">
        <div className="subtitle">Popular Systems</div>
        <h2>人気の設計システム</h2>

        <div className="sys">
          <figure>
            <img src="/img/idea.png" alt="" />
          </figure>
          <div className="text">
            <div className="subtitle">Original Design Environment</div>
            <h3>環境に合わせたオリジナル設計</h3>
            <p>目的や環境に合わせて最適なワークスペースを作り出すべく、細かな打ち合わせを行い、オリジナルな環境を構築します。</p>
          </div>
        </div>

        <div className="sys">
          <figure>
            <img src="/img/business.png" alt="" />
          </figure>
          <div className="text">
            <div className="subtitle">Business Solutions</div>
            <h3>業務の効率化と課題解決</h3>
            <p>ワークスペースの大事なポイントである「仕事や業務の効率化」「課題解決」にも、デザイン設計の視点から取り組みます。</p>
          </div>
        </div>

        <div className="sys">
          <figure>
            <img src="/img/secure.png" alt="" />
          </figure>
          <div className="text">
            <div className="subtitle">Fast and Secure Nerwork</div>
            <h3>高速でセキュアなネットワーク</h3>
            <p>現代のワークスペースには欠かすことができなくなったネットワーク環境も、高速でセキュアなトラフィックを確保して構築します。</p>
          </div>
        </div>

      </section>

      <section className="msg">
        <h2>設計やお見積りのご相談</h2>
        <p>
          ワークスペースの施工・デザイン設計についてのお見積りやご相談については、いつでもお問い合わせください。企業フィロソフィに応じて、インスタンス単位での発注・請負も可能です。
        </p>
        <Link href="/">
          <a className="btn">詳しくはこちら</a>
        </Link>
      </section>

      <footer className="footer">
        <div className="inner01">
          <div className="site">NAGISA</div>
          <p className="address">
            〒 901-3125
            <br />
            沖縄県島尻郡久米島町字鳥島グスク
          </p>
        </div>
        <div className="inner02">
          <nav className="nav">
            <ul>
              <li>
                <Link href="/">
                  <a>会社概要</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>プライバシーポリシー</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </nav>
          <p className="copy">@ NAGISA Corp. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
