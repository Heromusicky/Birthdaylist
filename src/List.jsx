import React from 'react'
import Person from './person'

const list = ({people}) => {
  return (
   <div>{people.map((person)=>{
return(

  <Person {...person}/>
)
   })}</div>
  )
}

export default list

