import Sidebar from '../../components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="m-4">
      {/* <div className="text-center text-2xl text-sky-600 mt-4">Upskill Fest: React</div> */}
      <div className="flex flex-col">
        <a
          className="underline text-sky-600"
          href="https://upskill.zohocreatorportal.com/pratik.radixweb/rx-learning-test/record-summary/Available_Courses/3790080000000082088"
          target="_blank"
        >
          React Starter Course
        </a>
        <a className="underline text-sky-600" href="https://github.com/saiyed-radix/react-starter" target="_blank">
          Github
        </a>
      </div>
      <div className="fixed bottom-0 flex flex-wrap gap-4 right-0 m-4">
        <p className="text-lg font-bold">Extra Links:</p>
        <a className="underline" href="https://upskill.zohocreatorportal.com/#Dashboard" target="_blank">
          Zoho Dashboard
        </a>
        <a className="underline" href="https://reactjs.org/docs/getting-started.html" target="_blank">
          React Docs
        </a>
      </div>
    </section>
  )
}

export default Home
