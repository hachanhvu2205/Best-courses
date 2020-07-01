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
            view.setActiveScreen('indexScreen')
        }
    }).catch((err) => {
        alert(err.message)
    })
}

model.search = async (topic) => {
    const res = await firebase.firestore().collection('courses').where('topic', '==', topic).get()
    
    model.listCourses = getDataFromDocs(res.docs)
    model.currentCourse = model.listCourses[0]
}
model.loadCourses = async() => {
    const res = await firebase.firestore().collection('courses').get()
    model.listCourses = getDataFromDocs(res.docs)
    model.currentCourse = model.listCourses[0]
}

model.addCourse = (course) => {
    const dataToCreate = {
        createdAt: course.createdAt,
        courseLink: course.courseLink,
        image: course.image,
        title: course.title,
        topic: course.topic,
        courseInfo: {
            author: course.courseInfo.author,
            time: course.courseInfo.time,
            users: course.courseInfo.users
        }
    }
    firebase.firestore().collection('course').add(dataToCreate).then ((res) => {

    })
}

getDataFromDoc = (doc) => {
    let course = doc.data()
    course.id = doc.id
    return course
}

getDataFromDocs = (docs) => {
    return docs.map(getDataFromDoc)
}