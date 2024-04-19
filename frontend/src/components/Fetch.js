import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Fetch() {

  const [state,setState]= useState([])

  const baseurl = process.env.REACT_APP_BASEURL;

   useEffect(()=>{

    getDetail()
   },[])

   const getDetail= ()=>{
    fetch(`${baseurl}/fetch`)
    .then((response) => response.json())
    .then((json) => {
      
      // console.log(json)
      setState(json.message)
    
    })
  }
  

   const deleted = (id)=>{
    // console.log(res)
   let de= fetch(`${baseurl}/delete/${id}`, {
      method: 'DELETE',
    });

    if(de){
      alert("Delete")
      getDetail()
    }
    else{
      alert("Not Delete")
    }


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
            <th scope="col">Mobile</th>
            <th scope="col">Address</th>
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
                <td>{val.mobile}</td>
                <td>{val.address}</td>
                <td>
                  <button className='btn btn-danger' onClick={()=>deleted(val._id)} >Delete</button> <span></span>
                 <Link to={`/update/${val._id}`}  ><button className='btn btn-warning'>Update</button></Link> 
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

export default Fetch