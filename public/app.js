(function() {
	"use.strict";
	

	$('form').on('submit', function(event){
		event.preventDefault();

		var infos ={ 
			mdp : $('#mdp').val(),
			nom : $('#nom').val(),
		};


		$.ajax({
			url:$("form").attr("action"),
			method:"post",
			data:infos,
			success: function(data){

				if(data.fail){
					$('form').html(data.fail);
				} 
				else{
					$('html').html( data);
				}
				
			},
		});
	});


	
}());