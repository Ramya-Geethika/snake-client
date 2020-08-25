const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
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


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
      process.exit();
    }
    })
  };
  handleUserInput();
  return stdin;
}
setupInput();

console.log('Connecting ...');
connect();

module.exports = connect;