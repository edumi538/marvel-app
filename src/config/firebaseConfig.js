import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDKMPF1Z3XZdkXccsG3mUpA6eu5FY_FZHE',
  authDomain: 'marvel-app-auth.firebaseapp.com',
  databaseURL: 'https://marvel-app-auth.firebaseio.com',
  projectId: 'marvel-app-auth',
  storageBucket: 'marvel-app-auth.appspot.com',
  messagingSenderId: '314419003467',
  appId: '1:314419003467:web:8bdc7067cc2d1de5860dce',
  measurementId: 'G-8CSEGGX4R7',
};
// Initialize Firebase

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).auth()
  : firebase.app().auth();
