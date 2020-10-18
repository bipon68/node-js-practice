var mysql = require('mysql')

var DatabaseConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school'
}

var con = mysql.createConnection(DatabaseConnectionConfig)

con.connect(function(error){
    if(error){
        console.log('Node DB Connection Failed!')
    }else{
        console.log('Node DB Connection Success!')
    }
})