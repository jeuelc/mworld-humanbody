/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-humanbody.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundhowlifeworks.pause(); bgsoundhowlifeworks.currentTime = 0; 
});

$('.menubtnhowlifeworks').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnhowlifeworks').css('background-position', '0px -90px');
    }, 300);
  var housingpos = $('.menuhousing').position();
  if(housingpos.left == -234) {
    $('.menuhousing').animate({'left':'-334px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'left':'-660px'}); });
    $('.homebtnholder').animate({'left':'3px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'left':'-93px'}); });
    $('.mpbtnholder').animate({'left':'80px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'left':'-93px'}); });
    $('.cpbtnholder').animate({'left':'153px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'left':'-93px'}); });
    $('.infobtnholder').animate({'left':'222px','opacity':0}, 500, "easeInBack", function() { $('.infobtnholder').css({'left':'-93px'}); });
    $('.credsbtnholder').animate({'left':'288px','opacity':0}, 500, "easeInBack", function() { $('.credsbtnholder').css({'left':'-93px'}); });
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.credsbtnholder').css({'opacity':1});
    $('.infobtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.menuhousing').animate({'left':'-234px'}, 1000, "easeInOutBack");
    $('.credsbtnholder').animate({'left':'368px'}, 1000, "easeInOutBack");
    $('.infobtnholder').animate({'left':'302px'}, 1100, "easeInOutBack");
    $('.cpbtnholder').animate({'left':'233px'}, 1200, "easeInOutBack");
    $('.mpbtnholder').animate({'left':'160px'}, 1300, "easeInOutBack");
    $('.homebtnholder').animate({'left':'83px'}, 1400, "easeInOutBack");
  }
});

$('.homebtnhowlifeworks').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnhowlifeworks').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnhowlifeworks').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnhowlifeworks').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnhowlifeworks').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnhowlifeworks').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnhowlifeworks').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnhowlifeworks').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnhowlifeworks').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnhowlifeworks').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnhowlifeworks').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnhowlifeworks').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bhowlifeworks').position();
  if (botsposition.left == 1024) {
    $('.bhowlifeworks').css({'opacity':1});
    $('.plhowlifeworks').css({'opacity':1});
    $('.fhowlifeworks').css({'opacity':1});
    $('.bhowlifeworks').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plhowlifeworks').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fhowlifeworks').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bhowlifeworks').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bhowlifeworks').css({'left':'1024px'}); });
    $('.plhowlifeworks').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plhowlifeworks').css({'left':'1024px'}); });
    $('.fhowlifeworks').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fhowlifeworks').css({'left':'1024px'}); });
  }
});

$('.rwhowlifeworks').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwhowlifeworks').css('background-position-y', '-73px');
    }, 300);
});

$('.plpshowlifeworks').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpshowlifeworks').css('background-position-y', '-73px');
    }, 300);
});

$('.fwhowlifeworks').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwhowlifeworks').css('background-position-y', '-73px');
    }, 300);
});