import Layout from "@/components/Layout";
import GoogleMapsComponent from "@/components/map";
import Link from "next/link";
export default function Contact() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Contact Us
              </h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium mb-0">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="/" className="text-decoration-none">
                      <i className="fa-solid fa-house-chimney-crack fs-18" />
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item d-flex align-items-center active"
                    aria-current="page"
                  >
                    Contact
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        {/* Start Map Content */}
        <div className="map-content">
          {/* Start Map */}
          <GoogleMapsComponent className="map border-bottom"/>
          {/* <div id="map" className="map border-bottom" /> */}
          {/* /.End Map */}
        </div>
        {/* /.End Map Content */}
        <div className="contact-info">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-sm-6 col-lg-4 d-flex">
                {/* Start Card */}
                <div
                  className="border-0 card flex-fill rounded-3 shadow w-100"
                  data-aos="fade"
                  data-aos-delay={300}
                >
                  <div className="card-body p-4 text-center">
                    <div className="box-icon">
                      
                      <i className="fa-headset fa-solid fs-40 mb-4 text-primary" />
                    </div>
                    <h4>Call us</h4>
                    <p className="fs-15">
                      Many desktop publishing packages and web page editors now use
                      Lorem.
                    </p>
                    <div className="d-grid d-xl-flex gap-2 justify-content-center">
									<div className="border d-inline-block fw-medium px-3 py-1 rounded text-primary"><i className="fa-solid fa-mobile-button me-2"></i>+123 456 789</div>
									<div className="border d-inline-block fw-medium px-3 py-1 rounded text-primary"><i className="fa-solid fa-phone me-2"></i>+(222)4567 586</div>
								</div>
                  </div>
                </div>
                {/* /.End Card */}
              </div>
              <div className="col-sm-6 col-lg-4 d-flex">
                {/* Start Card */}
                <div
                  className="border-0 card flex-fill rounded-3 shadow w-100"
                  data-aos="fade"
                  data-aos-delay={400}
                >
                  <div className="card-body p-4 text-center">
                    <div className="box-icon">
                      
                      <i className="fa-envelope-circle-check fa-solid fs-40 mb-4 text-danger" />
                    </div>
                    <h4>Email us</h4>
                    <p className="fs-15">
                      There are many variations of passages of Lorem Ipsum
                      available,
                    </p>
                    <Link href="mailto:first.last@example.com" className="fw-medium">
                      <i className="fa-solid fa-envelope me-2" />
                      first.last@example.com
                    </Link>
                  </div>
                </div>
                {/* /.End Card */}
              </div>
              <div className="col-sm-6 col-lg-4 d-flex">
                {/* Start Card */}
                <div
                  className="border-0 card flex-fill rounded-3 shadow w-100"
                  data-aos="fade"
                  data-aos-delay={500}
                >
                  <div className="card-body p-4 text-center">
                    <div className="box-icon">
                      
                      <i className="fa-hashtag fa-solid fs-40 mb-4 text-warning" />
                    </div>
                    <h4>Social media</h4>
                    <p className="fs-15">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </p>
                    {/* Start Social Link */}
                    <div className="d-flex gap-3 justify-content-center social-links text-md-right">
                      <Link
                        href="#"
                        className="fb d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link
                        href="#"
                        className="tw d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link
                        href="#"
                        className="ins d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        href="#"
                        className="pr d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                      >
                        <i className="fab fa-pinterest-p" />
                      </Link>
                      <Link
                        href="#"
                        className="li d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                    {/* /.End Social Link */}
                  </div>
                </div>
                {/* /.End Card */}
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 position-relative">
          <div className="container position-relative py-4 z-1">
            <div className="row justify-content-center">
              <div className="col-md-10">
                {/* Start Section Header Title */}
                <div className="section-header text-center mb-5">
                  {/* Start Section Header title */}
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Let us hear from you <span className="underline position-relative text-primary">directly!</span></h2>
                  {/* /.End Section Header Title */}
                  {/* Start Section Header Sub Title */}
                  <div className="sub-title fs-16">
                    
                    It is a long established fact that a reader will be distracted
                    by the
                    <br className="d-none d-lg-block" /> readable content of a page
                    when looking at its layout.
                  </div>
                  {/* /.End Section Header Sub Title */}
                </div>
                {/*/. End Section Header */}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="row align-items-center">
                  <div className="col-md-7 pe-xl-5 mb-5 mb-md-0">
                    {/* Start Illustration Image */}
                    <img
                      src="assets/img/png-img/destination.png"
                      alt=""
                      className="img-fluid"
                    />
                    {/* /.End Illustration Image */}
                  </div>
                  <div className="col-md-5">
                    <form>
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="Naeem Khan"
                          required
                        />
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Your Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="hello@email.com"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Your Phone</label>
                        <input type="number" className="form-control" id="phone" />
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Your Comments</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="Tell us what we can help you with!"
                          defaultValue={""}
                        />
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Submit Button */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                      >
                        <span>Send message</span>
                        <span className="vr" />
                        <i className="fa-arrow-right fa-solid fs-14" />
                      </button>
                      {/* /.End Submit Button */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start Section Sketch */}
          <div className="bottom-0 end-0 position-absolute section-sketch">
            <img
              src="assets/img/png-img/section-sketch.png"
              className="img-fluid"
              alt=""
            />
          </div>
          {/* /. End Section Sketch */}
        </div>
        {/* /.End of about section */}
      </div>
      {/* /. End Main Content */}
    </Layout>

  );
}