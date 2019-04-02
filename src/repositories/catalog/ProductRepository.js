import axios from 'axios';
import BaseRepository from '../BaseRepository';

//var db = new Dexie();


export class ProductRepository extends BaseRepository{

   get url(){
      return super.url+'/products'
    }
  }

export default ProductRepository
