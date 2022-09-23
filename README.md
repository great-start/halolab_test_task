
## Description
NodeJs_Test_Server_Halo_Lab

### Installation
```bash
$ npm install
```

### Configuration
```bash
# Api connects to cloud PostgreSQL database (ElephantSQL), which 
# includes one table with 200 records. 
# (database connection config - inside .env file) 
#
# Api uses a local Redis Server.
# So you may have to set up redis config in you local machine, if it is required. 
# (API takes default redis settings. Redis config also inside .env file) 
# 
# Tests. You may use postman or Swagger
```

### Running the app
```bash
$ npm run start
```

### Swagger docs
```
http://localhost:5000/docs
```


### Postman Collection 
```
postman_collection.json
```