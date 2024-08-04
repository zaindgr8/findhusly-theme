import Layout from "@/components/Layout";
import ReusableCountUp from "@/components/counter";
import DropdownTwo from "@/components/form-control";
import VideoContainer from "@/components/video-container";
import Link from "next/link";

export default function HomeThreeHeaderDark() {
  return (
    <Layout>

      {/* Hero Header Three */}
      <div
        className="hero-header hero-header__three align-items-center d-flex position-relative header-dark background-image"
        data-image-src="assets/img/png-img/section-bg.png"
      >
        <div className="container position-relative">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 pe-xxl-5">
              {/* Start Title */}
              {/* <h1 class="display-3 fw-bold text-capitalize hero-title background-image" data-image-src="assets/img/hero-title-bg.jpg">We help people Find Their Dream Property.</h1> */}
              <h1 className="hero-header_title display-2 fw-bold text-capitalize text-white">
                We help people{" "}
                <span className="underline position-relative text-primary">
                  Find
                </span>{" "}
                Their Dream Property.
              </h1>
              {/* /.End Title */}
              {/* Start Text */}
              <p className="fs-18 mb-5">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
              </p>
              {/* /.End Text */}
              {/* Start Main Search Content */}
              <DropdownTwo/>
              {/* /.End Main Search Content */}
              <h6 className="mt-5 text-white">
                Are you a agent?
                <Link className="btn btn-danger btn-sm ms-2 py-1" href="">
                  Join as a agent
                </Link>
              </h6>
            </div>
            <div className="col-lg-6 col-xl-6 col-xxl-6 ps-xl-5 d-none d-lg-block">
              <div className="row g-3 g-sm-5 align-items-center">
                <div className="col-6">
                  <div className="position-relative">
                    <div className="line-shape-home" />
                    <div
                      className="position-relative image-bg-shape"
                      data-aos="zoom-in"
                    >
                      <div className="rounded-4 overflow-hidden position-relative">
                        <img
                          src="assets/img/about/01.jpg"
                          className="img-fluid position-relative image-parallax z-1"
                          alt=""
                        />
                      </div>
                    </div>
                    <img
                      src="assets/img/png-img/card-asset-home.png"
                      className="img-fluid rounded-4 position-absolute shadow card-asset-home z-1"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-easing="ease"
                      data-aos-delay={400}
                    />
                  </div>
                </div>
                <div className="col-6 align-self-end">
                  <div
                    className="overflow-hidden rounded-4"
                    data-aos="zoom-in"
                    data-aos-easing="ease"
                    data-aos-delay={200}
                  >
                    <img
                      src="assets/img/about/03.jpg"
                      className="img-fluid rounded-4 image-parallax"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.End Hero Header Three */}
      <div className="bg-white py-5 angled lower-start wrapper">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="fade-down">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Best Way
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Find your{" "}
                  <span className="underline position-relative text-primary">
                    dream home
                  </span>
                  the best way
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  {" "}
                  It is a long established fact that a reader will be distracted by
                  the
                  <br className="d-none d-lg-block" /> readable content of a page
                  when looking at its layout.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row g-4 g-md-5 justify-content-center work-process">
            <div className="col-sm-6 col-lg-4">
              {/* Start Work Process */}
              <div
                className="work-process position-relative p-3 px-xl-5"
                data-aos="fade"
                data-aos-delay={300}
              >
                {/* Start Step Box */}
                <div className="step-box position-relative d-inline-block mb-4 d-flex gap-3">
                  {/* Start Step Number */}
                  <div className="fs-5 text-dark fw-semibold">01/</div>
                  {/* /.End Step Number */}
                  {/* Start Step Icon */}
                  <i className="fs-50 fa-solid fa-map-location text-primary" />
                  {/* /.End Step Icon */}
                </div>
                {/* /.End Step Box */}
                <div className="step-desc">
                  <h4 className="fs-20 fw-semibold">
                    Find your property in the best location.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, amet?
                  </p>
                </div>
              </div>
              {/* /.End Work process */}
            </div>
            <div className="col-sm-6 col-lg-4">
              {/* Start Work Process */}
              <div
                className="work-process position-relative p-3 px-xl-5"
                data-aos="fade"
                data-aos-delay={400}
              >
                {/* Start Step Box */}
                <div className="step-box position-relative d-inline-block mb-4 d-flex gap-3">
                  {/* Start Step Number */}
                  <div className="fs-5 text-dark fw-semibold">01/</div>
                  {/* /.End Step Number */}
                  {/* Start Step Icon */}
                  <i className="fs-50 fas fa-calendar-alt text-primary" />
                  {/* /.End Step Icon */}
                </div>
                {/* /.End Step Box */}
                <div className="step-desc">
                  <h4 className="fs-20 fw-semibold">
                    Make a visit appointment with one of our agents.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, amet?
                  </p>
                </div>
              </div>
              {/* /.End Work Process */}
            </div>
            <div className="col-sm-6 col-lg-4">
              {/* Start Work Process */}
              <div
                className="work-process position-relative p-3 px-xl-5"
                data-aos="fade"
                data-aos-delay={500}
              >
                {/* Start Step Box */}
                <div className="step-box position-relative d-inline-block mb-4 d-flex gap-3">
                  {/* Start Step Number */}
                  <div className="fs-5 text-dark fw-semibold">01/</div>
                  {/* /.End Step Number */}
                  {/* Start Step Icon */}
                  <i className="fs-50 fas fa-igloo text-primary" />
                  {/* /.End Step Icon */}
                </div>
                {/* /.End Step Box */}
                <div className="step-desc">
                  <h4 className="fs-20 fw-semibold">
                    And get your dream house in a month, or less.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, amet?
                  </p>
                </div>
              </div>
              {/* /.End Work Process */}
            </div>
          </div>
        </div>
      </div>
      {/* Start Featured Properties Section */}
      <div className="py-5 bg-gradient-primary">
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-md-10 offset-md-1" data-aos="fade-down">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Featured Properties
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Featured{" "}
                  <span className="underline position-relative text-primary">
                    Properties
                  </span>
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  {" "}
                  It is a long established fact that a reader will be distracted by
                  the
                  <br className="d-none d-lg-block" /> readable content of a page
                  when looking at its layout.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-sm-6 col-lg-4 col-xl-3 d-flex"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {/* Start Card Property */}
              <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                {/* Start Card Link */}
                <Link href="property-details" className="card-link" />
                {/* /. End Card Link */}
                {/* Start Property Image */}
                <div className="property-img card-image-hover overflow-hidden">
                  <img
                    src="assets/img/properties/01.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-white card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-dark top-1">
                    For Rent
                  </div>
                </div>
                {/* /. End Property Image */}
                <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                  {/* Start Card Property Price */}
                  <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                    <h3 className="m-0 fw-semibold text-primary">$31</h3>
                    <div> /night</div>
                  </div>
                  {/* /. End Card Property Price */}
                  <h4 className="property-card-title mb-3">Koh Samui, Thailand</h4>
                  <div className="card-property-description mb-3">
                    37 Ambleside Gardens, Ilford, IG4
                  </div>
                  {/* Start Card Property Facilities */}
                  <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                    <div className="">
                      <i className="fa-solid fa-bed text-dark me-1" />
                      <span>3 Beds</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-bath text-dark me-1" />
                      <span>3 Baths</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-vector-square text-dark me-1" />
                      <span>5x7 m²</span>
                    </div>
                  </div>
                  {/* /. End Card Property Facilities */}
                </div>
              </div>
              {/* /. End Card Property */}
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 d-flex"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              {/* Start Card Property */}
              <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                {/* Start Card Link */}
                <Link href="property-details" className="card-link" />
                {/* /. End Card Link */}
                {/* Start Property Image */}
                <div className="property-img card-image-hover overflow-hidden">
                  <img
                    src="assets/img/properties/02.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-primary card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                    For Sale
                  </div>
                </div>
                {/* /. End Property Image */}
                <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                  {/* Start Card Property Price */}
                  <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                    <h3 className="m-0 fw-semibold text-primary">$15,000</h3>
                    <div> /night</div>
                  </div>
                  {/* /. End Card Property Price */}
                  <h4 className="property-card-title mb-3">
                    Belle Mare, Mauritius
                  </h4>
                  <div className="card-property-description mb-3">
                    37 Ambleside Gardens, Ilford, IG4
                  </div>
                  {/* Start Card Property Facilities */}
                  <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                    <div className="">
                      <i className="fa-solid fa-bed text-dark me-1" />
                      <span>3 Beds</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-bath text-dark me-1" />
                      <span>3 Baths</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-vector-square text-dark me-1" />
                      <span>5x7 m²</span>
                    </div>
                  </div>
                  {/* /. End Card Property Facilities */}
                </div>
              </div>
              {/* /. End Card Property */}
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 d-flex"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              {/* Start Card Property */}
              <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                {/* Start Card Link */}
                <Link href="property-details" className="card-link" />
                {/* /. End Card Link */}
                {/* Start Property Image */}
                <div className="property-img card-image-hover overflow-hidden">
                  <img
                    src="assets/img/properties/03.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-primary card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                    For Sale
                  </div>
                </div>
                {/* /. End Property Image */}
                <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                  {/* Start Card Property Price */}
                  <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                    <h3 className="m-0 fw-semibold text-primary">$15,000</h3>
                    <div> /night</div>
                  </div>
                  {/* /. End Card Property Price */}
                  <h4 className="property-card-title mb-3">
                    Balian Beach, Indonesia
                  </h4>
                  <div className="card-property-description mb-3">
                    37 Ambleside Gardens, Ilford, IG4
                  </div>
                  {/* Start Card Property Facilities */}
                  <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                    <div className="">
                      <i className="fa-solid fa-bed text-dark me-1" />
                      <span>3 Beds</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-bath text-dark me-1" />
                      <span>3 Baths</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-vector-square text-dark me-1" />
                      <span>5x7 m²</span>
                    </div>
                  </div>
                  {/* /. End Card Property Facilities */}
                </div>
              </div>
              {/* /. End Card Property */}
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 d-flex"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              {/* Start Card Property */}
              <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                {/* Start Card Link */}
                <Link href="property-details" className="card-link" />
                {/* /. End Card Link */}
                {/* Start Property Image */}
                <div className="property-img card-image-hover overflow-hidden">
                  <img
                    src="assets/img/properties/04.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-white card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-dark top-1">
                    For Rent
                  </div>
                </div>
                {/* /. End Property Image */}
                <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                  {/* Start Card Property Price */}
                  <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                    <h3 className="m-0 fw-semibold text-primary">$1,295,000</h3>
                    <div> / year</div>
                  </div>
                  {/* /. End Card Property Price */}
                  <h4 className="property-card-title mb-3">
                    Pantai Nyanyi, Indonesia
                  </h4>
                  <div className="card-property-description mb-3">
                    37 Ambleside Gardens, Ilford, IG4
                  </div>
                  {/* Start Card Property Facilities */}
                  <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                    <div className="">
                      <i className="fa-solid fa-bed text-dark me-1" />
                      <span>3 Beds</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-bath text-dark me-1" />
                      <span>3 Baths</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-vector-square text-dark me-1" />
                      <span>5x7 m²</span>
                    </div>
                  </div>
                  {/* /. End Card Property Facilities */}
                </div>
              </div>
              {/* /. End Card Property */}
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 d-flex"
              data-aos="fade-up"
              data-aos-delay={700}
            >
              {/* Start Card Property */}
              <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                {/* Start Card Link */}
                <Link href="property-details" className="card-link" />
                {/* /. End Card Link */}
                {/* Start Property Image */}
                <div className="property-img card-image-hover overflow-hidden">
                  <img
                    src="assets/img/properties/05.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-white card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-dark top-1">
                    For Rent
                  </div>
                </div>
                {/* /. End Property Image */}
                <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                  {/* Start Card Property Price */}
                  <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                    <h3 className="m-0 fw-semibold text-primary">$31</h3>
                    <div> /night</div>
                  </div>
                  {/* /. End Card Property Price */}
                  <h4 className="property-card-title mb-3">Koh Samui, Thailand</h4>
                  <div className="card-property-description mb-3">
                    37 Ambleside Gardens, Ilford, IG4
                  </div>
                  {/* Start Card Property Facilities */}
                  <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                    <div className="">
                      <i className="fa-solid fa-bed text-dark me-1" />
                      <span>3 Beds</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-bath text-dark me-1" />
                      <span>3 Baths</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-vector-square text-dark me-1" />
                      <span>5x7 m²</span>
                    </div>
                  </div>
                  {/* /. End Card Property Facilities */}
                </div>
              </div>
              {/* /. End Card Property */}
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 d-flex"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              {/* Start Card Property */}
              <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                {/* Start Card Link */}
                <Link href="property-details" className="card-link" />
                {/* /. End Card Link */}
                {/* Start Property Image */}
                <div className="property-img card-image-hover overflow-hidden">
                  <img
                    src="assets/img/properties/06.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-primary card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                    For Sale
                  </div>
                </div>
                {/* /. End Property Image */}
                <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                  {/* Start Card Property Price */}
                  <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                    <h3 className="m-0 fw-semibold text-primary">$1499</h3>
                    <div> /night</div>
                  </div>
                  {/* /. End Card Property Price */}
                  <h4 className="property-card-title mb-3">
                    Belle Mare, Mauritius
                  </h4>
                  <div className="card-property-description mb-3">
                    37 Ambleside Gardens, Ilford, IG4
                  </div>
                  {/* Start Card Property Facilities */}
                  <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                    <div className="">
                      <i className="fa-solid fa-bed text-dark me-1" />
                      <span>3 Beds</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-bath text-dark me-1" />
                      <span>3 Baths</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-vector-square text-dark me-1" />
                      <span>5x7 m²</span>
                    </div>
                  </div>
                  {/* /. End Card Property Facilities */}
                </div>
              </div>
              {/* /. End Card Property */}
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 d-flex"
              data-aos="fade-up"
              data-aos-delay={900}
            >
              {/* Start Card Property */}
              <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
                {/* Start Card Link */}
                <Link href="property-details" className="card-link" />
                {/* /. End Card Link */}
                {/* Start Property Image */}
                <div className="property-img card-image-hover overflow-hidden">
                  <img
                    src="assets/img/properties/07.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-primary card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                    For Sale
                  </div>
                </div>
                {/* /. End Property Image */}
                <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                  {/* Start Card Property Price */}
                  <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                    <h3 className="m-0 fw-semibold text-primary">$12,999</h3>
                    <div> /night</div>
                  </div>
                  {/* /. End Card Property Price */}
                  <h4 className="property-card-title mb-3">
                    Balian Beach, Indonesia
                  </h4>
                  <div className="card-property-description mb-3">
                    37 Ambleside Gardens, Ilford, IG4
                  </div>
                  {/* Start Card Property Facilities */}
                  <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                    <div className="">
                      <i className="fa-solid fa-bed text-dark me-1" />
                      <span>3 Beds</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-bath text-dark me-1" />
                      <span>3 Baths</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-vector-square text-dark me-1" />
                      <span>5x7 m²</span>
                    </div>
                  </div>
                  {/* /. End Card Property Facilities */}
                </div>
              </div>
              {/* /. End Card Property */}
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 d-flex"
              data-aos="fade-up"
              data-aos-delay={1000}
            >
              {/* Start Card Property */}
              <div className="border-0 card card-property rounded-3 shadow-sm w-100 flex-fill overflow-hidden">
                {/* Start Card Link */}
                <Link href="property-details" className="card-link" />
                {/* /. End Card Link */}
                {/* Start Property Image */}
                <div className="property-img card-image-hover overflow-hidden">
                  <img
                    src="assets/img/properties/08.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="bg-white card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-dark top-1">
                    For Rent
                  </div>
                </div>
                {/* /. End Property Image */}
                <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                  {/* Start Card Property Price */}
                  <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                    <h3 className="m-0 fw-semibold text-primary">$1,295,000</h3>
                    <div> / year</div>
                  </div>
                  {/* /. End Card Property Price */}
                  <h4 className="property-card-title mb-3">
                    Pantai Nyanyi, Indonesia
                  </h4>
                  <div className="card-property-description mb-3">
                    37 Ambleside Gardens, Ilford, IG4
                  </div>
                  {/* Start Card Property Facilities */}
                  <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                    <div className="">
                      <i className="fa-solid fa-bed text-dark me-1" />
                      <span>3 Beds</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-bath text-dark me-1" />
                      <span>3 Baths</span>
                    </div>
                    <span className="vr" />
                    <div className="">
                      <i className="fa-solid fa-vector-square text-dark me-1" />
                      <span>5x7 m²</span>
                    </div>
                  </div>
                  {/* /. End Card Property Facilities */}
                </div>
              </div>
              {/* /. End Card Property */}
            </div>
          </div>
          <div className="text-center mt-5" data-aos="fade-up">
            {/* Start Button */}
            <Link
              href="properties-list"
              className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
            >
              <span>Browse All Properties</span>
              <span className="vr" />
              <i className="fa-arrow-right fa-solid fs-14" />
            </Link>
            {/* /.End Button */}
          </div>
        </div>
      </div>
      {/* /.End Featured Properties Section */}
      {/* About And Counter Section */}
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div
            className="col-xl-4 d-xl-flex align-items-xl-center bg-primary px-3 py-5 px-sm-5 px-md-3 px-xxl-5 counter-content__two background-image"
            data-image-src="assets/img/png-img/section-bg.png"
          >
            <div className="row g-0 text-center position-relative counter-content__dot">
              <div className="col-6 col-md-3 col-xl-6 p-3 p-sm-4 p-md-3 p-xxl-5">
                <i className="fa-igloo fa-solid display-4 mb-3 text-white fw-black" />
                <p className="fs-1 text-white mb-0">
                  <strong className="counter">
                     <ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={3000} /> 
                  </strong>
                  <small> +</small>
                </p>
                <p className="fw-semibold mb-0 text-white">Properties Listed</p>
              </div>
              <div className="col-6 col-md-3 col-xl-6 p-3 p-sm-4 p-md-3 p-xxl-5">
                <i className="fa-solid fa-user-group display-4 mb-3 text-white fw-black" />
                <p className="fs-1 text-white mb-0">
                  <strong className="counter"><ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={2500} />
                            </strong>
                  <small> +</small>
                </p>
                <p className="fw-semibold mb-0 text-white">Satisfied Clients</p>
              </div>
              <div className="col-6 col-md-3 col-xl-6 p-3 p-sm-4 p-md-3 p-xxl-5">
                <i className="fa-solid fa-sack-dollar display-4 mb-3 text-white fw-black" />
                <p className="fs-1 text-white mb-0">
                  <strong>
                  $ <span className="counter"><ReusableCountUp separator=""
                              decimals={1}
                              decimal="." start={0.0} end={6.8} /></span>B
                  </strong>
                  <small> +</small>
                </p>
                <p className="fw-semibold mb-0 text-white">
                  Total sales since 2023
                </p>
              </div>
              <div className="col-6 col-md-3 col-xl-6 p-3 p-sm-4 p-md-3 p-xxl-5">
                <i className="fa-solid fa-user-tie display-4 mb-3 text-white fw-black" />
                <p className="fs-1 text-white mb-0">
                  <strong className="counter">  <strong className="counter"><ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={593} />
                          </strong></strong>
                  <small> +</small>
                </p>
                <p className="fw-semibold mb-0 text-white">Total Agents</p>
              </div>
            </div>
          </div>
          <VideoContainer/>
        </div>
      </div>
      {/* /. About And Counter Section */}
      {/* Start Top Regions Section */}
      <div className="py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="fade-down">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Top Regions
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Explore unique{" "}
                  <span className="underline position-relative text-primary">
                    properties
                  </span>{" "}
                  in top regions
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  {" "}
                  It is a long established fact that a reader will be distracted by
                  the
                  <br className="d-none d-lg-block" /> readable content of a page
                  when looking at its layout.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <div className="row g-3 g-sm-4 justify-content-center">
            <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              {/* Start Category Item */}
              <Link
                href="#"
                className="d-block category-item position-relative"
                data-aos="fade"
                data-aos-delay={300}
              >
                {/* Start image Container */}
                <div className="img-container overflow-hidden position-relative rounded-3 shadow">
                  {" "}
                  <img
                    src="assets/img/regions/01.jpg"
                    className="w-100"
                    alt=""
                  />{" "}
                </div>
                {/* End image Container */}
                <div className="accordion bottom-0 d-flex flex-column h-100 justify-content-end mask overflow-hidden position-absolute start-0 w-100 z-1">
                  <div className="mask-content m-3">
                    <h2>Fox Hills</h2>
                    <span className="d-none d-md-block d-xl-none d-xxl-block">
                      38 properties
                    </span>
                    <div className="svg-wrap">
                      <svg
                        width="28px"
                        height="12px"
                        viewBox="0 0 28 12"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            className="icon-arrow"
                            transform="translate(-714.000000, -120.000000)"
                            fill="#000000"
                          >
                            <path d="M737.608907,124.700519 L734.322602,121.414214 L735.736815,120 L739.990251,124.253436 L740.001047,124.242641 L741.41526,125.656854 L741.404465,125.66765 L741.41526,125.678445 L740.001047,127.092659 L739.990251,127.081863 L735.736815,131.3353 L734.322602,129.921086 L737.543169,126.700519 L714,126.700519 L714,124.700519 L737.608907,124.700519 Z">
                              {" "}
                            </path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              {/* /.End Category Item */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              {/* Start Category Item */}
              <Link
                href="#"
                className="d-block category-item position-relative"
                data-aos="fade"
                data-aos-delay={400}
              >
                {/* Start image Container */}
                <div className="img-container overflow-hidden position-relative rounded-3 shadow">
                  {" "}
                  <img
                    src="assets/img/regions/02.jpg"
                    className="w-100"
                    alt=""
                  />{" "}
                </div>
                {/* End image Container */}
                <div className="accordion bottom-0 d-flex flex-column h-100 justify-content-end mask overflow-hidden position-absolute start-0 w-100 z-1">
                  <div className="mask-content m-3">
                    <h2>The Pearl - Qanat Quartier</h2>
                    <span className="d-none d-md-block d-xl-none d-xxl-block">
                      33 properties
                    </span>
                    <div className="svg-wrap">
                      <svg
                        width="28px"
                        height="12px"
                        viewBox="0 0 28 12"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            className="icon-arrow"
                            transform="translate(-714.000000, -120.000000)"
                            fill="#000000"
                          >
                            <path d="M737.608907,124.700519 L734.322602,121.414214 L735.736815,120 L739.990251,124.253436 L740.001047,124.242641 L741.41526,125.656854 L741.404465,125.66765 L741.41526,125.678445 L740.001047,127.092659 L739.990251,127.081863 L735.736815,131.3353 L734.322602,129.921086 L737.543169,126.700519 L714,126.700519 L714,124.700519 L737.608907,124.700519 Z">
                              {" "}
                            </path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              {/* /.End Category Item */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              {/* Start Category Item */}
              <Link
                href="#"
                className="d-block category-item position-relative"
                data-aos="fade"
                data-aos-delay={500}
              >
                {/* Start image Container */}
                <div className="img-container overflow-hidden position-relative rounded-3 shadow">
                  {" "}
                  <img
                    src="assets/img/regions/03.jpg"
                    className="w-100"
                    alt=""
                  />{" "}
                </div>
                {/* End image Container */}
                <div className="accordion bottom-0 d-flex flex-column h-100 justify-content-end mask overflow-hidden position-absolute start-0 w-100 z-1">
                  <div className="mask-content m-3">
                    <h2>Musheireb - Msheireb Downtown</h2>
                    <span className="d-none d-md-block d-xl-none d-xxl-block">
                      20 properties
                    </span>
                    <div className="svg-wrap">
                      <svg
                        width="28px"
                        height="12px"
                        viewBox="0 0 28 12"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            className="icon-arrow"
                            transform="translate(-714.000000, -120.000000)"
                            fill="#000000"
                          >
                            <path d="M737.608907,124.700519 L734.322602,121.414214 L735.736815,120 L739.990251,124.253436 L740.001047,124.242641 L741.41526,125.656854 L741.404465,125.66765 L741.41526,125.678445 L740.001047,127.092659 L739.990251,127.081863 L735.736815,131.3353 L734.322602,129.921086 L737.543169,126.700519 L714,126.700519 L714,124.700519 L737.608907,124.700519 Z">
                              {" "}
                            </path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              {/* /.End Category Item */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              {/* Start Category Item */}
              <Link
                href="#"
                className="d-block category-item position-relative"
                data-aos="fade"
                data-aos-delay={600}
              >
                {/* Start image Container */}
                <div className="img-container overflow-hidden position-relative rounded-3 shadow">
                  {" "}
                  <img
                    src="assets/img/regions/04.jpg"
                    className="w-100"
                    alt=""
                  />{" "}
                </div>
                {/* End image Container */}
                <div className="accordion bottom-0 d-flex flex-column h-100 justify-content-end mask overflow-hidden position-absolute start-0 w-100 z-1">
                  <div className="mask-content m-3">
                    <h2>Entertainment City</h2>
                    <span className="d-none d-md-block d-xl-none d-xxl-block">
                      52 properties
                    </span>
                    <div className="svg-wrap">
                      <svg
                        width="28px"
                        height="12px"
                        viewBox="0 0 28 12"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            className="icon-arrow"
                            transform="translate(-714.000000, -120.000000)"
                            fill="#000000"
                          >
                            <path d="M737.608907,124.700519 L734.322602,121.414214 L735.736815,120 L739.990251,124.253436 L740.001047,124.242641 L741.41526,125.656854 L741.404465,125.66765 L741.41526,125.678445 L740.001047,127.092659 L739.990251,127.081863 L735.736815,131.3353 L734.322602,129.921086 L737.543169,126.700519 L714,126.700519 L714,124.700519 L737.608907,124.700519 Z">
                              {" "}
                            </path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              {/* /.End Category Item */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              {/* Start Category Item */}
              <Link
                href="#"
                className="d-block category-item position-relative"
                data-aos="fade"
                data-aos-delay={700}
              >
                {/* Start image Container */}
                <div className="img-container overflow-hidden position-relative rounded-3 shadow">
                  {" "}
                  <img
                    src="assets/img/regions/05.jpg"
                    className="w-100"
                    alt=""
                  />{" "}
                </div>
                {/* End image Container */}
                <div className="accordion bottom-0 d-flex flex-column h-100 justify-content-end mask overflow-hidden position-absolute start-0 w-100 z-1">
                  <div className="mask-content m-3">
                    <h2>Al Erkyah</h2>
                    <span className="d-none d-md-block d-xl-none d-xxl-block">
                      5 properties
                    </span>
                    <div className="svg-wrap">
                      <svg
                        width="28px"
                        height="12px"
                        viewBox="0 0 28 12"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            className="icon-arrow"
                            transform="translate(-714.000000, -120.000000)"
                            fill="#000000"
                          >
                            <path d="M737.608907,124.700519 L734.322602,121.414214 L735.736815,120 L739.990251,124.253436 L740.001047,124.242641 L741.41526,125.656854 L741.404465,125.66765 L741.41526,125.678445 L740.001047,127.092659 L739.990251,127.081863 L735.736815,131.3353 L734.322602,129.921086 L737.543169,126.700519 L714,126.700519 L714,124.700519 L737.608907,124.700519 Z">
                              {" "}
                            </path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              {/* /.End Category Item */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              {/* Start Category Item */}
              <Link
                href="#"
                className="d-block category-item position-relative"
                data-aos="fade"
                data-aos-delay={800}
              >
                {/* Start image Container */}
                <div className="img-container overflow-hidden position-relative rounded-3 shadow">
                  {" "}
                  <img
                    src="assets/img/regions/06.jpg"
                    className="w-100"
                    alt=""
                  />{" "}
                </div>
                {/* End image Container */}
                <div className="accordion bottom-0 d-flex flex-column h-100 justify-content-end mask overflow-hidden position-absolute start-0 w-100 z-1">
                  <div className="mask-content m-3">
                    <h2>Waterfront District</h2>
                    <span className="d-none d-md-block d-xl-none d-xxl-block">
                      40 properties
                    </span>
                    <div className="svg-wrap">
                      <svg
                        width="28px"
                        height="12px"
                        viewBox="0 0 28 12"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            className="icon-arrow"
                            transform="translate(-714.000000, -120.000000)"
                            fill="#000000"
                          >
                            <path d="M737.608907,124.700519 L734.322602,121.414214 L735.736815,120 L739.990251,124.253436 L740.001047,124.242641 L741.41526,125.656854 L741.404465,125.66765 L741.41526,125.678445 L740.001047,127.092659 L739.990251,127.081863 L735.736815,131.3353 L734.322602,129.921086 L737.543169,126.700519 L714,126.700519 L714,124.700519 L737.608907,124.700519 Z">
                              {" "}
                            </path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              {/* /.End Category Item */}
            </div>
          </div>
          <div className="text-center mt-5" data-aos="fade-up">
            {/* Start Button */}
            <button className="btn btn-primary btn-lg d-inline-flex hstack gap-2">
              <span>Brows More Regions</span>
              <span className="vr" />
              <i className="fa-arrow-right fa-solid fs-14" />
            </button>
            {/* /.End Button */}
          </div>
        </div>
      </div>
      {/* /.End Top Regions Section */}
      {/* Start Blog Section */}
      <div className="py-5 border-top">
        <div className="container py-4">
          <div className="align-items-end row g-4 mb-5">
            <div className="col">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center text-xl-start"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Our Latest Articles
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Browse Our Latest{" "}
                  <span className="underline position-relative text-primary">
                    Articles
                  </span>{" "}
                  &amp; News
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  {" "}
                  It is a long established fact that a reader will be distracted by
                  the
                  <br className="d-none d-lg-block" /> readable content of a page
                  when looking at its layout.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
            <div className="col-12 col-xl-auto text-center text-xl-end">
              {/* Start Button */}
              <Link
                href="blog-1"
                className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
              >
                <span>Brows More Articles</span>
                <span className="vr" />
                <i className="fa-arrow-right fa-solid fs-14" />
              </Link>
              {/* /.End Button */}
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-8 pe-xxl-5">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="masonry-post position-relative h-100 overflow-hidden rounded-3">
                    <img
                      src="assets/img/blog/lg-01.jpg"
                      alt=""
                      className="img-fluid  shadow news-block"
                    />
                    <div className="bottom-0 left-0 p-3 p-sm-4 position-absolute post-block w-100 z-1">
                      <h3 className="fw-semibold mb-3 post-title_hover ">
                        <Link href="blog-details">
                          Eu Feugiat Pretium Nibh Ipsum Consequat Nisl Vel Pretium
                          Lectus
                        </Link>
                      </h3>
                      {/* /.End Meta Info */}
                      {/* Start Meta Info */}
                      <div className="text-white align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                        <div className="fw-medium">Construction</div>
                        <span className="vr" />
                        <div>jun 23, 2023</div>
                      </div>
                      {/* /.End Meta Info */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-none d-lg-block">
                  <div className="masonry-post position-relative h-100 overflow-hidden rounded-3">
                    <img
                      src="assets/img/blog/lg-02.jpg"
                      alt=""
                      className="img-fluid shadow news-block"
                    />
                    <div className="bottom-0 left-0 p-3 p-sm-4 position-absolute post-block w-100 z-1">
                      <h3 className="fw-semibold mb-3 post-title_hover ">
                        <Link href="blog-details">
                          Ullamcorper A Lacus Vestibulum Sed Arcu Non Odio Euismod
                          Lacinia
                        </Link>
                      </h3>
                      {/* Start Meta Info */}
                      <div className="text-white align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                        <div className="fw-medium">Design</div>
                        <span className="vr" />
                        <div>jun 23, 2023</div>
                      </div>
                      {/* /.End Meta Info */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              {/* /.End Title */}
              <div className="">
                <div className="news-list">
                  {/* Start News Item */}
                  <div
                    className="news-list-item d-flex py-3 news-list-item-lg"
                    data-aos="fade"
                    data-aos-delay={300}
                  >
                    <div className="flex-shrink-0 img-wrapper">
                      {/* Start Image Thumb */}
                      <Link
                        href="blog-details"
                        className="thumb position-relative d-block overflow-hidden position-relative rounded"
                      >
                        {" "}
                        <img
                          src="assets/img/blog/01-sm.jpg"
                          alt=""
                          height={110}
                          width={160}
                        />{" "}
                      </Link>
                      {/* /.End Image Thumb */}
                    </div>
                    <div className="flex-grow-1 p-post ms-3">
                      {/* Start Title */}
                      <h3 className="news-title fs-17 mb-2 overflow-hidden text-capitalize">
                        <Link href="blog-details">
                          eu feugiat pretium nibh ipsum consequat nisl vel pretium
                          lectus
                        </Link>
                      </h3>
                      {/* /.End Title */}
                      {/* Start Meta Info */}
                      <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                        <div className="text-primary fw-medium d-md-none d-xxl-block">
                          Construction
                        </div>
                        <span className="vr d-md-none d-xxl-block" />
                        <div>jun 23, 2023</div>
                      </div>
                      {/* /.End Meta Info */}
                    </div>
                  </div>
                  {/* /.End News Item */}
                  {/* Start News Item */}
                  <div
                    className="news-list-item d-flex py-3 news-list-item-lg"
                    data-aos="fade"
                    data-aos-delay={400}
                  >
                    <div className="flex-shrink-0 img-wrapper">
                      {/* Start Image Thumb */}
                      <Link
                        href="blog-details"
                        className="thumb position-relative d-block overflow-hidden position-relative rounded"
                      >
                        {" "}
                        <img
                          src="assets/img/blog/02-sm.jpg"
                          alt=""
                          height={110}
                          width={160}
                        />{" "}
                      </Link>
                      {/* /.End Image Thumb */}
                    </div>
                    <div className="flex-grow-1 p-post ms-3">
                      {/* Start Title */}
                      <h3 className="news-title fs-17 mb-2 overflow-hidden text-capitalize">
                        <Link href="blog-details">
                          ut faucibus pulvinar elementum integer enim neque volutpat
                          ac tincidunt?
                        </Link>
                      </h3>
                      {/* /.End Title */}
                      {/* Start Meta Info */}
                      <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                        <div className="text-primary fw-medium d-md-none d-xxl-block">
                          Design
                        </div>
                        <span className="vr d-md-none d-xxl-block" />
                        <div>jun 23, 2023</div>
                      </div>
                      {/* /.End Meta Info */}
                    </div>
                  </div>
                  {/* /.End News Item */}
                  {/* Start News Item */}
                  <div
                    className="news-list-item d-flex py-3 news-list-item-lg"
                    data-aos="fade"
                    data-aos-delay={500}
                  >
                    <div className="flex-shrink-0 img-wrapper">
                      {/* Start Image Thumb */}
                      <Link
                        href="blog-details"
                        className="thumb position-relative d-block overflow-hidden position-relative rounded"
                      >
                        {" "}
                        <img
                          src="assets/img/blog/03-sm.jpg"
                          alt=""
                          height={110}
                          width={160}
                        />{" "}
                      </Link>
                      {/* /.End Image Thumb */}
                    </div>
                    <div className="flex-grow-1 p-post ms-3">
                      {/* Start Title */}
                      <h3 className="news-title fs-17 mb-2 overflow-hidden text-capitalize">
                        <Link href="blog-details">
                          fames ac turpis egestas integer eget aliquet nibh praesent
                          tristique
                        </Link>
                      </h3>
                      {/* /.End Title */}
                      {/* Start Meta Info */}
                      <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                        <div className="text-primary fw-medium d-md-none d-xxl-block">
                          Renovation
                        </div>
                        <span className="vr d-md-none d-xxl-block" />
                        <div>jun 23, 2023</div>
                      </div>
                      {/* /.End Meta Info */}
                    </div>
                  </div>
                  {/* /.End News Item */}
                  {/* Start News Item */}
                  <div
                    className="news-list-item d-flex py-3 news-list-item-lg"
                    data-aos="fade"
                    data-aos-delay={600}
                  >
                    <div className="flex-shrink-0 img-wrapper">
                      {/* Start Image Thumb */}
                      <Link
                        href="blog-details"
                        className="thumb position-relative d-block overflow-hidden position-relative rounded"
                      >
                        {" "}
                        <img
                          src="assets/img/blog/04-sm.jpg"
                          alt=""
                          height={110}
                          width={160}
                        />{" "}
                      </Link>
                      {/* /.End Image Thumb */}
                    </div>
                    <div className="flex-grow-1 p-post ms-3">
                      {/* Start Title */}
                      <h3 className="news-title fs-17 mb-2 overflow-hidden text-capitalize">
                        <Link href="blog-details">
                          ullamcorper a lacus vestibulum sed arcu non odio euismod
                          lacinia
                        </Link>
                      </h3>
                      {/* /.End Title */}
                      {/* Start Meta Info */}
                      <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                        <div className="text-primary fw-medium d-md-none d-xxl-block">
                          Design
                        </div>
                        <span className="vr d-md-none d-xxl-block" />
                        <div>jun 23, 2023</div>
                      </div>
                      {/* /.End Meta Info */}
                    </div>
                  </div>
                  {/* /.End News Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. End Blog Section */}

    </Layout>
  );
}