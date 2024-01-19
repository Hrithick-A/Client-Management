import React, { useState } from "react";
import axios from "axios";

function Client(){

    const [id, setId] = useState('');
    const [cname, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mail, setMail] = useState("");
    const [mobile, setMobile] = useState("");
    const [Client, setUsers] = useState([]);
  
  
   
  
   
   
    async function  Load()
    {
       const result = await axios.get(
           "http://localhost:8089/api/v1/client/getall");
           setUsers(result.data);
           console.log(result.data);
    }
   
  
    
       async function save(event)
      {
          event.preventDefault();
      try
          {
           await axios.post("http://localhost:8089/api/v1/client/save",
          {
          cname: cname,
          address:address,
          mail:mail,
          mobile: mobile
          });
            alert("Student Registation Successfully");
            setId("");
            setName("");
            setAddress("");
            setMobile("");
            Load();
          }
      catch(err)
          {
            alert("User Registation Failed");
          }
     }
  
   
   
   
     async function update(event)
     {
      event.preventDefault();
   
     try
         {
          await axios.put("http://localhost:8089/api/v1/client/edit/" + id ,
         {
  
          cname: cname,
            address:address,
            mail:mail,
           mobile: mobile
         
         });
           alert("Registation Updateddddd");
           setId("");
           setName("");
           setAddress("");
           setMobile("");
           Load();
         }
     catch(err)
         {
           alert("Student Updateddd Failed");
         }
    }
    

    return (
        <div>
           <h1>Client Management</h1>
           <div class="container mt-4" >
              <form>
                 
                  <div class="form-group">
                    <label>Client Name</label>
                    <input  type="text" class="form-control" id="cname"
                    value={cname}
                    onChange={(event) =>
                      {
                        setName(event.target.value);      
                      }}
                    />
                  </div>
    
    
                  <div class="form-group">
                    <label>Client Address</label>
                    <input  type="text" class="form-control" id="address" 
                     value={address}
                      onChange={(event) =>
                        {
                          setAddress(event.target.value);      
                        }}
                    />
                  </div>

                  <div class="form-group">
                    <label>Mail-Id</label>
                    <input type="text" class="form-control" id="mail" 
                      value={mail}
                    onChange={(event) =>
                      {
                        setMail(event.target.value);      
                      }}
                    />
    
    
                  </div>
    
                  <div class="form-group">
                    <label>Mobile</label>
                    <input type="text" class="form-control" id="mobile" 
                      value={mobile}
                    onChange={(event) =>
                      {
                        setMobile(event.target.value);      
                      }}
                    />
    
    
                  </div>
                  <div>
                  <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>
    
                  <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
                  </div>   
                </form>
              </div>
                    <br/>
    <table class="table table-dark" align="center">
      <thead>
        <tr>
          <th scope="col">Client Name</th>
          <th scope="col">Client Address</th>
          <th scope="col">Client Mail</th>
          <th scope="col">Client Mobile</th>
          
          <th scope="col">Option</th>
        </tr>
      </thead>
           {Client.map(function fn(Client)
           {
                return(
                <tbody>
                    <tr>
                    <td>{Client.cname}</td>
                    <td>{Client.address}</td>
                    <td>{Client.mail}</td>
                    <td>{Client.mobile}</td>        
                    <td>
                       
                       
                    </td>
                    </tr>
                </tbody>
                );
                })}
                </table>
           </div>
                );
            }
      
      export default Client;
