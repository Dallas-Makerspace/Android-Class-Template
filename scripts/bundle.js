// when DOM.ready:
window.addEventListener('DOMContentLoaded', function() {
  document
    .querySelector('body')
    .bootstrapMaterialDesign();
});

// when Document.ready:
window.addEventListener('load', function() {
  /* global navigator */
  if ('serviceWorker' in navigator) {
    console.log("Will the service worker register?");
    navigator
      .serviceWorker
      .register('/scripts/serviceworker.js')
      .then(function(reg)  { console.log("Yes, it did."); })
      .catch(function(err) { console.log("No it didn't. This happened: ", err); });
  }
});

// Everything else:
(function(){
})();
