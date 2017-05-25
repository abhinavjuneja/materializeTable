Materialize table Directive:
  Generates table by passing JSON to a directive
  
  Sample:
     <table data="data" config="{{config}}">
		 
     Attribute:
		 		data contains the table data to be populated:
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
					}]
				config sets the header of the table

					$scope.config={"id":"ID",
						"newThang":"Second Column"
					};
