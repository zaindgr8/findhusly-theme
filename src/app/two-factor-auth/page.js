import Layout from "@/components/Layout";
import Link from "next/link";

export default function TwoFactor() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Two factor authentication
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
                    Authentication
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        <div className="py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
                <form className="p-4 p-sm-5 rounded-4 shadow bg-white">
                  {/* Start Illustration Image */}
                  <img
                    src="assets/img/png-img/two-factor-authentication.png"
                    className="img-fluid mb-4 w-75"
                    alt=""
                  />
                  {/* /.End Illustration Image */}
                  {/* Start Header Text */}
                  <div className="text-center mb-4">
                  <h3 className="fw-semibold">Two factor <span className="underline position-relative text-primary">authentication</span></h3>
                  <p className="text-muted text-center mb-0">We have to send a code to <span className="fw-medium text-dark">example@gmail.com</span></p>
                  </div>
                  {/* /.End Header Text */}
                  <p className="mb-2 text-start">
                    Enter the code we have sent you:
                  </p>
                  {/* Start Input */}
                  <div className="d-flex justify-content-between gap-1 gap-sm-3 mb-2">
                    <input
                      type="text"
                      maxLength={1}
                      className="form-control text-center"
                      required
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className="form-control text-center"
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className="form-control text-center"
                    />
                    <input
                      type="text"
                      maxLength={1}
                      className="form-control text-center"
                    />
                  </div>
                  {/* /.End Input */}
                  <div className="d-sm-flex justify-content-between small mb-4">
                    <span>Don't get a code?</span>
                    <Link
                      href="#"
                      className="btn btn-sm btn-link p-0 text-decoration-underline mb-0"
                    >
                      Click to resend
                    </Link>
                  </div>
                  {/* Start Button */}
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Verify and Process
                  </button>
                  {/* /.End Button */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. End Main Content */}

    </Layout>
  );
}