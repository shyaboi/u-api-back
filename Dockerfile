FROM node:12-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install --production
CMD ["node", "./index.js"]
EXPOSE 4444