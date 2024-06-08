import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ContactServices } from '../../ContactServices/ContactServices'
import { Spinner1 } from '../../Spinner/Spinner1'

export const EditContact = () => {
  let navigate=useNavigate()
  let {contactID}=useParams()
  let [state,setState]=useState({
    loading:false,
    contact:{
      name:"",
      photo:"",
      contact:"",
      email:"",
      company:"",
      title:"",
      groupId:""
    },
    group:[],
    errorMessage:""
  })
  useEffect(()=>{
    let promise= new Promise((res,rej)=>{
      setState({ ...state ,loading:true})
      let response=ContactServices.getContact(contactID)
      res(response)
    })
    promise.then((res1)=>{
      setState({...state , loading:false,contact:res1.data})
    }).catch(()=>{
      setState({...state,loading:false,errorMessage:alert("data is not found!!!")})
    })
  },[contactID])
  let updateInput=(event)=>{
    setState({...state,contact:{
      ...state.contact,
      [event.target.name]:[event.target.value]
  }})
  }

  let submitForm=(event)=>{
    event.preventDefault()
    let promise = new Promise((res,rej)=>{
      let response = ContactServices.updateContact(contact,contactID)
      res(response)
    })
    promise.then((res1)=>{
      if(res1){
        setState({...state,loading:false})
        navigate("/Contacts/list",{replace:true})
      }
      else{
        navigate(`/Contacts/edit/${contactID}`,{replace:false})
      }
    }).catch((rej1)=>{
      setState({...state,loading:false,errorMessage:alert("data is not found!!!")})
    })
    
  }
  let {loading,contact,errorMessage}=state;
  return (
    <div>
      {/* <pre>{JSON.stringify(contact)}</pre> */}

      {/* <h1>Edit Contact</h1> */}
      <section className='edit-contact'>
        <div className='container p-3'>
          <div className='row'>
            <p className='fw-bold h4 text-success'>Edit Contact</p>
            <p className='fst-italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit aliquid debitis culpa sint sapiente reiciendis natus! Molestiae laborum impedit, quia culpa voluptatem laudantium veritatis corrupti repellendus provident quibusdam et a obcaecati aliquam accusantium, consequuntur tenetur eaque magni neque amet, repellat unde? Cumque aliquam commodi placeat nulla velit amet! Inventore.</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form action=''onSubmit={submitForm} >
                <div className="mb-2">
                  <input type="text" name="name" onChange={updateInput} id="" value={contact.name} placeholder='Name' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name="photo"  onChange={updateInput} id="" value={contact.photo} placeholder='Photo Url' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="number" name="contact"  onChange={updateInput} id="" value={contact.contact} placeholder='Contact' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="email" name="email"  onChange={updateInput} id="" value={contact.email} placeholder='Email' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name="company"  onChange={updateInput} id="" value={contact.company} placeholder='Company Name' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name="title"  onChange={updateInput} id="" value={contact.title} placeholder='Title' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="number" name="groupId"  onChange={updateInput} id="" value={contact.groupId} placeholder='Company Group' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="submit" name="" id="" value={"Update"} className='btn btn-success' />
                  <Link to={'/'} className='btn btn-danger ms-2'>Cancel</Link>
                </div>
              </form>
            </div>
            <div className="col-md-8">
              <img src={contact.photo} alt="" className='img-fluid contact-img' />
            </div>
            </div>
         </div>
      </section>
    </div>
  )
}
