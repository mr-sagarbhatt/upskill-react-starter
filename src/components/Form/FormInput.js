const FormInput = ({ label, onChange, id, errorMessage, required, lblClassName, inputClassName, ...inputProps }) => {
  return (
    <div>
      <label className={`inline-block text-xs font-bold uppercase lg:mb-1 ${lblClassName}`} htmlFor={id}>
        {label}
      </label>
      {required && <span className="inline-block text-red-500">*</span>}
      <input
        {...inputProps}
        onChange={onChange}
        className={`block bg-[#f5f5f5] w-full p-2 lg:p-3 border ${
          errorMessage && 'border-red-500'
        } placeholder:uppercase placeholder:text-xs sm:placeholder:text-sm ${inputClassName}`}
      />
      <span className={`formInputError text-red-500`}>{errorMessage}</span>
    </div>
  )
}

export default FormInput
