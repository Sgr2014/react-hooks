import React from 'react'
export default function FunComponent () {
  const name = 'react'
  const user = {'firstName': 'John', 'lastName': 'Bull'}
  function formatterName () {
    return user.firstName + ' ' + user.lastName
  }
  return (
    <div>
      <header>{name}</header>
      <p>{formatterName()}</p>
    </div>
  )
}