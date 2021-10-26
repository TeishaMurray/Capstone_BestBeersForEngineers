package com.example.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.exception.ResourceNotFoundException;
import com.example.capstone.react.model.Beer;
import com.example.capstone.react.repository.BeerRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class BeersController {
	
@Autowired
	private BeerRepository beerRepo;

//get all beer
@GetMapping("/allbeers")
	public List<Beer> getAllBeers()
	{
		return beerRepo.findAll();
	}

//add beer to api / create new beer 
@PostMapping("/addbeer")
	public Beer newBeer(@RequestBody Beer b)
	{
		return beerRepo.save(b);
	}



@GetMapping("/beer/{id}")
	public ResponseEntity<Beer> getBeerById(@PathVariable int id)
	{
		Beer b= beerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Beer not found"));
		return ResponseEntity.ok(b);
	}
//^^do i need this if i don't want to search by id??

@GetMapping("/beer-by-type/{type}")
//file path slightly different to avoid ambiguous mapping
	public List<Beer> getBeerByType(@PathVariable String type)
	{
		List <Beer> beer=beerRepo.findByType(type);
		if(beer.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("There is no beer of this type ("+ type +") found"));
		}
		
		return beerRepo.findByType(type);
	
	}

@PutMapping("/beer/{id}")
	public ResponseEntity<Beer> updateBeer(@PathVariable int id, @RequestBody Beer beer)
	{
		Beer b= beerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Beer not found"));
		b.setName(beer.getName());
		b.setType(beer.getType());
		b.setSubtype(beer.getSubtype());
		b.setAbv(beer.getAbv());
		b.setBrewery(beer.getBrewery());
		b.setState(beer.getState());
		Beer updatedBeer=beerRepo.save(b);
		return ResponseEntity.ok(updatedBeer);
	}

@DeleteMapping("/beer/{id}")
	public String deleteBeer(@PathVariable int id)
	{
	beerRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Beer not found"));
    beerRepo.deleteById(id);
    return "The beer with id: "+ id +" is removed from the database.";
	}

}

