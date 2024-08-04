import Layout from "@/components/Layout";
import BlogSticky from "@/components/blog-sticky";
import CarouselTwo from "@/components/corousel-two";
import Link from "next/link";

export default function BlogOne() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">Blog</h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium mb-0">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="/" className="text-decoration-none"> <i className="fa-solid fa-house-chimney-crack fs-18"></i> </Link>
                  </li>
                  <li className="breadcrumb-item d-flex align-items-center active" aria-current="page">Blog Page One</li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        {/* Start Blog Carousel */}
        <CarouselTwo />
        {/* /.End Blog Carouse */}

        <div className="py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-xl-8 mb-5 text-center">
                {/* Start Title */}
                <h1 className="display-4 fw-bold">Hello - <span className="underline position-relative text-primary">Welcome</span> to Blog</h1>
                {/* /.End Title */}
                {/* Start Short Sescription */}
                <p className="fs-17">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has
                </p>
                {/* /.End Short Sescription */}
              </div>
            </div>
            <BlogSticky />
          </div>
        </div>
      </div>
      {/* /. End Main Content */}
    </Layout>

  );
}