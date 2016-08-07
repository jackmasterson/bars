var slider = [
	{src: 'img/stand.jpg', classed: 'first'},
	{src: 'img/sand.jpg', classed: 'second'},
	{src: 'img/boat.jpg', classed: 'third'},
	{src: 'img/bote.jpg', classed: 'fourth'},
	{src: 'img/pipe.jpg', classed: 'fifth'}
];


	var mid = Math.floor(slider.length/2);
	console.log(slider[mid].classed);


	$(document).ready(function(){ 
		
		var classy = document.getElementsByClassName(slider[mid].classed)[0];
		console.log(classy);
		$(classy).addClass('selectedImg');

	});



var shifted = {

	left: function() {
		var classy = document.getElementsByClassName(slider[mid].classed)[0];

		

		if(mid < slider.length - 1){
			mid = mid + 1;
		}
		else {
			mid = 0;
		}
		$(classy).fadeOut(function(){
			$(classy).removeClass('selectedImg');
			classy = document.getElementsByClassName(slider[mid].classed)[0];
			$(classy).addClass('selectedImg');
			$(classy).fadeIn('slow');
			
		
		});
	
		setTimeout(shifted.left, 2000);

	},

	right: function() {
		var classy = document.getElementsByClassName(slider[mid].classed)[0];
		
		$(classy).removeClass('selectedImg');
		mid = mid - 1;
		if(mid < 0){
			mid = slider.length - 1;
		}

		classy = document.getElementsByClassName(slider[mid].classed)[0];
		$(classy).addClass('selectedImg');
	}
};

var setX = {

	init: function() {
		$(document).ready(function() {
			console.log($('.sliderImg'));

		})
		
	}
};


setX.init();


	//setTimeout(shifted.left, 0);
	$(document).ready(function() {
		shifted.left();
	})
//	

ko.applyBindings();