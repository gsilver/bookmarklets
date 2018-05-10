javascript: if (window.jQuery === undefined) {
  console.log('loading jQuery');
  var jq = document.createElement('script');
  jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  document.getElementsByTagName('head')[0].appendChild(jq);
  setTimeout(function() {
    jQuery.noConflict();
    var iframed_tabindex = jQuery('#ptifrmtgtframe').contents().find('img');
    console.log('jQuery loaded');
    console.log(jQuery(iframed_tabindex).length + ' tabindex attributes will be removed');
    jQuery(iframed_tabindex).each(function() {
      jQuery(this).css('border','1px solid red');
      jQuery(this).removeAttr("tabindex");
    });
  }, 1000);
  void(0);
} else {
  var iframed_tabindex = jQuery('#ptifrmtgtframe').contents().find('[tabindex]');
  console.log(jQuery(iframed_tabindex).length + ' tabindex where found');
  console.log('jQuery loaded already');
  if (jQuery(iframed_tabindex).length) {
    jQuery(iframed_tabindex).each(function() {
      jQuery(this).css('border','1px solid red');
      jQuery(this).removeAttr("tabindex");
    });
  }
}
