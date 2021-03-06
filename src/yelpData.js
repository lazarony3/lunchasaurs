export default class YelpData {
  constructor () {
    this.foodCategories = [
      'Afghan',
      'African',
      'American (New)',
      'American (Traditional)',
      'Arabian',
      'Argentine',
      'Asian Fusion',
      'Australian',
      'Barbeque ',
      'Basque',
      'Belgian',
      'Brasseries',
      'Brazilian',
      'Breakfast & Brunch',
      'British',
      'Buffets ',
      'Bulgarian',
      'Burgers',
      'Burmese',
      'Cafes',
      'Cajun/Creole',
      'Cambodian',
      'Caribbean',
      'Chicken ',
      'Chicken Wings',
      'Chinese',
      'Creperies',
      'Cuban',
      'Delis',
      'Diners',
      'Dinner Theater',
      'Ethiopian',
      'Fast Food',
      'Filipino',
      'Fish & Chips',
      'Flatbread',
      'Fondue',
      'Food Stands',
      'French',
      'Gastropubs',
      'German',
      'Gluten-Free',
      'Greek',
      'Halal',
      'Hawaiian',
      'Himalayan/Nepalese',
      'Hong Kong Style Café',
      'Hot Dogs',
      'Hot Pot',
      'Hungarian',
      'Iberian',
      'Indian',
      'Indonesian',
      'Irish',
      'Italian',
      'Japanese',
      'Korean',
      'Kosher',
      'Laotian',
      'Latin American',
      'Live/Raw Food',
      'Malaysian',
      'Mediterranean',
      'Mexican',
      'Middle Eastern',
      'Modern European',
      'Mongolian',
      'Moroccan',
      'New Mexican Cuisine',
      'Nicaraguan',
      'Noodles',
      'Persian/Iranian',
      'Peruvian',
      'Pizza',
      'Polish',
      'Portuguese',
      'Poutineries',
      'Russian',
      'Salad',
      'Sandwiches',
      'Scandinavian',
      'Scottish',
      'Seafood',
      'Singaporean',
      'Slovakian',
      'Soul Food',
      'Soup',
      'Southern',
      'Spanish',
      'Sri Lankan ',
      'Steakhouses',
      'Supper Clubs',
      'Sushi Bars',
      'Syrian',
      'Taiwanese',
      'Tapas Bars',
      'Tapas/Small Plates',
      'Tex-Mex',
      'Thai',
      'Turkish',
      'Ukrainian',
      'Uzbek',
      'Vegan',
      'Vegetarian',
      'Vietnamese',
      'Waffles'
    ];
    
    this.priceRangesList = [
         {dollarValue: '$', text: 'inexpensive', selected: false},
         {dollarValue: '$$', text: 'moderate',selected: false},
         {dollarValue: '$$$', text: 'pricey',selected: false},
         {dollarValue: '$$$$', text: 'ultra high-end',selected: false}
     ];
     
     this.distances = [
         {distance: 'Within 4 blocks', selected: false},
         {distance: 'Walking (1 mi.)', selected: false},
         {distance: 'Biking (2 mi.)', selected: false},
         {distance: 'Driving (5 mi.)', selected: false},
     ]

    this.data = {
      "businesses": [
        {
            "categories": [
                [
                    "Local Flavor",
                    "localflavor"
                ],
                [
                    "Mass Media",
                    "massmedia"
                ]
            ],
            "display_phone": "+1-415-908-3801",
            "id": "yelp-san-francisco",
            "image_url": "http://s3-media3.fl.yelpcdn.com/bphoto/nQK-6_vZMt5n88zsAS94ew/ms.jpg",
            "is_claimed": true,
            "is_closed": false,
            "location": {
                "address": [
                    "140 New Montgomery St"
                ],
                "city": "San Francisco",
                "coordinate": {
                    "latitude": 37.7867703362929,
                    "longitude": -122.399958372115
                },
                "country_code": "US",
                "cross_streets": "Natoma St & Minna St",
                "display_address": [
                    "140 New Montgomery St",
                    "Financial District",
                    "San Francisco, CA 94105"
                ],
                "geo_accuracy": 9.5,
                "neighborhoods": [
                    "Financial District",
                    "SoMa"
                ],
                "postal_code": "94105",
                "state_code": "CA"
            },
            "mobile_url": "http://m.yelp.com/biz/yelp-san-francisco",
            "name": "Yelp",
            "phone": "4159083801",
            "rating": 2.5,
            "rating_img_url": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c7fb9aff59f9/ico/stars/v1/stars_2_half.png",
            "rating_img_url_large": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/d63e3add9901/ico/stars/v1/stars_large_2_half.png",
            "rating_img_url_small": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/8e8633e5f8f0/ico/stars/v1/stars_small_2_half.png",
            "review_count": 7140,
            "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/YcjPScwVxF05kj6zt10Fxw/ms.jpg",
            "snippet_text": "What would I do without Yelp?\n\nI wouldn't be HALF the foodie I've become it weren't for this business.    \n\nYelp makes it virtually effortless to discover new...",
            "url": "http://www.yelp.com/biz/yelp-san-francisco"
        }
      ],
      "total": 2316
    };
  }
}
