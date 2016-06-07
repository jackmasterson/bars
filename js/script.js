var model = {

	fourSqInfo: ko.observableArray([]),
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
		fourSqView.init();

	}
};

var fourSqView = {

    init: function() {
        var that = this;

        this.text =
            'Welp, this is embarrassing. We were supposed to see' +
            ' information provided by Foursquare about the' +
            ' location you clicked on, but something went wrong.' +
            ' refresh the page, and we will do some work on our end' +
            ' to get things up and running again.';

        this.squareTimeout = setTimeout(function() {
            that.fail(true);
        }, 3000);

    
          //  that.title = place.title;

            that.fourSqURL = 'https://api.foursquare.com/v2/venues/search' +
                '?client_id=RBCL5LBJKOUGEV1ZNJ3RMAI0HH1N4L5OSQ4LSMWLF3BRI0UP' +
                '&client_secret=F0Y45LPMD0O0GBXVNKSTS3H3Q2VCQKEHV3KCYUBLXZFD0OJO' +
                '&v=20130815' +
                '&near=Sea Girt, NJ' +
                '&query=harrigans-pub';
            //Johnny Mac
            //Porta
            //Stone Pony
            //Pinball Museum
            //Convention Hall
            that.render();
      


    },

    render: function() {
        var self = this;

        $.ajax({
                url: this.fourSqURL,
                dataType: 'json'
            })
            .done(function(response) {

            	//console.log(response);
                var place = response.response.venues[0];
                console.log(place);
                var name = place.name;
                var address = place.location.address;
                var phone = place.contact.formattedPhone;
                var twitter = place.contact.twitter;
                var url = place.url;
                var sqUrl = 'http://foursquare.com/v/' + place.id;

                model.fourSqInfo.push({
                    'Name': name,
                    'Address': address,
                    'Twitter': twitter,
                    'Phone': phone,
                    'url': url,
                    'sqUrl': sqUrl
                });

                console.log(model.fourSqInfo()[0]);

                clearTimeout(self.squareTimeout);
            });

    },

    fail: ko.observable(false)

};

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