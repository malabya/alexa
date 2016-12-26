/**
 * @file
 * Global javascripts for the theme.
 */

(function ($) {
  // Superfish behavior.
  Drupal.behaviors.superfish = {
    attach: function () {
      $('ul.sf-menu').superfish({
        delay: 100,
        animation: {opacity: 'show', height: 'show'},
        speed: 'fast',
        autoArrows: true
      });
    }
  };

  Drupal.behaviors.responsiveSuperfish = {
    attach: function () {
      $(".collapse").hide();

      $('.expand').click(
        function () {
          $(this).hide();
          $(this).next().show();
          $(this).next().next().addClass("mobile-active");
        }
      );

      $(".collapse").click(
        function () {
          $(this).hide();
          $(this).prev().show();
          $(this).next().removeClass("mobile-active");
        }
      );

      $('.mobnav-subarrow').click(
        function () {
          $(this).parent().toggleClass("xpopdrop");
        });
    }
  };

  // Fitvids plugin
  Drupal.behaviors.fitVids = {
    attach: function () {
      $("#page").fitVids();
    }
  };
})(jQuery);
