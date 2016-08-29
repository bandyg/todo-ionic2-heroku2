## Tutorial Notes
- http://blog.ionic.io/one-mean-ionic-2-todo-app-on-heroku-part-1/
  - start a blank ionic2 project
- install heroku
  - download heroku toolbelt, see: https://devcenter.heroku.com/articles/heroku-command-line
  - provision heroku, mongodb
  ```
  cd [project]
  heroku --version
  heroku create  // provide heroku login
  heroku addons:create mongolab
  heroku config | grep MONGODB_URI
  ```
  heroku, see dashboard: https://dashboard.heroku.com/apps
    - git remote: `https://git.heroku.com/agile-gorge-78729.git`
    - MONGODB_URI: `mongodb://heroku_282mfsjp:4chfkchu551jr64a82njebeca5@ds019796.mlab.com:19796/heroku_282mfsjp`
- install nodejs server
  - download nodejs modules:  
  `npm install express mongodb cors body-parser --save`
  - start Nodejs server
    - `node server.js`
    - see: http://localhost:8080/



- http://blog.ionic.io/one-mean-ionic-2-todo-app-on-heroku-part-2/
- http://blog.ionic.io/one-mean-ionic-2-todo-app-on-heroku-part-3/
