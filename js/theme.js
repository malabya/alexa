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
      $("#close").hide();

      $('#hamburger').click(
        function () {
          $(this).hide();
          $("#close").show();
          $(".sf-menu").addClass("mobile-active");
        }
      );

      $("#close").click(
        function () {
          $(this).hide();
          $("#hamburger").show();
          $(".sf-menu").removeClass("mobile-active");
        }
      );

      $('.mobnav-subarrow').click(
        function () {
          $(this).parent().toggleClass("xpopdrop");
        });
    }
  };

  // Fitvids plugin
  Drupal.behaviors.responsiveSuperfish = {
    attach: function () {
      $("#page").fitVids();
    }
  };
})(jQuery);
