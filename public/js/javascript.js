
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('#logo_sticky').addClass('sticky');
    } else {
       $('#logo_sticky').removeClass('sticky');
    }
});

	
	$(document).ready(function(){
	  $(".my-cart-trigger").click(function(){
		$("#myCart").toggle();
	  });
	});


	$(document).ready(function(){
		$(".banner-sliders").owlCarousel({
			loop: true,
			autoWidth: false,
			items: 1,
			dots: true,
			autoplay: true,
			smartSpeed: 2000,
			nav: false,
		  });
	  });
  
	
	
$(document).ready(function(){
      $("select").change(function(){
          $(this).find("option:selected").each(function(){
              var optionValue = $(this).attr("value");
              if(optionValue){
                  $(".box").not("." + optionValue).hide();
                  $("." + optionValue).show();
              } else{
                  $(".box").hide();
              }
          });
      }).change();
  });



function openLeftMenu() {
  document.getElementById("leftMenu").classList.add("menu-open");
  document.getElementsByClassName("body-wrapper")[0].classList.add("side-menu-open");
}

$('body').on('click','#nav-toggle',function(e){
e.preventDefault();
document.getElementById("leftMenu").classList.add("menu-open");
  document.getElementsByClassName("body-wrapper")[0].classList.add("side-menu-open");
});

function closeLeftMenu() {
  document.getElementById("leftMenu").classList.remove("menu-open");
  document.getElementsByClassName("body-wrapper")[0].classList.remove("side-menu-open");
}

	// $(document).ready(function(){
    //   $('.banner-item').slick({
    //       infinite: true,
	// 	  slidesToShow: 1,
	// 	  slidesToScroll: 1,
	// 	  autoplay: true,
	// 	  autoplaySpeed: 2000,
	// 	  dots: true,
	// 	  prevArrow: $('.banner-prev'),
	// 	  nextArrow: $('.banner-next'),
    //   });
    // });
	
	
	
$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	document.getElementByClassName("view-modal").classList.add("show");
});
/*
$('.info-trigger').click(function () {
	$(this).siblings(".info-container").toggleClass('expand');     
});
*/

$('body').on('click','.info-trigger',function(){
	$(this).siblings(".info-container").toggleClass('expand'); 
});
/*
$('.info-block-close').click(function () {
	$(this).closest(".info-container").toggleClass('expand');     
});
*/
$('body').on('click','.info-block-close',function(){
	$(this).closest(".info-container").toggleClass('expand');  
});

	// $(document).ready(function(){
    //   $('.gallery-slider').slick({
    //       infinite: true,
	// 	  slidesToShow: 1,
	// 	  slidesToScroll: 1,
	// 	  autoplay: true,
	// 	  autoplaySpeed: 2000,
	// 	  dots: false,
	// 	  prevArrow: $('.gallery-prev'),
	// 	  nextArrow: $('.gallery-next'),
    //   });
    // });
	
	var $status1 = $('.pagingInfo1');
	var $status2 = $('.pagingInfo2');
    var $slickElement = $('.gallery-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status1.text(i + '/');
        $status2.text(slick.slideCount);
    });
	
			$(".gallery-sliders")
		.on("initialized.owl.carousel changed.owl.carousel", function (e) {
			if (!e.namespace) {
				return;
			}
			$("#counters").text(
				e.relatedTarget.relative(e.item.index) + 1 + "/" + e.item.count
				);
		})
		.owlCarousel({
			loop: true,
			autoWidth: false,
			items: 1,
			dots: false,
			autoplay: false,
			smartSpeed: 2000,
			nav: true,
		});


		//   {changes}  close = popup.querySelector(".close"),
		// 		  field = document.querySelector(".field"),
		//   input = document.querySelector("input"),
		//   copy = document.querySelector("button");
		
		// const viewBtn = document.querySelector(".view-modal"),
		  popup = document.querySelector(".popup"),
		  close = document.querySelector(".close"),
		  field = document.querySelector(".field"),
		  input = document.querySelector("input"),
		  copy = document.querySelector("button");

/*
		$('body').ready.on('click','.view-modal',function(){
			viewBtn.classList.toggle("show");
		}); */
     
		$('body').on('click','.view-modal',function(e){
			e.preventDefault();
			
			});
		// viewBtn.onclick = ()=>{
		//   popup.classList.toggle("show");
		// }

		close.onclick = ()=>{
		  viewBtn.click();
		}

		copy.onclick = ()=>{
		  input.select(); //select input value
		  if(document.execCommand("copy")){ //if the selected text copy
			field.classList.add("active");
			copy.innerText = "Copied";
			setTimeout(()=>{
			  window.getSelection().removeAllRanges(); //remove selection from document
			  field.classList.remove("active");
			  copy.innerText = "Copy";
			}, 3000);
		  }
		}
		

	
	/*function showCart() {
	  var x = document.getElementById("myCart1");
	  if (x.style.display === "none") {
		x.style.display = "block";
	  } else {
		x.style.display = "none";
	  }
	}*/

	$(document).ready(function(){
	  $('.date-picker').datepicker({format: "dd-mm-yyyy", autoclose: true}); 
	});