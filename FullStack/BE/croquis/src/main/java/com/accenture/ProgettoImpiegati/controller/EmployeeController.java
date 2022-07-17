package com.accenture.ProgettoImpiegati.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.ProgettoImpiegati.exceptions.ResourceNotFoundException;
import com.accenture.ProgettoImpiegati.model.Employee;
import com.accenture.ProgettoImpiegati.service.EmployeeService;
/*
 * 
 * json ok
 *  
{
"firstName": "andrea",
"lastName": "pra",
"emailId": "dasdsa"
}
 * 
 * */


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class EmployeeController extends BaseController{
	
	@Autowired
	private EmployeeService employeeService;

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeService.getEmployees();
	}

	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable(value = "id") Long employeeId
			)
					throws ResourceNotFoundException {
		Employee employee = employeeService.getEmployee(employeeId);

		return ResponseEntity.ok().body(employee);
	}


	//http://localhost:8080/ProgettoImpiegatiApplication/api/v1/employees
	@PostMapping("/employees")
	public Employee createEmployee(@Valid @RequestBody Employee employee) {

		Employee emp = null;	
//		try {
//			if (bindingResult.hasErrors()) {
//				logger.debug("Errore nella validazione form");
//				bindingResult.getFieldErrors().forEach(e -> {
//					logger.debug(e.getField() + " - " + e.getCode() + " constraint violated");
//				});}
//			else {
//				logger.debug("Form valido");
			emp =  employeeService.saveEmployee(employee);
//			}
			return emp;
		}
//		catch (Exception e2) {
//			// TODO: handle exception
//		}
		
	 

	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Long employeeId,
			@Valid @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
		Employee employee = employeeService.getEmployee(employeeId);


		employee.setEmailId(employeeDetails.getEmailId());
		employee.setLastName(employeeDetails.getLastName());
		employee.setFirstName(employeeDetails.getFirstName());
		final Employee updatedEmployee = employeeService.saveEmployee(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/employees/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long employeeId)
			throws ResourceNotFoundException {
		//			Employee employee = employeeService.getEmployee(employeeId);
		employeeService.deleteEmployee(employeeId);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}