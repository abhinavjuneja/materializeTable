angular.module('test')
	.run(function($http,$rootScope,testing){
		
		 $rootScope.$watch(function(){
				return localStorage.getItem('user')
			},function(n,o){
				if(n){
					$rootScope.loggedIn= true;
				}
				else{
					$rootScope.loggedIn=false;
				}
			})
	
		testing.getUserData();
	})