import Link from "next/link";
import ScrollTop from "./scroll-top";

export default function FooterWhite() {
    return (
        <>
            {/* Start Footer */}
            <ScrollTop/>
            <footer className="main-footer background-image" data-image-src="assets/img/wall-sketch.png">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 py-3 py-md-5 pe-xl-5 text-center">
                            <div className="footer-about">
                                <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">Get My App</h3>
                                <div className="bg-grey mb-3 d-inline-block">
                                    {/* Start Qr Code Image */}
                                    <img src="assets/img/qr-code-white.png" className="figure-img img-fluid mb-0" height="146" width="146" alt="..." />
                                    {/* /End Qr Code Image */}
                                </div>
                                <p>Scan qr code and download the app for your mobile.</p>
                                <Link className="email-link d-block fw-medium mb-1" href="#"><i className="fa-solid fa-phone me-2"></i><span>(123) 456-7890</span></Link>
                                <Link className="email-link d-block fw-medium" href="#"><i className="fa-solid fa-envelope me-2"></i><span>support@FindHusly.com</span></Link>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-auto col-xl-2 py-3 py-md-5">
                            <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">Main Pages</h3>
                            {/* /Start Footer Link  */}
                            <ul className="footer-link list-unstyled menu mb-0">
                                <li className="mb-2"><Link href="/" className="link d-block">Home One</Link></li>
                                <li className="mb-2"><Link href="home-2" className="link d-block">Home Two</Link></li>
                                <li className="mb-2"><Link href="home-3" className="link d-block">Home Three</Link></li>
                                <li className="mb-2"><Link href="properties-list" className="link d-block">Properties List</Link></li>
                                <li className="mb-2"><Link href="properties-grid" className="link d-block">Properties Grid</Link></li>
                                <li className="mb-2"><Link href="property-details" className="link d-block">Property Details 1</Link></li>
                                <li className="mb-2"><Link href="property-details-2" className="link d-block">Property Details 2</Link></li>
                            </ul>
                            {/* /.End Footer Link  */}
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-auto col-xl-2 py-3 py-md-5">
                            <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">Template pages</h3>
                            {/* /Start Footer Link  */}
                            <ul className="footer-link list-unstyled menu mb-0">
                                <li className="mb-2"><Link href="agent-list" className="link d-block">Agents List</Link></li>
                                <li className="mb-2"><Link href="agent-grid" className="link d-block">Agents Grid</Link></li>
                                <li className="mb-2"><Link href="agent-details" className="link d-block">Agent Details</Link></li>
                                <li className="mb-2"><Link href="blog-1" className="link d-block">Blog 1</Link></li>
                                <li className="mb-2"><Link href="blog-2" className="link d-block">Blog 2</Link></li>
                                <li className="mb-2"><Link href="blog-details" className="link d-block">Blog Details</Link></li>
                            </ul>
                            {/* /.End Footer Link  */}

                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 py-3 py-md-5 d-lg-none d-xl-block">
                            <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">Utility pages</h3>
                            {/* /Start Footer Link  */}

                            <ul className="footer-link list-unstyled menu mb-0">
                                <li className="mb-2"><Link href="style-guide" className="link d-block">Style Guide</Link></li>
                                <li className="mb-2"><Link href="signin" className="link d-block">Sign In</Link></li>
                                <li className="mb-2"><Link href="signup" className="link d-block">Sign Up</Link></li>
                                <li className="mb-2"><Link href="forgot-password" className="link d-block">Forgot Password</Link></li>
                                <li className="mb-2"><Link href="two-factor-auth" className="link d-block">Two factor authentication</Link></li>
                                <li className="mb-2"><Link href="terms-conditions" className="link d-block">Terms &amp; Conditions</Link></li>
                                <li className="mb-2"><Link href="not_found" className="link d-block">404 Page</Link></li>
                                <li className="mb-2"><Link href="505" className="link d-block">505 Page</Link></li>
                            </ul>
                            {/* /.End Footer Link */}
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg col-xl-2 py-3 py-md-5">
                            <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">Connect with us</h3>
                            {/* /Start Social Icon */}
                            <ul className="list-unstyled social-icon">
                                <li>
                                    <Link href="#" className="align-items-center d-flex">
                                        <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white inst"><i className="fab fa-instagram"></i></div>Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="align-items-center d-flex">
                                        <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white twi"><i className="fab fa-twitter"></i></div>Twitter
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="align-items-center d-flex">
                                        <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white dri"><i className="fab fa-dribbble"></i></div>Dribbble
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="align-items-center d-flex">
                                        <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white fb"><i className="fab fa-facebook-f"></i></div>Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="align-items-center d-flex">
                                        <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white whatsapp"><i className="fa-brands fa-whatsapp"></i></div>WhatsApp
                                    </Link>
                                </li>
                            </ul>
                            {/* /.End Social Icon */}
                        </div>
                    </div>
                    <hr className="mb-0 mt-4" />
                    <div className="py-4">
                        {/* Start Sub Footer Nav */}
                        <ul className="list-unstyled list-separator mb-2 footer-nav">
                            <li className="list-inline-item"><Link href="#">Privacy</Link></li>
                            <li className="list-inline-item"><Link href="#">Sitemap</Link></li>
                            <li className="list-inline-item"><Link href="#">Cookies</Link></li>
                            <li className="list-inline-item"><Link href="terms-conditions">Terms &amp; Conditions</Link></li>
                        </ul>
                        {/*  /. End Sub Footer Nav */}
                        <div className="align-items-center row mb-2">
                            {/* Start Footer Logo */}
                            <div className="col-sm-auto footer-logo mb-3 mb-sm-0">
                                <img className="footer-logo__dark" src="assets/img/logo.png" alt="" />
                            </div>
                            {/* /.End Footer Logo  */}
                            {/* Start Copy Rights Text */}
                            <div className="col-sm-auto copy">© 2022 FindHusly - All Rights Reserved</div>
                            {/* /.End Copy Rights Text */}
                        </div>
                    </div>
                </div>
            </footer>
            {/* /.End Footer */}
        </>
    );
}
