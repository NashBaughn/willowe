import { Firebase, FirebaseRef } from 'setup.js';



/**
  * Login to Firebase with Email/Password
  */
  export function login(formData) {
    const {
      email,
      password,
    } = formData;
  
    // Validation checks
    if (!email) return reject({ message: ErrorMessages.missingEmail });
    if (!password) return reject({ message: ErrorMessages.missingPassword });

    // Go to Firebase
    return Firebase.auth()
    .setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
    .then(() =>
        Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (res) => {
            if (res && res.uid) {
            // Update last logged in data
            FirebaseRef.child(`users/${res.uid}`).update({
                lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
            });

            // Send verification Email when email hasn't been verified
            if (res.emailVerified === false) {
                Firebase.auth().currentUser
                .sendEmailVerification()
                .catch(() => console.log('Verification email failed to send'));
            }

            // Get User Data
            getUserData(dispatch);
            }

            await statusMessage(dispatch, 'loading', false);

            // Send Login data to Redux
            return resolve(dispatch({
            type: 'USER_LOGIN',
            data: res,
            }));
        }).catch(reject));
  }