$(document).ready(funtion(){
  $('form').submit(function(event){
    event.preventDefault();

    var season = $('input:radio[name=season]:checked').val();
    var starwars = $('input:radio[name=starwars]:checked').val();
    var physics = $('input:radio[name=physics]:checked').val();
    var cereal = $('input:radio[name=cereal]:checked').val();
    var batteries = $('input:radio[name=batteries]:checked').val();

    let input = 0;

      if (season === '1'){
        input++;
      }
      if (starwars === '1'){
        input++;
      }
      if (physics === '1') {
        input++;
      }
      if (cereal === '1') {
        input++;
      }
      if (batteries ==='1') {
        input++;
      }
  });
});
