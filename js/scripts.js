$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var season = $('input:radio[name=season]:checked').val();
    var starwars = $('input:radio[name=starwars]:checked').val();
    var physics = $('input:radio[name=physics]:checked').val();
    var cereal = $('input:radio[name=cereal]:checked').val();
    var batteries = $('input:radio[name=batteries]:checked').val();

    let input = 0;

      if (season === 'Javascript') {
        input++;
      }

      if (season === 'Python') {
        input += 2;
      }

      if (season === 'Ruby') {
        input +=3;
      }

      if (starwars === 'Javascript') {
        input++;
      }

      if (starwars === 'Python') {
        input += 2;
      }

      if (starwars === 'Ruby') {
        input +=3;
      }

      if (physics === 'Javascript') {
        input++;
      }

      if (physics === 'Python') {
        input += 2;
      }

      if (physics === 'Ruby') {
        input +=3;
      }

      if (cereal === 'Javascript') {
        input++;
      }

      if (cereal === 'Python') {
        input += 2;
      }

      if (cereal === 'Ruby') {
        input +=3;
      }

      if (batteries === 'Javascript') {
        input++;
      }

      if (batteries === 'Python') {
        input += 2;
      }

      if (batteries === 'Ruby') {
        input +=3;
      }

      if (input < 8) {
        input = 'Javascript';
      }

      if (input >= 8 && input <= 15 ) {
        input = 'Python';
      }

      else {
        input = 'Ruby';
      }

      $(".result").empty().append(input);
      $("#message").show();

  });
});
