
$(document).on("click", "#btnSave", function(event) {
	
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateForm();
	
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	// If valid------------------------
	else {
		$.ajax(
		{
			url: "FundRequestServlet",
			type: "POST",
			data: $("#requestForm").serialize(),
			dataType: "text",
			complete: function(response, status) {
				onRequestSave(response.responseText, status);
			}
		});
		}
});

function validateForm() {
	// productID----------------------------------------
	if ($("#productID").val().trim() == "") {
		return "Insert Product ID";
	}
	// contactName-----------------------------
	if ($("#contactName").val().trim() == "") {
		return "Insert Contact Name";
	}
	// email and contact no-------------------------------
	if ($("#email").val().trim() == ""  && $("#phone").val().trim() == "") {
		return "Insert email or contact no";
	}
	// message-------------------------------
	if ($("#message").val().trim() == "") {
		return "Insert email or contact no";
	}
	return true;
}

function onRequestSave(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text("Error occured");
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#requestForm")[0].reset();
}

$(document).on("click", ".btnRemove", function (event) {
    $.ajax(
        {
            url: "FundRequestServlet",
            type: "DELETE",
            data: "itemID=" + $(this).data("itemid"),
            dataType: "text",
            complete: function (response, status) {
                onRequestDelete(response.responseText, status);
            }
        });
});

function onRequestDelete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}