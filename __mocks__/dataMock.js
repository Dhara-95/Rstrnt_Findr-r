const businesses = {
  data: {
    data: {
      search: {
        business: [
          {
            name: "A 2 Zee's",
            categories: [{ title: "Cafes" }],
            rating: 3.0,
            price: null,
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "55 Manor Road",
              address2: "",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 0LJ",
              country: "GB",
              formatted_address:
                "55 Manor Road\nLondon W13 0LJ\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "Being about 5 minutes from my desk these guys are A-1 for convenience.\n\nGreasy spoon style little cafe, just off of the train station.\n\nNot something to go...",
                rating: 3,
              },
            ],
            coordinates: { latitude: 51.51377, longitude: -0.320467 },
          },
          {
            name: "Tophill Caribean",
            categories: [{ title: "Caribbean" }],
            rating: 4.0,
            price: null,
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "46-48 Drayton Green Road",
              address2: "",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 8RY",
              country: "GB",
              formatted_address:
                "46-48 Drayton Green Road\nLondon W13 8RY\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "Absolutely loved this place - but it appears to have now shut down and is something else.\n\nTheir Caribbean food was fantastic - I was a complete sucker for...",
                rating: 4,
              },
            ],
            coordinates: {
              latitude: 51.5131983902631,
              longitude: -0.319433244077845,
            },
          },
          {
            name: "Chic O Land",
            categories: [{ title: "Fast Food" }],
            rating: 2.0,
            price: "\u00a3",
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "50 Drayton Green Road",
              address2: "",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 8RY",
              country: "GB",
              formatted_address:
                "50 Drayton Green Road\nLondon W13 8RY\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "Stopped by here to get some wings on the way home from Ealing one time. 1 pound. For 4 wings isn't a.bad deal so I got 8. Tasted good and funky at the same...",
                rating: 3,
              },
              {
                text:
                  "Just not my thing but my mate loves this place especially after a skinfull. The do the regular assortment of gyro / kebabs, fried chicken and burgers Here...",
                rating: 1,
              },
            ],
            coordinates: { latitude: 51.512323, longitude: -0.319295 },
          },
          {
            name: "Caf\u00e9 Leemoo",
            categories: [
              { title: "Coffee & Tea" },
              { title: "Breakfast & Brunch" },
            ],
            rating: 4.5,
            price: "\u00a3",
            photos: [
              "https://s3-media1.fl.yelpcdn.com/bphoto/DJdYE-wD6xNjKav0GmbgKA/o.jpg",
            ],
            location: {
              address1: "9 Castle Hill Parade",
              address2: "The Avenue",
              address3: null,
              city: "London",
              state: "XGL",
              postal_code: "W13 8JP",
              country: "GB",
              formatted_address:
                "9 Castle Hill Parade\nThe Avenue\nLondon W13 8JP\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "Very good food. Served fast and with a smile. I do wish the portions were a bit bigger. But overall would definitely recommend and come back!",
                rating: 4,
              },
              {
                text:
                  "was a most wonderful breakfast! we were lookinb for something for our last day in london an this place hit the spot.",
                rating: 5,
              },
              {
                text:
                  "I love the breakfasts at Cafe Leemoo... great ambience and very good food! We loved the vegetarian breakfast and smoothies are great as well.",
                rating: 5,
              },
            ],
            coordinates: {
              latitude: 51.5144654925678,
              longitude: -0.319768096823276,
            },
          },
          {
            name: "Hilltop Roti",
            categories: [{ title: "Caribbean" }],
            rating: 5.0,
            price: null,
            photos: [
              "https://s3-media1.fl.yelpcdn.com/bphoto/UKJka59PHw1KLvjIE2kvvA/o.jpg",
            ],
            location: {
              address1: "46-48 Drayton Green Road",
              address2: "",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 8RY",
              country: "GB",
              formatted_address:
                "46-48 Drayton Green Road\nLondon W13 8RY\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "EPIC ROTI!\nThey not only have normal skins, but fireskins as well, all filled with succulent Mutton, Lamb, Chicken, Shrimps or vegetables, with a caribbean...",
                rating: 5,
              },
            ],
            coordinates: {
              latitude: 51.5130805344202,
              longitude: -0.319408579213232,
            },
          },
          {
            name: "Subway",
            categories: [{ title: "Restaurants" }],
            rating: 3.5,
            price: null,
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "54 Broadway",
              address2: "",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 0SU",
              country: "GB",
              formatted_address: "54 Broadway\nLondon W13 0SU\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "Nice staff and a consistent quality sandwich.\n\nUsually I like exploring and am not off put by the look of run-down builders cafes (aren't these usually...",
                rating: 3,
              },
              {
                text:
                  "This branch of Subway closed down a while ago and just recently (late 2011) reopened with a complete refit  although the counter area looks much the same....",
                rating: 4,
              },
            ],
            coordinates: { latitude: 51.510684, longitude: -0.322238 },
          },
          {
            name: "German Doner Kebab",
            categories: [
              { title: "Fast Food" },
              { title: "German" },
              { title: "Kebab" },
            ],
            rating: 4.0,
            price: "\u00a3",
            photos: [
              "https://s3-media3.fl.yelpcdn.com/bphoto/MDZkA6C7WULfk1lcIQcOyw/o.jpg",
            ],
            location: {
              address1: "24 Broadway",
              address2: "West Ealing",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 0SU",
              country: "GB",
              formatted_address:
                "24 Broadway\nWest Ealing\nLondon W13 0SU\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "This place has a great menu and we only got delivery, so perhaps will be a bit better if we sat down there (if you can) or takeaway as I think the delivery...",
                rating: 3,
              },
              {
                text:
                  "I had big hopes, but got disappointed the moment my food arrived.\n\nThe blonde cashier who also makes the kebabs from time to time was fast and...",
                rating: 2,
              },
              {
                text:
                  "Great place to try a German style Doner kebab. This is a new kid on the block, but I would highly recommend that you give it a try. The Doner kebab deals...",
                rating: 5,
              },
            ],
            coordinates: {
              latitude: 51.5108062940712,
              longitude: -0.320996134946345,
            },
          },
          {
            name: "Abu Zaad",
            categories: [{ title: "Arabian" }],
            rating: 4.0,
            price: null,
            photos: [
              "https://s3-media4.fl.yelpcdn.com/bphoto/9WkqiZ3m3Am13yQgdCGTfA/o.jpg",
            ],
            location: {
              address1: "20-22 Broadway Ealing",
              address2: "",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 0SU",
              country: "GB",
              formatted_address:
                "20-22 Broadway Ealing\nLondon W13 0SU\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "I visited this restaurant on a weekday evening. The food was noticeably pristine in presentation and delivery. The service was good, table setting was...",
                rating: 4,
              },
              {
                text:
                  "I visit this restaurant regularly and I enjoy the stay. The service is extremely nice and helpful. The food is generally excellent if you know what to...",
                rating: 4,
              },
            ],
            coordinates: {
              latitude: 51.510809067461,
              longitude: -0.320857396431533,
            },
          },
          {
            name: "Chicken Shop",
            categories: [{ title: "Fast Food" }],
            rating: 3.0,
            price: null,
            photos: [
              "https://s3-media3.fl.yelpcdn.com/bphoto/VyVo71R6O1eOr7uuUhZMlg/o.jpg",
            ],
            location: {
              address1: "19 Broadway",
              address2: null,
              address3: null,
              city: "London",
              state: "XGL",
              postal_code: "W13 9DA",
              country: "GB",
              formatted_address: "19 Broadway\nLondon W13 9DA\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "Do not go here\n\nFlight toilets, bad service and make a take away a priority so expect to wait a long time to be served",
                rating: 1,
              },
              { text: "finger-licken chicken emm hmm", rating: 5 },
            ],
            coordinates: { latitude: 51.5103, longitude: -0.322541 },
          },
          {
            name: "Perfect Fried Chicken",
            categories: [{ title: "Fast Food" }],
            rating: 4.0,
            price: null,
            photos: [
              "https://s3-media4.fl.yelpcdn.com/bphoto/CbrYlCY2-BfGpkoE7DwoiA/o.jpg",
            ],
            location: {
              address1: "2 The Broadway",
              address2: "West Ealing",
              address3: null,
              city: "London",
              state: "XGL",
              postal_code: "W13 0SR",
              country: "GB",
              formatted_address:
                "2 The Broadway\nWest Ealing\nLondon W13 0SR\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "There are a few Southern fried chicken outlets in West Ealing. This one is pretty good. Good value, not too fatty or greasy, and the hot and spicy wings are...",
                rating: 4,
              },
            ],
            coordinates: { latitude: 51.5103086, longitude: -0.3238834 },
          },
          {
            name: "Spicy King",
            categories: [{ title: "Fast Food" }],
            rating: 2.5,
            price: "\u00a3\u00a3",
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "The Avenue",
              address2: null,
              address3: null,
              city: "London",
              state: "XGL",
              postal_code: "W13 8JP",
              country: "GB",
              formatted_address: "The Avenue\nLondon W13 8JP\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "4 July 2014\n\nHeartbroken to report that a regular takeaway favourite we've enjoyed and lived near to for over 20 years has now apparently completely lost...",
                rating: 1,
              },
              {
                text:
                  "An extensive menu offering traditional curry dishes for around \u00a35.50 a portion and Goan and house specialities for a bit more. I've had more takeaways from...",
                rating: 4,
              },
            ],
            coordinates: { latitude: 51.5165571, longitude: -0.3194553 },
          },
          {
            name: "Ealing Mangal Restaurant",
            categories: [{ title: "Turkish" }],
            rating: 4.5,
            price: null,
            photos: [
              "https://s3-media3.fl.yelpcdn.com/bphoto/hdY-1cql-NaRGcM-nMXQDw/o.jpg",
            ],
            location: {
              address1: "193 Uxbridge Road",
              address2: "Hanwell",
              address3: null,
              city: "London",
              state: "XGL",
              postal_code: "W13 9AA",
              country: "GB",
              formatted_address:
                "193 Uxbridge Road\nHanwell\nLondon W13 9AA\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "to start off when we looked on yelp the pictures shown good food. we decided to give it a shot something different than what we have tried while on...",
                rating: 5,
              },
              {
                text:
                  "Nice Turkish place in Ealing. Prepare to look around for parking on adjacent streets. Food was nice but could've used more spice and chilli in it. Went with...",
                rating: 3,
              },
              {
                text:
                  "Great meal...hummus, doner, kebab, chicken wings. Everything was very good. The service was very attentive and friendly. I will definitely return....",
                rating: 5,
              },
            ],
            coordinates: { latitude: 51.5111151, longitude: -0.3180477 },
          },
          {
            name: "Lahore Village Tandoori Restaurant",
            categories: [{ title: "Indian" }],
            rating: 3.0,
            price: null,
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "179 Uxbridge Road",
              address2: "",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 9AA",
              country: "GB",
              formatted_address:
                "179 Uxbridge Road\nLondon W13 9AA\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "Internet cafe conveniently located with good access. Not sure why they call these places cafes any more, they don't serve any tea or coffee as far as I can...",
                rating: 3,
              },
            ],
            coordinates: { latitude: 51.510992, longitude: -0.318004 },
          },
          {
            name: "Gospoda Vita",
            categories: [{ title: "Polish" }],
            rating: 3.5,
            price: null,
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "146 Uxbridge Road",
              address2: "West Ealing",
              address3: null,
              city: "London",
              state: "XGL",
              postal_code: "W13 8SB",
              country: "GB",
              formatted_address:
                "146 Uxbridge Road\nWest Ealing\nLondon W13 8SB\nUnited Kingdom",
            },
            reviews: [
              { text: "Good, traditional Polish food.", rating: 4 },
              {
                text:
                  "very good polish food, i eat there few times, one of the best polish restaurants in London.",
                rating: 3,
              },
            ],
            coordinates: { latitude: 51.5113084, longitude: -0.3174954 },
          },
          {
            name: "Y Ariba Y Ariba",
            categories: [{ title: "Mexican" }],
            rating: 1.0,
            price: null,
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "124 Broadway",
              address2: "",
              address3: null,
              city: "West Ealing",
              state: "XGL",
              postal_code: "W13 0SY",
              country: "GB",
              formatted_address:
                "124 Broadway\nWest Ealing W13 0SY\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "Look at me. You're better than this. You're better than Y'Ariba's IKEA burritos. All the extra's will be added in plastic cups, for you to assemble their...",
                rating: 1,
              },
            ],
            coordinates: { latitude: 51.5099251, longitude: -0.3263672 },
          },
          {
            name: "Ealing Kebab",
            categories: [{ title: "Fast Food" }, { title: "Kebab" }],
            rating: 4.0,
            price: "\u00a3\u00a3",
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "179 Uxbridge Road",
              address2: "Ealing",
              address3: null,
              city: "London",
              state: "XGL",
              postal_code: "W13 9AA",
              country: "GB",
              formatted_address:
                "179 Uxbridge Road\nEaling\nLondon W13 9AA\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "As the reviewer above said, not a great variety of food, but all food is made fresh on the premises, including all the bread and sauces. Mmmm Everything is...",
                rating: 4,
              },
              {
                text:
                  "Not the widest variety of persian dishes but great none the less. I get takeways from here but they do cater if you want to eat in. Food is great, ok'ish in...",
                rating: 4,
              },
            ],
            coordinates: { latitude: 51.5111764, longitude: -0.3172477 },
          },
          {
            name: "China Garden",
            categories: [{ title: "Chinese" }],
            rating: 1.5,
            price: "\u00a3",
            photos: [
              "https://s3-media1.fl.yelpcdn.com/bphoto/xJlkSor1LAgNm7tcXw278Q/o.jpg",
            ],
            location: {
              address1: "177 Uxbridge Road",
              address2: "",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 9AA",
              country: "GB",
              formatted_address:
                "177 Uxbridge Road\nLondon W13 9AA\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "I've ordered food from China Garden before but the quality this time seems to have worsened. \n\nThe noodles and beef in oyster sauce were ok. The spare ribs...",
                rating: 3,
              },
              {
                text:
                  "This is the worst delivery food I have ordered in many years.\nThe quality of the ingredients is so low that we decided to eat something else. We ordered a...",
                rating: 1,
              },
              {
                text:
                  "This place is sub-standard and their food is nothing other than disgusting. I would advise to steer well clear, definitely the worst chinese food i have...",
                rating: 1,
              },
            ],
            coordinates: { latitude: 51.5110741, longitude: -0.31742 },
          },
          {
            name: "KFC",
            categories: [
              { title: "Fast Food" },
              { title: "Chicken Shop" },
              { title: "Chicken Wings" },
            ],
            rating: 3.0,
            price: "\u00a3",
            photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
            location: {
              address1: "109 The Broadway",
              address2: "West Ealing",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 9BE",
              country: "GB",
              formatted_address:
                "109 The Broadway\nWest Ealing\nLondon W13 9BE\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "Food quality is the same as any other KFC. The staff are polite and friendly but they often make mistakes with takeaway orders (whether the branch is busy...",
                rating: 3,
              },
            ],
            coordinates: { latitude: 51.509427, longitude: -0.327428 },
          },
          {
            name: "Silva Caribbean and Latin American Cuisine",
            categories: [{ title: "Latin American" }, { title: "Caribbean" }],
            rating: 3.5,
            price: "\u00a3",
            photos: [
              "https://s3-media2.fl.yelpcdn.com/bphoto/duOBkplrtGU3x7i46tSELQ/o.jpg",
            ],
            location: {
              address1: "148 The Broadway",
              address2: "",
              address3: "",
              city: "London",
              state: "XGL",
              postal_code: "W13 0TL",
              country: "GB",
              formatted_address:
                "148 The Broadway\nLondon W13 0TL\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  'Here\'s the deal or the lack of.\nClicked on the "check-in" button to take advantage of the 10% promo. Only problem. They never heard of it.\nOk (later they...',
                rating: 2,
              },
              {
                text:
                  "Going very often with family. They have been refurbishing for a good while, I could observe plenty changes, the food was delicious , reasonable prices ,...",
                rating: 5,
              },
              {
                text:
                  "I am fortunate enough to eat at, and from, many recommended, quality restaurants. Naturally sometimes, despite the warning red 'x' to avoid some places, I...",
                rating: 4,
              },
            ],
            coordinates: { latitude: 51.5098455, longitude: -0.3277902 },
          },
          {
            name: "Ealing Balti House",
            categories: [{ title: "Indian" }, { title: "Pakistani" }],
            rating: 4.0,
            price: "\u00a3\u00a3",
            photos: [
              "https://s3-media3.fl.yelpcdn.com/bphoto/qY-rtSnUv33SySwXv6QLhQ/o.jpg",
            ],
            location: {
              address1: "150 Broadway",
              address2: null,
              address3: null,
              city: "London",
              state: "XGL",
              postal_code: "W13 0TL",
              country: "GB",
              formatted_address: "150 Broadway\nLondon W13 0TL\nUnited Kingdom",
            },
            reviews: [
              {
                text:
                  "This used to be one of the best places to eat in West Ealing!\n\nThe food was of excellent quality - always cooked just how we want it and served piping hot....",
                rating: 4,
              },
            ],
            coordinates: { latitude: 51.5096952, longitude: -0.3278355 },
          },
        ],
      },
    },
  },
};

export { businesses };
