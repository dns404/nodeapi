var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeapi',
    connectTimeout:30000,
    multipleStatements: true
});
  
  connection.connect(async function (err) {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    } else {
      await connection.query("set @@GLOBAL.sql_mode='';");
      console.log('connected as id ' + connection.threadId);
    }
  });


module.exports = {
  connection:connection,
  getResults: (sql) => {
    return new Promise(function (resolve, reject) {
      connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        resolve(results)
      })
    })

  },
  insert: (table, data) => {
    return new Promise(function (resolve, reject) {
      connection.query('insert into ' + table + ' set ?', data, function (error, results, fields) {
        if (error) throw error;
        resolve(results)
      })
    })
  },
  array_diff:(a1,a2)=>{
    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
      a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
      if (a[a2[i]]) {
        delete a[a2[i]];
      } else {
        a[a2[i]] = true;
      }
    }

    for (var k in a) {
      diff.push(k);
    }

    return diff;
  }
}