var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/planets');

console.log(models);

var starWarsPlanet = new models.PlanetCollection();


var planet = new models.Planet();



$('button').click(function(){
$('.buttonLabel').html("Loading...")
starWarsPlanet.fetch().done(function(){
  starWarsPlanet.each(function(planet){
    console.log(planet.get('name'));
    $('.buttonLabel').html("Submit")
    });
  });
});
