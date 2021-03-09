import React, {Fragment} from 'react';

import PushController from './PushController';

var dbop = require('./Database.js');

import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import functions from '@react-native-firebase/functions';
import database from '@react-native-firebase/database';
import Route from './Route';
const App = () => {
  messaging()
    .getToken()
    .then(token => {
      console.log(token);
      /*firestore().collection('Users').add({
              email:'jaiminchauhan23@gmail.com',
              Token:token,
      });*/
    });

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log(
      'Message handled in the background!',
      remoteMessage['notification'],
    );
  });

  return <Route />;
};

export default App;
