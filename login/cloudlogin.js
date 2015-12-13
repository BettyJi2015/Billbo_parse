$(function() {
	
	 Parse.$ = jQuery;
	 Parse.initialize("gdION4NwoqWFMiCHMvYrUc9NNEJ6cbxkRyrAgEdf", "y3SfNJgeY5ivewnM5M59umA62lYYO7tAgAAPglWk");

	 var TestObject= Parse. Object.extend("TestObject");
	 var testObject= new TestObject();

	 testObject.save(
	 {
	 	foo:"bar"
	 }). then(function(Object)
	 {
	 	alert("Yay! It worked");
	 }
	 );



	 $('.form-2').on('submit',function(e){

	 	e.preventDefault();

	 	var data=$(this).serializeArray();
	 	username=data[0].value;
	 	password=data[1].value;

	 	Parse.User.logIn(username,password,{
	 		success: function(user){
	 			alert('Welcome User');
	 			//do something if user logged in correctly
	 			var query = new Parse.Query("Instachecks");
	 			//from Instachecks parse.com-objectID
	 			query.get("RgtlUQ50rf",{
	 				success: function(object){
	 					console.log(JSON.stringify(object));
	 					document.getElementById('billsdiv').innerText=JSON.stringify(object);



	 				},
	 				
	 				

	 				error: function(object,error){
	 					console.log(error);
	 				}
	 			});

	 		},
	 		error: function(object,error){
	 			alert('Unauthorized!');
	 		}


			});


	 	





	 	});

});

