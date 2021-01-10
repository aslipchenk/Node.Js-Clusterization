# Node.Js-Clusterization

## Description
This that has been wrote on pure Node.Js is a simple application where you can add images from your local storage.
In this application i specially add big for loop cycle in order to see how clusterization works in Node.Js.

## Usage
Clone repository, run in terminall node index.js and open http://localhost:3000, add image click upload, if you want to see image in full screen you can link
http://localhost:3000/show. In order to see how clusterization works you need to install autocannon:

> npm i autocannon -g

Autocannon its a simple application that can send requests on you server. You can use it to write:

> autocannon -d 10 -c 200 localhost:3000

Where -d - time in seconds, -c - value of connects to your server.

## Tests 


