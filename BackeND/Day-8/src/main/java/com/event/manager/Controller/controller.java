// package com.event.manager.Controller;

// public class controller {

// }


package com.event.manager.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.event.manager.Entity.*;
import com.event.manager.Service.*;

import io.swagger.v3.oas.annotations.tags.Tag;;





@CrossOrigin
@RestController
public class controller {
	

		@Autowired
		service s;
        @Tag(name="Get users",description="endpoint will fetch all details")
		@GetMapping("/get")
		public List<entity> showDetails() {
			return s.getDetails();

		}
//		@DeleteMapping("/delete/{phone_number}")
//		public long
//		deleteInfo(@PathVariable("phone_number")long phone_number) {
//			s.deleteDetails(phone_number);
//			return "Deleted details";
//		}
      
		@PostMapping("/post")
		public String addDetails(@RequestBody entity m) {
			s.add(m);
			return "Added product ";
		}
       @PutMapping("/updateDetails")
       public entity updateInfo(@RequestBody entity gh) {
    	   return s.updateDetails(gh);
       }
       
		//sorting
		@GetMapping("/product/{field}")
		public List<entity> getWithSort(@PathVariable String field) {
			return s.getSorted(field);
		}

		// pagination
		@GetMapping("/product/{offset}/{pageSize}")
		public List<entity> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
			return s.getWithPagination(offset, pageSize);
		}
}