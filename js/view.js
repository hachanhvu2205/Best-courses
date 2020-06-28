const view = {}
view.setActiveScreen = async(screenName) => {
        switch (screenName) {
            case 'registerScreen':
                document.getElementById('app').innerHTML = components.registerScreen
                const registerForm = document.getElementById('register-form')
                registerForm.addEventListener('submit', (event) => {
                    event.preventDefault()
                    const formData = {
                        firstName: registerForm.firstName.value,
                        lastName: registerForm.lastName.value,
                        email: registerForm.email.value,
                        password: registerForm.password.value,
                        confirmPassword: registerForm.confirmPassword.value,
                    }
                    controller.register(formData)
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
                    view.setActiveScreen('signupScreen')
                })
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
            case 'indexScreen':