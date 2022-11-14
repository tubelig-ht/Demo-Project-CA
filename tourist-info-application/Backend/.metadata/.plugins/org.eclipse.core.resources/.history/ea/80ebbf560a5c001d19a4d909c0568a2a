package com.tourist.info.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tourist.info.model.Tourist;
import com.tourist.info.repository.TouristRepository;
@Service
public class TouristServiceImpl implements TouristService{
	
	@Autowired
	TouristRepository touristRepository;
	
	@Override
	public List<Tourist> getAllTourists() {
		return touristRepository.findByOrderByFirstNameDesc();
	}

	@Override
	public Tourist getTouristById(int id) {
		return touristRepository.findById(id);
	}

	@Override
	public void addTourist(Tourist tourist) {
		touristRepository.save(tourist);
		
	}

	@Override
	public void updateTourist(int id, Tourist tourist) {
		Tourist t=touristRepository.findById(id);
		t.setAge(tourist.getAge());
		t.setFromPlace(tourist.getFromPlace());
		t.setNumberOfDays(tourist.getNumberOfDays());
		touristRepository.save(t);
	}

}
