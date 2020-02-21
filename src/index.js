/*const elemenet = document.createElement('h1')
elemenet.innerText = 'Hello React..'
const container = document.getElementById('root')
container.appendChild(elemenet)*/

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName : 'Alfredo',
    lastName : 'Hernandez',
    avatar : 'http://ahrsoft.com/img/photo.jpg'
}

function getUser(user){
    return user.firstName + ' ' + user.lastName
}

function getGreetin(user){
    if(user){
        return <h1> Hello {getUser(user)} </h1>
    }
    return <h1> Hello Stranger </h1>
}

const name = 'Alfredo';
const elemenet = (
    <div>
        <h1>{getGreetin(user)}</h1>
        <img src={user.avatar}/>
    </div>
)
const container = document.getElementById('root')
ReactDOM.render(elemenet, container)