$(document).ready(function () {
    $('.article_sale_ul').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 5
    });
    $('#big_menu1').click(function(){
      $("#big_menu").fadeIn('fast');
      $("#big_menu").slideDown('fast');
      $("#big_menu").addClass('list_actiond');
    })
    $('#big_menu').mouseleave(function(){
      $(this).fadeOut('slow');
      $(this).slideUp('slow');
      $(this).removeClass('list_actiond');
    });
    $('#main_desk').click(function(){
      $(".header_nav_menu_main_list").slideDown('fast');
      $(".header_nav_menu_main_list").addClass('list_actiond');
      $("#cooking").slideDown('fast');
      $("#cooking").addClass('list_actiond');
      $("#slide_div").slideDown('fast');
      $("#slide_div").addClass('list_actiond');
         
    });
    $('#main_desk').mouseleave(function(){
      $(".header_nav_menu_main_list").slideUp('slow');
      $(".header_nav_menu_main_list").removeClass('list_actiond');
      $("#cooking").slideUp('slow');
      $("#cooking").removeClass('list_actiond');
      $("#slide_div").slideUp('slow');
      $("#slide_div").removeClass('list_actiond');
    });
  });
    /*$('.article_sale_ul').slick({
      dots: true,
      infinite: false,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1040,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 5
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });*/