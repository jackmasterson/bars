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

	function shifted(){
		console.log('shift!');
		console.log(mid);
		var classy = document.getElementsByClassName(slider[mid].classed)[0];
		$(classy).css('height', '150px');
		$(classy).css('width', '150px');
		$(classy).css('opacity', '0.25');
		mid  = mid + 1;
		console.log(mid);
		classy = document.getElementsByClassName(slider[mid].classed)[0];
	
		$(classy).css('height', '250px');
		$(classy).css('width', '250px');
		$(classy).css('opacity', '1');
	};
	setTimeout(shifted, 2000);
	

ko.applyBindings();