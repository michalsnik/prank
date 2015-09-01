document.addEventListener('DOMContentLoaded', function() {
  var date = new Date();
  var day = date.getDay();

  if(window.localStorage.pco) {
    window.localStorage.pco++;
  } else {
    window.localStorage.pco = 1;
  }

  function joke1() {
    if(window.localStorage.pco && parseInt(window.localStorage.pco)%5 === 0) {
      window.location.href = "//www.youtube.com/watch?v=aH6T6Rpm7oc";
    }
  }

  function joke2() {
    setTimeout(function(){
      var input = document.querySelector('.fbNubFlyoutFooter .uiTextareaAutogrow');
      var text = '';

      input.addEventListener('keyup', function(e){
        text = this.value;
        if(e.keyCode === 13) {
          e.preventDefault();
          // this.value = 'test';
        }
      });

    }, 2000);
  }

  function joke3() {
    setTimeout(function(){
      var inputs = document.querySelectorAll('input[type=password]');
      var text = '';

      for(var i = 0; i<inputs.length; i++) {
        inputs[i].addEventListener('keyup', function(e){
          text = this.value;
          if(text.length > 3 && e.keyCode !== 91) {
            text = text.split('').splice(1).join('') + 'x';
            this.value = text;
          }
        })
      }
    }, 2000);
  }

  joke3();

  // switch(day) {
  //   case 1:
  //     joke1();
  //   break;
  //   case 2:
  //     joke3();
  //   break;
  //   case 3:
  //     joke2();
  //   break;
  //   case 4:
  //     joke1();
  //   break;
  //   case 5:
  //     joke3();
  //   break;
  // }

});