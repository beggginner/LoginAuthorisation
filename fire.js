import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBgVE2Yj7VO_yGgoEkwD_ecTRfTdkvARAU",
    authDomain: "authorisation-b7826.firebaseapp.com",
    projectId: "authorisation-b7826",
    storageBucket: "authorisation-b7826.appspot.com",
    messagingSenderId: "565254992808",
    appId: "1:565254992808:web:aeeed7dca30059c4eee39d"
  };
  
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;