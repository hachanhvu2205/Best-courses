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
            break
            // case 'indexScreen':
            //     document.getElementById('app').innerHTML = components.indexScreen
            //     const subject = document.getElementsByClassName("redirect-topic")
            //     for (const course of subject) {
            //         course.addEventListener('click', (e) => {
            //             course.id
            //             view.setActiveScreen('productScreen')
            //         })
            //     }
            //     const contact = document.getElementsByClassName("contact")
            //     contact.addEventListener('click', (e) => {
            //         view.setActiveScreen('contactScreen')
            //     })
        case 'productScreen':
            document.getElementById('app').innerHTML = components.productScreen
            await model.loadCourses()
            for (const oneCourse of model.listCourses) {
                view.addCourse(oneCourse)
            }
            break
        case `videoScreen`:
            document.getElementById('app').innerHTML = components.videoScreen
            view.showCourse(model.currentCourse)
                // w3ls.render();

            // w3ls.cart.on('w3sb_checkout', function(evt) {
            //     var items, len, i;

            //     if (this.subtotal() > 0) {
            //         items = this.items();

            //         for (i = 0, len = items.length; i < len; i++) {
            //             items[i].set('shipping', 0);
            //             items[i].set('shipping2', 0);
            //         }
            //     }
            // });
            break
    }
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

}