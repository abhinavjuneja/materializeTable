angular.module('test')
	.directive('table',function($parse){
		return {
			template:"<div class='create'>{{dumb}}</div>",
			scope:{
				data:'='
			},
			replace:true,
			link:function($scope,element,attr){
				$scope.$watch('data',function(n,o){
					if(n!=o){
						createTable($scope,element,attr);
					}
				});
				var createTable=function($scope,element,attr){
					rowLength=$scope.data.length;
					console.log(rowLength)
					columns=[];
					dumb="<table><tr>";
					for(row of $scope.data){
						columns=Object.keys(row);
					}
					for(header of columns){
						dumb+="<th>"+header+"</th>";
					}
					dumb+="</tr>";
					for(row of $scope.data){
						dumb+="<tr>"
						for(data of columns){
							if(!row.hasOwnProperty(data)){
								dumb+="<td></td>"
							}
							else{
								dumb+="<td>"+row["" + data ]+"</td>";
							}
						}
						dumb+="</tr>"
					}
					dumb+="</table>";
					console.log(dumb);

					angular.element(document.querySelector('.create')).append(dumb);
					angular.noop();
					
				}
				
						//console.log(att)
			}
		}
	})	