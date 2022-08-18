import React from "react";

function SliderMain() {
  return (
    <div className="container col-xxl-8 px-4 py-5 home-card">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 main-img">
          <div className="circle-lg">
            <img
              src="/images/hero-image.png"
              className="circle-img"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-lg-6 main-title">
          <h1 className="display-5 fw-bold lh-1 mb-3">GELECEK ARTIK</h1>
          <h1 className="display-5 fw-bold lh-1 mb-3">ESKİSİ GİBİ DEĞİL</h1>

          <p className="lead">
            softBreak evrenine adım attığınızda <strong>Pre-Youngling</strong>{" "}
            olarak toplulukta bulunursunuz. Pre-Youngling'ler meraklı ve istekli
            kişilerden oluşmaktadır. Hızla genişleyen evrende bir çok yetenek
            gerektiren alanlar bulunmakta. Pre-Youngling'ler gösterdikleri
            yeteneklerin ardından yollarına <strong>Youngling</strong> olarak ve
            yetenekleri üzerinden devam edebilirler.
          </p>

          <div className="">
            <a
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              href="https://discord.gg/mHWKhjQNGx"
              target="top"
            >
              <i className="fa-brands fa-discord me-2"></i>
              Sunucu
            </a>

            <a
              type="button"
              className="btn btn-outline-light btn-lg px-4"
              href="https://www.youtube.com/channel/UCzdLcari9TIx-rtWzDNXvdQ/playlists"
              target="top"
            >
              <i className="fa-brands fa-youtube me-2 "></i>
              Dersler
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderMain;
