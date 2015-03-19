
# Hull Ship Boilerplate.

> _"It's Javascript P*rn™"_
> 
> – The Author

A complete frontend environment based on the latest and greatest technology.


### Benefits

Quite simply, the web of tomorrow, today.

- User-configurable styles for colors, background images, fonts, sizes, css transforms, opacity etc... Like [CSS Variables](http://caniuse.com/#feat=css-variables) but with more swag. Anything you can do in CSS can be exposed as a user-configurable setting 
- No Style leakage between your app and the page. [Scoped Styles](http://caniuse.com/#feat=style-scoped) working today
- [HTML Imports](http://caniuse.com/#feat=imports) : Have your app run securely in any environment. Build it as a full page app, we'll embed it in the right place without you worrying how it gets delivered and how it lives in the page
- Component-based development
- Built-in I18n
- Based on [React-Router](https://github.com/rackt/react-router) for full access to every state of the App. ~~Let the User preview every state of your application to check it's design and behaviour~~ (Soon)
- ~~Flowers and unicorns~~ (Soon)


### Building Ships

You can use the tooling of your choice to build Ships, they're technology-agnostic. However, after spending months building them, we've settled on a stack that's a combination of sheer power and ease of use. We recommend it strongly.

---

### Setup

```sh
npm install -g gulp
npm install
gulp server
```

### Configuration

- Go to the Hull Dashboard, Create a Platform with URL you will use to demo your ship. For instance, this ship is hosted at `http://hull-ships.github.io/hull-ship-boilerplate`.
- Copy the snippet, paste in `index.html`
- In the Platform customization screen, click `Add Ship > New Ship > Hull Ship Boilerplate`
- Go to the `Advanced` tab, and input the URLs to your ship so that Hull can access the `manifest.json`. Save

### Developing

- Run `gulp server` and visit [http://localhost:8081/](http://localhost:8081/).
- We setup a ngrok tunnel with the subdomain matching `name` in `package.json`. Ensure it's not used, For now we don't do error checking.
- Write Code
- Drink Coffee
- Be nice to others
- Repeat
- Publish

### Building

```sh
gulp build
```

### Deployment on Github Pages

```sh
gulp deploy
```
 
---

## Inside the box : 

### Tooling

- Gulp
- Webpack
- Webpack-dev-server
- Babel (ex-6to5) So you can write [ES6](https://github.com/lukehoban/es6features) like a boss _today_.
- [Hot module replacement](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack) that just works. (Live reload and `require` **everything**, without page reloads)
- [React Hot Loader](http://gaearon.github.io/react-hot-loader/) pre-configured (Hot module replacement for react. Hot-replace components). [Check this out](https://vimeo.com/100010922) for a quick overview
- SCSS Loader (`var style = require(main.scss);`)
- Autoprefixer. (Drop the prefixes. Write CSS from the future, have it run today)
- Native OSX Notifications, because you want to know when things happen.

### Front-end

- React
- React-Router
- ~~Hull-Flux-Engine : Wraps api calls, Micro Flux-like architecture for simple apps~~ _(Soon)_
- Hull-Style react component allowing to expose user-configurable styles, while you still write simple CSS
- ship.js+ship.html [HTML Imports](http://caniuse.com/#feat=imports) wrappers
