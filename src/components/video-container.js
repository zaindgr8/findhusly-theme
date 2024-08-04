"use client"
import React, { useEffect } from 'react';
import 'magnific-popup/dist/magnific-popup.css';
import $ from 'jquery'; // Ensure jQuery is imported


export default function VideoContainer() {
    useEffect(() => {
        // Initialize Magnific Popup on your gallery
        $('.popup-youtube').magnificPopup({
            type: 'iframe',
          });
      }, []);
    return (
        <div className="col-xl-8">
        {/* Start About Video Section */}
        <div className="about-video home-about_video position-relative">
          {/* Image Parallax */}
          <img
            src="assets/img/about-bg-02.jpg"
            alt=""
            className="about-img image-parallax"
          />
          <a
            className="popup-youtube align-items-center d-flex justify-content-center position-absolute rounded-circle start-50 top-50 video-icon z-1"
            href="https://www.youtube.com/watch?v=0O2aH4XLbto"
          >
            <i className="fa-solid fa-play fs-20" />
          </a>
        </div>
        {/* /.End About Video Section */}
      </div>  
    );
}
