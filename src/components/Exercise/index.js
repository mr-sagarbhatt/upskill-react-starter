import { useState, useEffect } from 'react'

const Index = () => {
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')
  const [users, setUsers] = useState([])

  const fnLoadUsers = async () => {
    try {
      setLoader(true)
      const data = await fetch('http://localhost:3001/users')
      const json = await data.json()
      setUsers(json)
      console.log(`Users ==>`, json)
      setLoader(false)
    } catch (e) {
      setLoader(false)
      setError(`Something went wrong, Please try again later!`)
    }
  }

  useEffect(() => {
    fnLoadUsers()
  }, [])
  return <article className="container mx-auto my-4">{loader ? <>{`Loading`}</> : <section>Index</section>}</article>
}

export default Index
