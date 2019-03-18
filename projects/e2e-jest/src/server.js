const http = require("http");
const polka = require("polka");
const sirv = require("sirv");

const startServer = ({ port, path }) =>
  new Promise((resolve, reject) => {
    const server = http.createServer();

    polka({ server })
      .use(sirv(path, { dev: true }))
      .listen(port, err => {
        if (err) {
          reject(err);
        } else {
          resolve(server);
        }
      });
  });

const stopServer = server =>
  new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

module.exports = {
  startServer,
  stopServer
};
