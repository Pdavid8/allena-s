$(document).ready(function(){
	var nameReg = /^[A-z][a-z]{3,14}$/;
	var mailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	var messageReg = /^[A-Z]{1}[a-z]{1,150}$/;
	$("#send").click(function(e){
		e.preventDefault();
		greske=false;
		var formName=$('#name');
		var formMail=$('#email');
		var formMessage=$('#message');
		var formSelect=('#subject');
		if(!nameReg.test(formName.val())){
			formName.css('border','1px solid #CC333F');
			return false;
		} else {
			formName.css('border','1px solid #d0bd9c');
		}
		if(!mailReg.test(formMail.val())){
			formMail.css('border','1px solid #CC333F');
			return false;
		} else {
			formMail.css('border','1px solid #d0bd9c');
		}		
		if(!messageReg.test(formMessage.val())){
			formMessage.css('border', '1px solid #CC333F');
		} else {
			formMessage.css('border', '1px solid #d0bd9c');
		}
		
	})

	$("[data-fancybox]").fancybox({
		loop: true
	});
});
