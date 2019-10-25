$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var season = $('input:radio[name=season]:checked').val();
    var starwars = $('input:radio[name=starwars]:checked').val();
    var physics = $('input:radio[name=physics]:checked').val();
    var cereal = $('input:radio[name=cereal]:checked').val();
    var batteries = $('input:radio[name=batteries]:checked').val();

    let input = 0;

      if (season === 'Javascript'){
        input++;

      }
      if (starwars === 'Javascript'){
        input++;

      }
      if (physics === 'Javascript') {
        input++;

      }
      if (cereal === 'Javascript') {
        input++;

      }
      if (batteries ==='Javascript') {
        input++;

      }
      if (input >= 3) {
        input = "Python";

      }

      $(".result").empty().text(input);
      $("#message").show();

  });
});
