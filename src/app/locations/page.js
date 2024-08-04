import Layout from "@/components/Layout";
import Regions from "@/components/Regions";
import SectionHeader from "@/components/section-header";
import Link from "next/link";

export default function Locations() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                locations
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
                    locations
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        <div className="py-5">
          <div className="container py-4">
            <SectionHeader/>
            <Regions/>
          </div>
        </div>


        <div className="py-5 bg-grey">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                {/* Start Section Header Title */}
                <div
                  className="section-header text-center mb-5"
                  data-aos="fade-down"
                >
                  {/* Start Subtitle */}
                  <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                    F.A.Qs
                  </div>
                  {/* /. End Subtitle */}
                  {/* Start Section Header title */}
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Get The <span className="underline position-relative text-primary">Answers</span> You Need</h2>
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
              <div className="col-lg-8">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item border-0 mb-3 rounded-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button fs-5 p-4 text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What Types Of Houses Are Available For Rent?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body p-4 pt-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was <code>.accordion-body</code>
                        popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including
                        versions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3 rounded-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button fs-5 p-4 text-dark collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What Is The Rental Application Process?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body p-4 pt-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was <code>.accordion-body</code>
                        popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including
                        versions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3 rounded-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button fs-5 p-4 text-dark collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What Are Your Rental Rates?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body p-4 pt-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was <code>.accordion-body</code>
                        popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including
                        versions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3 rounded-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button fs-5 p-4 text-dark collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What Are The Lease Terms?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body p-4 pt-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was <code>.accordion-body</code>
                        popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including
                        versions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 mb-3 rounded-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button fs-5 p-4 text-dark collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What Is Your Policy On Pets?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body p-4 pt-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was <code>.accordion-body</code>
                        popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including
                        versions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>


      </div>
      {/* /. End Main Content */}


    </Layout>
  );
}