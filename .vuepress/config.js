module.exports={
	title: 'Hungry Wolf BBQ',
	description: 'Home of the Hungry Wolf BBQ Sauce',
    themeConfig: {
      displayAllHeaders: true,
      searchMaxSuggestions: 12,
       nav: [
       {
         text: 'Contact Us',
         link: '/#telephone'
       },
       {
         text: "Follow us on Facebook",
	 link: "https://www.facebook.com/Wolfie7878/"
       },
       {
         text: "Review us on Yelp",
	 link: "https://www.yelp.com/biz/hungry-wolf-bbq-denver-2"
       }
     ],          
	sidebar: {
	         '/': [
                     ['', 'Main Page'],
                     {
                      title: 'Menu',
                      collapsable: false,
                      children: [
                        '/menu/appetizers',
                        '/menu/salads',
                        '/menu/fromfryer',
                        '/menu/sandwiches',
                        '/menu/sides',
                        '/menu/platters',
                        '/menu/seafood',
                        '/menu/bbq',
                        '/menu/soulfood',
                        '/menu/desserts',
                        '/menu/beverages',
                        '/menu/alacarte',
                        '/menu/catering',
                        '/menu/events',
                      ]
                     },
                  ]            
            }
	  },
     head: [
       ['link', { rel: 'icon', href: '/favicon.ico' }]
     ],
     plugins: ['@vuepress/back-to-top', '@vuepress/pwa']
}

// we will be closed for orders till our open day August 7th.
// And when we open if they want to dine in it's by reservations only