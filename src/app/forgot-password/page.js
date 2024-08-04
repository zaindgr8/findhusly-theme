import Layout from "@/components/Layout";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Forgot Password
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
                    Password Reset
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
                <div className="p-4 p-sm-5 rounded-4 shadow bg-white">
                  {/* Start Illustration Image */}
                  <img
                    src="assets/img/png-img/forgot-password.png"
                    alt=""
                    className="img-fluid mb-4 w-75"
                  />
                  {/* /.End Illustration Image */}
                  {/* Start Header Text */}
                  <div className="text-center mb-4">
                  <h3 className="fw-semibold">Password <span className="underline position-relative text-primary">Reset</span></h3>
                    <p className="text-muted text-center mb-0">
                      Fill with your mail to receive instructions on how to reset
                      your password.
                    </p>
                  </div>
                  {/* /.End Header Text */}
                  <form className="register-form">
                    {/* Start Form Group */}
                    <div className="form-group mb-4">
                      <label className="required">Enter Email</label>
                      <input type="email" className="form-control" required />
                    </div>
                    {/* /.End Form Group */}
                    {/* Start Button */}
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      Reset password
                    </button>
                    {/* /.End Button */}
                  </form>
                  {/* Start Bottom Text */}
                  <div className="bottom-text text-center mt-3"> Remember your password? <Link href="signin" className="fw-medium text-decoration-underline">Log in</Link> </div>
                
                  {/* /.End Bottom Text */}
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