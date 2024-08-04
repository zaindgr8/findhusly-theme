"use client"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});



const Carousel = () => {
    const options = {
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };

    return (
        <OwlCarousel className='owl-theme blog-carousel' {...options} >
            {/* Start Grid Post */}
            <div className="post grid-post" data-aos="fade" data-aos-delay={300}>
                <div className="grid-post__thumb position-relative">
                    <Link
                        href="blog-details"
                        className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
                    >
                        <figure className="w-100 m-0">
                            <img
                                src="assets/img/blog/01-md.jpg"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </figure>
                        <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                            <div className="position-absolute text-center top-50 w-100">
                                <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                                    Continue Reading
                                    <i className="fa fa-angle-right text-white" />
                                </h4>
                            </div>
                        </div>
                    </Link>
                    {/* /.image */}
                </div>
                <div className="post-info text-center">
                    <div className="bg-white m-auto position-relative post-header z-1 pb-0">
                        {/* Start Meta Info */}
                        <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                            <div className="text-primary fw-medium">Renovation</div>
                            <span className="vr" />
                            <div>jun 23, 2023</div>
                        </div>
                        {/* /.End Meta Info */}
                        {/* Start Post Title */}
                        <h5 className="post-title fw-semibold fs-19 mb-3">
                            <Link href="#">
                                There are many variations of passages of Lorem Ipsum
                                available.
                            </Link>
                        </h5>
                        {/* /.End Post Title */}
                    </div>
                </div>
            </div>
            {/* /.End Grid Post */}
            {/* Start Grid Post */}
            <div className="post grid-post">
                <div
                    className="grid-post__thumb position-relative"
                    data-aos="fade"
                    data-aos-delay={400}
                >
                    <Link
                        href="blog-details"
                        className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
                    >
                        <figure className="w-100 m-0">
                            <img
                                src="assets/img/blog/02-md.jpg"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </figure>
                        <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                            <div className="position-absolute text-center top-50 w-100">
                                <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                                    Continue Reading
                                    <i className="fa fa-angle-right text-white" />
                                </h4>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="post-info text-center">
                    <div className="bg-white m-auto position-relative post-header z-1 pb-0">
                        {/* Start Meta Info */}
                        <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                            <div className="text-primary fw-medium">Construction</div>
                            <span className="vr" />
                            <div>jun 23, 2023</div>
                        </div>
                        {/* /.End Meta Info */}
                        {/* Start Post Title */}
                        <h5 className="post-title fw-semibold fs-19 mb-3">
                            <Link href="#">
                                All the Lorem Ipsum generators on the Internet tend to repeat
                            </Link>
                        </h5>
                        {/* /.End Post Title */}
                    </div>
                </div>
            </div>
            {/* /.End Grid Post */}
            {/* Start Grid Post */}
            <div className="post grid-post" data-aos="fade" data-aos-delay={500}>
                <div className="grid-post__thumb position-relative">
                    <Link
                        href="blog-details"
                        className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
                    >
                        <figure className="w-100 m-0">
                            <img
                                src="assets/img/blog/06-md.jpg"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </figure>
                        <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                            <div className="position-absolute text-center top-50 w-100">
                                <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                                    Continue Reading
                                    <i className="fa fa-angle-right text-white" />
                                </h4>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="post-info text-center">
                    <div className="bg-white m-auto position-relative post-header z-1 pb-0">
                        {/* Start Meta Info */}
                        <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                            <div className="text-primary fw-medium">Design</div>
                            <span className="vr" />
                            <div>jun 23, 2023</div>
                        </div>
                        {/* /.End Meta Info */}
                        {/* Start Post Title */}
                        <h5 className="post-title fw-semibold fs-17 mb-3">
                            <Link href="#">

                                Various versions have evolved over the years, sometimes
                            </Link>
                        </h5>
                        {/* /.End Post Title */}
                    </div>
                </div>
            </div>
            {/* /.End Grid Post */}
            {/* Start Grid Post */}
            <div className="post grid-post" data-aos="fade" data-aos-delay={600}>
                <div className="grid-post__thumb position-relative">
                    <Link
                        href="blog-details"
                        className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
                    >
                        <figure className="w-100 m-0">
                            <img
                                src="assets/img/blog/05-md.jpg"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </figure>
                        <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                            <div className="position-absolute text-center top-50 w-100">
                                <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                                    Continue Reading
                                    <i className="fa fa-angle-right text-white" />
                                </h4>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="post-info text-center">
                    <div className="bg-white m-auto position-relative post-header z-1 pb-0">
                        {/* Start Meta Info */}
                        <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                            <div className="text-primary fw-medium">Renovation</div>
                            <span className="vr" />
                            <div>jun 23, 2023</div>
                        </div>
                        {/* /.End Meta Info */}
                        {/* Start Post Title */}
                        <h5 className="post-title fw-semibold fs-17 mb-3">
                            <Link href="#">
                                It was popularised in the 1960s with the release of Letraset
                                sheets
                            </Link>
                        </h5>
                        {/* /.End Post Title */}
                    </div>
                </div>
            </div>
            {/* /.End Grid Post */}
        </OwlCarousel>
    );
};
export default Carousel;
