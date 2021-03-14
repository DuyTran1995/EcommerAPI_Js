/**
 *
 * @param {Server} server
 * @param {String} protocolUrl
 * @param {String} port
 */

const ConnectServer = (server, protocolUrl, port) => {
    server.listen((protocolUrl, port), () => {
        console.log(`App listening at http://${protocolUrl}:${port}`);
    });
};

export default ConnectServer;
