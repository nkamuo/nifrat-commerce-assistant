export class EntityMetadata {

   // public store: string;

    protected entityName: string;

    public fieldsMappings: FieldlMapping[] = [];

    public associationMappings: Array<any> = [];

    public fieldNames: string[] = [];

    public associationNames: string[] = [];






    
    public getFieldPropNames(): string[]{
        if(this.fieldNames.length !== 0){
            return this.fieldNames;
        }

        var fieldNames: string[] = [];

        this.fieldsMappings.forEach( (fieldMapping: FieldlMapping): void=> {

            fieldNames.push(fieldMapping.name);
        });

       return this.fieldNames = fieldNames;
    }


    /**
     *  returns a hash of the values of all fields registered for this entityType on this entity
     * @param entity the entity whose fields are to be returned
     */
    public getFields(entity: object): object{

        var fields: object = {};

        this.getFieldPropNames().forEach(   (fieldName)=>{

            fields[fieldName] = entity[fieldName];

        });
        return fields;
    }


    

    public getAssociationPropNames(): string[]{
        if(this.associationNames.length !== 0){
            return this.associationNames;
        }

        var associationNames: string[] = [];

        this.associationMappings.forEach( (associationMapping): void=> {

            associationNames.push(associationMapping.name);
        });

       return this.associationNames = associationNames;
    }


    public getAssociation(){
        
    }

   // public embeddedMappings

}

export class FieldlMapping{
  public  name: string = '';
  public  prop: string = this.name; 
  public  type: TYPE = TYPE.STRING;
  public  unique: boolean = false;
  public  isId: boolean = false;
}


export class StringMapping extends FieldlMapping{
    length: number = 255;
}

export class NumberMapping extends FieldlMapping{
 public min: number = -Infinity;
 public max: number = Infinity;
 public precision: number = 64;
}

export class DecimalMapping extends NumberMapping{
    public scale: number = 12;
}


export class DoubleMapping extends NumberMapping{

}


export class AssociationMapping{
  public name: string;
  public type: ASSOCIATION;
  public targetEntity: string;
}


export class ToManyAssociation extends AssociationMapping{
    mappedBy: string;
}

export class ToOneAssociation{
    inversedBy: string;
}



enum TYPE {
STRING  = 'string',
INTEGER = 'integer',
DECIMAL = 'decimal',
BOOLEAN = 'boolean',
BINARY  = 'binary',
DATE    = 'date',
}

export enum ASSOCIATION{
    ONE_TO_ONE   = 2,
    ONE_TO_MANY  = 4,
    MANY_TO_ONE  = 8,
    MANY_TO_MANY = 16,
}
