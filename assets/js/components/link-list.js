(function (Drupal, $, window) {
    'use strict';

    Drupal.behaviors.linkList = {
        attach: function (context, settings) {
            // enquire.register(this.settings.breakpoints['base.sm_max'].query, {
            //     match: () => {
                    $('.base__link-list h4').click(function () {
                        let height = $(this).next('ul').prop('scrollHeight') + 4;
                        $(this).toggleClass('open');
                        $(this).siblings().removeClass('open');
                        $(this).siblings('ul').css('max-height', 0);
                        if ($(this).hasClass('open')) {
                            $(this).next('ul').css('max-height', height + 4);
                        }
                        else {
                            $(this).next('ul').css('max-height', 0);
                        }
                    });
                },
        //     });
        // }
    };
}(Drupal, jQuery, this));
