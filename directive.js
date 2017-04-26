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
					attr.config=angular.fromJson(attr.config);
					columns=[];
					dumb="<md-card><md-list><md-list-item>";
					for(row of $scope.data){
						for(head of Object.keys(row)){
							if(!columns.includes(head)){
								console.log(head)
								columns.push(head);
							}
						}
					}
					width=100/columns.length;
					style="width:"+width+"%;padding-left:1.8%;padding-right:1.8%"
					for(header of columns){

						if(angular.fromJson(attr.config).hasOwnProperty(''+header)){
						
							header=attr.config[''+header]
						}
						dumb+="<div style='"+style+"' class='md-headline'>"+header+"</div>";
					}
					dumb+=" <md-divider></md-divider></md-list-item>";
					for(row of $scope.data){
						dumb+="<md-list-item class='hover'><div style='display: flex; width: 100%; max-height:3.55%;min-height:3.55%'>"
						
						for(data of columns){
							if(!row.hasOwnProperty(data)){
								dumb+="<div style='"+style+";max-width:33.33%; overflow: hidden;text-overflow: ellipsis; max-height:3.55%;min-height:3.55%  '></div>"
							}
							else{
								dumb+="<div style='"+style+";max-width:33.33%; overflow: hidden;text-overflow: ellipsis;max-height:3.55%;min-height:3.55%'>"+row["" + data ]+"</div>";
							}
						}
						dumb+="</div></md-list-item> <md-divider></md-divider>"
					}
					dumb+="</md-list></md-card>";

					angular.element(document.querySelector('.create')).empty();
					
					angular.element(document.querySelector('.create')).append(dumb);
					angular.noop();
					
				}
				
						//console.log(att)
			}
		}
	})	
