package com.Iot.Hai.Service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;

import com.Iot.Hai.model.HistoryData;
import com.Iot.Hai.model.SensorData;

public interface sensorDataService {
	@Autowired
	
	List<SensorData> getAllData();

	SensorData saveData(SensorData sensorData);
	
	List<SensorData> findAll(Pageable pageable);
	
	int getToltalItem();
	
	List<SensorData> findAllHumidity(double num);
	
	List<SensorData> findAllTemperature(double num);
	
	List<SensorData> findAllShine(int num);
	
	List<SensorData> findAllDust(int num);
	
	List<SensorData> sortAscShine();
	
	List<SensorData> sortAscHumidity();
	
	List<SensorData> sortAscTemperature();
	
	List<SensorData> sortAscTime();
	
	List<SensorData> findAllByOrderByShineDesc();
	
	List<SensorData> findAllByOrderByTemperatureDesc();
	
	List<SensorData> findAllByOrderByHumidityDesc();
	
	List<SensorData> findAllByOrderByTimeDesc();
	
	List<SensorData> findAllByOrderByIdDesc();
	
	List<SensorData> findAllByOrderByIdAsc();
	
	List<SensorData> findAllByOrderByDustDesc();
	
	List<SensorData> findAllByOrderByDustAsc();
	
//	List<SensorData> searchDate(Date from, Date to);
	
	List<SensorData> findByTimeDayBetween(Date from, Date to);
	
//	List<SensorData> searchDate(String from, String to);
}
