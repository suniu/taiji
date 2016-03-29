var myDataRef = new Firebase('https://gf727yr3y0a.firebaseio-demo.com/contact_list');


myDataRef.on('child_added', function(snapshot) {
  //We'll fill this in later.
  var contactObj = snapshot.val();
  $('<p>').text('name: ' + contactObj.name).appendTo('body');
  $('<p>').text('email: ' + contactObj.email).appendTo('body');
  $('<p>').text('message: ' + contactObj.message).appendTo('body');
});

// console.log(myDataRef);
$('#submit-btn').click(function() {
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();

  // $.get( "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo", function( data ) {
  //   console.log(data);
  // });

  // $.post('/', {name: name, email: email, message: message}, function( data ) {
  //   console.log(data);
  // });

  var contactObj = {
    name: name,
    email: email,
    message: message
  }

  myDataRef.push(contactObj);
});

