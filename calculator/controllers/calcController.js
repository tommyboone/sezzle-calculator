const db = require('../models');

module.exports = {
    findAll: function(req, res){
        db.Calculator.find()
        .then(results = res.json(results))
        .catch(err => res.json(err));
    },
    limit: function(req,res){
        db.Calculator.find()
        .sort( {created: -1 } )
        .limit(10)
        .then(results => res.json(results))
        .catch(err => res.json(err));

    },
    save: function(req, res){
        db.Calculator.create()
        .then(results => res.json(results))
        .catch(results => res.json(results));
    }    
}