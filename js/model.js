const model = {}

const currentUser = undefined
const listCourses = undefined
const currentCourse = undefined
const currentVideo = undefined
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

model.login = (email, password) => {
    firebase.auth().sigsignInWithEmailAndPassword(email, password).then((res) => {
        if (!firebase.currentUser.emailVerified) {
            alert("Please verify email")
        } else {

        }
    })
}

model.search = (searchKey) => {
    const res = firebase.firestore().collection('courses').where('title','==',searchKey).get()
    model.currentCourse = getDataFromDocs(res.docs)[0]
}
model.loadCourses = async () => {
    const res = await firebase.firestore().collection('courses').get()
    model.listCourses = getDataFromDocs(res.docs)
    model.currentCourse = listCourses[0]
}


getDataFromDoc = (doc) => {
    let user = doc.data()
    user.id = doc.id
    return user
}

getDataFromDocs = (docs) => {
    return docs.map(getDataFromDoc)
}
