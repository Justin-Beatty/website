var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


$('.bookmarkIcon').click(function() {
  console.log($('.bi-bookmark-heart-fill'));
    $('i', this).toggleClass('bi-bookmark bi-bookmark-heart-fill');
    $(this).popover('dispose');
    console.log($('.bi-bookmark-heart-fill'));
    if($('.bi-bookmark-heart-fill')) {
      $(this).attr('data-bs-content', "Bookmark removed!");
    }

   // $(this).attr('data-bs-content', (popoverMsg) => popoverMsg == "Bookmark added!" ? "Bookmark removed!" : "Bookmark added!");

    $(this).popover('show');

    /*if ($(this).attr('data-bs-content') == "Bookmark added!") {
      $(this).popover({
        trigger: 'manual',
        placement: 'left',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        content: function() {
          return 'Bookmark removed!';
        }
      })
    }*/

    
    /*$('.bookmarkIcon').popover({
      content: function(popoverMsg) {
        alert(popoverMsg);
        return popoverMsg == "Bookmark added" ? "Bookmark removed" : "Bookmark added";
      }
    });*/




  });