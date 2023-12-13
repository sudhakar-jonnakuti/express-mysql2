FROM node:18.14.2-bullseye-slim as builder 

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
USER node

COPY tsconfig.json tsconfig.json
COPY esbuild.js esbuild.js
COPY package.json package.json

RUN npm install
COPY --chown=node:node . .