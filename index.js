const express = require('express');
const http = require('http');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const promoRouter = require('./routes/promoRouter');
const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');



const hostname = 'localhost';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());



app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
//  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body><h1>This is express server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(PORT,hostname,()=>{
  console.log(`Server is running at http://${hostname}:${PORT}`);
});
