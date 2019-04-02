import EntityState from './EntityState';
import { Reflection } from '../common/Reflection';

export class EntityStateManager{

    protected entityStates: Map< object,EntityState> = new Map();

    //protected 




    /**
     * 
     * @param entityName 
     * @param entity 
     */
    public addNewEntity(entityName: string, entity: object): void{

    }


    public addFromStorage(entityName: string,entity: object,entityStateData: object): void{

        var entityState = new EntityState(entityName,entity,entityStateData);
        
           this.entityStates.set(entity,entityState)
    }


    public  update(entity: object,newData: object): void{

        var state = this.entityStates.get(entity);
        var changedProps = {};

        if(state){
         //changedProps =  state.getChangedProperties();
        }
    }


    public getEntityCurrentState(entity: object): EntityState|undefined{
      
        return this.entityStates.get(entity);
    }



    public getEntityChangedProperties(entity: object): {[index: string]: number|boolean|Date|string }{

        var testState;
        var entityState: EntityState;

         testState = this.entityStates.get(entity);

        if(! testState){
            return {};
        }
        else{
            entityState = testState;
        }

        var fields: {[i: string]: string|boolean|number|Date} = {};
        var associations: {[i: string]: string|string};
        var props: {[i: string]: any} = {};

        //gets all properties that are not methods
        props = Reflection.getProperties(entity);


        return props;
    }


    public getEntityFields(entity: object): object{

        var state = this.entityStates.get(entity);

        if(state){
            return state.getPersistentFieldData;
        }

        return {};
    }


    public getEntityAssociations(entity: object): object{
        var state = this.entityStates.get(entity);

        if(state){
            return state.getPersistentAssociationData;
        }
        return {};
    }

}