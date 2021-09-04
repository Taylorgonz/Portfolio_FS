
const Photo = require('./Photo');
const Websites = require('./Websites');
const Tech = require('./Tech')
const Features = require('./Features')


Websites.hasMany(Tech);
Tech.belongsTo(Websites);

Websites.hasMany(Features);
Features.belongsTo(Websites);

module.exports = { Photo, Websites, Tech, Features };

