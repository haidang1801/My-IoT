package com.Iot.Hai.Repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Iot.Hai.model.SensorData;

@Repository
public interface sensorDataRepository extends JpaRepository<SensorData, Integer>{
	@Query(value = "SELECT * FROM iot.sensor_data; ", nativeQuery = true)
	List<SensorData> getAllData();
	
	@Query(value = "SELECT * FROM iot.sensor_data where humidity = ?;", nativeQuery = true)
	List<SensorData> fillAllHumidity(double num);
	
	@Query(value = "SELECT * FROM iot.sensor_data where temperature = ?;", nativeQuery = true)
	List<SensorData> fillAllTemperature(double num);
	
	@Query(value = "SELECT * FROM iot.sensor_data where shine = ?;", nativeQuery = true)
	List<SensorData> fillAllShine(int num);
	
	@Query(value = "SELECT * FROM iot.sensor_data where dust = ?;", nativeQuery = true)
	List<SensorData> fillAllDust(int num);
	
	@Query(value = "SELECT * FROM iot.sensor_data ORDER BY shine ASC;", nativeQuery = true)
	List<SensorData> sortAscShine();
	
	@Query(value = "SELECT * FROM iot.sensor_data ORDER BY humidity ASC;", nativeQuery = true)
	List<SensorData> sortAscHumidity();
	
	@Query(value = "SELECT * FROM iot.sensor_data ORDER BY temperature ASC;", nativeQuery = true)
	List<SensorData> sortAscTemperature();
	
	@Query(value = "SELECT * FROM iot.sensor_data ORDER BY time asc;", nativeQuery = true)
	List<SensorData> sortAscTime();
	
	List<SensorData> findAllByOrderByShineDesc();
	
	List<SensorData> findAllByOrderByTemperatureDesc();
	
	List<SensorData> findAllByOrderByHumidityDesc();
	
	List<SensorData> findAllByOrderByTimeDesc();
	
	List<SensorData> findAllByOrderByIdDesc();
	
	List<SensorData> findAllByOrderByIdAsc();
	
	List<SensorData> findAllByOrderByDustDesc();
	
	List<SensorData> findAllByOrderByDustAsc();
	
//	@Query(value = "SELECT * FROM my_iot.sensor_data where time_day between ':from' and ':to';")
//	List<SensorData> searchDate(@Param("from") Date from,@Param("to") Date to); 
	
	List<SensorData> findByTimeDayBetween(Date from, Date to);
	
//	@Query(value = "SELECT * FROM my_iot.sensor_data where time between ':from' and ':to';")
//	List<SensorData> searchDate(@Param("from") String from,@Param("to") String to);
}
