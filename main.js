// read file
"use strict";

const { ClientRequest } = require('./helpers');
const { Presence } = require('./lib/actions');

const main = async() => {
    let response = await Presence(ClientRequest);
    console.log(response);
};

main();