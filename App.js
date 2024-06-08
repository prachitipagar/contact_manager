import { Navigate, Route, Routes } from "react-router-dom";
import { ContactList } from "./Components/Contacts/ContactList/ContactList";
import { AddContact } from "./Components/Contacts/AddContact/AddContact";
import { EditContact } from "./Components/Contacts/EditContact/EditContact";
import { ViewContact } from "./Components/Contacts/ViewContact/ViewContact";
import { NavBar } from "./Components/NavBar/NavBar";
import './index.css'
// import { Spinner1 } from "./Components/Spinner/Spinner1";



function App() {
  return (
    // <>
    //    <div className='fluid-container bg-dark text-light'>hello</div>
      
    //    <div class="btn btn-warning text-light"><i class="fa fa-mobile me-1 text-primary"></i>CONTACT</div>
    // </>
    <div>
      {/* <Spinner1/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to={'/Contacts/list'}/>}/>
        <Route path="/Contacts/list" element={<ContactList/>}/>
        <Route path="/Contacts/add" element={<AddContact/>}/>
        <Route path="/Contacts/edit/:contactID" element={<EditContact/>}/>
        <Route path="/Contacts/view/:contactID" element={<ViewContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
