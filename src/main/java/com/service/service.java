package com.service;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

public class service {
	
	@POST
	@Path("/{service/getLoginDetails}")

	public void getLoginDetails(String id,String password){
		System.out.println(id +" \n"+password );
		int a = 0;
	}

}
