document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var buttonRun = document.getElementById('buttonRun');

  var section3456 = document.getElementById('step3456');

  var buttonRunPingPong = document.getElementById('buttonRunPingPong');

  var buttonStep7 = document.getElementById('buttonStep7');
  var section7 = document.getElementById('step7');

  var buttonStep8 = document.getElementById('buttonStep8');
  var section8 = document.getElementById('step8');

  var buttonStep9 = document.getElementById('buttonStep9');
  var section9 = document.getElementById('step9');
  var car = document.getElementById('car')


  buttonRun.addEventListener('click', function(e){
    var request = axios({
      url:'https://intro-ajax-api.herokuapp.com',
      method: 'get',
      data: '',
      dataType: 'text'
    })
  });


  buttonRunPingPong.addEventListener('click', function(e){
    var request = axios({
      url:'https://intro-ajax-api.herokuapp.com/ping',
      method: 'get',
      data: '',
      dataType: 'text'
    }).then(function(response){
      console.log(`${response.data}`);
      section3456.append(`${response.data}`)
    }).catch(function(err){
      var errorMsg = 'I will try harder next time !'
      console.log("something went wrong");
      section3456.append(`${errorMsg}`)
    }).then(function(response){
      console.log('request finished !');
    })
  });

  buttonStep7.addEventListener('click', function(e){
    var request = axios({
      url:'https://intro-ajax-api.herokuapp.com/count',
      method: 'get',
      data: '',
      dataType: 'text'
    }).then(function(response){
      console.log(`${response.data}`);
      section7.append(`${response.data}`)
    })
  });

  buttonStep8.addEventListener('click', function(e){
    var request = axios({
      url:'https://intro-ajax-api.herokuapp.com/time',
      method: 'get',
      params: {timezone:'Europe/Sofia'},
      dataType: 'text'
    }).then(function(response){
      console.log(`${response.data}`);
      section8.append(`${response.data}`)
    })
  });

  buttonStep9.addEventListener('click', function(e){
    var request = axios({
      url:'https://intro-ajax-api.herokuapp.com/a_car',
      method: 'get',
      data: "",
      dataType: 'html'
    }).then(function(response) {
      car.append(response.data)

    })
  });




});
