import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <>
      <Head>
        <title>セキュアで快適な環境構築をお手伝いします | NAGISA</title>
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
      <figure className="heading">
        <img src="/img/workspace-front.jpg" alt="" />
      </figure>
      <article className="content">
        <div className="subtitle">Secure and Comfortable Environment</div>

        <h1>
          セキュアで快適な
          <br />
          環境構築をお手伝いします
        </h1>

        <p>
          NAGISAでは、ワークスペースの施工・デザインを行っています。ご自宅からオフィスまで、どのような環境にでもワークスペースを構築することができます。仕事の一助となるオープンスペースの構築も可能です。「カジュアル」「シック」「リラックス」など、空間の雰囲気作りも自由に設計していきます。
        </p>

        <h2>日常の中にワークスペースを作り出します</h2>
        <p>
          自宅内にワークスペースを設ける場合、日常の生活と隣合わせな環境の中に、いかにうまくワークスペースを構築するかがポイントとなります。
        </p>
        <p>
          日常の妨げとならず、生活と切り分けて仕事に集中できる環境はもちろん、プライベートな空間と融合させたスペース作りも可能です。ワークスタイルや日々のライフスタイルに合わせて設計していくことを目指します。
        </p>

        <h2>オープンスペースを作るのもおまかせください</h2>
        <p>
          オフィス、店舗、ビルなどの中に設けるオープンスペースやパブリックスペースの設計も承ります。自由な人の出入りやコミュニケーションの場として機能させることにより、テレワークなどでは埋めることが難しい課題解決を手助けします。
        </p>
        <p>
          なお、オープンスペースは屋外・野外に設けることもできます。開放的な空間を活用した設計についてもご相談ください。
        </p>
      </article>

      <section className="msg">
        <h2>
          いつでも気軽に
          <br />
          お問い合わせください
        </h2>
        <Link href="/">
          <a className="btn">お問い合わせ</a>
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
