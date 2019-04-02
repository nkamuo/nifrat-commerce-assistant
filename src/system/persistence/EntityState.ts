import { Reflection } from '../common/Reflection';
import { EntityStateManager } from './EntityStateManager';
//import { EntityStateManager } from '../../../../quaser/src/persistence.1/EntityStateManager';

export default class EntityState{

   // protected entityStateManager: EntityStateManager;

    protected status: PERSISTENCE = PERSISTENCE.NEW;

    protected entityName: string;
    /**
     * @var object the entity whose state is bieng tracked
     */
    protected entity: object;
    /**
     * @var object very first state of this Entity loaded or when created
     */
    protected persistentFieldData: {[index: string]: any} = {};


    protected persistentAssociationData: {[i: string]: any}



    /**
     * 
     * @param entityStateManager
     * @param entityName
     * @param entity 
     * @param persistentData 
     */
    public constructor(entityName: string,entity: object, persistentFieldData: {[index: string]: any} = {},persistentAssociationData: object = {}){

        this.entityName = entityName;
        this.entity = entity;
        this.persistentFieldData = persistentFieldData;
        this.persistentAssociationData = persistentAssociationData;
    }


    public changed(): boolean {

        return true;
    }


    public getPersistentFieldData(): object{

        return this.persistentFieldData;
    }
   

    public getPersistentAssociationData(): object{
        return this.persistentAssociationData;
    }

}

//var h: Date = new Date();

export enum PERSISTENCE {
NEW     = 'NEW',   //Not persistence. scheduled for creation 
SYNCED  = 'SYNCED', //In sync with the persistence storage
CHANGED = 'CHANGED',//data has changed
REMOVED = 'REMOVED',//Removed and scheduled for delete
}