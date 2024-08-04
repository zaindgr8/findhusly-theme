import Layout from "@/components/Layout";
import Dropdown from "@/components/form-control-two";
import GooglePropertyMapsComponent from "@/components/property-map";
import Link from "next/link";

export default function PropertyGrid() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Properties Grid
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
                    Properties Grid
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
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Find The Houses, <span className="underline position-relative text-primary">Apartments</span> And Office<br className="d-none d-sm-block"></br>In Your Favorite Location</h2>
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
            {/* Start Search Form */}
            <div className="search-form__wrap z-1 position-relative mb-5 properties-search">
              {/* Start Main Search Content */}
              <Dropdown/>
              {/* /.End Main Search Content */}
            </div>
            {/* /.End Search Form */}
            {/* Start Toolbox  */}
            <div className="d-flex flex-wrap align-items-center mb-4 gap-2">
              <h5 className="fw-semibold text-capitalize mb-0 col">
                (145) Result For All Listing
              </h5>
              {/* Start Button Group */}
              <div
                className="btn-group ms-auto"
                role="group"
                aria-label="Basic example"
              >
                <Link
                  href="properties-grid"
                  className="btn btn-outline-default btn-sm active"
                >
                  <i className="fa-solid fa-border-all" />
                </Link>
                <Link
                  href="properties-list"
                  className="btn btn-outline-default btn-sm"
                >
                  <i className="fa-solid fa-table-list" />
                </Link>
              </div>
              {/* End Button Group */}
            </div>
            {/* /.End Toolbox  */}
            <div className="row g-4">
              <div className="col-xl-6">
                {/* Start Map */}
                <div className="rounded-4 map-list overflow-hidden">
                <GooglePropertyMapsComponent  />
                </div>
               
                {/* /.End Map */}
              </div>
              <div className="col-xl-6">
                <div className="row g-4">
                  <div className="col-sm-6 col-lg-4 col-xl-6 d-flex">
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
                  <div className="col-sm-6 col-lg-4 col-xl-6 d-flex">
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
                  <div className="col-sm-6 col-lg-4 col-xl-6 d-flex">
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
                  <div className="col-sm-6 col-lg-4 col-xl-6 d-flex">
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
                  <div className="col-sm-6 col-lg-4 col-xl-6 d-flex">
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
                  <div className="col-sm-6 col-lg-4 col-xl-6 d-flex">
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
                </div>
                {/* Start Pagination*/}
                <nav className="align-items-center border-top d-flex flex-wrap justify-content-center justify-content-sm-between pagination mt-5">
                  <ul className="list-unstyled m-0 pages mt-3">
                    <li className="active">
                      <Link href="#">1</Link>
                    </li>
                    <li>
                      <Link href="#">2</Link>
                    </li>
                    <li>
                      <Link href="#">3</Link>
                    </li>
                    <li>
                      <Link href="#">4</Link>
                    </li>
                    <li>...</li>
                    <li>
                      <Link href="#">12</Link>
                    </li>
                  </ul>
                  <div className="ms-3 ms-sm-0 mt-3">
                    <Link className="btn btn-primary btn-sm" href="#">
                      Next
                      <i className="fa-solid fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </nav>
                {/* End Pagination*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. End Main Content */}


    </Layout>
  );
}