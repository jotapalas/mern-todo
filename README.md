# mern-todo
Simple project made with MERN stack.

## Pre-requisites
To run this project locally you will need to have `Docker` and `docker-compose` installed. If not, please follow through official instructions:

- [Install Docker](https://docs.docker.com/get-docker/)
- [Install docker-compose](https://docs.docker.com/compose/install/)

## Installation

Once you have fulfilled the pre-requisites, you can now configure your environment.

For this, just take the `.env.base` file and copy it to a file named simply `.env`. Note that this file will be gitignored as it is your local configuration.

> **Note:** The variables `SERVER_PORT` and `CLIENT_PORT` should not be changed. If so, they must be changed also in Nginx config file (`nginx/default.conf`). It is future work to get configuration file working with variables.

### Spin up the containers
Once with the environment file ready, all you have to do is run:
```
docker-compose up --build -d
```
If you run
```
docker ps
```
you should see all four containers running in your machine.

## Running tests

If you want to run server unit tests just to check everything is working fine on the server side, you can do it by running:
```
docker exec -it mern-todo-server npm run test
```
## Testing the app
That's all! You can now navigate to `http://localhost:3050` and start using the app.
____

## Future work
To improve this awesome app, there are many things to add:

- **User authentication**: Require login to use the app. Server should return only todos for the authenticated user.
- **DevOps**: Use environment variables in Nginx configuration.
- **Frontend testing**: Implement it :D
- **Allow to select status**: The current functionality is that you can go from "to do" status, to "doing", and then to "done". It would be nice to have the status field as a dropdown in frontend so user can select it.
- **Order elements**: Allow todos to be ordered by task, due date or status.
- **Filter elements**: Allow filter in frontend.
- **Some more?**