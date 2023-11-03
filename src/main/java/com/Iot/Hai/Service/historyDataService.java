package com.Iot.Hai.Service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;

import com.Iot.Hai.model.HistoryData;

public interface historyDataService {
	@Autowired
	
	HistoryData saveData(HistoryData historyData);
	
	List<HistoryData> findAll(Pageable pageable);
	
	int getTotalAction();
	
	List<HistoryData> findByTimeDayBetween(Date from, Date to);
	
	List<HistoryData> sortAscTime();
	
	List<HistoryData> findAllByOrderByTimeDesc();
	
	List<HistoryData> findAllByName1();
	
	List<HistoryData> findAllByName2();
	
	List<HistoryData> findAllByName3();
	
	List<HistoryData> findAllByOrderByIdDesc();
	
	List<HistoryData> findAllByOrderByIdAsc();
}
