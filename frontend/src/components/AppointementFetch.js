import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

function AppointementFetch() {

    const params = useParams()
 const[state,setState]= useState([])

 
const baseurl = process.env.REACT_APP_BASEURL;

 const deleted=()=>{
    getDetail()
    fetch(`${baseurl}/appointdelete/${params.id}`, {
        method: 'DELETE',
      });
 }
 useEffect(()=>{
    getDetail()

 },[])

 const getDetail= ()=>{
    fetch(`${baseurl}/appointfetch`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
         setState(json.message)

    
    });

 }

  return (
    <>
    <div className='container mt-4'  >
     <div className='row' >
    
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Service</th>
            <th scope="col">Date</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            state.length>0 ?
             state.map((val,ind)=>
               <tr key={ind} >
                <th>{ind+1}</th>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.service}</td>
                <td>{val.date}</td>
                <td>{val.message}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>deleted(val._id)} >Delete</button>
                  
                </td>

              </tr>

             )
             :
             <tr><th colSpan={6} className='text-center text-danger'>No Data</th></tr>
            
          }


        </tbody>
      </table>
      </div>
      </div>


    </>
  )
}

export default AppointementFetch