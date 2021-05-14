$(document).ready(function () {
    if ($("#alertLoginError").text().trim() == "") {
        $("#alertLoginError").hide();
    }
});


function validateLoginForm() {
	// USERNAME
	if($("#Username").val().trim() == "") {
		return "Insert Username.";
	}
	// PASSWORD
	if ($("#Password").val().trim() == "") {
		return "Insert Password.";
	}
	return true;
}


$(document).on("click", "#btnLogin", function(event) {
	// Clear alerts---------------------
	$("#alertLoginError").text("");
	$("#alertLoginError").hide();
	// Form validation-------------------
	var status = validateLoginForm();
	if (status != true){
		$("#alertLoginError").text(status);
		$("#alertLoginError").show();
		return;
	}
	// If valid------------------------
	$.ajax(
		{
			url: "LoginAuthServlet",
			type: "POST",
			data: $("#formLogin").serialize(),
			dataType: "text",
			complete: function(response, status) {
				onLoginComplete(response.responseText, status);
			}
		});
});


function onLoginComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			// Redirect the valid user-----------------
			
			document.location = "fundRequest.jsp";
		}
		else if (resultSet.status.trim() == "error"){
			$("#alertLoginError").text(resultSet.data);
			$("#alertLoginError").show();
		}
	} else if (status == "error") {
		$("#alertLoginError").text("Error while login.");
		$("#alertLoginError").show();
	} else {
		$("#alertLoginError").text("Unknown error while login.");
		$("#alertLoginError").show();
	}
	$("#fundIDSave").val("");
	$("#formRequest")[0].reset();


}


