# Classifier-PWA
Image Classifier Progressive web app using tf.js 

## How to install :

1) clone the repository
2) Run npm install (in cmd)
3) Run npm start
      - server will run in development mode
      - hence serviceworker won't work (i.e., app is neiter caching statics nor is installable)
      
4) press ctrl + c twice to stop server
5) Run npm install -g serve
6) Run npm run build
7) Run serve -s build
      - this will start your server in port:5000
8) classify your image !
