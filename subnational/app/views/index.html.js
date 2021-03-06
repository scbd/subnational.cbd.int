require('app').controller('IndexController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = "IndexController";

	$rootScope.homePage = true;
	$rootScope.portal = 'home';
	$rootScope.navigation = [
			{ url: '/subnational/about', 							title: 'About' },
			{ url: '/subnational/about/cbd-plan-of-action', 		title: 'CBD Plan of Action' },
			{ url: '/subnational/about/aichi-biodiversity-targets', title: 'Aichi Biodiversity Targets' },
			{ url: '/subnational/get-involved', 					title: 'Get Involved' },
			{ url: '/subnational/guidelines', 						title: 'Guidelines' }
		];
	
	$('#accordion h3.panel-title > a').click(function() {
		if($($(this).attr('href')).hasClass('in'))
		{
			$('i.glyphicon-chevron-down').addClass('hide');
			$('i.glyphicon-chevron-right', this).removeClass('hide');
		}
		else
		{
			$('i.glyphicon-chevron-down').addClass('hide');
			$('i.glyphicon-chevron-right').removeClass('hide');

			$('i.glyphicon-chevron-down', this).removeClass('hide');			
			$('i.glyphicon-chevron-right', this).addClass('hide');
		}
	});
}]);