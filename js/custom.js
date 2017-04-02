$(document).ready(function(){
	// Declare variables
	var b = false;
	var portfolio = [
		{
			title: 			"Wikipedia Viewer App",
			imageSrc: 		"img/wikiViewer.png",
			imageAlt:		"View of starry sky at night",
			description:	"Project for FreeCodeCamp.com.  Utilizes MediaWiki API to search wikipedia pages based on user input.",
			siteURL:		"https://jdt-wikipedia-viewer.herokuapp.com/"
		},
		{
			title: 			"Local Weather App",
			imageSrc: 		"img/weatherApp.png",
			imageAlt:		"View of stars in the forest",
			description:	"Displays the current local weather information.  Note:  You have to load unsafe scripts since I'm utilizing a free version of the api.",
			siteURL:		"https://jdt-weatherapp.herokuapp.com/"
		},
		{
			title: 			"Random Quote Generator",
			imageSrc: 		"img/randomQuoteGenerator.png",
			imageAlt:		"View of stars in the forest",
			description:	"This utilizes a api from another site to randomly generate a quote.  You can share to facebook or twitter.",
			siteURL:		"http://jdt-random-quote-generator.herokuapp.com/"
		},
		{
			title: 			"Steve Jobs Tribute Page",
			imageSrc: 		"img/steveJobs.jpg",
			imageAlt:		"Steve Jobs profile pic",
			description:	"This is a simple tribute page I did on Steve Jobs for freeCodeCamp.com.",
			siteURL:		"http://codepen.io/yessdrillsgt/full/GrOLzW/"
		}
	]
	
	// Updates the portfolio title, image, description and link
	$('#ddl_portfolio').on('change', function(){
		var indexVal = $(this).val();
		var link = "";
		
		$('#div_transition').hide(); // Hides the div
		
		$('#portfolioImage')
			.prop('src', portfolio[indexVal].imageSrc)
			.prop('alt', portfolio[indexVal].imageAlt);
		
		link = ' Click <a target="_blank" href="' + portfolio[indexVal].siteURL + '"> here </a> to visit the site.';
		
		$('#portfolioParagraph').text(portfolio[indexVal].description).append(link);
		
		$('#div_transition').fadeIn(2500); // Fades the div back in
	});
	
	// When user clicks anywhere on this element it opens a new tab against the appropriate project url
	$('#div_transition').on('click', function(){
		var indexVal = $('#ddl_portfolio').val();
		
		window.open(portfolio[indexVal].siteURL);
	});
	

	PopulateDropDown(portfolio);
	PreloadImages(portfolio);
	
	setInterval(AnimateOpacity, 3000);
	TransitionHeaders();

	// Changes the opacity of the header based on value of b for that interval 
	function AnimateOpacity(){
		if (b){ 
			$('.toggleOpacity').animate({
				opacity: 0.2
			}, 3000);
			 
		} else { 
			$('.toggleOpacity').animate({
				opacity: 1.0
			}, 3000); 
		}
		
		b = !b;
	};
	
	$('.selectpicker').selectpicker({ 
		style: 'btn-primary',
		size: 5,
		liveSearch: true
	});
	
	//Adds smooth scrolling to all links in the spy-scroll-id div
	$("#spy-scroll-id a").on('click', function(event) {

	  if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;

		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 1200, function(){

		  window.location.hash = hash;
		});
	  }
	});
	
});


// Appends a option tag to the drop down list (select tag)
function PopulateDropDown(portfolio){
	var tempStr = "";
	
	for (i = 0; i < portfolio.length; i++){
		tempStr = '<option value = ' + i.toString() + ' >' + portfolio[i].title + '</option>'
		$('#ddl_portfolio').append(tempStr);
	}
	
	$('#ddl_portfolio').val(0).trigger('change'); // Triggers change event for option where value = 0
};

// Fades the headers on page load
function TransitionHeaders(){
	HideAndFadeIn('.navbar-brand', 5000);
	HideAndFadeIn('#softwareDevelopment', 5000);
	HideAndFadeIn('#together', 10000);
	
	function HideAndFadeIn(id, duration){
		$(id).hide().fadeIn(duration);
	};
};

// Loop through all elements in portfolio and force image to preload
function PreloadImages(portfolio){
	
	for (var i = 0; i < portfolio.length; i++){
		var x = new Image();
		x.src = portfolio[i].imageSrc;
		x.load;
	}
};





