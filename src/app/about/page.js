import Layout from "@/components/Layout";
import AboutVideoContainer from "@/components/about-video-container";
import ReusableCountUp from "@/components/counter";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                About Us
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
                    About
                  </li>
                </ol>
              </div>

              
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        <div className="py-5">
          <div className="container py-4">
            <div className="row">
              <div className="col-xl-8 mb-5">
                {/* Start Title */}
                <h1 className="display-4 fw-bold">We <span className="underline position-relative text-primary">believe</span> in the success of every business.</h1>
                {/* /.End Title */}
                {/* Start Short Sescription */}
                <p className="fs-17 mb-0">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has
                </p>
                {/* /.End Short Sescription */}
              </div>
            </div>
            {/* Start Counter */}
            <div className="counter-content_about bg-soft-primary mb-5 rounded-3">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="g-4 justify-content-center row">
                    <div className="col-sm-6 col-xl-3 text-center">
                      <div className="display-4 fw-semibold numscroller text-primary justify-content-center d-flex gap-1">
                        <span className="counter"><ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={3000} /> </span>+
                      </div>
                      <h5 className="mt-3 mb-0">Properties Listed</h5>
                    </div>
                    <div className="col-sm-6 col-xl-3 text-center">
                      <div className="display-4 fw-semibold numscroller text-primary justify-content-center d-flex gap-1">
                        <span className="counter"> <ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={2500} /> </span>+
                      </div>
                      <h5 className="mt-3 mb-0">Satisfied Clients</h5>
                    </div>
                    <div className="col-sm-6 col-xl-3 text-center">
                      <div className="display-4 fw-semibold numscroller text-primary justify-content-center d-flex gap-1">
                        <span className="counter"><ReusableCountUp separator=""
                              decimals={1}
                              decimal="." start={0.0} end={6.8} /></span>B +
                      </div>
                      <h5 className="mt-3 mb-0">Total sales since 2023</h5>
                    </div>
                    <div className="col-sm-6 col-xl-3 text-center">
                      <div className="display-4 fw-semibold numscroller text-primary justify-content-center d-flex gap-1">
                        <span className="counter"><ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={593} /> </span>+
                      </div>
                      <h5 className="mt-3 mb-0">Total Agents</h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.End Counter */}
            </div>
            {/* /. End Counter */}
            <div className="about-text align-items-center g-4 justify-content-between row">
              <div className="col-md-12 col-lg-7">
                <div className="row g-3 g-sm-4 align-items-center">
                  {/* Image */}
                  <div className="col-6">
                    <div className="position-relative">
                      <div className="line-shape" />
                      <img
                        src="assets/img/about/01.jpg"
                        className="img-fluid rounded-3 position-relative"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row g-3 g-sm-4">
                      {/* Image */}
                      <div className="col-12">
                        <img
                          src="assets/img/about/02.jpg"
                          className="img-fluid rounded-3"
                          alt=""
                        />
                      </div>
                      {/* Image */}
                      <div className="col-12">
                        <img
                          src="assets/img/about/03.jpg"
                          className="img-fluid rounded-3"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-5 ps-xxl-5">
                <div className="text-block">
                  <h6 className="fs-14 fw-bold heading-sm l-spacing-1 position-relative text-primary text-uppercase">
                    About
                  </h6>
                  <h2 className="mb-4">We make a Difference in your lives</h2>
                  <p className="mb-4">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem
                    ipsum' will uncover many web sites still.
                  </p>
                  <ul className="list-checked mb-9 mb-md-10 ps-0">
                    <li>
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking.
                    </li>
                    <li>
                      The point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters.
                    </li>
                    <li>
                      Many desktop publishing packages and web page editors now use
                      Lorem Ipsum.
                    </li>
                  </ul>
                  <hr className="mt-5" />
                  <blockquote className="blockquote quote-text">
                    <p className="fst-italic mb-0">
                      “The mind has great influence over the body and maladies often
                      have their origin there.”
                    </p>
                    <cite className="fs-14 fw-semibold quote-attribution text-dark">
                      — John Doe Molicere
                    </cite>
                    <div className="mt-3 signature">
                      <img src="assets/img/signature.png" alt="" />
                    </div>
                  </blockquote>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* Start About Video Section */}
        <AboutVideoContainer/>
        {/* /. End About Video Section */}
        {/* Start Customers Section */}
        <div className="py-5 bg-gradient-primary border-bottom">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-10">
                {/* Start Section Header Title */}
                <div className="section-header text-center mb-5">
                  {/* Start Subtitle */}
                  <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                    Our Customers
                  </div>
                  {/* /. End Subtitle */}
                  {/* Start Section Header title */}
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Trusted by <span className="underline position-relative text-primary">thousands</span> of companies</h2>
                  {/* /.End Section Header Title */}
                  {/* Start Section Header Sub Title */}
                  <div className="sub-title fs-16">
                    
                    Our guests always travel the world in style. Mention @Kempinski
                    <br className="d-none d-lg-block" /> on Instagram for a chance
                    to be featured!
                  </div>
                  {/* /.End Section Header Sub Title */}
                </div>
                {/*/. End Section Header */}
              </div>
            </div>
            <div className="row align-items-center justify-content-center g-4 g-xl-5">
              <div className="col-6 col-sm-3 col-xxl text-center">
                <div className="customer-logo">
                  <img
                    src="assets/img/brand-logo/01.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-3 col-xxl text-center">
                <div className="customer-logo">
                  <img
                    src="assets/img/brand-logo/02.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-3 col-xxl text-center">
                <div className="customer-logo">
                  <img
                    src="assets/img/brand-logo/03.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-3 col-xxl text-center">
                <div className="customer-logo">
                  <img
                    src="assets/img/brand-logo/04.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-3 col-xxl text-center">
                <div className="customer-logo">
                  <img
                    src="assets/img/brand-logo/05.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-3 col-xxl text-center">
                <div className="customer-logo">
                  <img
                    src="assets/img/brand-logo/06.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-3 col-xxl text-center">
                <div className="customer-logo">
                  <img
                    src="assets/img/brand-logo/07.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-6 col-sm-3 col-xxl text-center">
                <div className="customer-logo">
                  <img
                    src="assets/img/brand-logo/08.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. End Customers Section */}
        {/* Start Team Content */}
        <div className="py-5 team-content">
          <div className="container py-4">
            <div className="align-items-end row g-4 mb-5">
              <div className="col">
                {/* Start Section Header Title */}
                <div className="section-header text-center text-xl-start">
                  {/* Start Subtitle */}
                  <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                    Our Team
                  </div>
                  {/* /. End Subtitle */}
                  {/* Start Section Header title */}
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Meet our <span className="underline position-relative text-primary">team</span></h2>
                  {/* /.End Section Header Title */}
                  {/* Start Section Header Sub Title */}
                  <div className="sub-title fs-16">
                    
                    Our guests always travel the world in style. Mention @Kempinski
                    <br className="d-none d-lg-block" /> on Instagram for a chance
                    to be featured!
                  </div>
                  {/* /.End Section Header Sub Title */}
                </div>
                {/*/. End Section Header */}
              </div>
              <div className="col-12 col-xl-auto text-center text-xl-end">
                {/* Start Button */}
                <button
                  type="button"
                  className="btn btn-primary d-inline-flex hstack gap-2"
                >
                  <span>Brows More Speciality</span>
                  <span className="vr" />
                  <i className="fa-arrow-right fa-solid fs-14" />
                </button>
                {/* /.End Button */}
              </div>
            </div>
            <div className="row justify-content-center g-3 g-sm-4">
              <div className="col-sm-6 col-md-6 col-lg-3">
                {/* Start Card */}
                <div className="team-member">
                  <div className="member-header overflow-hidden position-relative rounded-4">
                    <div className="d-block overflow-hidden position-relative team-avatar-container">
                      <img
                        src="assets/img/avatar/01-lg.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                    <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                    <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                      Property Advisor
                    </div>
                  </div>
                  {/* Start Avatar Info */}
                  <div className="member-info text-center mt-3">
                    <h4 className="mb-2 member-name text-truncate">
                      Abbas Ibn Firna
                    </h4>
                    <div>
                      The CEO and the regional leader for askexperts consulting
                      agency.
                    </div>
                  </div>
                  {/* /.End Avatar Info */}
                </div>
                {/* /.End Card */}
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                {/* Start Card */}
                <div className="team-member">
                  <div className="member-header overflow-hidden position-relative rounded-4">
                    <div className="d-block overflow-hidden position-relative team-avatar-container">
                      <img
                        src="assets/img/avatar/02-lg.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                    <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                    <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                      Atomic Properties
                    </div>
                  </div>
                  {/* Start Avatar Info */}
                  <div className="member-info text-center mt-3">
                    <h4 className="mb-2 member-name text-truncate">
                      Edwin Martins
                    </h4>
                    <div>
                      The CEO and the regional leader for askexperts consulting
                      agency.
                    </div>
                  </div>
                  {/* /.End Avatar Info */}
                </div>
                {/* /.End Card */}
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                {/* Start Card */}
                <div className="team-member">
                  <div className="member-header overflow-hidden position-relative rounded-4">
                    <div className="d-block overflow-hidden position-relative team-avatar-container">
                      <img
                        src="assets/img/avatar/03-lg.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                    <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                    <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                      Property Manager
                    </div>
                  </div>
                  {/* Start Avatar Info */}
                  <div className="member-info text-center mt-3">
                    <h4 className="mb-2 member-name text-truncate">
                      Alexander Kaminski
                    </h4>
                    <div>
                      The CEO and the regional leader for askexperts consulting
                      agency.
                    </div>
                  </div>
                  {/* /.End Avatar Info */}
                </div>
                {/* /.End Card */}
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                {/* Start Card */}
                <div className="team-member">
                  <div className="member-header overflow-hidden position-relative rounded-4">
                    <div className="d-block overflow-hidden position-relative team-avatar-container">
                      <img
                        src="assets/img/avatar/07-lg.jpg"
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                    <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                    <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
                      Property Manager
                    </div>
                  </div>
                  {/* Start Avatar Info */}
                  <div className="member-info text-center mt-3">
                    <h4 className="mb-2 member-name text-truncate">
                      Pranoti Deshpande
                    </h4>
                    <div>
                      The CEO and the regional leader for askexperts consulting
                      agency.
                    </div>
                  </div>
                  {/* /.End Avatar Info */}
                </div>
                {/* /.End Card */}
              </div>
            </div>
          </div>
        </div>
        {/* /. End Team Content */}
      </div>
      {/* /. End Main Content */}


    </Layout>
  );
}