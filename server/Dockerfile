# from base image node
FROM node:8.11-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# copying all the files from your file system to container file system
COPY package.json .

# install all dependencies
RUN npm install

# copy oter files as well
COPY ./ .

#expose the port
EXPOSE ${SERVER_PORT}

# command to run when instantiate an image
CMD ["npm", "run", "dev"]
