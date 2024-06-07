const emailButton = document.getElementById('validateButton')
const emailInput = document.getElementById('email_input')

emailButton.addEventListener('click', function () {
	validateEmail()
})

emailInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		validateEmail()
	}
})

function validateEmail() {
	var email = emailInput.value
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (emailRegex.test(email)) {
		alert('Welcome to the team!')
	} else {
		alert('Email is invalid!')
	}
}
