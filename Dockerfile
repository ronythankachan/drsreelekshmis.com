FROM node:14

WORKDIR /clinic-frontend/

COPY package*.json ./
 
RUN npm install

CMD ["npm", "run", "build"]