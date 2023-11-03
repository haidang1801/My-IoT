package com.Iot.Hai.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.Iot.Hai.Service.MqttService;
import com.Iot.Hai.Service.sensorDataService;

@Component
public class MyMqttRunner implements ApplicationRunner{
	@Autowired
	private MqttService mqttClient;
	@Override
	public void run(ApplicationArguments args) throws Exception {
		// TODO Auto-generated method stub
		mqttClient.receiveMessage("room/sensor");
		mqttClient.receiveLamp("room/light");
		System.out.println("Hai Dang");
	}
}
