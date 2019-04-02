
export interface QueryBuilderInterface{
    
    select(entityName: string,aliase?: string):QueryBuilderInterface

    from(entityName: string): QueryBuilderInterface

    where(field: string, operation: string, operand: string): QueryBuilderInterface

    and():QueryBuilderInterface
}