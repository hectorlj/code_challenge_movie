# Code Challenge Movie App
Coding challenge for OIT Software Developer position

## Directories

Here is an explanation of the folder structure of this web app:

### `webapp`

The webapp directory contains the Vue.js app. It's built with Vue 2 and Nuxt 2.
To build and run the app use `npm run start-webapp` and open http://localhost:3000
* If another service is running a random port will be assigned.

#### Structure
The Search Results and Search Result components, found in the `/components` folder handle displaying the movie's data.
The navbar, which contains the search bar and button, is in the `/partials` folder. Storing it in the partials folder would be helpful if more pages were to be created but we wanted to easily reuse the navbar. I also overrode the primary color of the bootstrap to make it blue (go BYU!), since the default colors are a little bland or too bright.
The default layout handles displaying the search results.

### `webservice`

The webservice directory contains the Express app.
To build and run the app use `npm run start-webservice`
To run the webservice tests use `npm run test-webservice`

#### Structure
The api folder contains the controller and the external api handler.
The external api handler sends the request to the TMDB api and processes the data returned.
The controller forwards the request to the external api handler, and returns the response with the mutated data from the api.
The route `/movies` is opened and handled through the `index.js`
The tests are set up in the `/tests` folder. For now it only checks what response codes are received.

### Future features
  - I'd like to add searching for other locales and regions, along with some way to sort the results.
  - I also thought it would be fun to add the backdrop image in some way, maybe as an opaque background.
  - Stars for popularity would also make more sense. I believe I misunderstood what was asked for the popularity summary. I used a literal string ` "${popularity} out of ${vote_count}"`.
  - Adding some more useful testing for the contents of the body would also be a plus. Right now the tests only check for the response code. Also adding some Jest or end to end tests with Nightwatch would be nice, but I don't know them well enough to do it within the timelimit (chai was simple enough to learn and add some very basic testing)
  - Making each movie section clickable so that it gets sent to the movie's IMDB or TMDB webpage for more information would also be a nice addition and make the app more relevant.

#### Screenshots

##### Running tests
![Screenshot 2024-05-09 at 12 16 29 AM](https://github.com/hectorlj/code_challenge_movie/assets/25091784/d989753d-1a91-40d8-a1d4-08a1cc9da55b)

##### Searching on the app
![Screenshot 2024-05-09 at 12 20 59 AM](https://github.com/hectorlj/code_challenge_movie/assets/25091784/9b86a7a0-757a-42ed-a399-674136e3428f)

![Screenshot 2024-05-09 at 12 18 17 AM](https://github.com/hectorlj/code_challenge_movie/assets/25091784/feb3aa9f-5457-4151-9117-8e10216ffb53)
