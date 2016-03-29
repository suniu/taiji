$(document).ready(function() {

  function toggleImage(cImage, imageUrl) {
    var changedImage = imageUrl;
    var currentImage = $(cImage).find('img').attr('src');
    if (currentImage == changedImage) {
      var origImage = $(cImage).find('img').attr('data-src');
      $(cImage).find('img').attr('src', origImage);
    } else {
      var origImage = $(cImage).find('img').attr('src');
      $(cImage).find('img').attr('src', changedImage);
    }
    $(cImage).find('img').attr('data-src', origImage);
  }

  $('.diff-sports div').click(function() {
      toggleImage(this, "http://previews.123rf.com/images/artenot/artenot1312/artenot131200003/24232141-conceptual-illustration-of-sport-flat-design-concept-Stock-Vector.jpg");
  });
  
});