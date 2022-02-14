const businesses = [
  {
    id: "OV4Lnl9UwUPi4W9tRwbqzA",
    name: "Apsley Chinese",
    categories: [{ title: "Fast Food" }],
    rating: 5.0,
    price: null,
    photos: [
      "https://s3-media2.fl.yelpcdn.com/bphoto/Bi7qfNYABueKOvQZsdhF3g/o.jpg",
    ],
    location: {
      address1: "28 London Road",
      address2: null,
      address3: null,
      city: "Hemel Hempstead",
      state: "HRT",
      postal_code: "HP3 9SB",
      country: "GB",
      formatted_address:
        "28 London Road\nHemel Hempstead HP3 9SB\nUnited Kingdom",
    },
    reviews: [
      {
        text:
          "Yummmmmmeeeee!\nFull sized ribs!\nTasty Singapore noodles.  \nPerfectly cooked chicken balls.\nTasty curry sauce. \nSpot on chow mien.",
        rating: 5,
      },
      {
        text:
          "We go here on occasion and love it. Recently refurbed but still very small inside. Love their curry sauce and always friendly staff.",
        rating: 5,
      },
    ],
    coordinates: { latitude: 51.7375787, longitude: -0.4688423 },
  },
  {
    id: "HGkMlvRYIaP0NCqiN4_nFQ",
    name: "Apsley Fish & Chips",
    categories: [{ title: "Fish & Chips" }],
    rating: 4.0,
    price: null,
    photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
    location: {
      address1: "40 London Road",
      address2: null,
      address3: null,
      city: "Hemel Hempstead",
      state: "HRT",
      postal_code: "HP3 9SB",
      country: "GB",
      formatted_address:
        "40 London Road\nHemel Hempstead HP3 9SB\nUnited Kingdom",
    },
    reviews: [
      {
        text:
          "Great food. Friendly staff. Food portions reduced since credit crunch but still good quality.",
        rating: 4,
      },
    ],
    coordinates: { latitude: 51.7376153, longitude: -0.4689047 },
  },
  {
    id: "pNXAw1NcQEFTRylEI5rR_A",
    name: "Bull Rodizio",
    categories: [
      { title: "Steakhouses" },
      { title: "Brazilian" },
      { title: "Cocktail Bars" },
    ],
    rating: 4.5,
    price: null,
    photos: [
      "https://s3-media4.fl.yelpcdn.com/bphoto/v04pvvez9kgzYOSmD-lDSw/o.jpg",
    ],
    location: {
      address1: "62 London Rd",
      address2: "",
      address3: null,
      city: "Hemel Hempstead",
      state: "HRT",
      postal_code: "HP3",
      country: "GB",
      formatted_address: "62 London Rd\nHemel Hempstead HP3\nUnited Kingdom",
    },
    reviews: [
      {
        text:
          "Took a while to get seated although only one couple in front of us. \nOur table server was excellent, really spot on.\nThe salad buffet were served by staff...",
        rating: 3,
      },
      {
        text:
          "Excellent food and amazing service. I recommend the Picanha, the Beef, Garlic Beef, Sausage, Chicken, and most of all the grilled pineapples!!! Christina is...",
        rating: 5,
      },
      {
        text:
          "This place is amazing..best restaurant in this area. The buffet has such an amazing selection of vegetables and hot foods. Pao de queijo were fresh and...",
        rating: 5,
      },
    ],
    coordinates: { latitude: 51.738442, longitude: -0.470451 },
  },
  {
    id: "9UpIZckQmAAys9dHyttWHQ",
    name: "Raja Tandoori",
    categories: [{ title: "Indian" }, { title: "Pakistani" }],
    rating: 3.0,
    price: null,
    photos: [
      "https://s3-media3.fl.yelpcdn.com/bphoto/MyC_Qkx5GsR0m4rhukvh4g/o.jpg",
    ],
    location: {
      address1: "84 London Road",
      address2: "",
      address3: "",
      city: "Hemel Hempstead",
      state: "HRT",
      postal_code: "HP3 9SD",
      country: "GB",
      formatted_address:
        "84 London Road\nHemel Hempstead HP3 9SD\nUnited Kingdom",
    },
    reviews: [
      {
        text:
          "More than happy to order it from here again.\n\nWe've ordered a few times once it was quite runny, with a lot of sauce, but no grease, this time there was...",
        rating: 3,
      },
    ],
    coordinates: { latitude: 51.7389005, longitude: -0.4712796 },
  },
  {
    id: "BoOlYngEdTL4Gw_66ikCMw",
    name: "Efeler Kebabs",
    categories: [{ title: "Fast Food" }],
    rating: 4.5,
    price: null,
    photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
    location: {
      address1: "98 London Road",
      address2: "",
      address3: "",
      city: "Hemel Hempstead",
      state: "HRT",
      postal_code: "HP3 9SD",
      country: "GB",
      formatted_address:
        "98 London Road\nHemel Hempstead HP3 9SD\nUnited Kingdom",
    },
    reviews: [
      {
        text:
          "I have been ordering takeaways from these guys for quite a time now. They are efficient, friendly and incredibly QUICK with the deliveries!!!\nIf you are...",
        rating: 5,
      },
      {
        text:
          "Fantastic late-night takeaway with great pita and remarkable chips.  The pizza is alright but not spectacular.   So good and open so late.   And free...",
        rating: 4,
      },
    ],
    coordinates: { latitude: 51.7390343, longitude: -0.4714636 },
  },
  {
    id: "tseC8EwTL7HyxtXc3IdICw",
    name: "McDonald's",
    categories: [{ title: "Burgers" }, { title: "Fast Food" }],
    rating: 1.0,
    price: null,
    photos: ["https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg"],
    location: {
      address1: "The Bell",
      address2: "241 London Road",
      address3: "Apsley",
      city: "Hemel Hempstead",
      state: "HRT",
      postal_code: "HP3 9SE",
      country: "GB",
      formatted_address:
        "The Bell\n241 London Road\nApsley\nHemel Hempstead HP3 9SE\nUnited Kingdom",
    },
    reviews: [
      {
        text:
          "Sad to say but these guys get orders wrong all the time. Errors are made from new starters right through to managers.",
        rating: 1,
      },
    ],
    coordinates: {
      latitude: 51.7394222987057,
      longitude: -0.472690451969694,
    },
  },
  {
    id: "9T9VDBHBMPR_voBN2STiDg",
    name: "The Paper Mill",
    categories: [{ title: "British" }, { title: "Pubs" }],
    rating: 3.5,
    price: "\u00a3\u00a3",
    photos: [
      "https://s3-media4.fl.yelpcdn.com/bphoto/oCfi6ypRg6inFjsZQwqyIg/o.jpg",
    ],
    location: {
      address1: "Stationers Place",
      address2: "Apsley",
      address3: "",
      city: "Hemel Hempstead",
      state: "HRT",
      postal_code: "HP3 9RH",
      country: "GB",
      formatted_address:
        "Stationers Place\nApsley\nHemel Hempstead HP3 9RH\nUnited Kingdom",
    },
    reviews: [
      {
        text:
          "The atmosphere was good. The bar tenders were good. The beer was good. The food, not so great. This is definitely a great place for drinks being so close to...",
        rating: 3,
      },
      {
        text:
          "Set in the expensive Apsley lock area, this place attracts an affluent crowd. The priced are quite high, but drinks are good here. Usually a wheat beer on...",
        rating: 5,
      },
      {
        text:
          "nice looking pub, gets busy and can sometimes be a bit of a chore getting a table downstairs in the bar area if you just want a drink and a snack. there is...",
        rating: 4,
      },
    ],
    coordinates: { latitude: 51.733304, longitude: -0.4616731 },
  },
];

export { businesses };
