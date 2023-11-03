package com.Iot.Hai.model;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class SensorData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private double temperature;
	private double humidity;
	private int shine;
	private int dust;
	private String timeHour;
	private String time;
	private Date timeDay;


	public SensorData(int id, double temperature, double humidity, int shine, int dust, String timeHour, String time,
			Date timeDay) {
		super();
		this.id = id;
		this.temperature = temperature;
		this.humidity = humidity;
		this.shine = shine;
		this.dust = dust;
		this.timeHour = timeHour;
		this.time = time;
		this.timeDay = timeDay;
	}


	public double getTemperature() {
		return temperature;
	}


	public void setTemperature(double temperature) {
		this.temperature = temperature;
	}


	public double getHumidity() {
		return humidity;
	}


	public void setHumidity(double humidity) {
		this.humidity = humidity;
	}


	public SensorData() {
		super();
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getShine() {
		return shine;
	}

	public void setShine(int shine) {
		this.shine = shine;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}


	public String getTimeHour() {
		return timeHour;
	}


	public void setTimeHour(String timeHour) {
		this.timeHour = timeHour;
	}


	public Date getTimeDay() {
		return timeDay;
	}


	public void setTimeDay(Date timeDay) {
		this.timeDay = timeDay;
	}


	public int getDust() {
		return dust;
	}


	public void setDust(int dust) {
		this.dust = dust;
	}



	
}
