import axios from "axios";

const BEER_API_BASE_URL ="http://localhost:8081/api/";

class BeerService {

        getAllBeers(){
            return axios.get(BEER_API_BASE_URL+"/allbeers");
        }

        createBeer(beer){
            return axios.post(BEER_API_BASE_URL+"/addbeer",beer)
        }

        getBeerByName(name){
            return axios.post(BEER_API_BASE_URL+"/beer/"+name)
        }

        getBeerByType(type){
            return axios.post(BEER_API_BASE_URL+"/beer/"+type)
        }

        deleteBeer(id){
            return axios.delete(BEER_API_BASE_URL+"/beer/"+id)
        }
}

export default new BeerService()
//we are not exporting a class but object of this class
//allows me to directly use object inside of component