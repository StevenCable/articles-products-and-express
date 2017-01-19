/*jshint esversion: 6 */

const PORT = process.env.PORT || 3000;
const server = require('./server');

server.listen(PORT, ()=>{
  console.log('server is currently listening on...', PORT);
});
