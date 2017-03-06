angular.module('test').controller('controller',function($scope,$rootScope,$location,$mdDialog){
	
	$scope.login=function(user,password){

		for(i=0;i<$rootScope.tempUsers.length;i++){
			if($rootScope.tempUsers[i].userId==user && $rootScope.tempUsers[i].password==password){
				$rootScope.loggedIn=true;
				localStorage.setItem('user',user);
				$location.path('/inbox');
				$scope.log=true;
				break;
			}
			else{
				$scope.log=false;
			}
		}	
		if(!$scope.log){
			 $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Error')
        .textContent('Enter valid credentials')
        .ariaLabel('Alert')
        .ok('Got it!')
        
    );
		}
	}

	$scope.logout=function(){
			localStorage.removeItem('user');
			localStorage.removeItem('data');
			$rootScope.loggedIn=false;
			$location.path('/login');
		};


});