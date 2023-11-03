package com.Iot.Hai.Repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Iot.Hai.model.HistoryData;
import com.Iot.Hai.model.SensorData;
@Repository
public interface historyDataRepository extends JpaRepository<HistoryData, Integer>{
	
	@Query(value = "SELECT * FROM iot.history_data ORDER BY time asc;", nativeQuery = true)
	List<HistoryData> sortAscTime();
	
	List<HistoryData> findByTimeDayBetween(Date from, Date to);
	
	List<HistoryData> findAllByOrderByTimeDesc();
	
	@Query(value = "SELECT * FROM iot.history_data where name like 'Lamp 1';", nativeQuery = true)
	List<HistoryData> findAllByName1();
	
	@Query(value = "SELECT * FROM iot.history_data where name like 'Lamp 2';", nativeQuery = true)
	List<HistoryData> findAllByName2();
	
	@Query(value = "SELECT * FROM iot.history_data where name like 'Lamp 3';", nativeQuery = true)
	List<HistoryData> findAllByName3();
	
	List<HistoryData> findAllByOrderByIdDesc();
	
	List<HistoryData> findAllByOrderByIdAsc();
}
