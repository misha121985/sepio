//= ../../node_modules/bootstrap/dist/js/bootstrap.js

(function ($) {
    $(document).ready(function () {
      WebFontConfig={
        google:{families: ['Exo', 'Quicksand']}
      };

      (function(){
        var wf = document.createElement("script");
        wf.src = ("https:" == document.location.protocol ? "https":"http") +
          "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
        wf.type="text/javascript";
        wf.async="true";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(wf, t)
      })();
    });
})(jQuery);