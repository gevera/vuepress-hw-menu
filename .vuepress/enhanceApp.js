import VueRouter from 'vue-router';
import VueYandexMetrika from 'vue-yandex-metrika';

const router = new VueRouter({
	                    path: '/',
	                    path: '/menu/appetizers',
	                    path: '/menu/salads',
	                    path: '/menu/fromfryer',
	                    path: '/menu/sandwiches ',
                            path: '/menu/sides',
	                    path: '/menu/seafood',
	                    path: '/menu/bbq',
	                    path: '/menu/desserts',
	                    path: '/menu/beverages',
                            path: '/menu/alacarte',
                            path: '/menu/catering',
	                    path: '/#telephone'
})

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // siteData.themeConfig.modalOn = false;
  // async function runModal() {
  //   await setTimeout(() => siteData.themeConfig.modalOn = true, 5000);
  // };
	if (typeof process === 'undefined') { // process is undefined in a browser
        Vue.use(VueYandexMetrika, {
        id: 55464172,
        router: router,
        env: process.env.NODE_ENV
    // other options
       });
    }
    // runModal();
  // ...apply enhancements to the app
}