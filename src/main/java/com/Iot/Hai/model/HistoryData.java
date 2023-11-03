package com.Iot.Hai.model;

import java.sql.Date;

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

public class HistoryData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String action;
	private String time;
	private Date timeDay;
	
	public HistoryData() {
		super();
	}
	
	public HistoryData(int id, String name, String action, String time, Date timeDay) {
		super();
		this.id = id;
		this.name = name;
		this.action = action;
		this.time = time;
		this.timeDay = timeDay;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Date getTimeDay() {
		return timeDay;
	}
	public void setTimeDay(Date timeDay) {
		this.timeDay = timeDay;
	}
	
}
