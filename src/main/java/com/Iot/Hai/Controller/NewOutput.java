package com.Iot.Hai.Controller;

import java.util.ArrayList;
import java.util.List;

import com.Iot.Hai.model.SensorData;

public class NewOutput {
	private int page;
	private int totalPage;
	private List<SensorData> listSensorData = new ArrayList<>();
	
	public NewOutput() {
		super();
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public List<SensorData> getListSensorData() {
		return listSensorData;
	}

	public void setListSensorData(List<SensorData> listSensorData) {
		this.listSensorData = listSensorData;
	}



	
}
