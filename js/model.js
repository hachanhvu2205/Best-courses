const currentUser = undefined

model.register = ({name, email, password }) => {

    //console.log(firstName)
    firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
        console.log(res)
        firebase.auth().currentUser.sendEmailVerification()
        firebase.auth().currentUser.updateProfile({
            displayName: name
        })
        //console.log(firebase.auth().currentUser)
        view.setActiveScreen("loginScreen")
    }).catch((err) => {
        //console.log(err)
        alert(err.message)
    })
}


model.getAllCourses = () => {
    
} 