package com.ezio.HospitalMS1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ezio.HospitalMS1.entity.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer>{

}
