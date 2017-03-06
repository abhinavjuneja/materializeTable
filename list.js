angular.module('test')
	.controller('list',function($scope,$rootScope,$location,$mdToast, $mdBottomSheet,testing){
		$scope.logout=function(){
			localStorage.removeItem('user');
			localStorage.removeItem('data');
			$rootScope.loggedIn=false;
			$location.path('/login');
		};

		
		$scope.user=localStorage.getItem('user');

		$scope.data=angular.fromJson(localStorage.getItem('data'))
		$scope.goto=function(e){
			console.log("jjgjgj")
			$location.path('/records/'+e)
		};
		testing.getData(localStorage.getItem('user'))
		$scope.$watch(function(){
			return localStorage.getItem('data');
		},function(n,o){
				$scope.data=angular.fromJson(localStorage.getItem('data'))
		});

		

});