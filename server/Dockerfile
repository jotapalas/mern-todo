# from base image node
FROM node:13.12.0-alpine

WORKDIR /app

# copying all the files from your file system to container file system
COPY package.json .

# install all dependencies
RUN npm install

# copy oter files as well
COPY ./ .

#expose the port
EXPOSE ${SERVER_PORT}

# command to run when instantiate an image
CMD ["npm", "run", "start"]
