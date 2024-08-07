package com.ezio.HospitalMS1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ezio.HospitalMS1.entity.Hospital;
import com.ezio.HospitalMS1.repository.HospitalRepository;

@Service
public class HospitalService {
	
	@Autowired
	private HospitalRepository hospitalRepository;
	
	public Hospital saveData(Hospital hospital) {
		return hospitalRepository.save(hospital);
	}
	
	public List<Hospital> getData(){
		return hospitalRepository.findAll();
	}

	public Hospital getDataById(Integer id) {
		return hospitalRepository.findById(id).orElse(null);
	}
	
	public Hospital updateData(Hospital hospital) {
		 Hospital existingHospital = hospitalRepository.findById(hospital.getId()).orElse(null);
		 if (existingHospital != null) {
			existingHospital.setName(hospital.getName());
			existingHospital.setAddress(hospital.getAddress());
			existingHospital.setDoctor(hospital.getDoctor());
			return hospitalRepository.save(existingHospital);
		}
		 return null;
	}
	
	public String deleteData(Integer id) {
		hospitalRepository.deleteById(id);
		return "Data Deleted Successfully....";
		
	}
}
