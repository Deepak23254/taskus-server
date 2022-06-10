# parent call to nodejs IMAGE
FROM node:16-alpine

#defined working directory
WORKDIR /backend

# copy the package.json so that the content is get cached
COPY package.json .

#run the package installation
RUN npm install

#copy source code
COPY . .

#expose the port
EXPOSE 3000

#run the command on cmd
CMD ["npm","start"]