angular.module('test')
	.controller('list',function($scope,$rootScope,$location,$mdToast, $mdBottomSheet,testing){
		$scope.logout=function(){
			localStorage.removeItem('user');
			localStorage.removeItem('data');
			$rootScope.loggedIn=false;
			$location.path('/login');
		};

		$scope.data=[];
		$scope.user=localStorage.getItem('user');
		$scope.onClick=function(){
		
			setTimeout(function(){
				$scope.data=[{
				"id":1,
				"message":"Some Random text message with id 1"
			},{
				"id":2,
				"message":"Some Random text message with id 2"
			},{
				"id":3,
				"message":"Some Random text message with id 3"
			},{
				"id":4,
				"message":"Some Random text message with id 4"
			},{
				"id":5,
				"message":"Some Random text message with id 5"
			},{
				"id":6,
				"message":"Some Random text message with id 6"
			},{
				"id":7,
				"message":"Some Random text messagewith id 7"
			},{
				"id":8,
				"message":"Some Random text messagewith id 8"
			},{
				"id":9,
				
				"message":"Some Random text message with id 9"
			},{
				"id":10,
				"newThang":"newOne",
				"message":"Some Random text message with id 10"
			}]
			},2000)	
		}
				
		$scope.goto=function(e){
			console.log("jjgjgj")
			$location.path('/records/'+e)
		};
		//testing.getData(localStorage.getItem('user'))
		$scope.$watch(function(){
			return localStorage.getItem('data');
		},function(n,o){
			//	$scope.data=angular.fromJson(localStorage.getItem('data'))
		});

		

});