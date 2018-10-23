[![MIT License][license-badge]][LICENSE]

# Scala Play React Seed

> Use play framework to develop the web application backend/services and frontend using React Create App, all in a totally integrated workflow and single unified console. This approach will deliver perfect development experience without CORS hassle. 
 

Read more @ http://bit.ly/2A1AzEq

## Version Summary

* [Play Framework: 2.6.13](https://www.playframework.com/documentation/2.6.x/Home)
* [React: 16.2.0](https://reactjs.org/)
* [Create React App: 1.0.17](https://github.com/facebookincubator/create-react-app)

## How to use it?

### Prerequisites

* [Node.js](https://nodejs.org/)
* [scala](https://www.scala-lang.org/download/)

### Let's get started,

* Fork or clone this repository.

* Used any of the following [SBT](http://www.scala-sbt.org/) commands which will intern trigger frontend associated npm scripts.

```
    sbt clean           # Clean existing build artifacts

    sbt stage           # Build your application from your project’s source directory

    sbt run             # Run both backend and frontend builds in watch mode

    sbt dist            # Build both backend and frontend sources into a single distribution artifact

    sbt test            # Run both backend and frontend unit tests
```

* This seed is not using [scala play views](https://www.playframework.com/documentation/2.6.x/ScalaTemplates). All the views and frontend associated routes are served via [React](https://reactjs.org/) code base under `ui` directory.


## What is new in here?

### FrontendCommands.scala

* Frontend build command mapping configuration.

```
    ├── /project/
    │     ├── FrontendCommands.scala
```


### FrontendRunHook.scala

* PlayRunHook implementation to trigger ``npm run start`` on ``sbt run``.

```
    ├── /project/
    │     ├── FrontendRunHook.scala
```

### FrontendController.scala

* Asset controller wrapper serving frontend assets and artifacts.

```
    ├── /app/                                 
    │     └── /controllers/                   
    │           └── FrontendController.scala
```

### ui-build.sbt

* This file contains the build task hooks to trigger frontend npm scripts on sbt command execution.

### npm run commands

* New and modified npm scripts of [Create React App](https://github.com/facebookincubator/create-react-app) generated package.json.
* Check [UI README.md](./ui/README.md) to see all available frontend build tasks.

```
├── /ui/                       
│     ├── package.json          
```

## Routes

```
├── /conf/      
│     ├── routes
```

* The following route configuration map index.html to entry route (root). This should be placed as the initial route.

```
GET        /             controllers.FrontendController.index()
```

* All API routes should be prefixed with API prefix defined under ``application.conf`` (Default prefix ``apiPrefix = "api"``) 

Example API route:

```
GET        /api/summary  controllers.HomeController.appSummary
```

* The following route is being used to serve frontend associated build artifacts (css, js) and static assets (images, etc.). This should be placed as the final route.

```
GET        /*file        controllers.FrontendController.assetOrDefault(file)
```

**Note: _On production build all the front end React build artifacts will be copied to the `public` folder._**

## Can be used to implement any front end/ui build!

* Simply replace the ui directory with the build of your choice
* Make output directory ROOT/public/
* Implement a proxy to localhost:9000

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
|[<img src="https://avatars2.githubusercontent.com/u/5279079?s=400&v=4" width="100px;"/><br /><sub>Yohan Gomez</sub>][yohan-profile]| [<img src="https://avatars2.githubusercontent.com/u/6312524?s=400&u=efc9267c6f903c379fafaaf7b3b0d9a939474c01&v=4" width="100px;"/><br /><sub>Lahiru Jayamanna</sub>][lahiru-profile]<br />| [<img src="https://avatars0.githubusercontent.com/u/3881403?s=400&v=4" width="100px;"/><br /><sub>Gayan Attygalla</sub>](https://github.com/Arty26)|
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This software is licensed under the MIT license

[license-badge]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license]: https://github.com/yohangz/java-play-react-seed/blob/master/README.md

[yohan-profile]: https://github.com/yohangz
[lahiru-profile]: https://github.com/lahiruz
[gayan-profile]: https://github.com/Arty26
