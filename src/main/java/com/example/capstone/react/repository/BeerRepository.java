package com.example.capstone.react.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.capstone.react.model.Beer;

@Repository
public interface BeerRepository extends JpaRepository<Beer,Integer>{
	//JpaRepo populates all of the find/update/deletes
	
	List<Beer> findByName(String name);
	//generic list, will only accept datatype (object?) of beer
}