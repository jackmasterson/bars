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
		$(classy).css('height', '250px');
		$(classy).css('width', '250px');
		$(classy).css('opacity', '1');

	});



var shifted = {

	left: function() {
		console.log('shift!');
		console.log(mid);
		var classy = document.getElementsByClassName(slider[mid].classed)[0];
		$(classy).css('height', '150px');
		$(classy).css('width', '150px');
		$(classy).css('opacity', '0.25');
		if(mid < slider.length - 1){
			mid = mid + 1;
		}
		else {
			mid = 0;
		}
		
		console.log(mid);

		classy = document.getElementsByClassName(slider[mid].classed)[0];
	
		$(classy).css('height', '250px');
		$(classy).css('width', '250px');
		$(classy).css('opacity', '1');
	},

	right: function() {
		console.log('shift!');
		console.log(mid);
		var classy = document.getElementsByClassName(slider[mid].classed)[0];
		$(classy).css('height', '150px');
		$(classy).css('width', '150px');
		$(classy).css('opacity', '0.25');
		//if(mid < slider.length - 1){
			mid = mid - 1;
		//}
		if(mid < 0){
			mid = slider.length - 1;
		}
		
		console.log(mid);

		classy = document.getElementsByClassName(slider[mid].classed)[0];
	
		$(classy).css('height', '250px');
		$(classy).css('width', '250px');
		$(classy).css('opacity', '1');
	}
}
	//setTimeout(shifted, 2000);
	

ko.applyBindings();