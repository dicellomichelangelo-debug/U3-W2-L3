function FooterC() {
  return (
    <div className="p-4 mt-5 d-flex justify-content-center">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      ></link>
      <section className="row flex-wrap">
        <div className="col-6 col-md-3">
          <div className="text-secondary">
            <i className="bi bi-facebook fs-5 pe-2"></i>
            <i className="bi bi-instagram fs-5 pe-2"></i>
            <i className="bi bi-twitter fs-5 pe-2"></i>
            <i className="bi bi-youtube fs-5 pe-2"></i>
          </div>
          <div className="text-secondary mt-2">
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-secondary mt-2">
          <p>Audio description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </div>
        <div className="col-6 col-md-3 text-secondary mt-2">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>
        <div className="col-6 col-md-3 text-secondary mt-2">
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
        </div>
      </section>
    </div>
  );
}
export default FooterC;
