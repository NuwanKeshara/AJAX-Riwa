package fundRequest.service;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import fundRequest.model.FundRequestImpl;

/**
 * Servlet implementation class LoginAuthServlet
 */
@WebServlet("/LoginAuthServlet")
public class LoginAuthServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	FundRequestImpl frobj = new FundRequestImpl();
	HttpSession session ;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginAuthServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("Get");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 
		 String authStatus = frobj.login(request.getParameter("Username"), 
		 request.getParameter("Password")); 
		 session = request.getSession();
		 String output = ""; 
		 
		 if (authStatus.equals("success")) 
		 { 
			 
		 output = "{\"status\":\"success\", \"data\": \"\"}"; 
		 session.setAttribute("Username", request.getParameter("Username"));
		 
		 } 
		 else
		 { 
			 
		 output = "{\"status\":\"error\", \"data\": \"" + authStatus + "\"}"; 
		 
		 } 
		 response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("Delete");
		session.setAttribute("Username", null);
		
		session = request.getSession(); 
		session.invalidate(); 
		response.getWriter().write("success");
		
	}

}
