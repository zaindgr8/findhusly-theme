import Layout from "@/components/Layout";
import Link from "next/link";

export default function PostProperty() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Post Property
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
                    Post Property
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
              <div className="col-md-10 offset-md-1">
                {/* Start Section Header Title */}
                <div className="section-header text-center mb-5">
                  {/* Start Section Header title */}
               <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Post a property for <span className="underline position-relative text-primary">sale</span> or rent</h2>
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
            <div className="row justify-content-center g-4">
              <form className="col-lg-8">
                <div className="shadow p-4 p-sm-5 rounded-4 mb-4">
                  <div className="align-items-sm-center border-bottom d-sm-flex mb-5 pb-4">
                    <div className="d-flex flex-shrink-0 gap-1">
                      <span className="fw-semibold text-dark">01/</span>
                      <div
                        className="icon-box align-items-center bg-soft-primary d-flex justify-content-center mb-2 rounded-circle"
                      >
                        <i className="fa-solid fa-user fs-3 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="fw-semibold">Information about you</h5>
                      <p className="mb-0">
                        There are many variations of passages of Lorem Ipsum
                        <br className="d-none d-lg-block" /> available, but the
                        majority have
                      </p>
                    </div>
                  </div>
                  <div className="row gx-3 gy-4">
                    <div className="col-md-6">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Full name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Naeem Khan"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-6">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@email.com"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-6">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Phone</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="(123) 456 - 789"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                  </div>
                </div>
                <div className="shadow p-4 p-sm-5 rounded-4">
                  <div className="align-items-sm-center border-bottom d-sm-flex mb-5 pb-4">
                    <div className="d-flex flex-shrink-0 gap-1">
                      <span className="fw-semibold text-dark">02/</span>
                      <div
                        className="icon-box align-items-center bg-soft-primary d-flex justify-content-center mb-2 rounded-circle"
                      >
                        <i className="fa-solid fa-house-chimney fs-3 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="fw-semibold">
                        Information about the property
                      </h5>
                      <p className="mb-0">
                        There are many variations of passages of Lorem Ipsum
                        <br className="d-none d-lg-block" /> available, but the
                        majority have
                      </p>
                    </div>
                  </div>
                  <div className="row gx-3 gy-4">
                    <div className="col-md-12">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Listing title</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Property listing title"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-6">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Address</label>
                        <input type="email" className="form-control" required="" />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-6">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">City</label>
                        <input type="number" className="form-control" required="" />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-6">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Type of the property</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          defaultValue="" 
                        >
                          <option value="">Select</option>
                          <option value={1}>Apartment</option>
                          <option value={2}>House</option>
                          <option value={3}>Office</option>
                        </select>
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-6">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Type of the listing</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          defaultValue="" 
                        >
                          <option value="">Select</option>
                          <option value={1}>For Rent</option>
                          <option value={2}>For Sale</option>
                        </select>
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-12">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Listing price</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="ex. $10,000"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-4">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Living area</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="e.g. 1200 sqft"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-4">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Bedrooms</label>
                        <input type="number" className="form-control" required="" />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-4">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Bathrooms</label>
                        <input type="number" className="form-control" required="" />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-4">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Parking lots</label>
                        <input type="number" className="form-control" required="" />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-4">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Construction sqft.</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="ex. 4795 sqft"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-4">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Land sqft.</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="ex. 4795 sqft"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-12">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">
                          Listing short description
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Please enter up to 240 characters."
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-12">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Listing long description</label>
                        <textarea
                          className="form-control"
                          placeholder="Please enter up to 4000 characters."
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      {/* /.End Form Group */}
                    </div>
                    <div className="col-md-12">
                      <div className="fw-medium text-dark mb-3">
                        Property amenities
                      </div>
                      <div className="row gx-3 gy-2">
                        <div className="col-sm-6 col-md-4">
                          {/* Start Form Check */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefaultOne"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultOne"
                            >
                              Garden
                            </label>
                          </div>
                          {/* /. End Form Check */}
                        </div>
                        <div className="col-sm-6 col-md-4">
                          {/* Start Form Check */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefaultTwo"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultTwo"
                            >
                              Security cameras
                            </label>
                          </div>
                          {/* /. End Form Check */}
                        </div>
                        <div className="col-sm-6 col-md-4">
                          {/* Start Form Check */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefaultThree"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultThree"
                            >
                              Laundry
                            </label>
                          </div>
                          {/* /. End Form Check */}
                        </div>
                        <div className="col-sm-6 col-md-4">
                          {/* Start Form Check */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefaultFour"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultFour"
                            >
                              Internet
                            </label>
                          </div>
                          {/* /. End Form Check */}
                        </div>
                        <div className="col-sm-6 col-md-4">
                          {/* Start Form Check */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefaultFive"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultFive"
                            >
                              Pool
                            </label>
                          </div>
                          {/* /. End Form Check */}
                        </div>
                        <div className="col-sm-6 col-md-4">
                          {/* Start Form Check */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefaultSix"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultSix"
                            >
                              Video surveillance
                            </label>
                          </div>
                          {/* /. End Form Check */}
                        </div>
                        <div className="col-sm-6 col-md-4">
                          {/* Start Form Check */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefaultSeven"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultSeven"
                            >
                              Laundry room
                            </label>
                          </div>
                          {/* /. End Form Check */}
                        </div>
                        <div className="col-sm-6 col-md-4">
                          {/* Start Form Check */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefaultEight"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultEight"
                            >
                              Jacuzzi
                            </label>
                          </div>
                          {/* /. End Form Check */}
                        </div>
                        <div className="col-sm-6 col-md-4">
                          {/* Start Form Check */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefaultNine"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultNine"
                            >
                              Security cameras
                            </label>
                          </div>
                          {/* /. End Form Check */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      {/* Start Form Group */}
                      <div className="form-group">
                        <label className="required">Listing images</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ex. drive.google.com/..."
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                      <p className="mb-0 mt-2">
                        Please share a Google Drive or Imgur link of your listing
                        images
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  {/* Start Button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg d-inline-flex hstack gap-2"
                  >
                    <span>Submit for approval</span>
                    <span className="vr" />
                    <i className="fa-arrow-right fa-solid fs-14" />
                  </button>
                  {/* /.End Button */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /. End Main Content */}
    </Layout>

  );
}