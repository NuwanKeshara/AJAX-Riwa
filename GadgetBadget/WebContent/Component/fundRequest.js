
$(document).ready(function () {
    if ($("#alertSuccess").text().trim() == "") {
        $("#alertSuccess").hide();
    }
    $("#alertError").hide();
});

// CLIENT-MODEL================================================================
function validateItemForm() {
    // Product ID
    if ($("#productID").val().trim() == "") {
        return "Insert Product ID";
    }
    // Contact Name
    if ($("#contactName").val().trim() == "") {
        return "Insert Contact Name";
    }
    // Contact No-------------------------------
    if ($("#contactNo").val().trim() == "") {
        return "Insert Contact No";
    }
    // Contact Mail-------------------------------
    if ($("#contactMail").val().trim() == "") {
        return "Insert Contact Mail";
    }
	// Message-------------------------------
    if ($("#message").val().trim() == "") {
        return "Insert Message";
    }
	// Company-------------------------------
    if ($("#companyName").val().trim() == "") {
        return "Insert Company";
    }
    return true;
}

$(document).on("click", "#btnSave", function (event) {
    // Clear alerts---------------------
    $("#alertSuccess").text("");
    $("#alertSuccess").hide();
    $("#alertError").text("");
    $("#alertError").hide();

    // Form validation-------------------
    var status = validateItemForm();
    if (status != true) {
        $("#alertError").text(status);
        $("#alertError").show();
        return;
    }
    // If valid------------------------
	else {
    var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
    $.ajax(
        {
            url: "FundRequestServlet",
            type: type,
            data: $("#formItem").serialize(),
            dataType: "text",
            complete: function(response, status) {
                onItemSaveComplete(response.responseText, status);
            }
        });
}
});

function onItemSaveComplete(response, status) {
	
    if (status == "success") {
	
        var resultSet = JSON.parse(response);
        if (resultSet.status.trim() == "123") {
            $("#alertSuccess").text("Successfully saved.");
            $("#alertSuccess").show();
            $("#divItemsGrid").html(resultSet.data1);
        } else if (resultSet.status.trim() == "error") {
            $("#alertError").text(resultSet.data);
            $("#alertError").show();
        }
    } else if (status == "error") {
        $("#alertError").text("Error while saving.");
        $("#alertError").show();
    } else {
        $("#alertError").text("Unknown error while saving..");
        $("#alertError").show();
    }
    $("#hidItemIDSave").val("");
    $("#formItem")[0].reset();
}

$(document).on("click", ".btnUpdate", function (event) {
    $("#hidItemIDSave").val($(this).data("itemid"));
    $("#productID").val($(this).closest("tr").find('td:eq(2)').text());
    $("#contactName").val($(this).closest("tr").find('td:eq(3)').text());
    $("#contactNo").val($(this).closest("tr").find('td:eq(4)').text());
    $("#contactMail").val($(this).closest("tr").find('td:eq(5)').text());
 	$("#message").val($(this).closest("tr").find('td:eq(6)').text());
 	$("#companyName").val($(this).closest("tr").find('td:eq(7)').text());
});

$(document).on("click", ".btnRemove", function (event) {
    $.ajax(
        {
            url: "FundRequestServlet",
            type: "DELETE",
            data: "itemID=" + $(this).data("itemid"),
            dataType: "text",
            complete: function (response, status) {
                onItemDeleteComplete(response.responseText, status);
            }
        });
});

function onItemDeleteComplete(response, status) {
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