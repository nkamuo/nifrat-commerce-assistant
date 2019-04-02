// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'axios',
      'veevalidate',
      'window',
   //   'ckeditor',
    //  'fileinput'

    ],

    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons' // optional, you are not bound to it
      // 'ionicons',
      // 'mdi',
      // 'fontawesome'
    ],

    supportIE: true,
    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,


      chainWebpack(chain){

    //    const svgRule = chain.module.rule( 'svg' );

		// Then you can either:
		//
		// * clear all loaders for existing 'svg' rule:
		//
    //    svgRule.uses.clear();
     //   console.log(svgRule.uses)
		//
		// * or exclude ckeditor directory from node_modules:
		//svgRule.exclude.add( __dirname + '/node_modules/@ckeditor' );

		// Add an entry for *.svg files belonging to CKEditor. You can either:
		//
		// * modify the existing 'svg' rule:
		//
		//		svgRule.use( 'raw-loader' ).loader( 'raw-loader' );
		//
		// * or add a new one:
  
   // chain.module
	//	.rule( 'svg' )
		//	.test( /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/ )
	//		.use( 'raw-loader' )
	//		.loader( 'raw-loader' );
      },





      extendWebpack (cfg) {


        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        });

/*
        //New
        const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
        const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );


        
        cfg.plugins.push(
          new CKEditorWebpackPlugin({
              language: 'en'
          })
        );

        
        


        cfg.module.rules.push({ 
         test: /^(ftp)|(https):\/\//,
          exclude: /\.svg$/,
          use: [ 'url-loader' ]
        });
     
        
        cfg.module.rules.unshift({ 
          test: /\.svg$/,
          use: [ 'raw-loader' ]
        });

      

        cfg.module.rules.push({
          test: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
          use: [
              {
                  loader: 'style-loader',
                  options: {
                      singleton: true
                  }
              }]
              });

      

        cfg.module.rules.push({
          test: /\.css$/,
          loader: 'postcss-loader',
          options: styles.getPostCssConfig( {
              themeImporter: {
                  themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
              },
              minify: true
          } )
      });
      

*/
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QBtnGroup',
        'QRadio',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        //
        'QToggle',
        'QInput',
        'QTabs',
        'QTabPane',
        'QUploader',
        'QField',
        'QRouteTab',
        'QLayoutFooter',
        'QScrollArea',
        'QRating',
        'QInfiniteScroll',
        'QPullToRefresh',
        'QTable',
        'QSpinnerDots',
        'QCard',
        'QCardTitle',
        'QCardMain',
        'QCardMedia',
        'QCardSeparator',
        'QTab',
        'QSelect',
        'QDatetimePicker',
        'QDatetime',
        'QBtnDropdown',
        'QEditor',
        'QCollapsible',
        'QCardActions',
        'QAjaxBar',
        'QTree',
        'QCheckbox',
        'QItemTile',
        'QModal',
        'QSearch',
        'QChipsInput',
        'QTooltip',
        'QPopover'
      ],
      directives: [
        'Ripple'
      ],
      // Quasar plugins
      plugins: [
        'Notify','Dialog','Loading','Platform',
      ]
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      // i18n: 'de' // Quasar language
    },
    // animations: 'all' --- includes all animations
    animations: 'all',//[],
    ssr: {
      pwa: false
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
      id: 'org.nifrat.commerce.assistance'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
