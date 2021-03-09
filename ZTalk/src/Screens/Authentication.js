import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import functions from '@react-native-firebase/functions';

function AuthenticationScreen({navigation}) {
  //navigation.navigate('Friends');
  function onPressLearnMore() {
    // console.log(e);
    var sendAdminNotification = functions().httpsCallable(
      'sendAdminNotification',
    );
    sendAdminNotification({
      email: 'jaiminchauhan23@gmail.com',
      // pin: '123',
    }).then(function(result) {
      // Read result of the Cloud Function.
      //var sanitizedMessage = result[error];
      //console.log(sanitizedMessage);
      // ...
    });

    /*var sendMail = functions().httpsCallable('sendMail');
    sendMail({email: 'jaiminchauhan23@gmail.com'}).then(function(result) {
      // Read result of the Cloud Function.
      //var sanitizedMessage = result[error];
      //console.log(sanitizedMessage);
      // ...
    });*/
  }
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: null,
      height: null,
    },
    card: {
      paddingTop: 75,
      flex: 1,
      borderRadius: 8,
    },

    center: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      flex: 1,
    },
  });
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.center}>
        <Card
          image={require('../../images/email.png')}
          style={styles.card}
          borderRadius={5}>
          <Text style={{marginBottom: 10}}>
            Please Enter a Mail Id for Authentication. Kkbvkvbkdb
          </Text>
          <Input
            placeholder="abc@xyz.com"
            label="Your Email Address"
            style={{margin: 10}}
          />
          <Button
            onPress={onPressLearnMore}
            buttonStyle={{
              borderRadius: 8,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              marginTop: 20,
            }}
            title="Send OTP"
          />
        </Card>
      </View>
    </View>
  );
}
export default AuthenticationScreen;
/*function onPressLearnMore() {
      // console.log(e);
      var sendAdminNotification = functions().httpsCallable(
        'sendAdminNotification',
      );
      sendAdminNotification({
        email: 'jaiminchauhan23@gmail.com',
        pin: '123',
      }).then(function(result) {
        // Read result of the Cloud Function.
        //var sanitizedMessage = result[error];
        //console.log(sanitizedMessage);
        // ...
      });

      var sendMail = functions().httpsCallable('sendMail');
      sendMail({email: 'jaiminchauhan23@gmail.com'}).then(function(result) {
        // Read result of the Cloud Function.
        //var sanitizedMessage = result[error];
        //console.log(sanitizedMessage);
        // ...
      });
    }
    return (
    <View>
      <Card image={require('../../images/email.png')}>
        <Text style={{marginBottom: 10}}>
          Please Enter a Mail Id for Authentication.
        </Text>
        <Input
          placeholder="INPUT WITH CUSTOM ICON"
          leftIcon={<Icon name="user" size={24} color="black" />}
          label="Your Email Address"
        />
        <Button
          icon={<Icon name="fas fa-envelope" color="#ffffff" />}
          //onPress={onPressLearnMore}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Send OTP"
        />
      </Card>
    </View>
  );*/
