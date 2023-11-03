package com.Iot.Hai.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.Iot.Hai.Repository.sensorDataRepository;
import com.Iot.Hai.model.HistoryData;
import com.Iot.Hai.model.SensorData;

@Service
public class sensorDataServiceImp implements sensorDataService{
	@Autowired private sensorDataRepository dataRepository;
	@Override
	public List<SensorData> getAllData() {
		return dataRepository.getAllData();
	}

	@Override
	public SensorData saveData(SensorData sensorData) {
		// TODO Auto-generated method stub
		return dataRepository.save(sensorData);
	}

	@Override
	public List<SensorData> findAll(Pageable pageable) {
		List<SensorData> results = new ArrayList<>();
		results = dataRepository.findAll(pageable).getContent();
		return results;
	}

	@Override
	public int getToltalItem() {
		return (int) dataRepository.count();
	}

	@Override
	public List<SensorData> findAllHumidity(double num) {
		List<SensorData> results = dataRepository.fillAllHumidity(num);
		return results;
	}

	@Override
	public List<SensorData> findAllTemperature(double num) {
		List<SensorData> results = dataRepository.fillAllTemperature(num);
		return results;
	}

	@Override
	public List<SensorData> findAllShine(int num) {
		List<SensorData> results = dataRepository.fillAllShine(num);
		return results;
	}

	@Override
	public List<SensorData> sortAscShine() {
		List<SensorData> results = dataRepository.sortAscShine();
		return results;
	}

	@Override
	public List<SensorData> sortAscHumidity() {
		List<SensorData> results = dataRepository.sortAscHumidity();
		return results;
	}

	@Override
	public List<SensorData> sortAscTemperature() {
		List<SensorData> results = dataRepository.sortAscTemperature();
		return results;
	}

	@Override
	public List<SensorData> sortAscTime() {
		List<SensorData> results = dataRepository.sortAscTime();
		return results;
	}
	
	@Override
	public List<SensorData> findAllByOrderByShineDesc() {
		List<SensorData> results = dataRepository.findAllByOrderByShineDesc();
		return results;
	}

	@Override
	public List<SensorData> findAllByOrderByTemperatureDesc() {
		List<SensorData> results = dataRepository.findAllByOrderByTemperatureDesc();
		return results;
	}

	@Override
	public List<SensorData> findAllByOrderByHumidityDesc() {
		List<SensorData> results = dataRepository.findAllByOrderByHumidityDesc();
		return results;
	}
	
	@Override
	public List<SensorData> findAllByOrderByTimeDesc() {
		List<SensorData> results = dataRepository.findAllByOrderByTimeDesc();
		return results;
	}

//	@Override
//	public List<SensorData> searchDate(Date from, Date to) {
//		List<SensorData> results = dataRepository.searchDate(from, to);
//		return results;
//	}

	@Override
	public List<SensorData> findByTimeDayBetween(Date from, Date to) {
		List<SensorData> results = dataRepository.findByTimeDayBetween(from, to);
		return results;
	}

	@Override
	public List<SensorData> findAllByOrderByIdDesc() {
		List<SensorData> results = dataRepository.findAllByOrderByIdDesc();
		return results;
	}

	@Override
	public List<SensorData> findAllByOrderByIdAsc() {
		List<SensorData> results = dataRepository.findAllByOrderByIdAsc();
		return results;
	}

	@Override
	public List<SensorData> findAllDust(int num) {
		List<SensorData> results = dataRepository.fillAllDust(num);
		return results;
	}

	@Override
	public List<SensorData> findAllByOrderByDustDesc() {
		List<SensorData> results = dataRepository.findAllByOrderByDustDesc();
		return results;
	}

	@Override
	public List<SensorData> findAllByOrderByDustAsc() {
		List<SensorData> results = dataRepository.findAllByOrderByDustAsc();
		return results;
	}


//	@Override
//	public List<SensorData> searchDate(String from, String to) {
//		List<SensorData> results = dataRepository.searchDate(from, to);
//		return results;
//	}

}
