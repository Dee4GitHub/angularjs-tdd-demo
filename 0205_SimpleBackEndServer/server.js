/**
 * Created by Deepak Papanna on 10/8/2015.
 */
var express = require('express');
var app = express();
var contacts = [
    {
        name: "Edard"
    }, {
        name: "Robert"
    }
];

app.get('/contacts', function(req, res) {
    res.status(200).json(contacts);
});

app.listen(9001);