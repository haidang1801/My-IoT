package com.Iot.Hai.Service;

import java.sql.Date;
import java.time.LocalDateTime;	
import java.time.format.DateTimeFormatter;

import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Iot.Hai.model.HistoryData;
import com.Iot.Hai.model.SensorData;


@Service
public class MqttService {
	@Autowired
	private sensorDataService dataService;
	@Autowired
	private MqttClient mqttClient;
	@Autowired
	private historyDataService historyService;
	
	public void receiveMessage(String topic) throws MqttException {
		mqttClient.subscribe(topic, (t, m) -> {
			try {
				String[] message = new String(m.getPayload()).split(",");
				LocalDateTime localDateTime = LocalDateTime.now();
				System.out.println(localDateTime);
				DateTimeFormatter formatHour = DateTimeFormatter.ofPattern("HH:mm:ss");
				DateTimeFormatter formatDate = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
				DateTimeFormatter formatDay = DateTimeFormatter.ofPattern("yyyy-MM-dd");
				System.out.println(localDateTime.format(formatHour));
				Double humidity = (double) Math.round((Double.parseDouble(message[1])));
				Double temperature = (double) Math.round(Double.parseDouble(message[0]) * 10.0) / 10.0;
				Date dateDay = Date.valueOf(localDateTime.format(formatDay));
				dataService.saveData(new SensorData(0, temperature, humidity, Integer.parseInt(message[2]), Integer.parseInt(message[3]), localDateTime.format(formatHour), localDateTime.format(formatDate), dateDay));
			} catch (Exception e) {
				e.printStackTrace();
			}
		});
	}
	
	public void receiveLamp(String topic) throws MqttException {
		mqttClient.subscribe(topic, (t,m) -> {
			try {
				String[] message = new String(m.getPayload()).split(",");
				LocalDateTime localDateTime = LocalDateTime.now();
				DateTimeFormatter formatDate = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
				DateTimeFormatter formatDay = DateTimeFormatter.ofPattern("yyyy-MM-dd");
				Date dateDay = Date.valueOf(localDateTime.format(formatDay));
				historyService.saveData(new HistoryData(0, message[1], message[0], localDateTime.format(formatDate), dateDay));
			} catch (Exception e) {
				e.printStackTrace();	
			}
		});
	}
	
	public void receiveSos(String topic) throws MqttException {
		mqttClient.subscribe(topic, (t,m) -> {
			try {
				String[] message = new String(m.getPayload()).split(",");
				LocalDateTime localDateTime = LocalDateTime.now();
				DateTimeFormatter formatDate = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
				DateTimeFormatter formatDay = DateTimeFormatter.ofPattern("yyyy-MM-dd");
				Date dateDay = Date.valueOf(localDateTime.format(formatDay));
				historyService.saveData(new HistoryData(0, message[1], message[0], localDateTime.format(formatDate), dateDay));
			} catch (Exception e) {
				e.printStackTrace();	
			}
		});
	}
	
	public void sendMessage(String topic, String message) throws MqttException {
		MqttMessage mqttMessage = new MqttMessage(message.getBytes());
		mqttClient.publish(topic, mqttMessage);
	}
}
