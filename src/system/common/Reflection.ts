
export class Reflection{
  
    /**
     * Get all no function properties of an object
     * @param obj 
     */
    public static getProperties(obj: object,propNames?: string[]): {[i: string]: any}{
        var props: {[i: string]: any} = {};
        var propValue: any;

        if(! propNames){
            propNames = <string[]>Reflect.ownKeys(obj);
        }
       

        propNames.forEach( (propName): void => {

          propValue = Reflect.get(obj,propName);

          if(typeof propValue === 'function'){
              return;
          }

          props[propName] = propValue;
        });

        return props;
    }



    public static setProperty(obj: object,key: string,value: any): boolean {
    
        return Reflect.set(obj,key,value);
    }


    public static getProperty(obj: object, key: string): any {

        return Reflect.get(obj,key);

    }
}