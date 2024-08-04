"use client"

import Link from 'next/link';
import React from 'react';
import StickyBox from "react-sticky-box";
const BlogSticky = () => {
    return (
        <div className="row g-4">
            <div className="col-lg-8">
                <div className="row g-4 g-xl-5">
                    {/* Start Grid Post */}
                    <div
                        className="col-md-12 post grid-post"
                        data-aos="fade"
                        data-aos-delay={400}
                    >
                        <div className="grid-post__thumb position-relative">
                            <Link
                                href="blog-details"
                                className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
                            >
                                <figure className="w-100 m-0">
                                    <img
                                        src="assets/img/blog/01-lg.jpg"
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
                            <div className="bg-white m-auto position-relative post-header z-1">
                                {/* Start Meta Info */}
                                <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                                    <div className="text-primary fw-medium">Construction</div>
                                    <span className="vr" />
                                    <div>jun 23, 2023</div>
                                </div>
                                {/* /.End Meta Info */}
                                {/* Start Post Title */}
                                <h3 className="post-title fw-semibold mb-3">
                                    <Link href="#">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have.
                                    </Link>
                                </h3>
                                {/* /.End Post Title */}
                                {/* Start Author Info */}
                                <ul className="authar-info d-flex flex-wrap fs-15 justify-content-center list-unstyled m-0 text-capitalize gap-3">
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-comment fs-12 me-1" />
                                            189 Comment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-user fs-12 me-1" />
                                            By Naeem
                                        </Link>
                                    </li>
                                </ul>
                                {/* /.End Author Info */}
                            </div>
                            <p className="mb-0">
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at
                                its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to
                                using 'Content here, content here', making it look like
                                readable English. Many desktop publishing packages
                            </p>
                        </div>
                        <div className="border-bottom bottomBlog d-flex flex-wrap justify-content-between mt-4">
                            {/* Start Post Read Time */}
                            <div className="blog-read__time fs-12 l-spacing-1 my-2 text-uppercase">
                                Reading time: 2 min
                            </div>
                            {/* /.End Post Read Time */}
                            {/* Start Social Icon */}
                            <div className="align-items-center post-social d-flex fs-12 l-spacing-1 my-2 text-uppercase">

                                Share:
                                <div className="align-items-center blog-social_icon fs-16 d-flex">

                                    <Link target="_blank" href="#" className="mx-2">
                                        <i className="fa-brands fa-facebook-f" />
                                    </Link>
                                    <Link target="_blank" href="#" className="mx-2">
                                        <i className="fa-brands fa-twitter" />
                                    </Link>
                                    <Link target="_blank" href="#" className="mx-2">
                                        <i className="fa-brands fa-pinterest-p" />
                                    </Link>
                                    <Link target="_blank" href="#" className="mx-2">
                                        <i className="fa-brands fa-google-plus-g" />
                                    </Link>
                                    <Link target="_blank" href="#" className="mx-2">
                                        <i className="fa-brands fa-stumbleupon" />
                                    </Link>
                                </div>
                            </div>
                            {/* /.End Social Icon */}
                        </div>
                    </div>
                    {/* /.End Grid Post */}
                    {/* Start Grid Post */}
                    <div
                        className="col-sm-6 col-lg-6 post grid-post"
                        data-aos="fade"
                        data-aos-delay={400}
                    >
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
                            <div className="bg-white m-auto position-relative post-header z-1">
                                {/* Start Meta Info */}
                                <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                                    <div className="text-primary fw-medium">Construction</div>
                                    <span className="vr" />
                                    <div>jun 23, 2023</div>
                                </div>
                                {/* /.End Meta Info */}
                                {/* Start Post Title */}
                                <h5 className="post-title fw-semibold mb-3">
                                    <Link href="#">
                                        Nam quis lorem rutrum, convallis nulla id, varius sem.
                                    </Link>
                                </h5>
                                {/* /.End Post Title */}
                                {/* Start Author Info */}
                                <ul className="authar-info d-flex flex-wrap fs-15 justify-content-center list-unstyled m-0 text-capitalize gap-3">
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-comment fs-12 me-1" />
                                            189 Comment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-user fs-12 me-1" />
                                            By Naeem
                                        </Link>
                                    </li>
                                </ul>
                                {/* /.End Author Info */}
                            </div>
                            <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>
                        </div>
                    </div>
                    {/* /.End Grid Post */}
                    {/* Start Grid Post */}
                    <div
                        className="col-sm-6 col-lg-6 post grid-post"
                        data-aos="fade"
                        data-aos-delay={600}
                    >
                        <div className="grid-post__thumb position-relative">
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
                            {/* /.image */}
                        </div>
                        <div className="post-info text-center">
                            <div className="bg-white m-auto position-relative post-header z-1">
                                {/* Start Meta Info */}
                                <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                                    <div className="text-primary fw-medium">Renovation</div>
                                    <span className="vr" />
                                    <div>jun 23, 2023</div>
                                </div>
                                {/* /.End Meta Info */}
                                {/* /.End Category */}
                                {/* Start Post Title */}
                                <h5 className="post-title fw-semibold mb-3">
                                    <Link href="#">
                                        Sed non neque eu diam posuere efficitur sed non erat.
                                    </Link>
                                </h5>
                                {/* /.End Post Title */}
                                {/* Start Author Info */}
                                <ul className="authar-info d-flex flex-wrap fs-15 justify-content-center list-unstyled m-0 text-capitalize gap-3">
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-comment fs-12 me-1" />
                                            189 Comment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-user fs-12 me-1" />
                                            By Naeem
                                        </Link>
                                    </li>
                                </ul>
                                {/* /.End Author Info */}
                            </div>
                            <p className="mb-0">
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters.
                            </p>
                        </div>
                    </div>
                    {/* /.End Grid Post */}
                    {/* Start Grid Post */}
                    <div
                        className="col-sm-6 col-lg-6 post grid-post"
                        data-aos="fade"
                        data-aos-delay={400}
                    >
                        <div className="grid-post__thumb position-relative">
                            <Link
                                href="blog-details"
                                className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
                            >
                                <figure className="w-100 m-0">
                                    <img
                                        src="assets/img/blog/03-md.jpg"
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
                            <div className="bg-white m-auto position-relative post-header z-1">
                                {/* Start Meta Info */}
                                <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                                    <div className="text-primary fw-medium">Construction</div>
                                    <span className="vr" />
                                    <div>jun 23, 2023</div>
                                </div>
                                {/* /.End Meta Info */}
                                {/* Start Post Title */}
                                <h5 className="post-title fw-semibold mb-3">
                                    <Link href="#">
                                        Cras aliquam odio sed sem consequat accumsan.
                                    </Link>
                                </h5>
                                {/* /.End Post Title */}
                                {/* Start Author Info */}
                                <ul className="authar-info d-flex flex-wrap fs-15 justify-content-center list-unstyled m-0 text-capitalize gap-3">
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-comment fs-12 me-1" />
                                            189 Comment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-user fs-12 me-1" />
                                            By Naeem
                                        </Link>
                                    </li>
                                </ul>
                                {/* /.End Author Info */}
                            </div>
                            <p className="mb-0">
                                Many desktop publishing packages and web page editors now
                                use Lorem Ipsum as their.
                            </p>
                        </div>
                    </div>
                    {/* /.End Grid Post */}
                    {/* Start Grid Post */}
                    <div
                        className="col-sm-6 col-lg-6 post grid-post"
                        data-aos="fade"
                        data-aos-delay={600}
                    >
                        <div className="grid-post__thumb position-relative">
                            <Link
                                href="blog-details"
                                className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
                            >
                                <figure className="w-100 m-0">
                                    <img
                                        src="assets/img/blog/04-md.jpg"
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
                            <div className="bg-white m-auto position-relative post-header z-1">
                                {/* Start Meta Info */}
                                <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                                    <div className="text-primary fw-medium">Construction</div>
                                    <span className="vr" />
                                    <div>jun 23, 2023</div>
                                </div>
                                {/* /.End Meta Info */}
                                {/* Start Post Title */}
                                <h5 className="post-title fw-semibold mb-3">
                                    <Link href="#">
                                        Maecenas semper tortor non lacus fermentum egestas.
                                    </Link>
                                </h5>
                                {/* /.End Post Title */}
                                {/* Start Author Info */}
                                <ul className="authar-info d-flex flex-wrap fs-15 justify-content-center list-unstyled m-0 text-capitalize gap-3">
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-comment fs-12 me-1" />
                                            189 Comment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-user fs-12 me-1" />
                                            By Naeem
                                        </Link>
                                    </li>
                                </ul>
                                {/* /.End Author Info */}
                            </div>
                            <p className="mb-0">
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered.
                            </p>
                        </div>
                    </div>
                    {/* /.End Grid Post */}
                    {/* Start Grid Post */}
                    <div
                        className="col-sm-6 col-lg-6 post grid-post"
                        data-aos="fade"
                        data-aos-delay={400}
                    >
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
                            {/* /.image */}
                        </div>
                        <div className="post-info text-center">
                            <div className="bg-white m-auto position-relative post-header z-1">
                                {/* Start Meta Info */}
                                <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                                    <div className="text-primary fw-medium">Design</div>
                                    <span className="vr" />
                                    <div>jun 23, 2023</div>
                                </div>
                                {/* /.End Meta Info */}
                                {/* Start Post Title */}
                                <h5 className="post-title fw-semibold mb-3">
                                    <Link href="#">
                                        Nullam condimentum arcu a tristique dictum.
                                    </Link>
                                </h5>
                                {/* /.End Post Title */}
                                {/* Start Author Info */}
                                <ul className="authar-info d-flex flex-wrap fs-15 justify-content-center list-unstyled m-0 text-capitalize gap-3">
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-comment fs-12 me-1" />
                                            189 Comment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-user fs-12 me-1" />
                                            By Naeem
                                        </Link>
                                    </li>
                                </ul>
                                {/* /.End Author Info */}
                            </div>
                            <p className="mb-0">
                                If you are going to use a passage of Lorem Ipsum, you need
                                to be sure there isn't anything embarrassing.
                            </p>
                        </div>
                    </div>
                    {/* /.End Grid Post */}
                    {/* Start Grid Post */}
                    <div
                        className="col-sm-6 col-lg-6 post grid-post"
                        data-aos="fade"
                        data-aos-delay={600}
                    >
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
                            {/* /.image */}
                        </div>
                        <div className="post-info text-center">
                            <div className="bg-white m-auto position-relative post-header z-1">
                                {/* Start Meta Info */}
                                <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                                    <div className="text-primary fw-medium">Renovation</div>
                                    <span className="vr" />
                                    <div>jun 23, 2023</div>
                                </div>
                                {/* /.End Meta Info */}
                                {/* Start Post Title */}
                                <h5 className="post-title fw-semibold mb-3">
                                    <Link href="#">
                                        Vivamus in nisi accumsan, bibendum quam a, porta est.
                                    </Link>
                                </h5>
                                {/* /.End Post Title */}
                                {/* Start Author Info */}
                                <ul className="authar-info d-flex flex-wrap fs-15 justify-content-center list-unstyled m-0 text-capitalize gap-3">
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-comment fs-12 me-1" />
                                            189 Comment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-user fs-12 me-1" />
                                            By Naeem
                                        </Link>
                                    </li>
                                </ul>
                                {/* /.End Author Info */}
                            </div>
                            <p className="mb-0">
                                The generated Lorem Ipsum is therefore always free from
                                repetition, injected humour.
                            </p>
                        </div>
                    </div>
                    {/* /.End Grid Post */}
                </div>
                
                {/* Start Pagination*/}

                <nav className="align-items-center border-top d-flex flex-wrap justify-content-center justify-content-sm-between mt-5 pagination">
                    <ul className="list-unstyled m-0 pages mt-3">
                        <li className="active">
                            <Link href="#">1</Link>
                        </li>
                        <li>
                            <Link href="#">2</Link>
                        </li>
                        <li>
                            <Link href="#">3</Link>
                        </li>
                        <li>
                            <Link href="#">4</Link>
                        </li>
                        <li>...</li>
                        <li>
                            <Link href="#">12</Link>
                        </li>
                    </ul>
                    <div className="ms-3 ms-sm-0 mt-3">
                        <Link className="btn btn-primary btn-sm" href="#">
                            Next
                            <i className="fa-solid fa-arrow-right ms-2" />
                        </Link>
                    </div>
                </nav>
                {/* End Pagination*/}
            </div>

            
            <div className="col-lg-4 ps-xxl-5">
                <StickyBox>
                    <div className="mb-4">
                        {/* Start Title */}
                        <h4 className="fw-semibold mb-3 text-capitalize">Search <span className="underline position-relative text-primary">Blog</span>
                        </h4>
                        {/* /.End Title */}
                        <div className="p-4 rounded-3 shadow">
                            <div className="input-group flex-nowrap">

                                <span className="input-group-text" id="addon-wrapping">
                                    <i className="fa-solid fa-magnifying-glass" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type and hit enter"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        {/* Start Title */}
                        <h4 className="fw-semibold mb-3 text-capitalize">Latest <span className="underline position-relative text-primary">Posts</span>
                        </h4>
                        {/* /.End Title */}
                        <div className="p-4 rounded-3 shadow">
                            <div className="news-list">
                                {/* Start News Item */}
                                <div
                                    className="news-list-item d-flex py-3 news-list-item-lg"
                                    data-aos="fade"
                                    data-aos-delay={300}
                                >
                                    <div className="flex-shrink-0 img-wrapper">
                                        {/* Start Image Thumb */}
                                        <Link
                                            href="blog-details"
                                            className="thumb position-relative d-block overflow-hidden position-relative rounded"
                                        >

                                            <img
                                                src="assets/img/blog/01-sm.jpg"
                                                alt=""
                                                height={85}
                                                width={115}
                                            />
                                        </Link>
                                        {/* /.End Image Thumb */}
                                    </div>
                                    <div className="flex-grow-1 p-post ms-3">
                                        {/* Start Title */}
                                        <h3 className="news-title fs-17 mb-2 overflow-hidden text-capitalize">
                                            <Link href="blog-details">
                                                eu feugiat pretium nibh ipsum consequat
                                            </Link>
                                        </h3>
                                        {/* /.End Title */}
                                        {/* Start Meta Info */}
                                        <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                                            <div className="text-primary fw-medium">
                                                Construction
                                            </div>
                                            <span className="vr" />
                                            <div>jun 23, 2023</div>
                                        </div>
                                        {/* /.End Meta Info */}
                                    </div>
                                </div>
                                {/* /.End News Item */}
                                {/* Start News Item */}
                                <div
                                    className="news-list-item d-flex py-3 news-list-item-lg"
                                    data-aos="fade"
                                    data-aos-delay={400}
                                >
                                    <div className="flex-shrink-0 img-wrapper">
                                        {/* Start Image Thumb */}
                                        <Link
                                            href="blog-details"
                                            className="thumb position-relative d-block overflow-hidden position-relative rounded"
                                        >

                                            <img
                                                src="assets/img/blog/02-sm.jpg"
                                                alt=""
                                                height={85}
                                                width={115}
                                            />
                                        </Link>
                                        {/* /.End Image Thumb */}
                                    </div>
                                    <div className="flex-grow-1 p-post ms-3">
                                        {/* Start Title */}
                                        <h3 className="news-title fs-17 mb-2 overflow-hidden text-capitalize">
                                            <Link href="blog-details">
                                                ut faucibus pulvinar elementum integer?
                                            </Link>
                                        </h3>
                                        {/* /.End Title */}
                                        {/* Start Meta Info */}
                                        <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                                            <div className="text-primary fw-medium">Design</div>
                                            <span className="vr" />
                                            <div>jun 23, 2023</div>
                                        </div>
                                        {/* /.End Meta Info */}
                                    </div>
                                </div>
                                {/* /.End News Item */}
                                {/* Start News Item */}
                                <div
                                    className="news-list-item d-flex py-3 news-list-item-lg"
                                    data-aos="fade"
                                    data-aos-delay={500}
                                >
                                    <div className="flex-shrink-0 img-wrapper">
                                        {/* Start Image Thumb */}
                                        <Link
                                            href="blog-details"
                                            className="thumb position-relative d-block overflow-hidden position-relative rounded"
                                        >

                                            <img
                                                src="assets/img/blog/03-sm.jpg"
                                                alt=""
                                                height={85}
                                                width={115}
                                            />
                                        </Link>
                                        {/* /.End Image Thumb */}
                                    </div>
                                    <div className="flex-grow-1 p-post ms-3">
                                        {/* Start Title */}
                                        <h3 className="news-title fs-17 mb-2 overflow-hidden text-capitalize">
                                            <Link href="blog-details">
                                                fames ac turpis egestas integer eget aliquet
                                            </Link>
                                        </h3>
                                        {/* /.End Title */}
                                        {/* Start Meta Info */}
                                        <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                                            <div className="text-primary fw-medium">Renovation</div>
                                            <span className="vr" />
                                            <div>jun 23, 2023</div>
                                        </div>
                                        {/* /.End Meta Info */}
                                    </div>
                                </div>
                                {/* /.End News Item */}
                                {/* Start News Item */}
                                <div
                                    className="news-list-item d-flex py-3 news-list-item-lg"
                                    data-aos="fade"
                                    data-aos-delay={600}
                                >
                                    <div className="flex-shrink-0 img-wrapper">
                                        {/* Start Image Thumb */}
                                        <Link
                                            href="blog-details"
                                            className="thumb position-relative d-block overflow-hidden position-relative rounded"
                                        >

                                            <img
                                                src="assets/img/blog/04-sm.jpg"
                                                alt=""
                                                height={85}
                                                width={115}
                                            />
                                        </Link>
                                        {/* /.End Image Thumb */}
                                    </div>
                                    <div className="flex-grow-1 p-post ms-3">
                                        {/* Start Title */}
                                        <h3 className="news-title fs-17 mb-2 overflow-hidden text-capitalize">
                                            <Link href="blog-details">
                                                ullamcorper a lacus vestibulum sed.
                                            </Link>
                                        </h3>
                                        {/* /.End Title */}
                                        {/* Start Meta Info */}
                                        <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize">
                                            <div className="text-primary fw-medium">Design</div>
                                            <span className="vr" />
                                            <div>jun 23, 2023</div>
                                        </div>
                                        {/* /.End Meta Info */}
                                    </div>
                                </div>
                                {/* /.End News Item */}
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        {/* Start Title */}
                        <h4 className="fw-semibold mb-3 text-capitalize">Category</h4>
                        {/* /.End Title */}
                        <ul className="category-list fs-15 fw-medium list-unstyled m-0 overflow-hidden position-relative ps-0 py-4 rounded-3 shadow">
                            <li className="hvr-sweep-to-bottom position-relative px-4 py-2">
                                <Link href="#">
                                    Construction <span>12</span>
                                </Link>
                            </li>
                            <li className="hvr-sweep-to-bottom position-relative px-4 py-2">
                                <Link href="#">
                                    Renovation <span>26</span>
                                </Link>
                            </li>
                            <li className="hvr-sweep-to-bottom position-relative px-4 py-2">
                                <Link href="#">
                                    Design <span>55</span>
                                </Link>
                            </li>
                            <li className="hvr-sweep-to-bottom position-relative px-4 py-2">
                                <Link href="#">
                                    Modern <span>37</span>
                                </Link>
                            </li>
                            <li className="hvr-sweep-to-bottom position-relative px-4 py-2">
                                <Link href="#">
                                    Bionics <span>62</span>
                                </Link>
                            </li>
                            <li className="hvr-sweep-to-bottom position-relative px-4 py-2">
                                <Link href="#">
                                    Apartments <span>10</span>
                                </Link>
                            </li>
                            <li className="hvr-sweep-to-bottom position-relative px-4 py-2">
                                <Link href="#">
                                    Houses <span>43</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        {/* Start Title */}
                        <h4 className="fw-semibold mb-3 text-capitalize">Tags <span className="underline position-relative text-primary">Clouds</span>
                        </h4>
                        {/* /.End Title */}
                        {/* Start Tags */}
                        <div className="ui tag labels">
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                For Sale
                            </Link>
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                Apartments
                            </Link>
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                Construction
                            </Link>
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                Design
                            </Link>
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                Modern
                            </Link>
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                Houses
                            </Link>
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                Bionics
                            </Link>
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                House
                            </Link>
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                Renovation
                            </Link>
                            <Link
                                href="#"
                                className="d-inline-block fs-13 fw-medium label mb-2 ms-3 position-relative px-3 py-2 ui"
                            >
                                Villa
                            </Link>
                        </div>
                        {/* /.End Tags */}
                    </div>
                </StickyBox>
            </div>
        </div>

    );
};

export default BlogSticky;