$(document).ready(function() {

    var gameRef = new Firebase('https://gf727yr3y0a.firebaseio-demo.com/game_list');

    $('#show-btn').click(function() {
        // console.log("show button clicked");
        $('.game-table').slideDown();
        $('.games-topic')
        .html('<span class="topic">Game Showed</span>')
        .css({
          'color': 'red',
        })
        .addClass('huge-text');
    });


    $('#hide-btn').click(function() {
        // console.log("hide button clicked");
        $('.game-table').slideUp();
        $('.games-topic')
        .text('Game Hide')
        .css({
          'color': 'blue',
        })
        .removeClass('huge-text');
    });

    $('#toggle-btn').click(function() {
        $('.game-table').slideToggle();
    });

    $('#get-btn').click(function() {
        var team = $($('table tr td')[2]).text();
        console.log(team);
    });

    // function appendTd(row, name) {
    //     var value = $('#' + name).val();
    //     if (value != '') {
    //         $('<td>').text(value).appendTo(row);
    //         return true;
    //     } else {
    //         return false;   
    //     }
        
    // }

    $('#add-btn').click(function() {
        if ($('#date').val() != "" 
            && $('#time').val() != ""
            && $('#team1').val() != ""
            && $('#team2').val() != "") {

            var gameObj = {
                date: $('#date').val(),
                time: $('#time').val(),
                team1: $('#team1').val(),
                team2: $('#team2').val()
            }

            gameRef.push(gameObj);

            $('#date, #time, #team1, #team2').val('');
        } else {
            alert("Please check your input variables!");
        }
    });

    $('table').on('click', 'td', function() {
        var gameKey = $(this).parent().attr('id');
        // console.log(gameKey);
        var currentGame = new Firebase('https://gf727yr3y0a.firebaseio-demo.com/game_list/' + gameKey);
        currentGame.remove();
        $(this).parent().remove();
    });

    gameRef.on('child_added', function(snapshot) {
      var gameObj = snapshot.val();
      var gameKey = snapshot.key();
      console.log(gameKey);
      var row = $('<tr>').attr('id', gameKey).appendTo('#game-table');
      $('<td>').text(gameObj.date).appendTo(row);
      $('<td>').text(gameObj.time).appendTo(row);
      $('<td>').text(gameObj.team1).appendTo(row);
      $('<td>').text(gameObj.team2).appendTo(row);
    });

}); 