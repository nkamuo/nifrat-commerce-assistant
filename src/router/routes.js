
const routes = [
  { path: '/',   redirect: '/dashboard'},

  { path: '/dashboard', component: () => import('components/dashboard/Home.vue') },

  { path: '/auth/login', component: () => import('components/auth/EmployeeLogin.vue')},

  { path: '/auth/-login', component: () => import('components/auth/MerchantLogin.vue')},

//  /catalog/product
  {
    path: '/catalog/product',
    component: () => import('layouts/catalog/product.vue'),
    children: [
      { path: '/',
        component: () => import('pages/catalog/product/List.vue') },
      { path: 'create',
       component: () => import('pages/catalog/product/Create.vue') },
      { path: ':id/edit',
       component: () => import('pages/catalog/product/Edit.vue') },
    ]
  },

  { path: '/catalog/product/:id', component: () => import('pages/catalog/product/Show.vue') },

  //CATALOG PRODUCT ITEM

  {
    path: '/catalog/product-item',
    component: () => import('layouts/catalog/ProductItem.vue'),
    children: [
      { path: '/',
        component: () => import('pages/catalog/product-item/List.vue') },
      { path: 'create',
       component: () => import('pages/catalog/product-item/Create.vue') },
    ]
  },


  //CATALOG PRODUCT CONDITION

  {
    path: '/catalog/product-condition',
    component: () => import('layouts/catalog/ProductCondition.vue'),
    children: [
      { path: '/',
        component: () => import('pages/catalog/product-condition/List.vue') },
      { path: 'create',
       component: () => import('pages/catalog/product-condition/Create.vue') },
    ]
  },

  //CATALOG BRAND

  {
    path: '/catalog/brand',
    component: () => import('layouts/catalog/Brand.vue'),
    children: [
      { path: '/',
        component: () => import('pages/catalog/brand/List.vue') },
      { path: 'create',
       component: () => import('pages/catalog/brand/Create.vue') },
    ]
  },


  //CATEGORY
  { path: '/catalog/category', component: () => import('layouts/catalog/category.vue'),
    children: [
      {path:'/', component: () => import('pages/catalog/category/List.vue')},
      {path:'create', component: ()=> import('pages/catalog/category/Create.vue')}
    ]
  },

//SALES ORDER
 { path: '/sales/order', component: () => import('layouts/sales/Order.vue'),
      children: [
        {path:'',   component: () => import('pages/sales/order/List.vue')},
        { path: 'create', component: () => import('pages/sales/order/Create.vue')},
      ] 
  },

//SALES INVOICE

 { path: '/sales/invoice', component: () => import('layouts/sales/Invoice.vue'),
      children: [
     //   {path:'',   component: () => import('pages/sales/order/List.vue')},
        { path: 'create', component: () => import('pages/sales/invoice/Create.vue')},
      ] 
  },



  //SALES PAYMENT
  { path: '/sales/payment', component: () => import('layouts/sales/payment.vue'),
    children: [
      { path: '',  component: () => import('pages/sales/payment/List.vue')},
      { path: 'create',  component: () => import('pages/sales/payment/Create.vue')}
    ]
},



//INVENTORY PURCHASE

{ path: '/inventory/purchase', component: () => import('layouts/inventory/purchase'),
  children: [
    { path: '',  component: () => import('pages/inventory/purchase/List.vue')},
    { path: 'create',  component: () => import('pages/inventory/purchase/Create.vue')}
  ]
},


//CMS POST
  { path: '/cms/post', component: () => import('layouts/cms/Post.vue'),
      children: [
        { path:'',  component: () => import('pages/cms/post/List.vue')},
        { path: 'create', component: () => import('pages/cms/post/Create.vue'), name: 'cms_post_create'}
      ] },

  

  { path: '/cart', component: () => import('components/cart/CartPreview.vue') },

  { path: '/login', component: () => import('pages/auth/Login.vue') },
  { path: '/register', component: () => import('pages/auth/Register.vue') },




  {path: '/setup', component: () => import('layouts/Setup.vue')},

  { path: '/setup/introduction', component: () => import('components/setup/Introduction.vue') },

  { path: '/setup/profile-selection', component: () => import('components/setup/ProfileSelection.vue')}

  //{ path:  '/configurations/catalog/product-condition/create', component: () => import('components/catalog/CatalogProductConditionForm.vue') },



]


























// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
