$(document).ready(function() {
  alert.('test');
  $('form').submit(function(event) {
    event.preventDefault();

    var season = $('input:radio[name=season]:checked').val();
    var starwars = $('input:radio[name=starwars]:checked').val();
    var physics = $('input:radio[name=physics]:checked').val();
    var cereal = $('input:radio[name=cereal]:checked').val();
    var batteries = $('input:radio[name=batteries]:checked').val();

    let input = 0;
    alert.('test');

      if (season === '1'){
        input++;
        alert.('test');

      }
      if (starwars === '1'){
        input++;
        alert.('test');

      }
      if (physics === '1') {
        input++;
        alert.('test');

      }
      if (cereal === '1') {
        input++;
        alert.('test');

      }
      if (batteries ==='1') {
        input++;
        alert.('test');

      }
      if (input >= 3) {
        input = "Python";
        alert.('test');

      }

      $(".result").empty().text(input);
      $("#message").show();

  });
});
