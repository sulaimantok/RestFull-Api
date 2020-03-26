## Simple Rest API with Nodejs, Express, and mongoDB

### How to use 

- [Prepare](#prepare)
- [Start](#start)

### Prepare

1. Clone this project

```
git clone https://github.com/sulaimantok/RestFull-Api.git
```

2. Config file
make file **config.env** or or another name with the *.env file format, after that fill in as follows:

```
DATABASE_URL=mongodb://localhost:27017/user
``` 
in the example I use a local database, if you want to use another database, please change the link according to what will be used, as long as it's still mongodb, the configuration is the same

3. Install Dependencies

Open a terminal, and enter the project folder, and type the following command

```
npm i express mongoose dotenv nodemon --save
```
 
### Start

After everything is done, run the script:

```
nodemon server.js
```

