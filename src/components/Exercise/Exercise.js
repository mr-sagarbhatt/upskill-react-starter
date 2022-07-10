import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'
import Table from '../Table/Table'
import { Link } from 'react-router-dom'

const Index = () => {
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')
  const [users, setUsers] = useState([])

  const headings = ['Id', 'First Name', 'Last Name', 'Email', 'Phone', 'Nationality']
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

  return (
    <article className="container mx-auto">
      {loader ? (
        <Loader></Loader>
      ) : (
        <section className="flex flex-col">
          <Link to="/exercise/add" className="self-end my-4">
            <Button>Add User</Button>
          </Link>
          <div>
            <Table title={`User Details`} headings={headings} rows={users}></Table>
          </div>
        </section>
      )}
    </article>
  )
  // return <article className="container mx-auto my-4">{loader ? <Loader></Loader> : <UserForm></UserForm>}</article>
}

export default Index
