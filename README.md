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

When you run node index.js 

<img width="716" alt="Снимок экрана 2021-01-10 в 21 46 15" src="https://user-images.githubusercontent.com/52598497/104137791-1d881200-53a8-11eb-85b3-3694173b0b01.png">

When you run node cluster.js

<img width="716" alt="Снимок экрана 2021-01-10 в 21 47 02" src="https://user-images.githubusercontent.com/52598497/104137842-735cba00-53a8-11eb-8246-0c4c15e4d1e1.png">

I make many tests and if we have high loaded server with many process clusterization is a good solution for us. But sometimes one main thread its better if we has a simple application you can delete for loop cycle in file server.js and run tests again. You will see that server with cluster little bit slower then one thread server.

Also i add restarting worker if we had some errors.

<img width="716" alt="Снимок экрана 2021-01-10 в 21 48 03" src="https://user-images.githubusercontent.com/52598497/104138033-f6cadb00-53a9-11eb-8357-e80da110629d.png">

Run command kill (value of PID)

<img width="444" alt="Снимок экрана 2021-01-10 в 21 48 53" src="https://user-images.githubusercontent.com/52598497/104138098-78226d80-53aa-11eb-9769-32c12f38c017.png">

#Thanks



