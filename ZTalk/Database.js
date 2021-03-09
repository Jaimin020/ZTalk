var SQLite = require('react-native-sqlite-storage');
var a;
exports.getdb = async function() {
  var db = SQLite.openDatabase(
    {name: 'User_Details.db', location: 'default'},
    () => {
      console.log('Created');
    },
    error => {
      console.log(error);
    },
  );
  console.log(db.dbname);
  db.transaction(tx => {
    /*tx.executeSql(
        "create table if not exists Detail (id integer primary key not null, email text, username text,dp blob);",
        [],
        function(tx,res)
        {
            console.log("Table");
        }
        );

        tx.executeSql(
        "insert into Detail (email,username, dp) values (?, ?, ?)",
        ['jaiminchauhan23@gmail.com', 'Jaimin', null]
        );*/
    tx.executeSql('select email from Detail', [], (tx, res) => {
      if (res.rows.length === 0) {
        //console.log('true');
        a = true;
      } else {
        //console.log(res.rows.item(0).email);
        a = false;
      }
    });
    /*tx.executeSql('DELETE FROM  Detail where id=?', [1], (tx, res) =>
      console.log('Deleted'),
    );*/
  });
  return a;
};

exports.insertdb = function(email, name) {
  var db1 = SQLite.openDatabase(
    {name: 'User_Details.db', location: 'default'},
    () => {
      console.log('Created');
    },
    error => {
      console.log(error);
    },
  );
  db1.transaction(tx => {
    tx.executeSql('insert into Detail (email,username, dp) values (?, ?, ?)', [
      email,
      name,
      null,
    ]);
  });
};
