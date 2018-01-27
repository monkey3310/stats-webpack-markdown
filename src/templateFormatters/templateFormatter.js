'use strict';

const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const format = function (template, params) {
    const templateFormat = _.template(fs.readFileSync(path.resolve(`src/templates/${template}`)));
    return templateFormat(params);
};

module.exports = {
    format
};

