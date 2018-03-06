import { Firebase, FirebaseRef } from './firebaseSetup';



/**
  * Login to Firebase with Email/Password
  */
  export function loginFire(formData, navagator) {
    const {
      email,
      password,
    } = formData;

    console.log(formData)

    // Go to Firebase
    return Firebase.auth()
    .setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
    .then(() =>
        Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>
        navagator.navigate("Drawer")
        )
        .catch(() => console.log("fail"))
        .catch(() => Toast.show({
          text: "Enter Valid Username & password!",
          duration: 2000,
          position: "top",
          textStyle: { textAlign: "center" }
        }))
        .then((res) => {
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

            };
        })
    )
  }




/**
  * Add item to will
  */
  export function addItem(formData) {
    console.log('firebase subitting')
    console.log(formData);

    /*const {
        email,
        firstName,
        itemDesc,
        itemName,
        lastName
    } = willData;*/

    willData= {
      firstName:'',
      lastName:'',
      itemDesc:'',
      itemName:'',
      receiverEmail:''
    }

    willData.firstName = formData.firstName
    willData.lastName = formData.lastName
    willData.itemDesc = formData.itemDesc
    willData.itemName = formData.itemName
    willData.receiverEmail = formData.receiverEmail

    const UID = Firebase.auth().currentUser.uid;
    //console.log(Firebase.auth().currentUser.email);
    if (!UID) return false;

    willData['senderEmail'] = Firebase.auth().currentUser.email;
    //console.log(UID)

    const ref = FirebaseRef.child(`willItems`);

    var newWillKey = ref.push().key;

    willData["id"] = newWillKey;

    var updates = {};
    updates['/willItems/' + newWillKey] = willData;
    updates['/user-willItems/' + UID + '/' + newWillKey] = willData;
    //sreturn FirebaseRef.update(updates);

    FirebaseRef.update(updates)
}


/**
  * Get WillItems
  
  export async function getWillItems() {
    if (Firebase === null) throw('Firebase is Null when trying to getRecipies')
    var willItems = null;
    await FirebaseRef.child('willItems')
      .on('value', (snapshot) => {
        willItems = snapshot.val() || {};
      });
      return willItems;
  }
*/

  /**
  * Get WillItems
  */
export function getWillItems() {
    if (Firebase === null) throw('Firebase is Null when trying to get stuff, no no no bad Thomas');

    return dispatch => new Promise(resolve => FirebaseRef.child('willItems')
      .on('value', (snapshot) => {
        const recipes = snapshot.val() || {};
        //console.log(recipes);

        return dispatch({
          type: 'FIRELIST_IS_LOADING',
          data: recipes
        });
      }))
  }

export function CreateAccountPush(formData, navagator){
  const {
    email,
    password,
  } = formData;
  return Firebase.auth()
  .setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
  .then(() =>
          Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(()=>
          navagator.navigate("Login")
        )
          .catch(() => console.log("fail"))

)
}
