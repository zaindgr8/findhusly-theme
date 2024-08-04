import Layout from "@/components/Layout";
import PopUpImageGalleryThree from "@/components/magnetic-pop-up-properti-details-three";
import PopUpImageGalleryTwo from "@/components/magnific-pop-up-gallery-two";
import PropertySticky from "@/components/property-sticky";
import Link from "next/link";

export default function PropertyDetailsTwo() {
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

                                        <Link
                                            href="property-details-2"
                                            className="text-decoration-none"
                                        >
                                            Property details two
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
              <PopUpImageGalleryThree/>
                {/* /. End Masonry */}
                {/* Start Sticky Property */}
                <PropertySticky />
                {/* End Sticky Property */}
                {/* Start Galary Items */}
                <div id="galary" className="bg-dark py-5">
                    <PopUpImageGalleryTwo/>
                    {/* /. End Galary Items */}
                </div>
                {/*Related Articles*/}
                <div className="border-top py-5">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                {/* Start Section Header Title */}
                                <div className="section-header text-center mb-5">
                                    {/* Start Section Header title */}
                                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">More <span className="underline position-relative text-primary">available </span> in the same area </h2>
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
                        {/* Start Card */}
                        {/* Start Card */}
                        <div className=" card mb-4 overflow-hidden bg-grey border-0 shadow rounded-3">
                            <Link href="property-details-2" className="card-link" />
                            <div className="card-body p-0">
                                <div className="g-0 row">
                                    <div className="bg-white col-lg-5 col-md-6 col-xl-3 position-relative">
                                        <div className="card-image-hover overflow-hidden position-relative h-100">
                                            {/* Start Image */}
                                            <img
                                                src="assets/img/properties/01.jpg"
                                                alt=""
                                                className="h-100 w-100 object-fit-cover"
                                            />
                                            {/* /. End Image */}
                                            {/* Start Tag */}
                                            <div className="bg-primary card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                                                For Sale
                                            </div>
                                            {/*  /. End Tag */}
                                        </div>
                                    </div>
                                    <div className="bg-white col-lg-7 col-md-6 col-xl-6 p-3 p-lg-4 p-md-3 p-sm-4">
                                        <div className="d-flex flex-column h-100">
                                            <div className="mb-4">
                                                {/* Start Property Name */}
                                                <h6 className="fs-23 mb-2">Entire villa hosted by Wayan</h6>
                                                {/* /.End Property Name */}
                                                <div className="fs-16">
                                                    <i className="fa-solid fa-location-dot" />
                                                    <span>1123 Fictional St, San Francisco, CA 94103</span>
                                                </div>
                                                {/* Start Property Description */}
                                                <div className="mt-3">
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                                    amet sint. Velit officia consequat duis enim velit mollit.
                                                    Exercitation
                                                </div>
                                                {/* /.End Property Description */}
                                            </div>
                                            {/* Start Card Property Facilities */}
                                            <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
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
                                            </div>
                                            {/* /. End Card Property Facilities */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-xl-3 p-3 p-lg-4 p-md-3 p-sm-4">
                                        <div className="row h-100 align-items-center justify-content-center gap-2">
                                            {/* Start price */}
                                            <div className="col col-xl-12">
                                                <div className="align-items-sm-center d-sm-flex d-xl-block">
                                                    <div className="d-flex justify-content-center align-items-end card-property-price flex-row gap-1">
                                                        <h2 className="m-0 fw-semibold text-primary">$17,966</h2>
                                                        <div> /month</div>
                                                    </div>
                                                    <div className="flex-grow-1 mt-2 ms-sm-3 ms-xl-0 mt-xl-2 text-center">

                                                        <strong className="small fw-semibold">(incl. VAT)</strong>
                                                        <div className="small">Per booking</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /.End price */}
                                            {/* Start button */}
                                            <div className="col-auto d-flex flex-wrap gap-1 justify-content-center position-relative z-1">
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-phone fs-14 me-1" />
                                                    Call
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-user-tie fs-14 fs-e me-1" />
                                                    Email
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-phone fs-14 me-1" />
                                                    WhatsApp
                                                </button>
                                            </div>
                                            {/* /.End button */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.End Card */}
                        {/* Start Card */}
                        <div className=" card mb-4 overflow-hidden bg-grey border-0 shadow rounded-3">
                            <Link href="property-details-2" className="card-link" />
                            <div className="card-body p-0">
                                <div className="g-0 row">
                                    <div className="bg-white col-lg-5 col-md-6 col-xl-3 position-relative">
                                        <div className="card-image-hover overflow-hidden position-relative h-100">
                                            {/* Start Image */}
                                            <img
                                                src="assets/img/properties/02.jpg"
                                                alt=""
                                                className="h-100 w-100 object-fit-cover"
                                            />
                                            {/* /. End Image */}
                                            {/* Start Tag */}
                                            <div className="bg-white card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-dark top-1">
                                                For Rent
                                            </div>
                                            {/*  /. End Tag */}
                                        </div>
                                    </div>
                                    <div className="bg-white col-lg-7 col-md-6 col-xl-6 p-3 p-lg-4 p-md-3 p-sm-4">
                                        <div className="d-flex flex-column h-100">
                                            <div className="mb-4">
                                                {/* Start Property Name */}
                                                <h6 className="fs-23 mb-2">Tampaksiring, Indonesia</h6>
                                                {/* /.End Property Name */}
                                                <div className="fs-16">
                                                    <i className="fa-solid fa-location-dot" />
                                                    <span>1123 Fictional St, San Francisco, CA 94103</span>
                                                </div>
                                                {/* Start Property Description */}
                                                <div className="mt-3">
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                                    amet sint. Velit officia consequat duis enim velit mollit.
                                                    Exercitation
                                                </div>
                                                {/* /.End Property Description */}
                                            </div>
                                            {/* Start Card Property Facilities */}
                                            <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
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
                                            </div>
                                            {/* /. End Card Property Facilities */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-xl-3 p-3 p-lg-4 p-md-3 p-sm-4">
                                        <div className="row h-100 align-items-center justify-content-center gap-2">
                                            {/* Start price */}
                                            <div className="col col-xl-12">
                                                <div className="align-items-sm-center d-sm-flex d-xl-block">
                                                    <div className="d-flex justify-content-center align-items-end card-property-price flex-row gap-1">
                                                        <h2 className="m-0 fw-semibold text-primary">$17,966</h2>
                                                        <div> /month</div>
                                                    </div>
                                                    <div className="flex-grow-1 mt-2 ms-sm-3 ms-xl-0 mt-xl-2 text-center">

                                                        <strong className="small fw-semibold">(incl. VAT)</strong>
                                                        <div className="small">Per booking</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /.End price */}
                                            {/* Start button */}
                                            <div className="col-auto d-flex flex-wrap gap-1 justify-content-center position-relative z-1">
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-phone fs-14 me-1" />
                                                    Call
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-user-tie fs-14 fs-e me-1" />
                                                    Email
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-phone fs-14 me-1" />
                                                    WhatsApp
                                                </button>
                                            </div>
                                            {/* /.End button */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.End Card */}
                        {/* Start Card */}
                        <div className=" card mb-4 overflow-hidden bg-grey border-0 shadow rounded-3">
                            <Link href="property-details-2" className="card-link" />
                            <div className="card-body p-0">
                                <div className="g-0 row">
                                    <div className="bg-white col-lg-5 col-md-6 col-xl-3 position-relative">
                                        <div className="card-image-hover overflow-hidden position-relative h-100">
                                            {/* Start Image */}
                                            <img
                                                src="assets/img/properties/03.jpg"
                                                alt=""
                                                className="h-100 w-100 object-fit-cover"
                                            />
                                            {/* /. End Image */}
                                            {/* Start Tag */}
                                            <div className="bg-primary card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                                                For Sale
                                            </div>
                                            {/*  /. End Tag */}
                                        </div>
                                    </div>
                                    <div className="bg-white col-lg-7 col-md-6 col-xl-6 p-3 p-lg-4 p-md-3 p-sm-4">
                                        <div className="d-flex flex-column h-100">
                                            <div className="mb-4">
                                                {/* Start Property Name */}
                                                <h6 className="fs-23 mb-2">Belle Mare, Mauritius</h6>
                                                {/* /.End Property Name */}
                                                <div className="fs-16">
                                                    <i className="fa-solid fa-location-dot" />
                                                    <span>1123 Fictional St, San Francisco, CA 94103</span>
                                                </div>
                                                {/* Start Property Description */}
                                                <div className="mt-3">
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                                    amet sint. Velit officia consequat duis enim velit mollit.
                                                    Exercitation
                                                </div>
                                                {/* /.End Property Description */}
                                            </div>
                                            {/* Start Card Property Facilities */}
                                            <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
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
                                            </div>
                                            {/* /. End Card Property Facilities */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-xl-3 p-3 p-lg-4 p-md-3 p-sm-4">
                                        <div className="row h-100 align-items-center justify-content-center gap-2">
                                            {/* Start price */}
                                            <div className="col col-xl-12">
                                                <div className="align-items-sm-center d-sm-flex d-xl-block">
                                                    <div className="d-flex justify-content-center align-items-end card-property-price flex-row gap-1">
                                                        <h2 className="m-0 fw-semibold text-primary">$17,966</h2>
                                                        <div> /month</div>
                                                    </div>
                                                    <div className="flex-grow-1 mt-2 ms-sm-3 ms-xl-0 mt-xl-2 text-center">

                                                        <strong className="small fw-semibold">(incl. VAT)</strong>
                                                        <div className="small">Per booking</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /.End price */}
                                            {/* Start button */}
                                            <div className="col-auto d-flex flex-wrap gap-1 justify-content-center position-relative z-1">
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-phone fs-14 me-1" />
                                                    Call
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-user-tie fs-14 fs-e me-1" />
                                                    Email
                                                </button>
                                                <button
                                                    type="button"
                                                    className="border-0 btn btn-outline-default btn-sm fw-medium shadow-sm"
                                                >
                                                    <i className="fa fa-phone fs-14 me-1" />
                                                    WhatsApp
                                                </button>
                                            </div>
                                            {/* /.End button */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.End Card */}


                        {/* /.End Card */}

                    </div>
                </div>
            </div>
            {/* /. End Main Content */}


        </Layout>

    );
}