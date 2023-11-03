package com.Iot.Hai.Config;

import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MqttConfig {
	
	@Bean
	public MqttClient mqttClient() throws MqttException {
        MqttConnectOptions options = new MqttConnectOptions();
        options.setAutomaticReconnect(true);

        MqttClient mqttClient = new MqttClient("tcp://192.168.171.148:1883", "Hai");
        mqttClient.connect(options);

        return mqttClient;
    }
}
