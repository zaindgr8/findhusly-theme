// import GridLayout from "@/components/GridLayout";
import Layout from "@/components/Layout";
import Regions from "@/components/Regions";
import FeaturesProperties from "@/components/feature-properties";
import Link from "next/link";
import SectionHeader from "@/components/section-header";
import ReusableCountUp from "@/components/counter";
import Dropdown from "@/components/form-control-two";
import Testimonial from "../../data/testimonial.json"


export default async function Home() {

  return (
    <Layout>
      <main>
        <>
          {/* Start Hero Header One */}
          <div
            className="hero-header hero-header__one align-items-center background-image d-flex position-relative"
          >
            <img src="assets/img/header/01.jpg" alt="" className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"/>
            <div className="container position-relative z-2">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <h1 className="hero-header_title fw-bold mb-5 display-2">Find your dream home<br className="d-none d-xxl-block" /> in the best <span className="underline position-relative text-white">location</span></h1>
                  {/* Start Main Search Content */}
                  <Dropdown/>
                  {/* <JQueryComponent/> */}
                  {/* /.End Main Search Content */}
                </div>
              </div>
            </div>
          </div>
          {/* /.End Hero Header One */}

          {/* Start Counter Content */}
          <div className="counter-content mt-n5 position-relative section">
            <div className="container-xl position-relative">
              <div className="row">
                <div className="col-12 col-lg-8 position-relative">
                  <div className="bg-primary expand-w-start h-100 position-absolute shadow-sm start-0 top-0 w-100" />
                  <div className="position-relative py-5">
                    <div className="row position-relative g-4">
                      <div className="col-6 col-sm-3 text-center text-lg-start">
                        <div className="d-flex fs-1 gap-1 justify-content-center mb-0 text-white">
                          <strong className="counter"> 
                          <ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={3000} /> 
                            </strong>
                          <small> +</small>
                        </div>
                        <p className="fw-semibold mb-0 text-white text-center">Properties Listed</p>
                      </div>
                      <div className="col-6 col-sm-3 text-center text-lg-start">
                        <p className="d-flex fs-1 gap-1 justify-content-center mb-0 text-white">
                          <strong className="counter"> <ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={2500} /></strong>
                          <small> +</small>
                        </p>
                        <p className="fw-semibold mb-0 text-white text-center">Satisfied Clients</p>
                      </div>
                      <div className="col-6 col-sm-3 text-center text-lg-start">
                        <p className="d-flex fs-1 gap-1 justify-content-center mb-0 text-white">
                          <strong className="d-flex">
                            $ <span className="counter"><ReusableCountUp separator=""
                              decimals={1}
                              decimal="." start={0.0} end={6.8} /></span>B
                          </strong>
                          <small> +</small>
                        </p>
                        <p className="fw-semibold mb-0 text-white text-center">
                          Total sales since 2023
                        </p>
                      </div>
                      <div className="col-6 col-sm-3 text-center text-lg-start">
                        <p className="d-flex fs-1 gap-1 justify-content-center mb-0 text-white">
                          <strong className="counter"><ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={593} />
                          </strong>
                          <small> +</small>
                        </p>
                        <p className="fw-semibold mb-0 text-white text-center">Total Agents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.End Counter Content */}

          {/* Start Top Regions Section */}
          <div className="bg-white py-5 border-bottom">
            <div className="container py-4">
              <SectionHeader />
              <Regions/>
              <FeaturesProperties/>
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
          {/* Start Newslatter */}
          <div className="bg-primary newslatter position-relative py-5 mx-3 mx-xl-5 rounded-4 position-relative overflow-hidden">
            <div className="container p-4 position-relative z-1">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  {/* Start Section Header Title */}
                  <div className="section-header text-center mb-5" data-aos="fade-down">
                    {/* Start Subtitle */}
                    <div className="bg-white d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                      Our Latest Articles
                    </div>
                    {/* /. End Subtitle */}
                    {/* Start Section Header title */}
                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-white">
                      Want to join us?
                    </h2>
                    {/* /.End Section Header Title */}
                    {/* Start Section Header Sub Title */}
                    <div className="sub-title fs-16 text-white">
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
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="row g-4 align-items-end newslatter-form">
                    <div className="col-sm">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="text-white bg-primary fw-semibold">
                          Full Name
                        </label>
                        <input type="text" className="form-control bg-transparent" />
                      </div>
                      {/* /. End Form Group */}
                    </div>
                    <div className="col-sm">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="text-white bg-primary">Enter Email</label>
                        <input type="email" className="form-control bg-transparent" />
                      </div>
                      {/* /. End Form Group */}
                    </div>
                    <div className="col-sm-auto">
                      {/* Start Button */}
                      <button type="button" className="btn btn-lg btn-light w-100">
                        Join Now
                      </button>
                      {/* /. End Button */}
                    </div>
                  </div>
                  {/* Start Text */}
                  <small className="d-block mt-3 text-white text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni cum
                    consectetur alias laudantium dolore sunt quis similique!
                  </small>
                  {/* /. End Text */}
                </div>
              </div>
            </div>
            <div className="card-sketch">
              <img
                src="assets/img/png-img/house-sketch.png"
                alt=""
                className="card-sketch-image"
              />
            </div>
          </div>
          {/* /.End Newslatter */}


          {/* Start Blog Section */}
          <div className="py-5">
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
                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Browse Our Latest <span className="underline position-relative text-primary">Articles</span> & News</h2>
                    {/* /.End Section Header Title */}
                    {/* Start Section Header Sub Title */}
                    <div className="sub-title fs-16">
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

                            <img
                              src="assets/img/blog/01-sm.jpg"
                              alt=""
                              height={110}
                              width={160}
                            />
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

                            <img
                              src="assets/img/blog/02-sm.jpg"
                              alt=""
                              height={110}
                              width={160}
                            />
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

                            <img
                              src="assets/img/blog/03-sm.jpg"
                              alt=""
                              height={110}
                              width={160}
                            />
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

                            <img
                              src="assets/img/blog/04-sm.jpg"
                              alt=""
                              height={110}
                              width={160}
                            />
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

          {/* Start Testimonial */}
          <div className="py-5 border-top position-relative">
            <div className="container py-4 position-relative">
              <div className="row">
                <div
                  className="col-md-10 offset-md-1 background-image"
                  data-image-src="assets/img/world-map.png"
                >
                  {/* Start Section Header Title */}
                  <div className="section-header text-center mb-5" data-aos="fade-down">
                    {/* Start Subtitle */}
                    <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                      Testimonial
                    </div>
                    {/* /. End Subtitle */}
                    {/* Start Section Header title */}
                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">See what our <span className="underline position-relative text-primary">clients</span> say about us</h2>
                    {/* /.End Section Header Title */}
                    {/* Start Section Header Sub Title */}
                    <div className="sub-title fs-16">
                      Many desktop publishing packages and web page editors now use
                      Lorem Ipsum as their
                      <br className="d-none d-lg-block" /> default model text, and a
                      search for 'lorem ipsum' will uncover many.
                    </div>
                    {/* /.End Section Header Sub Title */}
                    {/* Start Ratings */}
                    <div className="align-items-center d-flex flex-wrap fs-18 gap-1 justify-content-center mt-3 text-warning">
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle-half-stroke" />
                      <span className="text-dark">(4.8/5)</span>
                    </div>
                    {/* /. End Ratings */}
                    <h6 className="text-center mb-0 mt-2 fs-17">
                      Overall Customer Ratings
                    </h6>
                  </div>
                  {/*/. End Section Header */}
                </div>
              </div>
              <div className="row testimonial-wrap">
                {
                  Testimonial?.map((testimonial) => {
                    const aosDelay = 300 + parseInt(testimonial.id) * 100;
                    return (
                      <div className="col-sm-6 col-lg-4 mb-4 align-self-end"  key={testimonial.id}>
                        {/* Start Testimonial Card */}
                        <div
                          className="border-0 card rounded-4 shadow"
                          data-aos="fade"
                          data-aos-delay={aosDelay}
                        >
                          <div className="card-body p-4 p-xxl-5">
                            <div className="align-items-center d-flex flex-wrap fs-12 gap-1 text-warning mb-2">
                              {/* Start Ratings */}
                              <i className="fa-solid fa-circle" />
                              <i className="fa-solid fa-circle" />
                              <i className="fa-solid fa-circle" />
                              <i className="fa-solid fa-circle" />
                              <i className="fa-solid fa-circle" />
                              <i className="fa-solid fa-circle-half-stroke" />
                              {/* /. End Ratings */}
                              {/* Start Counter Text */}
                              <span className="fw-medium text-dark">{testimonial.ratings}</span>
                              {/* /. End Counter Text */}
                            </div>
                            <h5 className="fs-18">"magnis dis parturient montes"</h5>
                            <p>
                              Lorem ipsum dolor amet consectetur cillum adipiscing elit sed do
                              eiusmod.
                            </p>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <img
                                  src="assets/img/avatar/01.jpg"
                                  alt=""
                                  className="rounded-circle"
                                  height={60}
                                  width={60}
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-1 fw-semibold">Naeem Khan</h6>
                                <div className="fs-15 text-primary">@naeemkhan</div>
                              </div>
                              <i className="fa-brands fa-twitter fs-4 text-info" />
                            </div>
                          </div>
                        </div>
                        {/* /. End Testimonial Card */}
                      </div>
                    )
                  })
                }
              </div>
              <div className="testimonial-bottom-gradient" />
              <div
                className="mt-5 position-relative text-center z-1"
                data-aos="fade-up"
              >
                {/* Start Button */}
                <Link
                  href="contact"
                  className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                >
                  <span>Contact Us</span>
                  <span className="vr" />
                  <i className="fa-arrow-right fa-solid fs-14" />
                </Link>
                {/* /.End Button */}
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
          {/* /. End Testimonial */}
          <div
            className="modal fade"
            id="cartEmpty"
            tabIndex={-1}
            aria-labelledby="cartEmptyLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="cartEmptyLabel">
                    Your Cart
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p className="py-5 text-center">No items found.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </Layout>
  )
}

