var path = require( "path" );
var webpack = require( "webpack" );

module.exports = {
    "output": {
        "filename": "index.js"
    },
    "module": {
         "rules": [
             { "parser": { "requireEnsure": false } },
             {
                 "test": /\.jsx?$/,
                 "exclude": /node_modules/,
                 "loader": "babel-loader",
                 "options": {
                     "babelrc": false,
                     "presets": [
                         [ "es2015", { "modules": false } ],
                         "react"
                     ],
                     "plugins": [
                         "lodash"
                     ]
                 }
             }
         ]
    },
    "node": {
        "fs": "empty"
    },
    "devServer": {
        "https": true,
        "port": 8080
    },
    "devtool": "source-maps",
    "stats": false && {
        "colors": true,
        "modules": true,
        "reasons": true
    }
};
