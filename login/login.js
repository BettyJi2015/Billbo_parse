$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
     Parse.initialize("gdION4NwoqWFMiCHMvYrUc9NNEJ6cbxkRyrAgEdf", "y3SfNJgeY5ivewnM5M59umA62lYYO7tAgAAPglWk");
	//Parse.initialize("ZTh4lArJFksTGuMLZ6sAaSyx1KOzCo3lL1QhwER7", "X2lqnhHPNKM5pkNKxZaWQlbZSMWItYxD7eT4Tleg");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	 testObject.save({foo: "bar2"}).then(function(object) {
	  alert("Yay! it worked");
	}); 
	
	$('.form-2').on('submit', function(e) {
 
	    // Prevent Default Submit Event
	    e.preventDefault();
 
	    // Get data from the form and put them into variables
	    var data = $(this).serializeArray(),
	        username = data[0].value,
	        password = data[1].value;
 
	    // Call Parse Login function with those variables
	    Parse.User.logIn(username, password, {
	        // If the username and password matches
	        success: function(user) {

	        $('.form-logout').css({'display':'block'});
				
				var allQuery=new Parse.Query(Parse.Object.extend("Instachecks"));
 				allQuery.find({
		          success:function(results){
					for (var i = 0; i < results.length; i++) { 
					    var object = results[i];	

				             (function($) {


				                     $('#results-table').append('<tr><td>' + object.get('name') + '</td><td>' + object.get('account') + '</td><td>'+ object.get('email')
				                     	+ '</td><td>' + object.get('Location') + '</td><td><img class="img"src="' + object.get('instacheckImg')._url + '">' 
				                     	+ '</td><td>' + object.get('createAt')+ '</td><td>' + object.get('updatedAt')+ '</td></tr>');
				                   
				                 })(jQuery);	       
		 				       
					   } 
					   
				},	  
				  

				  error: function(object, error) {
				     console.log(error);
				  }
				}); 
				
				 
				
				 
	            alert('Welcome!');
	        },
	        // If there is an error
	        error: function(user, error) {
	            console.log("The user is not found in the Cloud DB");
	        }
	    });
		
		
		 
	});
	
	
 
$('.form-logout').on('submit', function (e) {
        // Prevent Default Submit Event
        e.preventDefault();

        console.log("Performing submit");

        //logout current user
        if ( Parse.User.current() ) {
            Parse.User.logOut();
         
            

            // check if really logged out
            if (Parse.User.current())
                console.log("Failed to log out!");
            
        }

        window.location.href = "index.html";
       
    });
	
 
});



$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



