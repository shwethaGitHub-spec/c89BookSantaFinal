import firebase from 'firebase';
require('@firebase/firestore')

// var firebaseConfig = {
//     apiKey: "AIzaSyDBlxQC_aEgVkQUk4fXGfpMSl6JVBrww-8",
//     authDomain: "booksanta-de328.firebaseapp.com",
//     databaseURL: "https://booksanta-de328.firebaseio.com",
//     projectId: "booksanta-de328",
//     storageBucket: "booksanta-de328.appspot.com",
//     messagingSenderId: "452667017573",
//     appId: "1:452667017573:web:67e70ff87128448c18b98c"
// };

/*var firebaseConfig = {
  apiKey: "AIzaSyDRHN618iWEIgjRHmJIFClGQ_0RGOVNh74",
  authDomain: "booksanta-app.firebaseapp.com",
  databaseURL: "https://booksanta-app.firebaseio.com",
  projectId: "booksanta-app",
  storageBucket: "booksanta-app.appspot.com",
  messagingSenderId: "104553584552",
  appId: "1:104553584552:web:4139acdd438f3e31af6f9d"
};*/

var firebaseConfig = {
  apiKey: "AIzaSyBQ_ArYTm_rJ684VKEXQ2-gOZU4RMZlB8I",
  authDomain: "booksanta-16989.firebaseapp.com",
  databaseURL: "https://booksanta-16989.firebaseio.com",
  projectId: "booksanta-16989",
  storageBucket: "booksanta-16989.appspot.com",
  messagingSenderId: "10721774895",
  appId: "1:10721774895:web:376725aae5485956b425da"
};


firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
