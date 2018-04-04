 function smoothScroll(getID, linkID){
  getID.click(function(){
    $('html, body').animate({
      scrollTop: linkID.offset().top
    }, 1500);
  });
}



//smoothScroll($('#navbar-home'), $('#home'));
//smoothScroll($('#about-link'), $('#about'));
//smoothScroll($('#portfolio-link'), $('#portfolio'));
//smoothScroll($('#report-link'), $('#report'));
//smoothScroll($('#contact-link'), $('#contact'));
