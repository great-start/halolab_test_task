
### Description
NodeJs_Test_Server_Halo_Lab

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

# All success response includes json with a film data object and field 'source', 
# that shows, where the data came from - cloud, node cache or redis store.  

# Film titles for testing you can find in test_data.txt file
```
