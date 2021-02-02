// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRYl2wSDa2tJc7YBfA7066St0j7paxZ9Q",
    authDomain: "tube-a546e.firebaseapp.com",
    projectId: "tube-a546e",
    storageBucket: "tube-a546e.appspot.com",
    messagingSenderId: "332144580372",
    appId: "1:332144580372:web:b878e0c8c791addf97d401",
    measurementId: "G-Q2FCRV5FHK"
  };



function login(email, pass) {
    return firebase.auth().signInWithEmailAndPassword(email, pass);
}

// função para Registar Utilizador
function registarEstudante($user) {
    firebase.auth().createUserWithEmailAndPassword($user.email, $user.password).catch(error => {
        var errorCode = error.code;
    });
    return firebase.auth().onAuthStateChanged(newUser => {
        if (newUser) {
            firebase.database().collection("Estudantes").doc(newUser.uid).update({
                nome: nome
            });
        }
    })
}

function conectado() {
    return firebase.auth()
}



function recuperarSenha(email) {
    return firebase.auth().sendPasswordResetEmail(email)
}

