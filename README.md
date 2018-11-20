# Lego Tracker

## To Do

### Views / Endpoints
* Summary View 
  * /
  * Get summary list /legos
  * Delete details /legos/{id}
* Edit Lego 
  * /edit
  * Get details /legos/{id}
  * Put details /legos/{id}
* Add lego 
  * /add
  * Post details /legos/{id}
## Other Stuff
* Add new LEGO form (with button from table view)
* Edit Screen contains form to input data
  * create form for elements in lego data model
  * add verification
  * add save button 
  * add cancel button (both buttons redirect to table view)
* Delete button
  * no delete screen, just remove row (with "are you sure" alert)
* Add thumbnail image 
  * maybe store a link…?


## Tech Stack

* FE: React
* BE: Scala
* DB: MySQL

## Getting Started

* Fork or clone this repository.
* Install MySql
  * `mysqld` to start
  * `mysql -u root -p` (to enter mysql cli)
* Create db and table
  * `create database legos;`
  * `use legos;`
  * `CREATE TABLE lego_kits (id INT, name VARCHAR(30), completed BOOL);`
* `npm install`
* Run the app
  * `sbt run`

* Used any of the following [SBT](http://www.scala-sbt.org/) commands which will also trigger frontend associated npm scripts.

```
    sbt clean           # Clean existing build artifacts

    sbt stage           # Build your application from your project’s source directory

    sbt run             # Run both backend and frontend builds in watch mode

    sbt dist            # Build both backend and frontend sources into a single distribution artifact

    sbt test            # Run both backend and frontend unit tests
```

**Note: _On production build all the front end React build artifacts will be copied to the `public` folder._**

## Can be used to implement any front end/ui build!

* Simply replace the ui directory with the build of your choice
* Make output directory ROOT/public/
* Implement a proxy to localhost:9000
