function HeaderC() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark text-light align-content-center">
      <div className="container-fluid">
        <div style={{ width: "200px" }}>
          <img src="../src/assets/logo.png" alt="Logo" className="w-75 h-75" />
        </div>
        <button
          className="navbar-toggler border border-light"
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item fw-bold">
              <a className="nav-link text-light" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Reccently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                My List
              </a>
            </li>
          </ul>
          <button
            className="btn btn-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#searchBarDark"
            aria-expanded="false"
            aria-controls="searchBarDark"
          >
            <i className="bi bi-search"></i>
          </button>
          <div className="collapse mt-2" id="searchBarDark">
            <div className="card card-body bg-dark text-white border-dark">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary shadow-none"
                  placeholder="Cosa vuoi vedere?"
                  aria-label="Cerca"
                />
                <button className="btn btn-outline-light" type="button">
                  Vai
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img
              src="../src/assets/17.png"
              alt="Kids"
              width="32px"
              height="32px"
              className="rounded"
            />
            <i className="bi bi-bell text-light m-2"></i>
            <div className="d-flex justify-content-end align-items-center gap-3">
              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle d-flex align-items-center gap-2"
                  type="button"
                  id="userMenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="../src/assets/18.png"
                    alt="Foto Profilo"
                    width="40"
                    height="40"
                    className="user-avatar rounded"
                  />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                  aria-labelledby="userMenu"
                >
                  <li>
                    <a className="dropdown-item" href="profile.html">
                      Il mio Profilo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="settings.html">
                      Impostazioni
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Esci
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default HeaderC;
