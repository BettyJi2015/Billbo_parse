$(function() {
 
    Parse.$ = jQuery;
 
   
     Parse.initialize("gdION4NwoqWFMiCHMvYrUc9NNEJ6cbxkRyrAgEdf", "y3SfNJgeY5ivewnM5M59umA62lYYO7tAgAAPglWk");
	//Parse.initialize("ZTh4lArJFksTGuMLZ6sAaSyx1KOzCo3lL1QhwER7", "X2lqnhHPNKM5pkNKxZaWQlbZSMWItYxD7eT4Tleg");
	
	
		$("#signUp").on("submit",function(e){
		e.preventDefault();
	var data = $(this).serializeArray();
	username = data[0].value;
	password = data[1].value;
	email = data[2].value;
	console.log(username, password, email);

		var user = new Parse.User();
		user.set("username", username);
		user.set("password", password);
		user.set("email", email);
		user.signUp(null, {
		  success: function(user) {
		    alert('Successful!');
		  },
		  error: function(user, error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});

	});

});
 


