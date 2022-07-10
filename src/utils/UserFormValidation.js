// *********** VALIDATE FORM VALUES :: return error object ***********
const validateFormValues = (values) => {
  const { firstName, lastName, email, phone, nationality } = values
  const errors = {}
  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/
  const phoneRegex = /^[0-9]{10}$/
  const firstNameRegex = /^[a-zA-z ]*$/
  const lastNameRegex = /^[a-zA-z ]*$/

  // *********** FIRST_NAME VALIDATION ***********
  if (!firstName.trim()) {
    errors.firstName = `Please enter your first name.`
  } else if (firstName.trim().length < 2 || firstName.trim().length > 20) {
    errors.firstName = `Be between 2-20 characters.`
  } else if (!firstNameRegex.test(firstName)) {
    errors.firstName = `Only alphabets are allowed. Please try again.`
  }

  // *********** LAST_NAME VALIDATION ***********
  if (!lastName.trim()) {
    errors.lastName = `Please enter your last name.`
  } else if (lastName.trim().length < 2 || lastName.trim().length > 20) {
    errors.lastName = `Be between 2-20 characters.`
  } else if (!lastNameRegex.test(firstName)) {
    errors.lastName = `Only alphabets are allowed. Please try again.`
  }

  // *********** EMAIL VALIDATION ***********
  if (!email.trim()) {
    errors.email = `Please enter your email address.`
  } else if (!emailRegex.test(email)) {
    errors.email = `Email must be in a valid email format(e.g., username@coolexample.com). Please try again.`
  }

  // *********** PHONE NUMBER VALIDATION ***********
  if (!phone.trim()) {
    errors.phone = `Please enter your phone number.`
  } else if (!phoneRegex.test(phone)) {
    errors.phone = `Phone number must be in a valid format. Please try again.`
  }

  // *********** NATIONALITY VALIDATION ***********
  if (!nationality.trim()) {
    errors.nationality = `Please select your nationality.`
  }

  return errors
}

export { validateFormValues }
