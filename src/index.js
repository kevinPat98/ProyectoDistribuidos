const express = require('express');
const app= express();
const path = require('path');

//configuraciones
app.set('port',3000);
app.set('views', path.join(__dirname, ('views')));
app.engine('html', require ('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//rutas
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});