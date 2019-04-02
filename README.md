### Setup
```
// db
$ docker-compose up -d 

// Use react preset
$ php artisan preset react

$ npm install 
// start dev server
$ npm run watch 

$ php artisan make:auth
$ php artisan migrate

$ php artisan make:model Task -m
$ php artisan make:controller TaskController --resource
$ php artisan route:list
```

### Error solutions
###### Support for the experimental syntax 'classProperties' isn't currently enabled.
* npm install --save-dev @babel/plugin-proposal-class-properties
* Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation
