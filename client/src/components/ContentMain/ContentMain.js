import React, { useEffect, useState } from "react";
const API_KEY = process.env.YOUTUBE_API_KEY;
function ContentMain() {
  const [backendData, setBackendData] = useState();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLDSvesNxEuJMXjVj6_bhRxyGxVD_Nai7D&key=AIzaSyBFxaBV5XFPJvYrhZX2PVxPfBV4D7CHYW4`
    )
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data.items);
      });
  }, []);

  return (
    <>
      <section className="page-section text-white" id="channels">
        <div className="container">
          <div className="row">
            {backendData == null ? (
              <h5 className="text-center">Yükleniyor</h5>
            ) : (
              backendData.map((item, id) => {
                return (
                  <div className="col" key={id}>
                    <div class="card bg-dark text-white">
                      <img
                        src={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                      />
                      <div class="card-img-overlay">
                        <h5 class="card-title">{item.snippet.title}</h5>
                        <p class="card-text">
                          {item.snippet.description.substring(0, 200)}
                        </p>
                        <a className="" href="/">
                          <i className="fa-solid fa-circle-play fa-5x"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
      <section className="page-section">
        <h1 className="text-uppercase text-center section-title">
          EVREN GENİŞLİYOR...
        </h1>
      </section>
    </>
  );
}

export default ContentMain;
