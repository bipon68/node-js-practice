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
        // DataDeleteById(con)
        UpdateData(con)
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
    let SQLQuery = "DELETE FROM `students_list` WHERE  `id`='4'"
    con.query(SQLQuery, function(error){
        if(error){
            console.log('Data Delete Failed!')
        }else{
            console.log('Data Delete Success!')
        }
    })

}

function UpdateData(con) {
    let SQLQuery="UPDATE `students_list` SET `phone`='111111',`city`='Chittagong' WHERE `id`='5'";
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data Update failed");
        }
        else{
            console.log("Data Update Success!");
        }
    })
}