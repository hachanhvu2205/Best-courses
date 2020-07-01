const view = {}
view.setActiveScreen = async(screenName) => {
    switch (screenName) {
        case 'signUpScreen':
            document.getElementById('app').innerHTML = components.signUpScreen
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault()
                const formData = {
                    name: registerForm.name.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    role: registerForm.checkboxRole.value
                }
                controller.signup(formData)
            })
            const redirectLogin = document.getElementById('redirect-login')
            redirectLogin.addEventListener('click', (e) => {
                view.setActiveScreen('loginScreen')
            })
            break
        case 'loginScreen':
            document.getElementById('app').innerHTML = components.loginScreen
            const redirectRegister = document.getElementById('redirect-register')
            redirectRegister.addEventListener('click', (e) => {
                view.setActiveScreen('signUpScreen')
            })

            w3ls.render();

            w3ls.cart.on('w3sb_checkout', function(evt) {
                var items, len, i;

                if (this.subtotal() > 0) {
                    items = this.items();

                    for (i = 0, len = items.length; i < len; i++) {
                        items[i].set('shipping', 0);
                        items[i].set('shipping2', 0);
                    }
                }
            });
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                    e.preventDefault()
                    const formData = {
                        email: loginForm.email.value,
                        password: loginForm.password.value,
                    }
                    controller.login(formData)
                })
                // const login = document.getElementById('login')
                //  login.addEventListener('click', (e) => {
                //      view.setActiveScreen('indexScreen')
                //  })
            break
        case 'indexScreen':
            document.getElementById('app').innerHTML = components.indexScreen


            const contact = document.getElementById("contact")
            contact.addEventListener('click', (e) => {
                view.setActiveScreen('contactScreen')
            })
            contactUs.addEventListener('click', (e) => {
                view.setActiveScreen('contactScreen')
            })
            aboutUs.addEventListener('click', (e) => {
                view.setActiveScreen('aboutScreen')
            })
            marketPlace.addEventListener('click', (e) => {
                view.setActiveScreen('marketPlaceScreen')
            })
            coreValue.addEventListener('click', (e) => {
                view.setActiveScreen('valueScreen')
            })
            privacy.addEventListener('click', (e) => {
                view.setActiveScreen('privacyScreen')
            })
            returns.addEventListener('click', (e) => {
                view.setActiveScreen('loginScreen')
            })
            FAQ.addEventListener('click', (e) => {
                view.setActiveScreen('faqScreen')
            })
            break
        case 'productScreen':

            document.getElementById('app').innerHTML = components.productScreen
            await model.loadCourses(courseId)

            document.querySelector('#owl-demo5').innerHTML = ""
            for (oneCourse of model.listCourses) {
                view.addCourse(oneCourse)
            }
            break
        case `videoScreen`:
            window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
            document.getElementById('app').innerHTML = components.videoScreen
            view.showCourse(model.currentCourse)
            w3ls.render();

            w3ls.cart.on('w3sb_checkout', function(evt) {
                var items, len, i;

                if (this.subtotal() > 0) {
                    items = this.items();

                    for (i = 0, len = items.length; i < len; i++) {
                        items[i].set('shipping', 0);
                        items[i].set('shipping2', 0);
                    }
                }
            });
            break
        case 'teacherScreen':
            document.getElementById('app').innerHTML = components.teacherScreen
            const createCourseForm = document.getElementById('createCourse')
            createCourseForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const course = {
                    courseInfo: {
                        author: createCourseForm.author.value,
                        time: createCourseForm.time.value,
                        users: createCourseForm.users.value,
                    },
                    courseLink: createCourseForm.courseLink.value,
                    createdAt: new Date().toISOString(),
                    image: createCourseForm.image.value,
                    title: createCourseForm.title.value,
                    topic: createCourseForm.topic.value,
                }
                model.createCourse(course)
                createCourseForm.image.value = ''
                createCourseForm.title.value = ''
                createCourseForm.topic.value = ''
                createCourseForm.users.value = ''
                createCourseForm.time.value = ''
                createCourseForm.author.value = ''
            })
            break
        case 'contactScreen':
            window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
            document.getElementById('app').innerHTML = components.contactScreen
            break
        case 'aboutScreen':
            window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
            document.getElementById('app').innerHTML = components.aboutScreen
            break
        case 'marketPlaceScreen':
            window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
            document.getElementById('app').innerHTML = components.marketPlaceScreen
            break
        case 'valueScreen':
            window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
            document.getElementById('app').innerHTML = components.valueScreen
            break
        case 'privacyScreen':
            window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
            document.getElementById('app').innerHTML = components.privacyScreen
            break
        case 'faqScreen':
            window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
            document.getElementById('app').innerHTML = components.faqScreen
            break

    }

}
const subject = document.getElementsByClassName("redirect-course")
const aboutUs = document.getElementById('aboutUs')
const marketPlace = document.getElementById('marketPlace')
const coreValue = document.getElementById('coreValue')
const privacy = document.getElementById('privacy')
const contactUs = document.getElementById('contactUs')
const returns = document.getElementById('returns')
const FAQ = document.getElementById('FAQ')
const bestCourse = document.getElementsByClassName('bestCourse')[0]
const addCourse = document.getElementById('add-course')
let courseId = ''
const listenClickTopic = () => {
    for (let course of subject) {
        course.addEventListener('click', (e) => {
            console.log(course)
            courseId = course.id
            view.setActiveScreen('productScreen')
        })
    }
    bestCourse.addEventListener('click', (e) => {
        view.setActiveScreen('indexScreen')
    })
    document.getElementById('logout-btn').addEventListener('click', (e) => {
        firebase.auth().signOut()
    })
    addCourse.addEventListener('click', (e) => {
        view.setActiveScreen('teacherScreen')
    })
}
listenClickTopic()




view.addCourse = (course) => {
    const courseWrapper = document.createElement('div')
    courseWrapper.classList.add("item")
    courseWrapper.classList.add("col-md-12")
    courseWrapper.innerHTML = `
    <div class="card custom-card">
    <img src="${course.image}" class="card-img-top" alt="..." style="width: 50%">
    <div class="card-body">
      <h5 class="card-title">${course.title}</h5>
      <p class="card-text">${course.courseInfo.author}</p>
      <p class="card-text">${course.courseInfo.time} lessons</p>
      <p class="card-text">For ${course.courseInfo.users} students</p>
    </div>
  </div>
   `

    document.getElementById("owl-demo5").appendChild(courseWrapper)
    courseWrapper.addEventListener('click', (e) => {
        model.currentCourse = course
        view.setActiveScreen('videoScreen')
    })

}
view.showCourse = (course) => {
    const showCourse = document.createElement('div')
    showCourse.classList.add('col-md-12')
    showCourse.classList.add('product-grids')
    showCourse.innerHTML = `
    <a><iframe width="992" height="515"  src="${course.courseLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
    `

    document.getElementById('onlyOne').appendChild(showCourse)
}