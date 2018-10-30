document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */

  var buttonRun = document.getElementById('buttonRun')

  buttonRun.addEventListener('click', function(e){
    var request = axios({
      url:'https://intro-ajax-api.herokuapp.com',
      method: 'get',
      data: '',
      dataType: 'text'
    })
  });

  var  buttonRunPingPong = document.getElementById('buttonRunPingPong')
  buttonRunPingPong.addEventListener('click', function(e){
    var request = axios({
      url:'https://intro-ajax-api.herokuapp.com/ping',
      method: 'get',
      data: '',
      dataType: 'text'
    }).then(function(response){
      console.log(`${response.data}`);
      var section3456 = document.getElementById('step3456')
      section3456.append(`${response.data}`)
    })
  });


});
