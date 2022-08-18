import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex">
        <a className="navbar-brand " href="/">
          <img src="/logo.png" alt="logo" width={44} height={44} />
        </a>
        <h3 className="text-white mt-2">
          <span style={{ fontWeight: "200" }}>soft</span>Break
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0"></ul>

          {/* <div className="d-flex">
      <button className="btn btn-primary" type="submit">
        Giriş Yap
      </button>
    </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
