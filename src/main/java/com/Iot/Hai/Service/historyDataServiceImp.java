package com.Iot.Hai.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.Iot.Hai.Repository.historyDataRepository;
import com.Iot.Hai.model.HistoryData;

@Service
public class historyDataServiceImp implements historyDataService{

	@Autowired
	private historyDataRepository dataRepository;
	
	@Override
	public HistoryData saveData(HistoryData historyData) {
		return dataRepository.save(historyData);
	}

	@Override
	public List<HistoryData> findAll(Pageable pageable) {
		List<HistoryData> results = new ArrayList<>();
		results = dataRepository.findAll(pageable).getContent();
		return results;
	}

	@Override
	public int getTotalAction() {
		return (int) dataRepository.count();
	}

	@Override
	public List<HistoryData> findByTimeDayBetween(Date from, Date to) {
		List<HistoryData> results = dataRepository.findByTimeDayBetween(from, to);
		return results;
	}

	@Override
	public List<HistoryData> sortAscTime() {
		List<HistoryData> results = dataRepository.sortAscTime();
		return results;
	}

	@Override
	public List<HistoryData> findAllByOrderByTimeDesc() {
		List<HistoryData> results = dataRepository.findAllByOrderByTimeDesc();
		return results;
	}

	@Override
	public List<HistoryData> findAllByName1() {
		List<HistoryData> results = dataRepository.findAllByName1();
		return results;
	}

	@Override
	public List<HistoryData> findAllByName2() {
		List<HistoryData> results = dataRepository.findAllByName2();
		return results;
	}

	@Override
	public List<HistoryData> findAllByOrderByIdDesc() {
		List<HistoryData> results = dataRepository.findAllByOrderByIdDesc();
		return results;
	}

	@Override
	public List<HistoryData> findAllByOrderByIdAsc() {
		List<HistoryData> results = dataRepository.findAllByOrderByIdAsc();
		return results;
	}

	@Override
	public List<HistoryData> findAllByName3() {
		List<HistoryData> results = dataRepository.findAllByName3();
		return results;
	}
}
