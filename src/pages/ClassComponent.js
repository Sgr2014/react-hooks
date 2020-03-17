import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render () {
    const name = 'react dom'
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
}