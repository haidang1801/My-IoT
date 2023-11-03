package com.Iot.Hai.Controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Iot.Hai.Service.MqttService;
import com.Iot.Hai.Service.historyDataService;
import com.Iot.Hai.Service.sensorDataService;
import com.Iot.Hai.model.HistoryData;
import com.Iot.Hai.model.SensorData;

@RestController
@RequestMapping("/Iot")
public class sensorDataController {
	@Autowired
	private sensorDataService DataService;
	@Autowired
	private MqttService mqttService;
	@Autowired
	private historyDataService historyService;
	
	@CrossOrigin
	@GetMapping("/getAllData")
	public List<SensorData> getAllData() {
		List<SensorData> getAllData = DataService.getAllData();
		return getAllData;		
	}
	
	@CrossOrigin
	@PostMapping("/controlLamp")
	public ResponseEntity<String> onLampRight(@RequestBody String control) {
		System.out.println(control);
		String[] str = control.replaceAll("\"", "").split(",");		// message gửi về có dạng "mesage" => xóa dấu ""
		try {
			mqttService.sendMessage(str[0], str[1]);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<String>(control, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/history")
	public ResponseEntity<NewHistory> history(@RequestParam("page") int page) {
		int limit = 10;
		NewHistory result = new NewHistory();
		result.setPage(page);
		Pageable pageable = PageRequest.of(page-1, limit);
		List<HistoryData> listHistoryData = historyService.findAll(pageable);
		result.setHistoryData(listHistoryData);
		result.setTotalPage((int) Math.ceil( (double) (historyService.getTotalAction()) / limit ));
		return new ResponseEntity<NewHistory>(result, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/database")
	public ResponseEntity<NewOutput> database(@RequestParam("page") int page) {
		int limit = 10;
		NewOutput result = new NewOutput();
		result.setPage(page);
		Pageable pageable = PageRequest.of(page-1, limit);
		List<SensorData> listSensorData = DataService.findAll(pageable);
		result.setListSensorData(listSensorData);
		result.setTotalPage((int) Math.ceil( (double) (DataService.getToltalItem()) / limit ));
		return new ResponseEntity<NewOutput>(result, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/search")
	public ResponseEntity<List<SensorData>> search(@RequestParam("num") double num, @RequestParam("name") String name) {
		System.out.println("Hai");
		List<SensorData> results = new ArrayList<>();
		if(name.equals("humidity")) {
			results = DataService.findAllHumidity(num);
			
		} else if (name.equals("temperature")) {
			results = DataService.findAllTemperature(num);
		} else if (name.equals("shine")){
			results = DataService.findAllShine((int) num);
		} else {
			results = DataService.findAllDust((int) num);
		}
		return new ResponseEntity<List<SensorData>>(results, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/sortAsc")
	public ResponseEntity<List<SensorData>> sortAsc(@RequestParam("name") String name) {
		System.out.println(name);
		List<SensorData> results = new ArrayList<>();
		if(name.equals("humidity")) {
			results = DataService.sortAscHumidity();
			
		} else if (name.equals("temperature")) {
			results = DataService.sortAscTemperature();
		} else if (name.equals("shine")){
			results = DataService.sortAscShine();
		} else if (name.equals("time")){
			results = DataService.sortAscTime();
		} else if (name.equals("id")){
			results = DataService.findAllByOrderByIdAsc();
		} else {
			results = DataService.findAllByOrderByDustAsc();
		}
		return new ResponseEntity<List<SensorData>>(results, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/sortDesc")
	public ResponseEntity<List<SensorData>> sortDesc(@RequestParam("name") String name) {
		System.out.println(name);
		List<SensorData> results = new ArrayList<>();
		if(name.equals("humidity")) {
			results = DataService.findAllByOrderByHumidityDesc();
			
		} else if (name.equals("temperature")) {
			results = DataService.findAllByOrderByTemperatureDesc();
		} else if (name.equals("shine")){
			results = DataService.findAllByOrderByShineDesc();
		} else if (name.equals("time")){
			results = DataService.findAllByOrderByTimeDesc();
		} else if (name.equals("id")){
			results = DataService.findAllByOrderByIdDesc();
		} else {
			results = DataService.findAllByOrderByDustDesc();
		}
		return new ResponseEntity<List<SensorData>>(results, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/searchDate")
	public ResponseEntity<List<SensorData>> searchDate(@RequestParam("from") Date from, @RequestParam("to") Date to) {
		System.out.println(from + " " + to);
//		Date dateFrom = Date.valueOf(from);
//		Date dateTo = Date.valueOf(to);
//		System.out.println(dateFrom + " " + dateTo);
		List<SensorData> results = DataService.findByTimeDayBetween(from, to);
		return new ResponseEntity<List<SensorData>>(results, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/history/searchDate")
	public ResponseEntity<List<HistoryData>> historySearchDate(@RequestParam("from") Date from, @RequestParam("to") Date to) {
		List<HistoryData> results = historyService.findByTimeDayBetween(from, to);
		return new ResponseEntity<List<HistoryData>>(results, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("history/sortAsc")
	public ResponseEntity<List<HistoryData>> historySortAsc(@RequestParam("name") String name) {
		List<HistoryData> results = new ArrayList<>();
		if(name.equals("time")) {
			results = historyService.sortAscTime();
		} else {
			results = historyService.findAllByOrderByIdAsc();
		}
		return new ResponseEntity<List<HistoryData>>(results, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("history/sortDesc")
	public ResponseEntity<List<HistoryData>> historySortDesc(@RequestParam("name") String name) {
		List<HistoryData> results = new ArrayList<>();
		if(name.equals("time")) {
			results = historyService.findAllByOrderByTimeDesc();
		} else {
			results = historyService.findAllByOrderByIdDesc();
		}
		return new ResponseEntity<List<HistoryData>>(results, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("history/search")
	public ResponseEntity<List<HistoryData>> historySearch(@RequestParam("name") String name) {
		List<HistoryData> results = new ArrayList<>();
		if(name.equals("lamp-1")) {
			results = historyService.findAllByName1();
		} else if (name.equals("lamp-2")){
			results = historyService.findAllByName2();
		} else {
			results = historyService.findAllByName3();
		}
		return new ResponseEntity<List<HistoryData>>(results, HttpStatus.OK);
	}
	
}
