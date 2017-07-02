# Inherit from a lightweight Node image
FROM node:8.1.2-alpine

# Install `git` globally
RUN apk update && \
    apk upgrade && \
    apk add --no-cache git

# Install `nodemon` globally
RUN npm install --global nodemon

# Copy over `package.json` and install packages
# Note:
#   Doing the setup this way allows Docker to cache
#   our packages, preventing us from redownloading
#   them each time we build the image. Packages will
#   only be downloaded when the `package.json` changes
COPY package.json /tmp/package.json
RUN cd /tmp && npm install

# Create our project directory
RUN mkdir -p /opt/app

# Copy the `node_modules` directory to our application
#   directory
RUN cp -a /tmp/node_modules /opt/app/

# Copy our code over
ADD . /opt/app/

# Set our working directory to be in our application
#   directory
WORKDIR /opt/app

# Default to running `nodemon`
CMD ["nodemon", "."]
