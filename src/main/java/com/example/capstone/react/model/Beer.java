package com.example.capstone.react.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ohio_breweries")
public class Beer {
	@Id
	private int id;
	private String name;
	private String type;
	private String subtype;
	private double abv;
	private String brewery;
	private String state;
	
	public Beer()
	{
		
	}
	
	public Beer(int id, String name, String type, String subtype, double abv, String brewery, String state)
	{
		super();//do i need this?
		this.id = id;
		this.name = name;
		this.type = type;
		this.subtype = subtype;
		this.abv = abv;
		this.brewery = brewery;
		this.state = state;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSubtype() {
		return subtype;
	}

	public void setSubtype(String subtype) {
		this.subtype = subtype;
	}

	public double getAbv() {
		return abv;
	}

	public void setAbv(double abv) {
		this.abv = abv;
	}

	public String getBrewery() {
		return brewery;
	}

	public void setBrewery(String brewery) {
		this.brewery = brewery;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
	

}
