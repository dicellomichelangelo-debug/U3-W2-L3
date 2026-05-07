const Account = function () {
  return (
    // Usa un div o un main come contenitore principale, non il body
    <div className="bg-dark min-vh-100 text-light">
      <main className="d-flex justify-content-center">
        <section className="text-light p-3">
          <div className="mt-3" style={{ maxWidth: "500px" }}>
            <h1>Edit Profile</h1>
            <hr className="text-secondary mt-0" />
          </div>

          <article className="d-flex">
            <div className="w-25 h-25" style={{ maxWidth: "150px" }}>
              <img
                src="https://placecats.com/300/200"
                alt="Foto Profilo"
                className="user-avatar rounded w-100 h-100"
              />
            </div>

            <div className="w-75 px-3" style={{ maxWidth: "340px" }}>
              <div className="bg-secondary p-2 mb-4">
                <h2 className="h4 mb-0 text-white">Strive Student</h2>
              </div>

              <div className="mb-4">
                <label className="form-label text-secondary fw-bold">
                  Language:
                </label>
                {/* In React si usa defaultValue sulla select invece di selected sull'option */}
                <select
                  className="form-select bg-black text-white border-secondary w-auto rounded-0"
                  defaultValue="English"
                >
                  <option value="English">English</option>
                  <option value="Italiano">Italiano</option>
                </select>
              </div>

              <hr className="border-secondary my-4" />

              <div className="mb-4">
                <label className="form-label text-secondary fw-bold d-block">
                  Maturity Settings:
                </label>
                <div className="d-inline-block bg-secondary bg-opacity-25 p-2 px-3 mb-2 fw-bold border border-secondary">
                  ALL MATURITY RATINGS
                </div>
                <p className="small text-light mb-3">
                  Show titles of <strong>all maturity ratings</strong> for this
                  profile.
                </p>
                <button className="btn btn-outline-secondary text-white rounded-0 px-4">
                  EDIT
                </button>
              </div>

              <hr className="border-secondary my-4" />

              <div className="mb-4">
                <label className="form-label text-secondary fw-bold d-block mb-3">
                  Autoplay controls
                </label>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input bg-dark border border-light"
                    type="checkbox"
                  />
                  <label className="form-check-label">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input bg-dark border border-light"
                    type="checkbox"
                  />
                  <label className="form-check-label">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </div>
            </div>
          </article>

          <hr
            className="border-secondary mt-0 mb-4"
            style={{ maxWidth: "500px" }}
          />

          <div
            style={{ maxWidth: "500px" }}
            className="d-flex justify-content-around"
          >
            <button className="btn btn-outline-secondary bg-light text-dark rounded-0 px-3">
              SAVE
            </button>
            <button className="btn btn-outline-secondary text-light rounded-0 px-3">
              CANCEL
            </button>
            <button className="btn btn-outline-secondary text-light rounded-0 px-4">
              DELETE PROFILE
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Account;
