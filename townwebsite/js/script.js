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
		$(classy).removeClass('selectedImg');
		if(mid < slider.length - 1){
			mid = mid + 1;
		}
		else {
			mid = 0;
		}
	
		classy = document.getElementsByClassName(slider[mid].classed)[0];
	
		$(classy).addClass('selectedImg');
	},

	right: function() {
		var classy = document.getElementsByClassName(slider[mid].classed)[0];
		$(classy).removeClass('selectedImg');
		
		mid = mid - 1;
		if(mid < 0){
			mid = slider.length - 1;
		}

		var classy = document.getElementsByClassName(slider[mid].classed)[0];
		$(classy).addClass('selectedImg');
	}
}
	//setTimeout(shifted, 2000);
	

ko.applyBindings();