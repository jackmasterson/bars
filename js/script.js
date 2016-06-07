var model = {

	sections: {

		splash: {

			backImg: "url(..//bars/img/bar.jpg)"
		},

		subHead: {

			backImg: "url(..//bars/img/group.jpg)"
		}
	},

	nav: [
		{
			header: "Menu"
		},
		{
			header: "Events"
		},
		{
			header: "Specials"
		},
		{
			header: "Directions"
		},
		{
			header: "About Us"
		}
	]
};

var viewModel = {

	init: function() {

		splashBack.init();

	}
}

var splashBack = {

	init: function() {

		this.back = document.getElementsByClassName('splash')[0];

		this.logo = "<img class='logo' src='img/logo.png'>";

		this.render();
	},

	render: function() {


		$(this.back).prepend(this.logo);
		

	}
};


ko.applyBindings(viewModel.init());