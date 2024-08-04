import Link from 'next/link';
import React from 'react';
import FeaturesPropertiesData from "../data/features-properties.json"
export default async function FeaturesProperties() {
  return (
    <>
      {/* Start Featured Properties Section */}
      <div className="py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="fade-down">
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">Featured Properties</div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Featured <span className="underline position-relative text-primary">Properties</span></h2>
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
          </div>
          {/* Start Card */}
          {
             FeaturesPropertiesData?.map((featuresProperty) => {
              return (
                  <div
                    className=" card mb-4 overflow-hidden bg-grey border-0 shadow rounded-3"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    key={featuresProperty.id}
                  >
                    <Link href="property-details-2" className="card-link" />
                    <div className="card-body p-0">
                      <div className="g-0 row">
                        <div className="bg-white col-lg-5 col-md-6 col-xl-3 position-relative">
                          <div className="card-image-hover overflow-hidden position-relative h-100">
                            {/* Start Image */}
                            <img
                              src={featuresProperty.img}
                              alt=""
                              className="h-100 w-100 object-fit-cover"
                            />
                            {/* /. End Image */}
                            {/* Start Tag */}
                            <div className={`bg-${featuresProperty?.status === 'For Sale' ? 'primary' : 'white'} card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-${featuresProperty?.status === 'For Sale' ? 'white' : 'primary'}  top-1`}>
                              {featuresProperty.status}
                            </div>
                            {/*  /. End Tag */}
                          </div>
                        </div>
                        <div className="bg-white col-lg-7 col-md-6 col-xl-6 p-3 p-lg-4 p-md-3 p-sm-4">
                          <div className="d-flex flex-column h-100">
                            <div className="mb-4">
                              {/* Start Property Name */}
                              <h6 className="fs-23 mb-2">      {featuresProperty.name}</h6>
                              {/* /.End Property Name */}
                              <div className="fs-16">
                                <i className="fa-solid fa-location-dot" />
                                <span>  {featuresProperty.location}</span>
                              </div>
                              {/* Start Property Description */}
                              <div className="mt-3">
                                {featuresProperty.description}
                              </div>
                              {/* /.End Property Description */}
                            </div>
                            {/* Start Card Property Facilities */}
                            <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                              <div className="">
                                <i className="fa-solid fa-bed text-dark me-1" />
                                <span>{featuresProperty.bedroom} bedroom</span>
                              </div>
                              <span className="vr" />
                              <div className="">
                                <i className="fa-solid fa-bath text-dark me-1" />
                                <span>{featuresProperty.bathroom} bathroom</span>
                              </div>
                              <span className="vr" />
                              <div className="">
                                <i className="fa-solid fa-vector-square text-dark me-1" />
                                <span>{featuresProperty.area} sqft</span>
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
                                  <h2 className="m-0 fw-semibold text-primary">{featuresProperty.money}</h2>
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
             
              )
            })

          }
          {/* /.End Card */}

        </div>
      </div>
      {/* /.End Featured Properties Section */}

    </>
  );
}
async function getFeaturesProperties() {
  const res = await fetch('https://findhusly.vercel.app/api/features-properties')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


  //  {/* Start Subtitle */}
  //               <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
  //                 Senior Communities
  //               </div>
  //               {/* /. End Subtitle */}
  //               {/* Start Section Header title */}
  //               <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
  //                 Aged Cohousing
  //               </h2>
  //               {/* /.End Section Header Title */}
  //               {/* Start Section Header Sub Title */}
  //               <div className="sub-title fs-16">
  //                 Discover our vibrant senior citizens communities,
  //                 <br className="d-none d-lg-block" /> eager for your services
  //                 and expertise.
  //               </div>
  //               {/* /.End Section Header Sub Title */}
  //             </div>
  //             {/*/. End Section Header */}