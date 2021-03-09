const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp(functions.config().firebase);

exports.sendAdminNotification = functions.https.onCall((data, context) => {
  var token;

  const UsersRef = admin.firestore().collection('Users');
  let query = UsersRef.where('email', '==', data.email)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }

      snapshot.forEach(doc => {
        token = doc.data()['Token'];
        const payload = {
          notification: {
            title: 'Jaimin',
            body: 'Hiii I am Jaimin',
          },
        };

        admin
          .messaging()
          .sendToDevice(String(token), payload, {priority: 'high'})
          .then(function(response) {
            console.log('Notification sent successfully:', response);
          })
          .catch(function(error) {
            console.log('Notification sent failed:', error);
          });
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  return 'Notification send';
  //var token="eqh9osheA6Y:APA91bEBqMoyrnUaNzC1Mg560Um4_idEam0kewQLiNh3JSxbahPPqMQXfvnd6BL5BgyvZgrUb4NLZpb4YoXI9eZMeHEPXdm1nnLYDRdLg1ueZztv5Yq-HwQIp2n6ZnQM8OGtImFqBPWH"
});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ztalk2840@gmail.com',
    pass: 'ztalk@123',
  },
});

exports.sendMail = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: 'ztalk2840@gmail.com',
    to: String(data.email),
    subject: 'OTP for Authentication',
    html: '<p>Welcome to <b>ZTalk</b></p>',
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
});
