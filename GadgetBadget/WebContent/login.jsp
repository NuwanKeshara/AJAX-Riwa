<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
<script src="Component/jquery-3.2.1.min.js"></script>
<script src="Component/loginAuth.js"></script>
</head>
<body>

<%
if (session.getAttribute("Username") != null) 
 { 
 response.sendRedirect("fundRequest.jsp"); 
 } 
%>

	<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Login</h1>

				<form id="formLogin">
				
					    Username: <input id="Username" name="Username" type="text"
						class="form-control form-control-sm"> 
						
						Password: <input id="Password" name="Password" type="password"
						class="form-control form-control-sm"> <br> 
						
						<input id="btnLogin" name="btnLogin" type="button" value="Login"
						class="btn btn-primary"> <br> <br>
						
					<div id=alertLoginError class="alert alert-danger"></div>
				</form>
			</div>
		</div>
	</div>

</body>
</html>