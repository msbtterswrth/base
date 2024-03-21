(function (Drupal, $, window) {
    'use strict';

    Drupal.behaviors.accordions = {
        _isInvokedByDocumentReady: true,
        attach: function (context, settings) {
            if (this._isInvokedByDocumentReady) {

                $('.base__accordions .accordion-title').click(function () {
                    var height = $(this).next('div').prop('scrollHeight') + 20;
                    $(this).toggleClass('open');
                    $(this).siblings().removeClass('open');
                    $(this).siblings('div').css('max-height', 0);
                    if ($(this).hasClass('open')) {
                        $(this).next('div').css('max-height', height);
                    }
                    else {
                        $(this).next('div').css('max-height', 0);
                    }
                });
            }

        }
    };
}(Drupal, jQuery, this));
