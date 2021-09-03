
const Photo = require('./Photo');
const Websites = require('./Websites');
const Tech = require('./Tech')


Websites.hasMany(Tech);
Tech.belongsTo(Websites);

module.exports = { Photo, Websites, Tech };

