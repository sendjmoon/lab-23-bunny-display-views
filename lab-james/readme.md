# Lab 23 - Bunny Display Views
The purpose of this app is to allow a user to view multiple Pixar Villains. Included is the villain's name, a short description, and also a viewable image. On the home page all villains are listed by name and description. You can also select `Mugshots` in the nav bar to get to a thumbnail version of each villain.

`Angular` and `Angular Route` are both used to accomplish the goal of activating `View Controllers` when the user requests a certain route. If the route does not exist or the app cannot process the request, the user is forwarded to an error page. `Font Awesome` is also used in this app to add some style to the nav bar links.

## Installation & Usage
To install, first `clone` down this repo. Next, make sure and install dependencies via `npm i`. Then, to access the app, type `npm run watch` in your command line and open your browser to the URL `http://localhost:8080`.

## Testing
For convenience, scripts have been added in the `package.json` file to allow for simple testing.

To run a `lint` test, simply type `npm run lint` in your command line.

To run a test on routes, I used `karma` and that can be tested by typing `npm run test` in your command line.
