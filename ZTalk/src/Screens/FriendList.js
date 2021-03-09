var dbop = require('../../Database.js');
function FriendListScreen({navigation}) {
  var a = dbop.getdb();
  console.log(a);
  if (a) {
    navigation.reset({index: 0, routes: [{name: 'Authentication'}]});
  } else {
  }
  return null;
}
export default FriendListScreen;
