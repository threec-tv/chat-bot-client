FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build

EXPOSE 3001
CMD [ "node", "dist/index.js", "prod" ]
#CMD tail -f /dev/null
