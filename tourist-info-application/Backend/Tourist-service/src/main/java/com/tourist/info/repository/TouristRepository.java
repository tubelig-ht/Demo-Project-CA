package com.tourist.info.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tourist.info.model.Tourist;
@Repository
public interface TouristRepository extends JpaRepository<Tourist,Integer>{
	public List<Tourist> findByOrderByFirstNameDesc();
	public Tourist findById(int id);
}
