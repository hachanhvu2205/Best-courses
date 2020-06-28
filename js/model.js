const model = {}

model.currentUser = undefined
model.listCourses = undefined
model.currentCourse = undefined
model.currentVideo = undefined
model.register = ({ name, email, password }) => {

    //console.log(firstName)
    firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
        console.log(res)
        firebase.auth().currentUser.sendEmailVerification()
        firebase.auth().currentUser.updateProfile({
                displayName: name
            })
            //console.log(firebase.auth().currentUser)
            //view.setActiveScreen("loginScreen")
    }).catch((err) => {
        //console.log(err)
        alert(err.message)
    })
}

model.login = ({ email, password }) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
        console.log(res)
        if (!firebase.auth().currentUser.emailVerified) {
            alert("Please verify email")
        } else {
            view.setActiveScreen('productScreen')
        }
    }).catch((err) => {
        alert(err.message)
    })
}

model.search = (searchKey) => {
    const res = firebase.firestore().collection('courses').where('title', '==', searchKey).get()
    model.currentCourse = getDataFromDocs(res.docs)[0]
}
model.loadCourses = async() => {
    const res = await firebase.firestore().collection('courses').get()
    model.listCourses = getDataFromDocs(res.docs)
    model.currentCourse = model.listCourses[0]
}


getDataFromDoc = (doc) => {
    let course = doc.data()
    course.id = doc.id
    return course
}

getDataFromDocs = (docs) => {
    return docs.map(getDataFromDoc)
}