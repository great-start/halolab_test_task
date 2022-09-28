FROM node:alpine

LABEL release-date="28-09-2022"

#RUN addgroup app && adduser -S -G app app
#USER app

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 5000

CMD ["npm", "start"]