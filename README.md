
### Description
Node_Test_Server_HaloLab

### Installation
```bash
$ npm install
```

### Configuration
```
# Server connects to a PostgreSQL cloud database(ElephantSQL), 
# which includes one table with 200 records.

# Server also uses a local Redis Store.
# So you may have to set up redis config on you local machine, if it is needed. 
# (This API takes default redis settings. Redis config and other - inside .env file) 
```

### Running the app
```bash
$ npm run start
```

### Testing
```
# You may use Swagger (swagger endpoint - '/docs') or postman (postman_collection.json).

# All successful responses from endpoint ('/film/:title') returns in body:
# film data object and field 'source', that shows, where the data came from - 
# cloud database, node cache or redis store.  

# You can find the list of movie titles in test_data.txt
# (for endpoint - '/film/:title')
```
