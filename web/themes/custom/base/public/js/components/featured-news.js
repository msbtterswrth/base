!function(e,t,i){"use strict";e.behaviors.featuredNews={attach:function(e,i){enquire.register("screen and (max-width:992px)",{match:function(){t(".news-hero .featured-articles > div").each((function(){t(this).slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,adaptiveHeight:!0})}))},unmatch:function(){},setup:function(){},deferSetup:!0,destroy:function(){}})}}}(Drupal,jQuery);
//# sourceMappingURL=featured-news.js.map
