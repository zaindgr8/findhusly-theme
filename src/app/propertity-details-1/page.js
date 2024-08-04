import Layout from "@/components/Layout";
import Link from "next/link";

export default function PropertyDetailsOne() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="breadcrumb-wrap border-0 py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <div className="col-auto">
                {/* Start Back To Search */}
                <Link
                  href="properties-list"
                  className="align-items-center d-flex fw-medium text-primary"
                >
                  <i className="fa-solid fa-chevron-left me-1" />
                  Back To Search
                </Link>
                {/* /. End Back To Search */}
              </div>
              <h4 className="border-start col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Entire villa hosted by Wayan
              </h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium mb-0">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="#" className="text-decoration-none">
                      <i className="fa-solid fa-house-chimney-crack fs-18" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="#" className="text-decoration-none">
                      Category
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item d-flex align-items-center active"
                    aria-current="page"
                  >
                    Entire villa hosted by Wayan
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        {/* Start Masonry */}
        <div className="container">
          <div className="position-relative">
            {/* Start Header Masonry */}
            <div className="header-masonry position-relative">
              <div id="gallery-1" className="header-masonry-grid zoom-gallery">
                <div className="column-start">
                  <Link
                    href="assets/img/property-details/01.jpg"
                    className="grid-images-item-wrap overflow-hidden position-relative rounded-4 h-100 w-100 d-block"
                  >
                    {/* Masonry Image */}
                    <img
                      src="assets/img/property-details/01.jpg"
                      alt=""
                      className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
                    />
                  </Link>
                </div>
                <div className="column-start-end">
                  <Link
                    href="assets/img/property-details/02.jpg"
                    className="grid-images-item-wrap overflow-hidden position-relative rounded-4 w-100 box-ratio-2-3 d-block"
                  >
                    {/* Masonry Image */}
                    <img
                      src="assets/img/property-details/02.jpg"
                      alt=""
                      className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
                    />
                  </Link>
                  <Link
                    href="assets/img/property-details/03.jpg"
                    className="grid-images-item-wrap overflow-hidden position-relative rounded-4 w-100 box-ratio-2-3 d-block"
                  >
                    {/* Masonry Image */}
                    <img
                      src="assets/img/property-details/03.jpg"
                      alt=""
                      className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* /. End Header Masonry */}
            <div className="header-share align-items-center bg-dark d-flex gap-2 flex-wrap g-3 header-btn-group p-3 p-lg-4 mt-3 mt-md-0">
              <button type="button" className="btn btn-sm btn-primary">
                <i className="fa-solid fa-share-nodes me-2" />
                Share
              </button>
              <Link href="#gallery-1" className="btn btn-sm btn-primary btn-gallery">
                <i className="fa-solid fa-image me-2" />
                Browse Gallery
              </Link>
              {/* End Product Images Slider */}
              <div className="product-video-btn">
                <Link
                  className="popup-youtube d-flex align-items-center justify-content-center"
                  href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                >
                  <div className="btn-video bg-primary text-white d-flex align-items-center justify-content-center rounded-pill me-2">
                    
                    <i className="fa-solid fa-video" />
                  </div>
                  <span className="text-white fw-medium">Watch video</span>
                </Link>
              </div>
              {/* /.End of product video button */}
            </div>
          </div>
        </div>
        {/* /. End Masonry */}
        <div className="h-details_content py-5">
          <div className="container py-4">
            <div className="row g-4">
              <div className="col-lg-8 content pe-xxl-5">
                <div className="cs-content">
                  <div className="mb-5 border-bottom pb-5">
                    <div className="fs-16 mb-1">
                      <i className="fa-solid fa-location-dot me-1" />
                      1123 Fictional St, San Francisco, CA 94103
                    </div>
                    <h2 className="mt-0">Entire villa hosted by Wayan</h2>
                    {/* Start Card Property Facilities */}
                    <div className="card-property-facilities gap-2 hstack mt-auto pt-3 text-center">
                      <div className="">
                        <i className="fa-solid fa-bed text-dark me-1" />
                        <span>3 bedroom</span>
                      </div>
                      <span className="vr" />
                      <div className="">
                        <i className="fa-solid fa-bath text-dark me-1" />
                        <span>3 bathroom</span>
                      </div>
                      <span className="vr" />
                      <div className="">
                        <i className="fa-solid fa-vector-square text-dark me-1" />
                        <span>620 sqft</span>
                      </div>
                      <span className="vr" />
                      <div className="">
                        <i className="fa-solid fa-calendar-days text-dark me-1" />
                        <span>Built in 2010</span>
                      </div>
                    </div>
                    {/* /. End Card Property Facilities */}
                  </div>
                  <div className="mb-5 border-bottom pb-5">
                    {/* Start Title */}
                    <h4 className="fw-semibold mb-4 text-capitalize">
                      About the
                      <span className="underline position-relative text-primary">
                         property
                      </span>
                    </h4>
                    {/* End Title */}
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book. It is a long established fact that a reader
                      will be distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum is that
                      it has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it look
                      like readable English.
                    </p>
                    <p>
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently with
                      desktop publishing software like Aldus PageMaker including
                      versions of Lorem Ipsum.
                    </p>
                  </div>
                  {/* Start Amenities Content */}
                  <div className="mb-5 border-bottom pb-5">
                    {/* Start Title */}
                    <h4 className="fw-semibold mb-4 text-capitalize">
                      Amenities
                      <span className="underline position-relative text-primary">
                        available
                      </span>
                    </h4>
                    {/* End Title */}
                    <div className="row g-4">
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-video fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Security cameras
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-fan fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Garden
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-hot-tub-person fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Jacuzzi
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-tv fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Television
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-dumbbell fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Gym (100m²)
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-temperature-arrow-down fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Heater
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-wifi fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Wi-fi
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-person-swimming fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Shared Pool
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-chair fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Furnished
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-square-parking fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Covered Parking
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                      <div className="col-auto col-lg-3">
                        {/* Start Amenities */}
                        <div className="d-flex align-items-center text-dark">
                          <div className="flex-shrink-0">
                            <i className="fa-solid fa-utensils fs-18" />
                          </div>
                          <div className="flex-grow-1 fs-16 fw-medium ms-3">
                            Kitchen Appliances
                          </div>
                        </div>
                        {/* /. End Amenities */}
                      </div>
                    </div>
                  </div>
                  {/* /.End Amenities Content */}
                  {/* Start Floor Plans */}
                  <div className="mb-5 border-bottom pb-5">
                    {/* Start Title */}
                    <h4 className="fw-semibold mb-4 text-capitalize">
                      Floor
                      <span className="underline position-relative text-primary">
                        Plans
                      </span>
                    </h4>
                    {/* /.End Title */}
                    {/* Start Image */}
                    <img
                      src="assets/img/png-img/floor-plans.png"
                      alt=""
                      className="img-fluid"
                    />
                    {/* /.End Image */}
                  </div>
                  {/* /.End Floor Plans */}
                  {/* Start Agent */}
                  <div className="mb-5 border-bottom pb-5">
                    {/* Start Title */}
                    <h4 className="fw-semibold mb-4 text-capitalize">
                      Reach the
                      <span className="underline position-relative text-primary">
                        agent
                      </span>
                    </h4>
                    {/* End Title */}
                    {/* Start Agent Card */}
                    <div className="agent-card d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avatar rounded-circle p-1 border border-primary">
                          {/* Start Avatar Image */}
                          <Link href="agent-details">
                            <img
                              src="assets/img/avatar/01.jpg"
                              alt=""
                              className="avatar-img rounded-circle"
                            />
                          </Link>
                          {/* /.End Avatar Image */}
                          <div className="align-items-center avatar-badge bg-primary d-flex justify-content-center position-absolute rounded-circle text-white">
                            <i className="fas fa-medal" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">
                          <Link href="agent-details">Alexander Kaminski</Link>
                        </h5>
                        <div>Property Advisor</div>
                        <div className="row g-2 mt-3">
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-sm fw-semibold"
                            >
                              Ask Question
                              <i className="fa-regular fa-circle-question ms-1" />
                            </button>
                          </div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-sm fw-semibold"
                            >
                              Contact Agent
                              <i className="fa-regular fa-address-book ms-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.End Agent Card */}
                  </div>
                  {/* /.End Agent */}
                  {/* Start Map */}
                  <div>
                    {/* Start Title */}
                    <h4 className="fw-semibold mb-4 text-capitalize">
                      <span className="underline position-relative text-primary">
                        Location
                      </span>
                    </h4>
                    {/* End Title */}
                    {/* Start Map */}
                    <div id="mapCanvasTwo" className="property-map rounded-4" />
                    {/* /.End Map */}
                  </div>
                  {/* /. End Map */}
                </div>
              </div>
              {/* Start Sidebar */}
              <div className="col-lg-4 sidebar">
                <div className="appointment-form p-3 p-lg-4 p-xl-5 rounded-4 shadow">
                  <div>Property for rent</div>
                  <h2 className="fw-bold">$17,000 USD</h2>
                  {/* Start Tabs Nav */}
                  <ul className="nav nav-tabs mb-5" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link ms-0 active"
                        id="tab-one"
                        data-bs-toggle="tab"
                        data-bs-target="#tab-one-pane"
                        type="button"
                        role="tab"
                        aria-controls="tab-one-pane"
                        aria-selected="true"
                      >
                        Schedule a Tour
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="tab-two"
                        data-bs-toggle="tab"
                        data-bs-target="#tab-two-pane"
                        type="button"
                        role="tab"
                        aria-controls="tab-two-pane"
                        aria-selected="false"
                      >
                        Request Quote
                      </button>
                    </li>
                  </ul>
                  {/* /.End Tabs Nav */}
                  {/* Start Tab Content */}
                  <div className="tab-content">
                    {/* Start Tab Pane */}
                    <div
                      className="tab-pane fade show active"
                      id="tab-one-pane"
                      role="tabpanel"
                      aria-labelledby="tab-one"
                      tabIndex={0}
                    >
                      <form>
                        <div className="row g-4">
                          <div className="col-sm-12">
                            {/* Start Search Input With Icon */}
                            <div className="form-group has-icon">
                              <label className="required fw-semibold required text-dark">
                                Phone Number
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Phone Number"
                                required=""
                              />
                              <i className="fa-solid fa-mobile-button form-icon fs-16 position-absolute top-50" />
                            </div>
                            {/* End Search Input With Icon */}
                          </div>
                          <div className="col-sm-12">
                            {/* Start Search Input With Icon */}
                            <div className="form-group has-icon">
                              <label className="required fw-semibold required text-dark">
                                Appointment Date
                              </label>
                              <input
                                type="text"
                                className="form-control datepicker"
                                placeholder="mm-dd-yyyy"
                              />
                              <i className="fa-regular fa-calendar-days form-icon fs-16 position-absolute top-50" />
                            </div>
                            {/* End Search Input With Icon */}
                          </div>
                          <div className="col-sm-12">
                            {/* Start Search Input With Icon */}
                            <div className="form-group has-icon">
                              <label className="required fw-semibold required text-dark">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                              />
                              <i className="fa-solid fa-envelope form-icon fs-16 position-absolute top-50" />
                            </div>
                            {/* End Search Input With Icon */}
                          </div>
                          <div className="col-sm-12">
                            {/* Start Button */}
                            <button
                              className="btn btn-primary btn-lg w-100"
                              type="submit"
                            >
                              Schedule a Tour
                            </button>
                            {/* /.End Button */}
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* /.End Tab Pane */}
                    {/* Start Tab Pane */}
                    <div
                      className="tab-pane fade"
                      id="tab-two-pane"
                      role="tabpanel"
                      aria-labelledby="tab-two"
                      tabIndex={0}
                    >
                      <form>
                        <div className="row g-4">
                          <div className="col-sm-12">
                            {/* Start Search Input With Icon */}
                            <div className="form-group has-icon">
                              <label className="required fw-semibold required text-dark">
                                Phone Number
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Phone Number"
                                required=""
                              />
                              <i className="fa-solid fa-mobile-button form-icon fs-16 position-absolute top-50" />
                            </div>
                            {/* End Search Input With Icon */}
                          </div>
                          <div className="col-sm-12">
                            {/* Start Search Input With Icon */}
                            <div className="form-group has-icon">
                              <label className="required fw-semibold required text-dark">
                                Appointment Date
                              </label>
                              <input
                                type="text"
                                className="form-control datepicker"
                                placeholder="mm-dd-yyyy"
                              />
                              <i className="fa-regular fa-calendar-days form-icon fs-16 position-absolute top-50" />
                            </div>
                            {/* End Search Input With Icon */}
                          </div>
                          <div className="col-sm-12">
                            {/* Start Search Input With Icon */}
                            <div className="form-group has-icon">
                              <label className="required fw-semibold required text-dark">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                              />
                              <i className="fa-solid fa-envelope form-icon fs-16 position-absolute top-50" />
                            </div>
                            {/* End Search Input With Icon */}
                          </div>
                          <div className="col-sm-12">
                            {/* Start Button */}
                            <button
                              className="btn btn-primary btn-lg w-100"
                              type="submit"
                            >
                              Request info
                            </button>
                            {/* /.End Button */}
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* /.End Tab Pane */}
                  </div>
                  {/* /.End Tab Content */}
                </div>
              </div>
              {/* /. End Sidebar */}
            </div>
          </div>
        </div>
        {/*Related Articles*/}
        <div className="border-top py-5">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                {/* Start Section Header Title */}
                <div className="section-header text-center mb-5">
                  {/* Start Section Header title */}
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                    More
                    <span className="underline position-relative text-primary">
                      available
                    </span>
                    in the same area
                  </h2>
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
            <div className="row g-4">
              <div className="col-sm-6 col-md-6 col-xl-3 d-flex">
                {/* Start Card Property */}
                <div className="card border-0 shadow card-property rounded-3 w-100 flex-fill overflow-hidden">
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
                      <h3 className="m-0 fw-bold text-primary">$31</h3>
                      <div> /night</div>
                    </div>
                    {/* /. End Card Property Price */}
                    <h4 className="property-card-title mb-3">
                      Koh Samui, Thailand
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
              <div className="col-sm-6 col-md-6 col-xl-3 d-flex">
                {/* Start Card Property */}
                <div className="card border-0 shadow card-property rounded-3 w-100 flex-fill overflow-hidden">
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
                      <h3 className="m-0 fw-bold text-primary">$15,000</h3>
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
              <div className="col-sm-6 col-md-6 col-xl-3 d-flex">
                {/* Start Card Property */}
                <div className="card border-0 shadow card-property rounded-3 w-100 flex-fill overflow-hidden">
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
                      <h3 className="m-0 fw-bold text-primary">$15,000</h3>
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
              <div className="col-sm-6 col-md-6 col-xl-3 d-flex">
                {/* Start Card Property */}
                <div className="card border-0 shadow card-property rounded-3 w-100 flex-fill overflow-hidden">
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
                      <h3 className="m-0 fw-bold text-primary">$1,295,000</h3>
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
          </div>
        </div>
      </div>
      {/* /. End Main Content */}


    </Layout>
  );
}