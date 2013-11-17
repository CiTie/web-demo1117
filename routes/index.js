
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(
    'index', 
    { 
        title: 'Hello World!'   
    }
    );
};

exports.demo = function(req, res){
  res.render(
    'demo',         // ./view/demo.ejs
    { 
        title: 'This is Demo page', 
        header: 'demo demo demo demo ...'
    }
   );
};

exports.app = function(req, res){
  res.render(
    'bootstrap',         // ./view/demo.ejs
    { 
        title: 'This is bootstrap', 
        content: 'many many many content ...'
    }
   );
};