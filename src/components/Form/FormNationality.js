import Nationalities from '../../utils/nationalityList.json'
import { FaAngleDown } from 'react-icons/fa'

const FormNationality = ({ label, onChange, id, errorMessage, defaultOption, required, ...inputProps }) => {
  const sortedNationalities = Nationalities.countries.sort((a, b) => a.name.localeCompare(b.name))
  return (
    <div>
      <label className="inline-block text-xs font-bold leading-6 uppercase lg:mb-1" htmlFor={id}>
        {label}
      </label>
      {required && <span className="inline-block text-red-500">*</span>}

      <div className="relative w-full">
        <select
          {...inputProps}
          onChange={onChange}
          className={`block bg-[#f5f5f5] w-full p-2 lg:p-3 border text-base border-tertiary ${
            errorMessage && 'border-red-500'
          } appearance-none`}
        >
          <option className="text-xs uppercase sm:text-sm" defaultValue="" disabled value="">
            {defaultOption}
          </option>
          {Nationalities.countries.map((nationality, index) => (
            <option className="text-base" value={nationality.isoCode} key={index}>
              {nationality.flag} {nationality.nationality}
            </option>
          ))}
        </select>
        <span className="absolute right-4 top-[40%]">
          <FaAngleDown></FaAngleDown>
        </span>
      </div>
      <span className={`formInputError text-red-500`}>{errorMessage}</span>
    </div>
  )
}

export default FormNationality
