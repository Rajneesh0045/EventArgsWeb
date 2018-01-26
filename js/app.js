(function() {
	var app = angular.module('eargs', []);

	app.controller('EventController', function(){
		this.events = eventDetails;
	});

	app.directive('backImg', function(){
		return function(scope, element, attrs){
			var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
           });
		};
	});

	var eventDetails = [
		{
			name: 'Social',
			pic: "img/social.jpg",
			description: "Blah Blah Blah Blah"
		},
		{
			name: 'Tech',
			pic: "img/tech.jpg",
			description: "Blah Blah Blah Blah"
		},
		{
			name: 'Trip',
			pic: "img/trip.jpg",
			description: "Blah Blah Blah Blah"
		},
		{
			name: 'Cultural',
			pic: "img/cultural.jpg",
			description: "Blah Blah Blah Blah"
		}
	]
})();