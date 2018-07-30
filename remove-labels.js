if (window.jQuery === undefined) {
  console.log('loading jQuery');
  var jq = document.createElement('script');
  jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  document.getElementsByTagName('head')[0].appendChild(jq);
  setTimeout(function() {
    jQuery.noConflict();
    var iframed_labels = jQuery('#ptifrmtgtframe').contents().find('label');
    console.log('jQuery loaded');
    console.log(jQuery(iframed_labels).length + ' labels will be removed');
    jQuery(iframed_labels).each(function() {
      jQuery(this).css('display', 'none');
    });
  }, 1000);
  void(0);
} else {
  var iframed_labels = jQuery('#ptifrmtgtframe').contents().find('label');
  console.log(jQuery(iframed_labels).length + ' labels where found');
  console.log('jQuery loaded already');
  if (jQuery(iframed_labels).length) {
    jQuery(iframed_labels).each(function() {
      jQuery(this).css('display', 'none');
    });
  }
}
