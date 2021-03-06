var bodyParser = require('body-parser');
var mongoose = require('mongoose');



//Connect to Database
mongoose.connect('mongodb://test:test@ds123929.mlab.com:23929/kagerjaytodo');

// Create a schema blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);  // Todo is opinionated naming
var itemOne = Todo({item: 'buy flowers'}).save(function(error){
  if (err) throw err;
  console.log('item saved');
});

// OLD WAY OF HANDLING DATABASE WITHOUT MONGODB
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false}); // Middleman express

// http://127.0.0.1:3000/todo
// CONTROLLER
module.exports = function(app){

app.get('/todo', function(req, res){
  res.render('todo', {todos: data});
});
// BodyParser takes body-request, does its magic, then sends body-response
app.post('/todo', urlencodedParser, function(req, res){ // handle Middleman POST data
  data.push(req.body);
  res.json(data);
});
// deleting Data
// "todo/:item" is equivalent to "todo/appendThisAfterURL"
app.delete('/todo/:item', function(req,res){
  data = data.filter(function(todo){
    return todo.item.replace(/ /g, '-') !== req.params.item; // "get milk" → "get-milk" → check if this is equal to the request.
  });
  res.json(data);
});
};
