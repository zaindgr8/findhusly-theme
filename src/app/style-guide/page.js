import Layout from "@/components/Layout";
import Link from "next/link";

export default function StyleGrid() {
  return (
      <Layout>
        {/* Start Main Content */}
        <div className="main-content">
          <div className="border-bottom py-3">
            <div className="container">
              {/* Start Breadcrumbs */}
              <div className="row gy-2 gx-4 gx-md-5">
                <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                  Style Guide
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
                      Typography
                    </li>
                  </ol>
                </div>
              </div>
              {/* End Breadcrumbs */}
            </div>
          </div>
          {/* Start Style Guide Content */}
          <div className="py-5">
            <div className="container py-4">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  {/* Start Section Header Title */}
                  <div className="section-header text-center mb-5">
                    {/* Start Section Header title */}
                    <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Find The Houses, <span className="underline position-relative text-primary">Apartments</span> And Office<br className="d-none d-sm-block"></br> In Your Favorite Location</h2>
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
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <h2>Color</h2>
                </div>
                <div className="col-md-8">
                  <div className="style-guide-color-wrap row g-4">
                    <div className="col-auto">
                      <div className="color-swatch">
                        <div className="bg-primary color-box rounded-3" />
                        <p className="text-center mt-2 mb-0 text-dark">#0a73c0</p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="color-swatch">
                        <div className="color-box bg-dark rounded-3" />
                        <p className="text-center mt-2 mb-0 text-dark">#212529</p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="color-swatch">
                        <div className="color-box content rounded-3" />
                        <p className="text-center mt-2 mb-0 text-dark">#707070</p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="color-swatch">
                        <div className="color-box bg-soft-primary rounded-3" />
                        <p className="text-center mt-2 mb-0 text-dark">#ecf4fa</p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="color-swatch">
                        <div className="color-box bg-white border rounded-3" />
                        <p className="text-center mt-2 mb-0 text-dark">#ffffff</p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="color-swatch">
                        <div className="color-box bg-danger rounded-3" />
                        <p className="text-center mt-2 mb-0 text-dark">#dc3545</p>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="color-swatch">
                        <div className="color-box bg-warning rounded-3" />
                        <p className="text-center mt-2 mb-0 text-dark">#ffc107</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <h2>Headings</h2>
                </div>
                <div className="col-md-8">
                  <h1>Heading 01 Text</h1>
                  <h2>Heading 02 Text</h2>
                  <h3>Heading 03 Text</h3>
                  <h4>Heading 04 Text</h4>
                  <h5>Heading 05 Text</h5>
                  <h6>Heading 06 Text</h6>
                </div>
              </div>
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <h2>Display headings </h2>
                </div>
                <div className="col-md-8">
                  <h1 className="display-1">Display 1</h1>
                  <h1 className="display-2">Display 2</h1>
                  <h1 className="display-3">Display 3</h1>
                  <h1 className="display-4">Display 4</h1>
                  <h1 className="display-5">Display 5</h1>
                  <h1 className="display-6">Display 6</h1>
                </div>
              </div>
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <h2>Paragraph</h2>
                </div>
                <div className="col-md-8">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                    doloribus laudantium. Delectus dolorem rem, molestias modi
                    possimus repellendus explicabo libero nulla? Dolorum sunt quasi ut
                    reiciendis aspernatur porro nam beatae aliquid non modi cum,
                    soluta magni asperiores fugiat, explicabo voluptatem fugit,
                    placeat nobis quis quisquam. At, atque ratione inventore doloribus
                    eos tenetur, corrupti perspiciatis aperiam quasi esse, nisi dolor
                    ducimus?
                  </p>
                </div>
              </div>
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <h2>List</h2>
                </div>
                <div className="col-md-8">
                  <div className="mb-4">
                    <h4 className="mb-4">Order List</h4>
                    <ol className="list-order">
                      <li>Nostrum facere repellendus minus quod</li>
                      <li>aut aliquam neque reiciendis.</li>
                      <li>Qui beatae vel magnam repudiandae</li>
                      <li>Ipsum repellat repudiandae.</li>
                    </ol>
                  </div>
                  <h4 className="mb-4">Check List</h4>
                  <ul className="list-checked">
                    <li>Veniam quae. Nostrum facere repellendus minus</li>
                    <li>Quod aut aliquam neque reiciendis. magnam</li>
                    <li>Repudiandae ipsum repellat repudiandae.</li>
                    <li>Voluptate Dolores ut dolor sint occaecati similique.</li>
                  </ul>
                </div>
              </div>
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <h2>Buttons</h2>
                </div>
                <div className="col-md-8">
                  <div className="align-items-end g-4 row">
                    <div className="col-auto">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm hstack gap-2"
                      >
                        <span>Button</span>
                        <span className="vr" />
                        <i className="fa-arrow-right fa-solid fs-12" />
                      </button>
                      <div className="mt-1 text-dark">Button Primary - Small</div>
                    </div>
                    <div className="col-auto">
                      <button type="button" className="btn btn-primary hstack gap-2">
                        <span>Button</span>
                        <span className="vr" />
                        <i className="fa-arrow-right fa-solid fs-13" />
                      </button>
                      <div className="mt-1 text-dark">Button Primary - Default</div>
                    </div>
                    <div className="col-auto">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg hstack gap-2"
                      >
                        <span>Button</span>
                        <span className="vr" />
                        <i className="fa-arrow-right fa-solid fs-14" />
                      </button>
                      <div className="mt-1 text-dark">Button Primary - Large</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <h2>Blockquote</h2>
                </div>
                <div className="col-md-8">
                  <blockquote className="blockquote m-0 p-0 quote-text">
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
          {/* /. End Style Guide Content */}
        </div>
        {/* /. End Main Content */}
      </Layout>
  );
}