import React, { useState } from 'react'
import { validateFormValues } from '../../../utils/UserFormValidation'
import { FormInput, FormNationality } from '../Form'
import Button from '../../Button/Button'

const UserForm = () => {
  // *********** FORM VALUES ***********
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
  }
  const [formValues, setFormValues] = useState(initialValues)
  // *********** FORM ERRORS ***********
  const [formErrors, setFormErrors] = useState({})
  // *********** FLAG FOR SUBMIT ***********
  const [isSubmit, setIsSubmit] = useState(false)

  // *********** SET FORM VALUES ***********
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  // *********** SET FORM ERRORS ON BLUR ***********
  const handleBlur = (e) => {
    const { name } = e.target
    const errors = validateFormValues(formValues)
    setFormErrors({ ...formErrors, [name]: errors[name] })
  }

  // *********** SUBMIT FORM VALUES ***********
  const handleSubmit = (e) => {
    e.preventDefault()
    // * VALIDATION :: SET FORM ERRORS *
    setFormErrors(validateFormValues(formValues))
    // * FORM SUBMIT ON TRUE *
    setIsSubmit(true)
  }

  const inputs = [
    {
      id: 1,
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      placeholder: 'Enter your first name',
      required: true,
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      placeholder: 'Enter your last name',
      required: true,
    },
    {
      id: 3,
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'Enter your email address',
      required: true,
    },
    {
      id: 4,
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
      required: true,
    },
    {
      id: 5,
      name: 'nationality',
      type: 'select',
      label: 'Nationality',
      defaultOption: 'Select your Nationality',
      required: true,
    },
  ]

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="grid p-4 mx-auto bg-[#f5f5f5] sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-2 lg:gap-6 lg:grid-cols-2">
            {inputs.map((input) => (
              <div key={input.id}>
                {input.name === 'nationality' ? (
                  <FormNationality
                    {...input}
                    value={formValues[input.name]}
                    onChange={handleChange}
                    errorMessage={formErrors[input.name]}
                    onBlur={handleBlur}
                    onKeyUp={handleBlur}
                  ></FormNationality>
                ) : (
                  <FormInput
                    {...input}
                    value={formValues[input.name]}
                    onChange={handleChange}
                    errorMessage={formErrors[input.name]}
                    onBlur={handleBlur}
                    onKeyUp={handleBlur}
                    inputClassName={`bg-whitesmoke border-tertiary`}
                  ></FormInput>
                )}
              </div>
            ))}
          </div>
          <div className="flex mt-4 justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default UserForm
