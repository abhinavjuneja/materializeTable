angular.module('test')
	.service('testing',function($rootScope,$http){
		this.getUserData=function(){
			$http.get('users.json').success(function(data){
				$rootScope.tempUsers=data;
				console.log(data)
			});
		}
		this.getData=function(userId){
			$http.get('inbox.json').success(function(d){
				var data=angular.toJson(d);
				localStorage.setItem('data',data);
			});
		};
		
	})
			