let jq = $.noConflict();

angular.module('JurisApp', []).

controller('AppCtrl', function ($scope, $timeout, $http ) {
	console.log("App Controller reporting for duty.");

	$timeout( () => {
	    $scope.tabText = {
			'firstTab': 'Cupcake ipsum dolor sit amet I love caramels pudding dragée. I love icing tootsie roll. Donut dragée toffee chocolate bar donut. Oat cake tiramisu fruitcake cotton candy pie. I love sweet roll halvah I love I love. Cake sugar plum soufflé gummies tart macaroon I love muffin. Cookie cookie jelly beans chocolate cake dessert tart sesame snaps I love tootsie roll. Dessert chocolate bar topping chupa chups jelly. Bear claw muffin I love I love danish. ',
			'secondTab': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor. Hodor hodor HODOR! Hodor hodor hodor hodor, hodor. Hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor; hodor hodor. Hodor hodor... Hodor hodor hodor; hodor hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'thirdTab': 'Cat ipsum dolor sit amet, knock dish off table head butt cant eat out of my own dish get video posted to internet for chasing red dot yet lick arm hair. Swat turds around the house jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed for sit on human. This human feeds me, i should be a god Gate keepers of hell ears back wide eyed. Lounge in doorway munch on tasty moths so always hungry for rub face on everything. '
		};

		$scope.comments = [{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		},
		{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		},
		{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		},
		{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		},
		{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		},
		{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		},
		{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		},
		{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		},
		{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		},
		{
			'name': 'Julio Cezar',
			'avatar': 'img/pic_comment.png',
			'text': 'Hodor! Hodor hodor, hodor - hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor hodor hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor. Hodor hodor. Hodor. Hodor hodor - HODOR hodor, hodor hodor... Hodor hodor hodor.',
			'secondName': 'Tomaz Chavez',
			'secondAvatar': 'img/pic_mini.png',
			'secondText': 'Hodor.'
		}];

    }, 50 );

	jq(window).bind('mousewheel', function(event) {
	    if (event.originalEvent.wheelDelta >= 0) {
	        console.log('Scroll up');
	        jq('#main-header').removeClass('hide-nav').addClass('show-nav');
	        jq('#second-header').removeClass('show-nav').addClass('hide-nav');
	    }
	    else {
	        console.log('Scroll down');
	        jq('#main-header').removeClass('show-nav').addClass('hide-nav');
	        jq('#second-header').removeClass('hide-nav').addClass('show-nav');
	    }
	});

});