import config from '../config/apiConfig'; 
import axios from 'axios'; 

class Api {
    constructor(config){
        this.url = config.url; 
    }
    async cryptInfo(){
        try {
            const response = await axios.get(`${this.url}`); 
            return response.data.data;  
        } catch (error){
            console.log(error); 
            Promise.reject(error); 
        }
    }
}

const api = new Api(config); 
export default api; 