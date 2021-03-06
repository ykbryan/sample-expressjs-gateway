FROM node:alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /app/package.json

RUN npm install --production
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY api-adapter.js /app/api-adapter.js
COPY app.js /app/app.js

EXPOSE 3001
CMD [ "npm", "start" ]