package fundRequest.service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import fundRequest.model.FundRequestImpl;

/**
 * Servlet implementation class FundRequestServlet
 */
@WebServlet("/FundRequestServlet")
public class FundRequestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	FundRequestImpl fundObj = new FundRequestImpl();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FundRequestServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String output = fundObj.insertRequest(
				Integer.parseInt(request.getParameter("productID")), 
				request.getParameter("contactName"), 
				request.getParameter("contactNo"), 
				request.getParameter("contactMail"),
				request.getParameter("message"), 
				request.getParameter("companyName"));
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		
		String output = fundObj.updateRequest(
				Integer.parseInt(paras.get("hidItemIDSave").toString()), 
				Integer.parseInt(paras.get("productID").toString()), 
				paras.get("contactName").toString(), 
				paras.get("contactNo").toString(), 
				paras.get("contactMail").toString(),
				paras.get("message").toString(), 
				paras.get("companyName").toString());
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map parase = getParasMap(request); 
		String x = parase.get("itemID").toString();
		String output = fundObj.deleteRequest(Integer.parseInt(x)); 
		response.getWriter().write(output);
	}
	
	private static Map<String,String> getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			
			String[] params = queryString.split("&");
			
			for (String param : params) {

				String[] p = param.split("=");
				map.put(p[0], java.net.URLDecoder.decode(p[1], StandardCharsets.UTF_8.name()));
			}
		} catch (Exception e) {
		}
		return map;
	}

}
