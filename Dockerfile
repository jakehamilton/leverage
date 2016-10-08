FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@3.7.5

ENV HOME=/home/app

COPY package.json $HOME/leverage/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/leverage
RUN npm install

USER root
COPY . $HOME/leverage
RUN chown -R app:app $HOME/*
USER app
