var bodyParser = require('body-parser');
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false}); // Middleman express

// CONTROLLER
module.exports = function(app){

app.get('/todo', function(req, res){
  res.render('todo', {todos: data});
});
app.post('/todo', urlencodedParser, function(req, res){ // handle Middleman POST data
  data.push(req.body);
  res.json(data);
});
// deleting Data
app.delete('/todo/:item', function(req,res){
  data = data.filter(function(todo){
    return todo.item.replace(/ /g, '-') !== req.params.item; // "get milk" → "get-milk" → check if this is equal to the request.
  });
  res.json(data);
});
};
