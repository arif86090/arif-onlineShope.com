
                    $('.as').owlCarousel({
                  loop:true,
                  margin:10,
                  nav:true,
                  responsive:{
           0:{
            items:1
                },
           600:{
            items:1
                  },
           1000:{
            items:1
                 }
             }
              })


                    $('.aa').owlCarousel({
                  loop:true,
                  margin:30,
                  nav:true,
                  autoplay:true,
                   autoplayTimeout:2000,

                  responsive:{
           0:{
            items:2
                },
           600:{
            items:3
                  },
           1000:{
            items:3
                 }
             }
              })





                    $('.comment').owlCarousel({
                  loop:true,
                  margin:30,
                  nav:true,
                  // autoplay:true,
                   // autoplayTimeout:2000,

                  responsive:{
           0:{
            items:1
                },
           600:{
            items:1
                  },
           1000:{
            items:1
                 }
             }
              })

                    $(document).ready(function(){
                      var mixer=mixitup(".mx-it");});


// <!--  set time out popUp -->

$(document).ready(function(){
  setTimeout(function(){
    $('#popupmain').css('display','block');
  },5000);
})

$('.submitid').click(function(){
  
   $('#popupmain').css('display','none');
})