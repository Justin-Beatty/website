var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


$('.bookmarkIcon').click(function() {
    $('i', this).toggleClass('bi-bookmark bi-bookmark-heart-fill');
    $('.bookmarkIcon').attr('data-bs-content', (_, popoverMsg) => popoverMsg == "Bookmark removed" ? "Bookmark added" : "Bookmark removed");
    });