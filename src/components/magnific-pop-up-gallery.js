"use client"
import React, { useEffect } from 'react';
import 'magnific-popup/dist/magnific-popup.css';
import $ from 'jquery'; // Ensure jQuery is imported
const PopUpImageGallery = () => {
  useEffect(() => {
    // Initialize Magnific Popup on your gallery
    $('.grid-images-item-wrap').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    $('.popup-youtube').magnificPopup({
      type: 'iframe',
    });
    $('#browse-gallery-link').on('click', function () {
      $('.grid-images-item-wrap').magnificPopup('open');
    });

  }, []);

  return (
    <div className="position-relative">
      {/* Start Header Masonry */}
      <div className="header-masonry position-relative">
        <div id="gallery-1" className="header-masonry-grid zoom-gallery">
          <div className="column-start">
            <a
              href="assets/img/property-details/01.jpg"
              className="grid-images-item-wrap overflow-hidden position-relative rounded-4 h-100 w-100 d-block"
            >
              {/* Masonry Image */}
              <img
                src="assets/img/property-details/01.jpg"
                alt=""
                className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
              />
            </a>
          </div>
          <div className="column-start-end">
            <a
              href="assets/img/property-details/02.jpg"
              className="grid-images-item-wrap overflow-hidden position-relative rounded-4 w-100 box-ratio-2-3 d-block"
            >
              {/* Masonry Image */}
              <img
                src="assets/img/property-details/02.jpg"
                alt=""
                className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
              />
            </a>
            <a
              href="assets/img/property-details/03.jpg"
              className="grid-images-item-wrap overflow-hidden position-relative rounded-4 w-100 box-ratio-2-3 d-block"
            >
              {/* Masonry Image */}
              <img
                src="assets/img/property-details/03.jpg"
                alt=""
                className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
              />
            </a>
          </div>
        </div>
      </div>
      {/* /. End Header Masonry */}
      <div className="header-share align-items-center bg-dark d-flex gap-2 flex-wrap g-3 header-btn-group p-3 p-lg-4 mt-3 mt-md-0">
        <button type="button" className="btn btn-sm btn-primary">
          <i className="fa-solid fa-share-nodes me-2" />
          Share
        </button>
        <a href="#" id="browse-gallery-link" className="btn btn-sm btn-primary btn-gallery">
          <i className="fa-solid fa-image me-2" />
          Browse Gallery
        </a>
        {/* End Product Images Slider */}
        <div className="product-video-btn">
          <a
            className="popup-youtube d-flex align-items-center justify-content-center "
            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
          >
            <div className="btn-video bg-primary text-white d-flex align-items-center justify-content-center rounded-pill me-2">

              <i className="fa-solid fa-video" />
            </div>
            <span className="text-white fw-medium">Watch video</span>
          </a>
        </div>
        {/* /.End of product video button */}
      </div>
    </div>

  );
};

export default PopUpImageGallery;
