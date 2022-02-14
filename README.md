# Rstrnt Findr-r

A web application to find and review restaurants using the [Yelp API](https://www.yelp.com/developers/graphql/guides/intro).

## Contributors

[Chris Cooney](https://github.com/ChrisCooney05)

[Dhara Patel](https://github.com/Dhara-95)

## Tech Stack

[React](https://reactjs.org/docs/getting-started.html)

[CircleCI](https://circleci.com/docs/)

[Webdriver I/O](https://webdriver.io/docs/gettingstarted.html)

[Tailwind CSS](https://tailwindcss.com/)

[React Router](https://reactrouter.com/web/guides/quick-start)

[Apollo GraphQL](https://www.apollographql.com/docs/react/get-started/)

## User Stories

- User can visit url and lands on Homepage.

- User inputs an address/postcode and on submit, is shown a list of nearby restaurants on Search Results page.

- User can filter restaurants by distance to postcode or by star rating on Sear Results page.

- User can click on a specific restaurant and is shown additional details including a map and reviews, on Restaurant page.

## App Installation

```
$ git clone git@github.com:Dhara-95/Rstrnt_Findr-r.git
```

```
$ cd Rstrnt_Findr-r
```

```
$ yarn install
```

Create an `.env` file in the root of the directory and add in the following environmental vriables (these usually wouldn't be shared in the README.md but for the purpose of allowing access to the repository, these variables have been made public):

```
REACT_APP_YELP_API_KEY = "Bearer hF7YyoGnZ9GAPrDZhCVzHZXvwBIKbgNlu1QZeXMXPmEiIkUprH_PlVaAI3Y5Q63zZ9pN2Vjh721hYp60J_EW2rvETiHGyswhbt60jkMvHvn4Bz9rPUBvfvethW4aYHYx"
REACT_APP_YELP_ENDPOINT = "https://rstrnt-cors.herokuapp.com/https://api.yelp.com/v3/graphql"
```

### `yarn start`

To start up the server on local computer.

To visit app hosted on [Netlify](https://www.netlify.com/), visit https://rstrnt-findr-r.netlify.app/.

### `yarn test`

To run Webdriver tests

### `yarn jest:test`

To run all Jest tests

### `yarn snap:update`

To updated all snapshot files

## Additional Project Information

A [Trello board](https://trello.com/b/qxYpKKQG/rstrnt-findr-r) was used to keep a track of user stories that needed to be completed, as well as linking any useful resources in the first two lists.

Wireframes were used to mock up the designs of the application before building it - they can be accessed [here](https://drive.google.com/drive/folders/16KjinaPc-XQzGi7kFn0x5XL-VdGORJ12?usp=sharing).

## Next Steps

Although the MVP as well as some additional features were built successfully, there is an additional user story that we did not manage to complete in the allocated timeframe.

If we did have more time to work in the project we woud have liked to add functionality, which would allow the user to search restaurants by cuisine on the homepage (grey boxes currently on the homepage represent the placeholders for the different cuisine images that the user would have been able to filter by).
