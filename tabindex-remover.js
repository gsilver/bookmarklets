javascript: if (window.jQuery === undefined) {
  console.log('loading jQuery');
  var jq = document.createElement('script');
  jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  document.getElementsByTagName('head')[0].appendChild(jq);
  setTimeout(function() {
    jQuery.noConflict();
    console.log('jQuery loaded');
    var tabindexEls = jQuery('body').find('[tabindex]:not([tabindex="0"]):not([tabindex^="-"])');
    console.log(jQuery(tabindexEls).length + ' tabindex attributes greater than 0 will be removed');
    jQuery(tabindexEls).each(function() {
      jQuery(this).removeAttr("tabindex");
    });
  }, 1000);
  void(0);
} else {
  console.log('jQuery loaded already');
  var tabindexEls = jQuery('body').find('[tabindex]:not([tabindex="0"]):not([tabindex^="-"])');
  console.log(jQuery(tabindexEls).length + ' tabindex attributes greater than 0 will be removed');
  jQuery(tabindexEls).each(function() {
    jQuery(this).removeAttr("tabindex");
  });
}
