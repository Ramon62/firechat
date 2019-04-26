FROM node:latest as node

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@latest
COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 4200