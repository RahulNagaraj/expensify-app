import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.error('Error: ', e);
//   });

// database.ref()
//   .set({
//   name: 'Rahul N',
//   age: 23,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   isSingle: true,
//   location: {
//     city: 'Bengaluru',
//     country: 'India',
//     state: 'Karnataka'
//   }
// })
//   .then(() => {
//     console.log('Data is saved!');
//   })
//   .catch((e) => {
//     console.error('Error: ', e);
//   });

// database.ref()
//   .update({
//     'stressLevel': 9,
//     'job/company': 'Amazon',
//     'location/city': 'Hyderabad'
//   })
//   .then(() => {
//     console.log('Data is updated!');
//   })
//   .catch((err) => {
//     console.log("Update failed: " + err.message);
//   });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((e) => {
//     console.log("Remove failed: " + e.message);
//   });
