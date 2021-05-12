<%@page import="fundRequest.model.FundRequestImpl"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Fund Requests</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script src="Component/jquery-3.2.1.min.js"></script>
<script src="Component/fundRequest.js"></script>
</head>
<body>
	<br>
	<br>

	<div class="container">
		<div class="row">


			<div class="col-md-12">
				<h4>All Send Fund Requests</h4>
				<br>
				<div class="table-responsive">

					<%
					FundRequestImpl fundObj = new FundRequestImpl();
					out.print(fundObj.readFundRequests());
					%>
				</div>
			</div>
		</div>
	</div>
	<div>
	<div style="display: none;" id="alertSuccess" class="alert alert-success"></div>
  <div style="display: none;"  id="alertError" class="alert alert-danger"></div>
  </div>
</body>
</html>