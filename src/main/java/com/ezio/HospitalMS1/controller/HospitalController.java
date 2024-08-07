package com.ezio.HospitalMS1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ezio.HospitalMS1.entity.Hospital;
import com.ezio.HospitalMS1.service.HospitalService;

@Controller
public class HospitalController {

	@Autowired
	private HospitalService hospitalService;
	
	
	@GetMapping("/home")
	public String home() {
		return "demo/Home";
	}
	
	@PostMapping("/addData")
	public ResponseEntity<Hospital> addData(@RequestBody Hospital hospital) {
		 hospitalService.saveData(hospital);
		 return ResponseEntity.ok(hospital);
	}
	
	@GetMapping("/getData")
	@ResponseBody
	public List<Hospital> showData(){
		return hospitalService.getData();
	}
	
	
	@GetMapping("/getData/{id}")
	@ResponseBody
	public Hospital showById(@PathVariable Integer id) {
		return hospitalService.getDataById(id);
	}
	
	@PutMapping("/editData")
	@ResponseBody
	public Hospital editData(@RequestBody Hospital hospital) {
		return hospitalService.updateData(hospital);
	}
	
	@DeleteMapping("/deleteData/{id}")
	@ResponseBody
	public String removeData(@PathVariable Integer id) {
		return hospitalService.deleteData(id);
	}
	
	
}
