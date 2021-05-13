<%@ page import="fundRequest.model.FundRequestImpl"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Fund Request</title>
<script src="Component/jquery-3.2.1.min.js"></script>
<script src="Component/fundRequest.js"></script>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col">


				<h1>Fund Request</h1>
				<form id='formRequest' name='formRequest'>
						ProductID : <input id='productID' name='productID' type='text'
						class='form-control col-md-3'><br> 
						
						Contact Name : <input
						id='contactName' name='contactName' type='text'
						class='form-control col-md-3'><br> 
						
						Contact No : <input
						id='contactNo' name='contactNo' type='text'
						class='form-control col-md-3'><br> 
						
						Contact Mail :
						<input id='contactMail' name='contactMail' type='text'
						class='form-control col-md-3'><br> 
						
						Message :
						<input id='message' name='message' type='text'
						class='form-control col-md-3'><br> 
						
						Company Name :
						<input id='companyName' name='companyName' type='text'
						class='form-control col-md-3'><br> 
						
						<input
						id='btnSave' name='btnSave' type='button' value='Save'
						class='btn btn-primary'> 
						
						<input type='hidden'
						id='fundIDSave' name='fundIDSave' value=''>
				</form>

				<br>

				<div id='alertSuccess' name='alertSuccess'
					class='alert alert-success'></div>
				<div id='alertError' name='alertError' class='alert alert-danger'></div>

				<br>
				<div id="divRequestsGrid">
					<%
					FundRequestImpl obj = new FundRequestImpl();
					out.print(obj.readFundRequests());
					%>
				</div>

			</div>
		</div>
	</div>
</body>
</html>