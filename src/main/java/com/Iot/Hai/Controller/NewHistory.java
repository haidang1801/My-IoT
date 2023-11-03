package com.Iot.Hai.Controller;

import java.util.ArrayList;
import java.util.List;

import com.Iot.Hai.model.HistoryData;

public class NewHistory {
	private int page;
	private int totalPage;
	private List<HistoryData> historyData = new ArrayList<>();
	
	public NewHistory() {
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
	public List<HistoryData> getHistoryData() {
		return historyData;
	}
	public void setHistoryData(List<HistoryData> historyData) {
		this.historyData = historyData;
	}
	
}
