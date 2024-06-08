import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { ContactServices } from '../../ContactServices/ContactServices'

export const AddContact = () => {
  let navigate=useNavigate()
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
  const updateInput=(event)=>{
    setState({...state,contact:{
      ...state.contact,
      [event.target.name]:[event.target.value]
    }})
  }
  let{loading,contact,group,errorMessage}=state

  let submitForm=(event)=>{
    event.preventDefault()
    let promise = new Promise((res,rej)=>{
      let response = ContactServices.createContact(contact)
      res(response)
    })
    promise.then((res1)=>{
      if(res1){
        navigate("/Contacts/list",{replace:true})
      }
      else{
        navigate("/Contacts/add",{replace:false})
      }
    }).catch(()=>{
      alert("Data in not found!!!")
    })
    
  }
  return (
    <div>
        {/* <h1>Add Contact</h1> */}
        {/* <pre>{JSON.stringify(contact)}</pre> */}
        <section className='edit-contact'>
        <div className='container p-3'>
          <div className='row'>
            <p className='fw-bold h4 text-primary'>Add Contact</p>
            <p className='fst-italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit aliquid debitis culpa sint sapiente reiciendis natus! Molestiae laborum impedit, quia culpa voluptatem laudantium veritatis corrupti repellendus provident quibusdam et a obcaecati aliquam accusantium, consequuntur tenetur eaque magni neque amet, repellat unde? Cumque aliquam commodi placeat nulla velit amet! Inventore.</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form action='' onSubmit={submitForm}>
                <div className="mb-2">
                  <input type="text" name="name" required={true} value={contact.name} onChange={updateInput} id="" placeholder='Name' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name="photo" required={true} value={contact.photo} onChange={updateInput}  id="" placeholder='Photo Url' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="number" name="contact" required={true} value={contact.contact} onChange={updateInput}  id="" placeholder='Contact' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="email" name="email" required={true} value={contact.email} onChange={updateInput}  id="" placeholder='Email' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name="company" required={true} value={contact.company} onChange={updateInput}  id="" placeholder='Company Name' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name="title" required={true} value={contact.title} onChange={updateInput}  id="" placeholder='Title' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="number" name="groupId" required={true} value={contact.groupId} onChange={updateInput}  id="" placeholder='Company Group' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="submit" name="" id="" value={"Create"} className='btn btn-primary' />
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
