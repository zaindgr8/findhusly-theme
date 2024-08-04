"use client"
import dynamic from "next/dynamic";
import Link from "next/link";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const CarouselTwo = () => {
    const options = {
        loop: true,
        margin: 5,
        items: 2,
        dots: false,
        center: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    };
    return (
        <OwlCarousel className="masonry-carousel owl-theme" {...options}>
            <div className="masonry-post position-relative">
                <Link href="blog-details" className="masonry-img d-block">
                    {" "}
                    <img
                        src="assets/img/blog/masonry-01.jpg"
                        className="img-fluid"
                        alt=""
                    />{" "}
                </Link>
                <div className="bottom-0 left-0 p-3 p-sm-4 p-xxl-5 position-absolute post-block w-100 z-1">
                    {/* Start Meta Info */}
                    <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 text-white">
                        <div className="fw-medium">Renovation</div>
                        <span className="vr" />
                        <div>jun 23, 2023</div>
                    </div>
                    {/* /.End Meta Info */}
                    <h2 className="fw-semibold mb-3">
                        <Link href="blog-details">
                            Various versions have evolved over the years, sometimes.
                        </Link>
                    </h2>
                    {/* Start Author Info */}
                    <ul className="authar-info d-flex flex-wrap fs-14 list-unstyled m-0 text-capitalize gap-3">
                        <li>
                            <Link href="#" className="text-white">
                                <i className="fa-solid fa-comment fs-12 me-1" />
                                189 Comment
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white">
                                <i className="fa-solid fa-user fs-12 me-1" />
                                By Naeem
                            </Link>
                        </li>
                    </ul>
                    {/* /.End Author Info */}
                </div>
            </div>
            {/* /.End of masonry post */}
            <div className="masonry-post position-relative">
                <Link href="blog-details" className="masonry-img d-block">
                    {" "}
                    <img
                        src="assets/img/blog/masonry-02.jpg"
                        className="img-fluid"
                        alt=""
                    />{" "}
                </Link>
                <div className="bottom-0 left-0 p-3 p-sm-4 p-xxl-5 position-absolute post-block w-100 z-1">
                    {/* Start Meta Info */}
                    <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 text-white">
                        <div className="fw-medium">Renovation</div>
                        <span className="vr" />
                        <div>jun 23, 2023</div>
                    </div>
                    {/* /.End Meta Info */}
                    <h2 className="fw-semibold mb-3">
                        <Link href="blog-details">
                            There are many variations of passages of Lorem Ipsum available.
                        </Link>
                    </h2>
                    {/* Start Author Info */}
                    <ul className="authar-info d-flex flex-wrap fs-14 list-unstyled m-0 text-capitalize gap-3">
                        <li>
                            <Link href="#" className="text-white">
                                <i className="fa-solid fa-comment fs-12 me-1" />
                                189 Comment
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white">
                                <i className="fa-solid fa-user fs-12 me-1" />
                                By Naeem
                            </Link>
                        </li>
                    </ul>
                    {/* /.End Author Info */}
                </div>
            </div>
            {/* /.End of masonry post */}
            <div className="masonry-post position-relative">
                <Link href="blog-details" className="masonry-img d-block">
                    {" "}
                    <img
                        src="assets/img/blog/masonry-03.jpg"
                        className="img-fluid"
                        alt=""
                    />{" "}
                </Link>
                <div className="bottom-0 left-0 p-3 p-sm-4 p-xxl-5 position-absolute post-block w-100 z-1">
                    {/* Start Meta Info */}
                    <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 text-white">
                        <div className="fw-medium">Renovation</div>
                        <span className="vr" />
                        <div>jun 23, 2023</div>
                    </div>
                    {/* /.End Meta Info */}
                    <h2 className="fw-semibold mb-3">
                        <Link href="blog-details">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </Link>
                    </h2>
                    {/* Start Author Info */}
                    <ul className="authar-info d-flex flex-wrap fs-14 list-unstyled m-0 text-capitalize gap-3">
                        <li>
                            <Link href="#" className="text-white">
                                <i className="fa-solid fa-comment fs-12 me-1" />
                                189 Comment
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white">
                                <i className="fa-solid fa-user fs-12 me-1" />
                                By Naeem
                            </Link>
                        </li>
                    </ul>
                    {/* /.End Author Info */}
                </div>
            </div>
            {/* /.End of masonry post */}
            <div className="masonry-post position-relative">
                <Link href="blog-details" className="masonry-img d-block">
                    {" "}
                    <img
                        src="assets/img/blog/masonry-04.jpg"
                        className="img-fluid"
                        alt=""
                    />{" "}
                </Link>
                <div className="bottom-0 left-0 p-3 p-sm-4 p-xxl-5 position-absolute post-block w-100 z-1">
                    {/* Start Meta Info */}
                    <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 text-white">
                        <div className="fw-medium">Renovation</div>
                        <span className="vr" />
                        <div>jun 23, 2023</div>
                    </div>
                    {/* /.End Meta Info */}
                    <h2 className="fw-semibold mb-3">
                        <Link href="blog-details">
                            It was popularised in the 1960s with the release of Letraset.
                        </Link>
                    </h2>
                    {/* Start Author Info */}
                    <ul className="authar-info d-flex flex-wrap fs-14 list-unstyled m-0 text-capitalize gap-3">
                        <li>
                            <Link href="#" className="text-white">
                                <i className="fa-solid fa-comment fs-12 me-1" />
                                189 Comment
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white">
                                <i className="fa-solid fa-user fs-12 me-1" />
                                By Naeem
                            </Link>
                        </li>
                    </ul>
                    {/* /.End Author Info */}
                </div>
            </div>
            {/* /.End of masonry post */}
        </OwlCarousel>
    );
};
export default CarouselTwo;
