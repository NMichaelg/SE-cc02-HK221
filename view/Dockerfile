FROM ubuntu:20.04 as build-stage

# RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV NODE_VERSION 16.18.1

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt update -y

RUN apt-get install curl -y

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Make workdir
RUN mkdir /view
WORKDIR /view
COPY package.json .
COPY package-lock.json .

RUN npm install -g nodemon
RUN npm install

COPY . .

# Prepare before start
# RUN /usr/ui/cache/scripts/pre_start.sh

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN npm run build

CMD npm start

