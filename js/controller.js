const controller = {}

controller.login = (loginForm) => {
    if (!loginForm.email || loginForm.email === "") {
        controller.setMessageError('error-email', 'Please input email')
    } else {
        controller.setMessageError('error-email', '')
    }
    if (!loginForm.password || loginForm.password === "") {
        controller.setMessageError('error-password', 'Please input password')
    } else {
        controller.setMessageError('error-password', '')
    }
    if (loginForm.email && loginForm.password) {
        model.login({
            email: loginForm.email,
            password: loginForm.password
        })
    }
}

controller.signup = (formData) => {
    if (!formData.lastName || formData.lastName === "") {
        controller.setMessageError('error-name', 'Please input last name')
    } else {
        controller.setMessageError('error-name', '')
    }
    if (!formData.email || formData.email === "") {
        controller.setMessageError('error-email', 'Please input email')
    } else {
        controller.setMessageError('error-email', '')
    }
    if (!formData.password || formData.password === "") {
        controller.setMessageError('error-password', 'Please input password')
    } else {
        controller.setMessageError('error-password', '')
    }
    if (formData.name && formData.email && formData.password) {
        model.register({
            name: formData.name,
            email: formData.email,
            password: formData.password
        })
    }
}

controller.setMessageError = (elementId, message) => {
    document.getElementById(elementId).innerText = message
}