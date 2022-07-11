import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'
import Table from '../Table/Table'
import UserForm from '../Form/UserForm/UserForm'

const Index = () => {
  const [showForm, setShowForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [editUser, setEditUSer] = useState({})
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')
  const [users, setUsers] = useState([])

  const headings = ['Id', 'First Name', 'Last Name', 'Email', 'Phone', 'Nationality']

  // * LOAD USERS
  const fnLoadUsers = async () => {
    try {
      setLoader(true)
      const res = await fetch('http://localhost:3001/users')
      const data = await res.json()
      setUsers(data)
      setLoader(false)
    } catch (e) {
      setLoader(false)
      setError(`Something went wrong, Please try again later!`)
    }
  }

  // * ADD USER
  const fnAddUser = async (user) => {
    try {
      setLoader(true)
      const req = {
        id: users.length + 1,
        ...user,
      }
      const res = await fetch('http://localhost:3001/users/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json', // Indicates the content
        },
        body: JSON.stringify(req),
      })
      const data = await res.json()
      setUsers([...users, data])
      setShowForm(false)
      setLoader(false)
    } catch (e) {
      setLoader(false)
      setError(`Something went wrong, Please try again later!`)
    }
  }

  // * EDIT USER
  const fnEditUser = async (user) => {
    try {
      console.log(user)
      setLoader(true)
      const res = await fetch(`http://localhost:3001/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json', // Indicates the content
        },
        body: JSON.stringify(user),
      })
      const data = await res.json()
      console.log(data)

      const { id } = user
      const updatedUsers = users.map((user) => {
        return user.id === id ? { ...data } : user
      })
      console.log(updatedUsers)
      setUsers(updatedUsers)
      setShowEditForm(false)
      setLoader(false)
    } catch (e) {
      setLoader(false)
      setError(`Something went wrong, Please try again later!`)
    }
  }

  const fnDeleteUser = async (id) => {
    try {
      setLoader(true)
      const res = await fetch('http://localhost:3001/users/' + id, {
        method: 'DELETE',
      })
      const data = users.filter((user) => {
        return user.id !== id
      })
      setUsers(data)
      setLoader(false)
    } catch (e) {
      setLoader(false)
      setError(`Something went wrong, Please try again later!`)
    }
  }

  const handleEdit = (user) => {
    setShowEditForm(true)
    setEditUSer(user)
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
          <Button className="self-end my-4" onClick={() => setShowForm((prev) => !prev)}>
            {showForm ? `Show Users` : `Add User`}
          </Button>
          {showForm ? (
            <div>
              <UserForm fnAddUser={fnAddUser}></UserForm>
            </div>
          ) : showEditForm ? (
            <UserForm fnEditUser={fnEditUser} showEditForm={showEditForm} editUser={editUser}></UserForm>
          ) : (
            <div>
              <Table
                title={`User Details`}
                headings={headings}
                rows={users}
                fnDeleteUser={fnDeleteUser}
                handleEdit={handleEdit}
              ></Table>
            </div>
          )}
        </section>
      )}
    </article>
  )
  // return <article className="container mx-auto my-4">{loader ? <Loader></Loader> : <UserForm></UserForm>}</article>
}

export default Index
