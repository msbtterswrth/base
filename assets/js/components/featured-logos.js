(function (Drupal, $, window) {
  'use strict';

  Drupal.behaviors.featuredLogos = {
    attach: function (context, settings) {
      $('.featured-logos .logo-slider').each(function () {
        let $slider = $(this);
        if(!$slider.hasClass('slick-initialized')) {
          $slider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
          });

        }
      });
    }
  };
}(Drupal, jQuery, this));
