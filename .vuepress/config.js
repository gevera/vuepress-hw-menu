module.exports={
	title: 'Hungry Wolf BBQ',
	description: 'Home of the Hungry Wolf BBQ Sauce',
    themeConfig: {
      searchMaxSuggestions: 12,
			sidebar: {
	         '/': [
                     [
                        '', 'Main Page',
                     ],
                     {
                      title: 'Menu',
                      collapsable: false,
                      children: [
                        '/menu/appetizers',
                        '/menu/salads',
                        '/menu/fromfryer',
                        '/menu/sandwitches',
                        '/menu/sides',
                        '/menu/seafood',
                        '/menu/bbq',
                        '/menu/desserts',
                        '/menu/beverages'
                      ]
                     }
                  ]            
            }
	}
}