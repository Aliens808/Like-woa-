const express = require('express');
const app = express();

app.get('/', function(request, response)
{ response.send('Hola hijo'); 
});

app.listen(process.env.PORT, function(){
    console.log('my app is running!')
})