
javascript: if (window.jQuery === undefined) {
  console.log('loading jQuery');
  var jq = document.createElement('script');
  jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  document.getElementsByTagName('head')[0].appendChild(jq);
  setTimeout(function() {
    jQuery.noConflict();
    var iframed_target = jQuery('#ptifrmtgtframe').contents().find('table');
    console.log('jQuery loaded');
    console.log(jQuery(iframed_target).length + ' tables will be highlighted');
    jQuery(iframed_target).each(function() {

      var role = jQuery(this).attr('role');
      if (typeof role !== typeof undefined && role !== false) {
        jQuery(this).css('border','1px dashed blue');
      } else {
        jQuery(this).css('border','1px solid red');
      }

    });
  }, 1000);
  void(0);
} else {
  var iframed_target = jQuery('#ptifrmtgtframe').contents().find('table');
  console.log(jQuery(iframed_target).length + ' tables will be highlighted');
  console.log('jQuery loaded already');
  if (jQuery(iframed_target).length) {
    jQuery(iframed_target).each(function() {
      var role = jQuery(this).attr('role');
      if (typeof role !== typeof undefined && role !== false) {
        jQuery(this).css('border','1px dashed red');
      } else {
        jQuery(this).css('border','1px solid blue');
      }

    });
  }
}
