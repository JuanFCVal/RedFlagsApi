const express = require('express');
const  app = express();
var cors = require('cors');
//Settings
//Solo para pushear xd
app.set('port', process.env.PORT || 3000); //Acepta el puerto que nos da el servidor en caso que no te de uda el 3000

//Middlewares
app.use(express.json());  //Acepta el formato Json como dato
app.use(cors());
//Route
app.get('/', (req,res) => {
    res.send('Welcome to my Api');
})
//Routes
app.use(require('./routes/banderas'));
app.use(require('./routes/donacion'));
app.use(require('./routes/usuario'));
app.use(require('./routes/reportes'));

//Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
} );