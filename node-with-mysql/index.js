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
        // InsertData(con);
        DataDeleteById(con)
    }
})

function InsertData(con){

    let SQLQuery = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Simon', '03', 'Five', '01913851613', 'Dhaka')"
    con.query(SQLQuery, function(error){
        if(error){
            console.log('Data Insert Failed!')
        }else{
            console.log('Data Insert Success!')
        }
    })
}

function DataDeleteById(con){
    let SQLQuery = "DELETE FROM `students_list` WHERE  `id`='3'"
    con.query(SQLQuery, function(error){
        if(error){
            console.log('Data Delete Failed!')
        }else{
            console.log('Data Delete Success!')
        }
    })

}