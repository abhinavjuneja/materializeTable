angular.module('test')
	.controller('details',['$scope','$routeParams',function($scope,$routeParams){
		$scope.data={}
		$scope.data=angular.fromJson(localStorage.getItem('data'));
		for(i=0;i<=9;i++){
			
				if($scope.data[i].id==$routeParams.id){
					$scope.temp=$scope.data[i];
					console.log($scope.temp)
				}
			
		}

	}])