const mysql = require('mysql');

//Parametros de conexión a la base de datos
const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b8747b60318c94',
    password: 'cfb48514',
    database: 'heroku_165707ab10392f8',
    multipleStatments: true
});
// b8747b60318c94:cfb48514@us-cdbr-east-02.cleardb.com/heroku_165707ab10392f8?reconnect=true

mysqlConnection.connect(function (err) {
    if(err){
        console.log(err);
        return;
    }else{
        console.log("Db is connected");
    }
});

module.exports = mysqlConnection;