// import something here
import Dexie from "dexie";

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do

  var db = new Dexie('com.nifrat.commerce.assistant');

  db.version('1').stores({
    'catalog_products': 'id,name,sku,unitPrice.value,unitPrice.currency,shortDescription',
    'catalog_categories': 'id,name,parent_id',
    'catalog_brands': 'id,name,slogan',

    'sales_orders': 'id,customer,shippingAddress,billingAddress,dueDate,',
    'sales_invoices': 'id,customer_id,billingAddress',
    'sales_payments': 'id,cutomer_id,amount.value,amount.currency',
    'sales_shipments': 'id'
  });

  var dbOpen = db.open;
  Vue.prototype.$db = db;
  Vue.prototype.$dbOpen = dbOpen;
}

export {db};