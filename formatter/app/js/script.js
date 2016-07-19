
var allData = {'Stuff': 'more-stuff'}
var clickit = document.getElementsByClassName('clickit');
$('#clicked').click(function(){
	var name = document.getElementsByClassName('info')[0];
	allData['Name'] = $(name).val()
	
	console.log(allData)
	var header = "<h1 class='need'>"+allData['Stuff']+"</h1>"
	$('.info-div').append(header)
	$.ajax({
		url: 'http://127.0.0.1:5000/'
	})
	.done(function(response){
		console.log(response)
	})

})
