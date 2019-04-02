
import db from 'storage/database';



export class ProductRepository{

    constructor(){
        this.store = db.table('catalog_categories');
    }



    add(category){
       return this.store.add(category);
    }

    getAll(){
      return  this.store.toArray();
    }

    update(category){
       return this.store.update(category.id,category);
    }

    delete(category){
     return this.store.delete(category.id)
    }
}