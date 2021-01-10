const cluster = require('cluster');
const os = require('os');
const pid = process.pid;

if (cluster.isMaster) {
    console.log(`Master started on pid ${pid}`);
    const cpusCount = os.cpus().length;

    for (let i = 0; i < cpusCount - 1; i++) {
        cluster.fork();
    }
    cluster.on("exit", worker => {
        console.log(`Worker died ${worker.process.pid}`);
        cluster.fork();
    });
}

if (cluster.isWorker) {
    require("./index");
}