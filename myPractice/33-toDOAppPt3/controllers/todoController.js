module.exports = function(app){

app.get('/todo', function(req, res){
  res.render('todo');
  // http://127.0.0.1:3000/todo
});

app.post('/todo', function(req, res){

});

app.delete('/todo', function(req, res){

});

};
