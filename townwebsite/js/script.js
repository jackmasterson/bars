var slider = [
	{src: 'img/stand.jpg', classed: 'first'},
	{src: 'img/sand.jpg', classed: 'second'},
	{src: 'img/boat.jpg', classed: 'third'},
	{src: 'img/bote.jpg', classed: 'fourth'},
	{src: 'img/pipe.jpg', classed: 'fifth'}
];


	var mid = Math.floor(slider.length/2);
	//console.log(slider[mid].classed);


	$(document).ready(function(){ 
		
		var classy = document.getElementsByClassName(slider[mid].classed)[0];
	//	console.log(classy);
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
	//	$(classy).fadeOut(function(){
			$(classy).removeClass('selectedImg');
			classy = document.getElementsByClassName(slider[mid].classed)[0];
			$(classy).addClass('selectedImg');
		//	$(classy).fadeIn('slow');
			
			
	
	//	});
	//	console.log(slider.indexOf(slider[mid]));


	//	setTimeout(shifted.left, 2000);
		//console.log(slider[mid]);

	//	console.log(num);
	//	console.log(num * 0.25);
		//return num;
		

		
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
	//		console.log($('.sliderImg'));

		})
		
	}
};

var opacity = {

	init: function() {

		var num = slider.indexOf(slider[mid]);
		slider.forEach(function(each){
		//	console.log(slider.indexOf(each));
		//	console.log(each);
		//	console.log(slider.indexOf(each));
		//	console.log(slider.indexOf(each));
		//	return slider.indexOf(each);

		});
	//	console.log(slider.indexOf(num));
		
		for(var i=0; i<slider.length; i++){
			console.log(i);
		//	opacity.mult = i * 0.10;
			console.log(opacity.mult);
			console.log(slider[i]);
			slider[i].opacity = i * 0.10 + 0.045;
			//return mult;
		}
		

		//return mult;
		//console.log(this);
		//console.log(num);
		

	}
};

opacity.init();


setX.init();


	//setTimeout(shifted.left, 0);
	$(document).ready(function() {
		shifted.left();
	})
//	

ko.applyBindings();