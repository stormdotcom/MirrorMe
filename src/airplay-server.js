const mdns = require('mdns');
const RtspServer = require('rtsp-stream');

// Advertise as an AirPlay service
const ad = mdns.createAdvertisement(mdns.tcp('airplay'), 7000, {
    name: 'MirrorMe'
});
ad.start();

// Create an RTSP server
const server = new RtspServer({
    serverPort: 7000,
    clientPort: 5000,
});

server.on('clientConnected', (client) => {
    console.log('Client connected', client);
});

server.on('data', (data) => {
    // Handle incoming video stream data
    // You can further process or redirect this data to your video element
});

server.start();
