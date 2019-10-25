$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var season = $('input:radio[name=season]:checked').val();
    var starwars = $('input:radio[name=starwars]:checked').val();
    var physics = $('input:radio[name=physics]:checked').val();
    var cereal = $('input:radio[name=cereal]:checked').val();
    var batteries = $('input:radio[name=batteries]:checked').val();

    let inputJavascript = 0;
    let inputPython = 0;
    let inputRuby = 0;

      if (season === 'Javascript') {
        inputJavascript++;
      }

      if (season === 'Python') {
        inputPython++;
      }

      if (season === 'Ruby') {
        inputRuby++;
      }

      if (starwars === 'Javascript') {
        inputJavascript++;
      }

      if (starwars === 'Python') {
        inputPython++;
      }

      if (starwars === 'Ruby') {
        inputRuby++;
      }

      if (physics === 'Javascript') {
        inputJavascript++;
      }

      if (physics === 'Python') {
        inputPython++;
      }

      if (physics === 'Ruby') {
        inputRuby++;
      }

      if (cereal === 'Javascript') {
        inputJavascript++;
      }

      if (cereal === 'Python') {
        inputPython++;
      }

      if (cereal === 'Ruby') {
        inputRuby++;
      }

      if (batteries === 'Javascript') {
        inputJavascript++;
      }

      if (batteries === 'Python') {
        inputPython++;
      }

      if (batteries === 'Ruby') {
        inputRuby++;
      }

      if (inputJavascript === 3 || inputJavascript === 4 || inputJavascript === 5) {
        inputJavascript = 'Javascript';
        $(".result").empty().append(inputJavascript);
        $("#message").show();
      }

      else if (inputPython === 3 || inputPython === 4 || inputPython === 5) {
        inputPython = 'Python';
        $(".result").empty().append(inputPython);
        $("#message").show();
      }

      else if (inputRuby === 3 || inputRuby === 4 || inputRuby === 5) {
        inputRuby = 'Ruby';
        $(".result").empty().append(inputRuby);
        $("#message").show();
      }


  });
});
