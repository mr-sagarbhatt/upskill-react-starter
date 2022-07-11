import React, { useState } from 'react'
import { validateFormValues } from '../../../utils/UserFormValidation'
import { FormInput, FormNationality } from '../Form'
import Button from '../../Button/Button'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const UserForm = ({ fnAddUser, showEditForm, editUser, fnEditUser }) => {
  const navigate = useNavigate()
  // *********** FORM VALUES ***********
  const initialValues = {
    firstName: showEditForm ? editUser?.firstName : '',
    lastName: showEditForm ? editUser?.lastName : '',
    email: showEditForm ? editUser?.email : '',
    phone: showEditForm ? editUser?.phone : '',
    nationality: showEditForm ? editUser?.nationality : '',
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

  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length === 0) {
      if (showEditForm) {
        fnEditUser({ id: editUser.id, ...formValues })
      } else {
        fnAddUser(formValues)
      }
    }
  }, [isSubmit, formValues, formErrors])

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
