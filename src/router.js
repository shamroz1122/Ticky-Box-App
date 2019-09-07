import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './views/Dashboard/DefaultLayout.vue'
import Default from './views/Default.vue'

Vue.use(Router)

export default new Router({


  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DefaultLayout,
      children: [
          {
           path: 'admin',
           name: 'dash',
           redirect: 'admin/home',

           component:{
             render (c) { return c('router-view') }
           },
           children:[
             {
              path: 'home',
              name: 'Dash',
              component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/SupperAdmin/Dashboard.vue')
            },
          ]
        },

          {
           path: 'manufactuare',
           name: 'manufactuare',
           redirect: 'manufactuare/home',

           component:{
             render (c) { return c('router-view') }
           },
           children:[
             {
              path: 'home',
              name: 'ManHome',
              component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Manufacturare/MerchDashboard.vue')
             },
             {
              path: 'coupons',
              name: 'coupons',
              component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Manufacturare/Coupons.vue')

              },
              {
                path: 'products',
                name: 'products',
                component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Manufacturare/Products.vue')

              },
              {
                path: 'store',
                name: 'store',
                component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Manufacturare/Stores.vue')

              },
              {
                path: 'invitation',
                name: 'invitation',
                component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Manufacturare/Invitations.vue')

              },
              {
                path: 'report',
                name: 'report',
                component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Manufacturare/Report.vue')

              },
            ]
          },
          {
            path: 'merchant',
            name: 'merchant',
            redirect: 'merchant/home',
 
            component:{
              render (c) { return c('router-view') }
            },
            children:[
              {
               path: 'home',
               name: 'MerHome',
               component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Merchant/MerchDashboard.vue')
              },
              {
               path: 'coupons',
               name: 'coupons',
               component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Merchant/Coupons.vue')
 
               },
               {
                 path: 'products',
                 name: 'products',
                 component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Merchant/Products.vue')
 
               },
               {
                 path: 'store',
                 name: 'store',
                 component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Merchant/Stores.vue')
 
               },
               {
                 path: 'invitation',
                 name: 'invitation',
                 component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Merchant/Invitations.vue')
 
               },
               {
                 path: 'report',
                 name: 'report',
                 component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Merchant/Report.vue')
 
               },
             ]
           },
           
           {
            path: 'consumer',
            name: 'consumer',
            redirect: 'consumer/home',
 
            component:{
              render (c) { return c('router-view') }
            },
            children:[
              {
               path: 'home',
               name: 'ConsHome',
               component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Consumer/ConsumerDashboard.vue')
              },
              {
               path: 'ibadge',
               name: 'ibadge',
               component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Consumer/Badge.vue')
 
               },
               {
                 path: 'report',
                 name: 'report',
                 component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/Consumer/Reports.vue')
 
               },
             ]
           },
        ]
      }, 
      {
        path: '/',
        name: 'home',
        component: Default,
        children:[
          {
           path: '',
           name: 'HOME',
           component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
         },
         {
          path: 'about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ './views/Pages/About.vue')
        },
        {
          path: 'privacy_policy',
          name: 'privacy_policy',
          component: () => import(/* webpackChunkName: "about" */ './views/Pages/Privacy_Policy.vue')
        },
        {
          path: 'terms_and_conditions',
          name: 'terms_and_conditions',
          component: () => import(/* webpackChunkName: "about" */ './views/Pages/Terms_and_conditions.vue')
        },
        {
          path: 'customer_support',
          name: 'customer_support',
          component: () => import(/* webpackChunkName: "about" */ './views/Pages/Customer_Support.vue')
        },
        {
          path: 'faqs',
          name: 'faqs',
          component: () => import(/* webpackChunkName: "about" */ './views/Pages/FAQS.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import(/* webpackChunkName: "about" */ './views/Pages/Blog.vue')
        },
        {
          path: 'read_blog/:id',
          name: 'read_blog',
          component: () => import(/* webpackChunkName: "about" */ './views/Pages/Read_blog.vue')
        },
        {
          path: 'site_coupon',
          name: 'site_coupon',
          component: () => import(/* webpackChunkName: "about" */ './views/Coupans/Site_coupon.vue')
        },
        {
          path: 'coupon_categories',
          name: 'coupon_categories',
          component: () => import(/* webpackChunkName: "about" */ './views/Coupans/Coupon_categories.vue')
        },


        {
          path: 'site_stores',
          name: 'site_stores',
          component: () => import(/* webpackChunkName: "about" */ './views/Store/Site_stores.vue')
        }, 
        {
          path: 'store_products',
          name: 'store_products',
          component: () => import(/* webpackChunkName: "about" */ './views/Store/Store_products.vue')
        },
 
        {
          path: 'view_product',
          name: 'view_product',
          component: () => import(/* webpackChunkName: "about" */ './views/Products/View_product.vue')
        },

        {
          path: 'signin',
          name: 'signin',
          component: () => import(/* webpackChunkName: "about" */ './views/Account/Signin.vue')
        },
        {
          path: 'signup',
          name: 'signup',
          component: () => import(/* webpackChunkName: "about" */ './views/Account/Signup.vue')
        },

        //cant find 

        {
          path: 'pin_products',
          name: 'pin_products',
          component: () => import(/* webpackChunkName: "about" */ './views/Products/Pin_products.vue')
        },
        {
          path: 'pin_coupons',
          name: 'pin_coupons',
          component: () => import(/* webpackChunkName: "about" */ './views/Coupans/Pin_coupons.vue')
        },

        {
          path: 'couponpg',
          name: 'couponpg',
          component: () => import(/* webpackChunkName: "about" */ './views/Coupans/CouponPage.vue')
        },

        {
          path: 'shopping_history',
          name: 'shopping_history',
          component: () => import(/* webpackChunkName: "about" */ './views/Shopping/Shopping_history.vue')
        },
        {
          path: 'shopping_history_details',
          name: 'shopping_history_details',
          component: () => import(/* webpackChunkName: "about" */ './views/Shopping/Shopping_history_details.vue')
        },
        {
          path: 'shopping_summary',
          name: 'shopping_summary',
          component: () => import(/* webpackChunkName: "about" */ './views/Shopping/Shopping_summary.vue')
        },
        {
          path: 'shipping_detail',
          name: 'shipping_detail',
          component: () => import(/* webpackChunkName: "about" */ './views/Shopping/Shipping_detail.vue')
        },
        {
          path: 'product_payment',
          name: 'product_payment',
          component: () => import(/* webpackChunkName: "about" */ './views/Products/Product_payment.vue')
        },
        {
          path: 'thanks',
          name: 'thanks',
          component: () => import(/* webpackChunkName: "about" */ './views/Shopping/Thanks.vue')
        },
        {
          path: 'features_deals',
          name: 'features_deals',
          component: () => import(/* webpackChunkName: "about" */ './views/Deals/Features_deals.vue')
        },
        {
          path: 'popular_deals',
          name: 'popular_deals',
          component: () => import(/* webpackChunkName: "about" */ './views/Deals/Popular_deals.vue')
        },
        {
          path: 'latest_deals',
          name: 'latest_deals',
          component: () => import(/* webpackChunkName: "about" */ './views/Deals/Latest_deals.vue')
        },
        {
          path: 'latest_deals',
          name: 'latest_deals',
          component: () => import(/* webpackChunkName: "about" */ './views/Deals/Latest_deals.vue')
        },
        {
          path: 'purchaseable',
          name: 'purchaseable',
          component: () => import(/* webpackChunkName: "about" */ './views/Shopping/Purchaseable.vue')
        },
      ]
    },  
  ]


//   routes: [

//     {
//       path: '/manage_requests',
//       name: 'manage_requests',
//       component: Manage_request
//     },

 })
