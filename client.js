const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: KRG");
    
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
}
console.log('Connecting ...');
connect();


module.exports = connect;