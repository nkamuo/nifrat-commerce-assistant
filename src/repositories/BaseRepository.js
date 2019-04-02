
import axios from 'axios'

export class BaseRepository{

    get url(){
        return 'http://localhost:8000/api'
    }

    create(entity){
       return axios.post(this.url,entity);
    }

    get(id){
        return axios.get(this.url+ '/' +id);
    }

    update(id,data){
        return axios.put(this.url + '/' + id,data);
    }

    delete(id){
        return axios.delete(this.url+ '/' +id);
    }

}

export default BaseRepository;