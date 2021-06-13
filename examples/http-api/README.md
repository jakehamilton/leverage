# http-api

> A simple HTTP example for Leverage

## Install dependencies

```shell
npm install
```

## Run the server

```shell
npm run start

# The server will be available at http://localhost:8080
```

## Create and get users

```shell
# Create a new user
curl -H "Content-Type: application/json" --request POST --data '{ "favoriteColor": "my-favorite-color" }' http://localhost:8080/user/my-name

# Get an existing user
curl http://localhost:8080/user/my-name
```
