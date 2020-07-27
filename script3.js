
/*$(document).ready(function() {*/
/*$("#send").click(function(e) {*/
/*e.preventDefault();*/
/*$("#send").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var msg = $("#msg").val();
if (!(name == '' || email == '' || msg == '')) {
$("#submitdata").empty();
$("#submitdata").append("Name: " + name + "<br/>Email: " + email + "<br/>Message: " + msg);
} else {
alert("Please Fill All Fields.");
}
});
/*});*/
/*$(document).ready(function(){
	$('#Mybtn').click(function(){
  		$('#MyForm').toggle(500);
  });
});*/
$(document).ready(function(){
	$('#Mybtn').click(function(){
  		$('#MyForm').show(500);
  });
  $('#submit').click(function(){
  		$('#MyForm').hide(500);
  });
  
  
});