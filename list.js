angular.module('test')
	.controller('list',function($scope,$rootScope,$location,$mdToast, $mdBottomSheet,testing, $timeout, $mdSidenav, $log){
		$scope.logout=function(){
			localStorage.removeItem('user');
			localStorage.removeItem('data');
			$rootScope.loggedIn=false;
			$location.path('/login');
		};

		$scope.data=[];
		$scope.user=localStorage.getItem('user');
		$scope.onClick=function(){
      $scope.config={"id":"ID",
        "newThang":"Second Column"
      };
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

		  $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      };
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });