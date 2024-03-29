module.exports = {
  title: 'Hungry Wolf BBQ',
  description: 'Home of the Hungry Wolf BBQ Sauce',
  themeConfig: {
    displayAllHeaders: true,
    searchMaxSuggestions: 12,
    searchPlaceholder: 'Search...',
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
      },
      {
        text: "Online Orders",
        link: "https://www.clover.com/online-ordering/hungry-wolf-bbq-and-soul-food-aurora"
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