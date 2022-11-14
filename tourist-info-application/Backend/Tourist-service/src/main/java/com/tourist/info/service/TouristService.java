package com.tourist.info.service;

import java.util.List;

import com.tourist.info.model.Tourist;

public interface TouristService {
	public List<Tourist> getAllTourists();
	public Tourist getTouristById(int id);
	public void addTourist(Tourist tourist);
	public void updateTourist(int id,Tourist tourist);
}
