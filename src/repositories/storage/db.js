import Dexie from 'dexie';

const db = new Dexie("nifrat");

db.version(1).stores({
    catalog_products:    "++id,name,unitPrice,category_ids,short_description,metaKey,metaValue",
    catalog_categories:  "++id,name,slug,parent_id",
    catalog_brands:       "++id,name,slogan",

    sales_orders:         "++id,customer_id",
    sales_invoices:       "++id,order_id",
    sales_payment:        "++id,customer_id,invoice_id",

})


db.open()
.then(db=>{
    console.log("Database Opened: "+db)
})
.catch(err=>{
    console.error("Database Open Failed: "+err)
})

export default db;