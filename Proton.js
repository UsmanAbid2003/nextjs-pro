// Pre Loader
$(document).ready(function() {

  $('.loading').css('width', '100%');
  setTimeout(start_page, 2000);

});
function start_page()
{
    document.querySelector(".preloader").style.display = "none";
    $('body').css('overflow-y', 'scroll');
}
// Pop UP
$('.view_btn').click(function() {

    var Get_Num = $(this).attr('view_btn');

    if(Get_Num == '1')
    {
      $('.center_img').css('background-image', 'url("/_next/static/media/web-ui-1-min.db57c44a.jpg")');
      $('.pop_txt').html('Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit distinctio odio ab dolore explicabo aspernatur quas minus dolorem. Culpa earum aspernatur, doloribus porro expedita odit doloremque molestias veniam voluptas.');
    }
    else if(Get_Num == '2')
    {
      $('.center_img').css('background-image', 'url("/_next/static/media/web-ui-2-min.6aa74e71.jpg")');
      $('.pop_txt').html('Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit distinctio odio ab dolore explicabo aspernatur quas minus dolorem. Culpa earum aspernatur, doloribus porro expedita odit doloremque molestias veniam voluptas.');
    }
    else if(Get_Num == '3')
    {
      $('.center_img').css('background-image', 'url("/_next/static/media/web-ui-3-min.94009737.jpg")');
      $('.pop_txt').html('Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto velit distinctio odio ab dolore explicabo aspernatur quas minus dolorem. Culpa earum aspernatur, doloribus porro expedita odit doloremque molestias veniam voluptas.');
    }

    $('.pop_blur').css("display", "inherit");
    $('.popup').css("display", "inherit");
    $('body').css('overflow', 'hidden');

});
$('.exit').click(function() {

    $('.pop_blur').css("display", "none");
    $('.popup').css("display", "none");
    $('body').css('overflow-y', 'scroll');
    $('.center_img').css('background-image', 'url("")');
      $('.pop_txt').html('');

});

// Toggle Menu Bar
var menu = 'open';
$('.menu_bar').click(function() {

  console.log(menu);
  // console.log('print');

  if(menu == 'open')
  {
    menu = 'close';
    $(".menu_bar").addClass("fa-times");
    $(".menu_bar").removeClass("fa-bars");
    
   
    console.log(menu);
  }
  else if(menu == 'close')
  {
    menu = 'open';
    $(".menu_bar").addClass("fa-bars");
    $(".menu_bar").removeClass("fa-times");
    
    
    console.log(menu);
  }

});

// Slider 

let slideIndex = 1;
showSlides(slideIndex);

$('.prev_btn').click(function plusSlides() {
  showSlides(slideIndex += -1);
});

$('.nxt_btn').click(function plusSlides() {
  showSlides(slideIndex += 1);
});

function showSlides(n) {


  
  let i;
let slides = document.getElementsByClassName("mySlides");

  // By Button

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }  
  
slides[slideIndex-1].style.display = "block";  


  
}


/*---------Filter-----------*/
filter('branding');
$('.filter_out').click(function() {

  var getVal = $(this).attr('data-filter');
  $('.filter_out').removeClass('my_active');
  $(this).addClass('my_active');
  filter(getVal);
 
});
function filter(get_filter)
{
  if(get_filter == 'all')
  {
    $('.filter-web').css('display', 'inherit');
    $('.filter-app').css('display', 'inherit');
    $('.filter-logo').css('display', 'inherit');
    $('.filter-branding').css('display', 'inherit');
    
  }
  if(get_filter == 'web')
  {
    $('.filter-web').css('display', 'inherit');
    $('.filter-app').css('display', 'none');
    $('.filter-logo').css('display', 'none');
    $('.filter-branding').css('display', 'none');
  }
  if(get_filter == 'app')
  {
    $('.filter-web').css('display', 'none');
    $('.filter-app').css('display', 'inherit');
    $('.filter-logo').css('display', 'none');
    $('.filter-branding').css('display', 'none');
  }
  if(get_filter == 'logo')
  {
    $('.filter-web').css('display', 'none');
    $('.filter-app').css('display', 'none');
    $('.filter-logo').css('display', 'inherit');
    $('.filter-branding').css('display', 'none');
  }
  if(get_filter == 'branding')
  {
    $('.filter-web').css('display', 'none');
    $('.filter-app').css('display', 'none');
    $('.filter-logo').css('display', 'none');
    $('.filter-branding').css('display', 'inherit');
  }
}
// Page Height
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
$('.part').css('height', height);