!function(e,s,o){"use strict";e.behaviors.newsSlider={attach:function(e,s){var o=jQuery.noConflict();jq(once("latest-news",".latest-news .view-content",e)).each((function(){let e=o(this);void 0!==e.slick&&e.slick({slidesToShow:4,slidesToScroll:1,centerMode:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})}))}}}(Drupal,jQuery);
//# sourceMappingURL=latest-news.js.map