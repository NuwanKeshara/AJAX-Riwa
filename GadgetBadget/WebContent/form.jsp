<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Fund Request Form</title>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
<script src="Component/jquery-3.2.1.min.js"></script>
<script src="Component/fundRequest.js"></script>
</head>


<body>
<br>
<br>
<br>
<div class="container">

<div>
<legend>
<center><h2><b>Fund Request</b></h2></center>
</legend>
<br>

<form id="requestForm" name="requestForm">
  
  <div class="row mb-4">
  
  <!-- Product ID input -->
    <div class="col">
      <div class="form-outline">
        <input type="text" id="productID" name="productID" class="form-control" />
        <label class="form-label" for="form6Example1">Product ID</label>
      </div>
    </div>
    
    <!-- Contact name input -->
    <div class="col">
      <div class="form-outline">
        <input type="text" id="contactName" name="contactName" class="form-control" />
        <label class="form-label" for="form6Example2">Contact name</label>
      </div>
    </div>
  </div>

  <!-- Company name input -->
  <div class="form-outline mb-4">
    <input type="text" id="companyName" name="companyName"  class="form-control" />
    <label class="form-label" for="form6Example3">Company name</label>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="email" name="email"  class="form-control" />
    <label class="form-label" for="form6Example5">Email</label>
  </div>

  <!-- Contact No input -->
  <div class="form-outline mb-4">
    <input type="number" id="phone" name="phone"  class="form-control" />
    <label class="form-label" for="form6Example6">Phone</label>
  </div>

  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="message" name="message"  rows="4"></textarea>
    <label class="form-label" for="form6Example7">Message</label>
  </div>

  <div style="display: none;" id="alertSuccess" class="alert alert-success"></div>
  <div style="display: none;"  id="alertError" class="alert alert-danger"></div>

  <!-- button -->
  <button id="btnSave" name="btnSave" type="button" class="btn btn-primary btn-block mb-4">
  Send Requests</button>
  
</form>
<a href="http://localhost:8081/GadgetBadget/table.jsp">
  <button class="btn btn-warning btn-block mb-4">All Requests</button></a>
</div>
</div>
</body>
</html>