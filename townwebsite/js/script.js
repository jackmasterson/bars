var slider = [
	{src: 'img/stand.jpg'},
	{src: 'img/sand.jpg'},
	{src: 'img/boat.jpg'},
	{src: 'img/bote.jpg'},
	{src: 'img/pipe.jpg'}
];

//for(var i=0; i<slider.length; i++){
	var mid = Math.floor(slider.length/2);
	console.log(slider[mid]);
//	slider[mid].css('size', '250px');
//}

ko.applyBindings();