(function (Drupal, $, window) {
    'use strict';

    Drupal.behaviors.mediaEmbed = {
        attach: function (context, settings) {
            var $jq = jQuery.noConflict();
            $jq('.base__media-embed .slider').each(function () {
                let $mediaSlider = $jq(this);
                if (typeof $mediaSlider.slick !== 'undefined') {
                    $mediaSlider.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true,
                        prevArrow: $mediaSlider.parents('.base__media-embed').find('.prev-slide'),
                        nextArrow: $mediaSlider.parents('.base__media-embed').find('.next-slide'),
                        responsive: [
                            {
                                breakpoint: 768,
                                settings: {
                                    adaptiveHeight: true
                                }
                            }
                        ]
                    });
                }
            });
        }
    };
}(Drupal, jQuery, this));
