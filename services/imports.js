const express       = require('express');
const bodyParser    = require( 'body-parser');
const logger        = require( 'morgan');
const cors          = require( 'cors');
const app           = express();
let Router    = express.Router();

module.exports = {
    bodyParser,
    logger,
    cors,
    app,
    Router
}