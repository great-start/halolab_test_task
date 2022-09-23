
### Description
Node_Test_Server_HaloLab

### Installation
```bash
$ npm install
```

### Configuration
```
# Api connects to cloud PostgreSQL database (ElephantSQL), which 
# includes one table with 200 records. 
#
# Api uses a local Redis Server.
# So you may have to set up redis config in you local machine, if it is required. 
# (This API takes default redis settings. Redis config inside .env file) 
```

### Running the app
```bash
$ npm run start
```

### Testing
```
# You may use Swagger (endpoint - '/docs') or postman (postman_collection.json).

# All success response body includes json with a film data object and field 'source', 
# that shows, where the data came from - cloud, node cache or redis store.  

# You can find the list of movie titles for testing in test_data.txt
```
