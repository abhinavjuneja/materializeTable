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
					console.log(attr.config);
					rowLength=$scope.data.length;
					console.log(rowLength)
					columns=[];
					dumb="<md-card><md-list><md-list-item>";
					for(row of $scope.data){
						columns=Object.keys(row);
					}
					
					width=100/columns.length;
					style="display: table-cell;width:"+width+"%;padding-left:1.8%;padding-right:1.8%"
					for(header of columns){
						dumb+="<div style='"+style+"' class='md-headline'>"+header+"</div>";
					}
					dumb+=" <md-divider></md-divider></md-list-item>";
					for(row of $scope.data){
						dumb+="<md-list-item><div style='display: table; width: 100%;'>"
						
						for(data of columns){
							if(!row.hasOwnProperty(data)){
								dumb+="<div style='"+style+"'></div>"
							}
							else{
								dumb+="<div style='"+style+"'>"+row["" + data ]+"</div>";
							}
						}
						dumb+="</div></md-list-item> <md-divider></md-divider>"
					}
					dumb+="</md-list></md-card>";
					console.log(dumb);

					angular.element(document.querySelector('.create')).append(dumb);
					angular.noop();
					
				}
				
						//console.log(att)
			}
		}
	})	