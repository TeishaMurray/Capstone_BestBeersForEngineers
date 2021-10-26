import axios from "axios";

const BEER_API_BASE_URL ="http://localhost:8081/api";

class BeerService {

        getAllBeers(){
            return axios.get(BEER_API_BASE_URL+"/allbeers");
        }

        //Create
        createBeer(beer){
            return axios.post(BEER_API_BASE_URL+"/addbeer", beer)
        }

        //Update
        updateBeer(beer, id){
            return axios.put(BEER_API_BASE_URL+"/beer/"+id,beer)
        }

        //Read
        getBeerById(id){
            return axios.get(BEER_API_BASE_URL+"/beer/"+id)
        }


        // getBeerByName(name){
        //     return axios.post(BEER_API_BASE_URL+"/beer/"+name)
        // }

        //Read
        getBeerByType(type){
            return axios.get(BEER_API_BASE_URL+"/beer-by-type/"+type)
        }

        //Delete
        deleteBeer(id){
            return axios.delete(BEER_API_BASE_URL+"/beer/"+id)
        }
}

export default new BeerService()
//we are not exporting a class but object of this class
//allows me to directly use object inside of component