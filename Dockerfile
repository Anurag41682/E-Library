FROM node:18-alpine
# a working directory set in image where all things will be copied when used COPY command
WORKDIR /app 
# here package.json is copied to /app by using .
COPY package.json .
COPY package-lock.json .
# for installing dependencies in container
RUN npm install
# here all things from current directory using . is copied to app directory using .
COPY . .
RUN npm run build
#working port 
EXPOSE 3000
# starting command for app, Each word at separate index in array
CMD [ "npm","start" ]
#commands for making image
#sudo docker-compose up
#sudo docker-compose up --build

