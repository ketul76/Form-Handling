import React,{useState} from 'react';


function Form() {
  const [formData,setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    languages: [],
    address: "", 
  });
  const [tableData,setTableData] = useState({});

  const changeHandler = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value});
    console.log("Values :- " ,event.target.value );
  };

  const submitHandler = (item) => {
    item.preventDefault();  
    console.log("formData" , formData);
    setTableData(formData);
  }



  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="container">
          <div className="form-control">
            <label>First Name</label><br />
            <input type="text" placeholder="Enter Your First Name" name='fname' value={formData.fname}   onChange={changeHandler}/>
          </div>
          
          <div className="form-control">
            <label>Last Name</label><br />
            <input name='lname' type="text" placeholder="Enter Your Last Name"  value={formData.lname}  onChange={changeHandler}/>
          </div>

          <div className="form-control">
            <label>Email</label><br />
            <input type="email" placeholder="Enter Your Email" name='email' value={formData.email}  onChange={changeHandler}/>
          </div>
          
          <div className="form-control">
            <label>Password</label><br />
            <input type="password" placeholder="Enter Your Password" name='password' value={formData.password}  onChange={changeHandler}/>
          </div>
          
          <div className="form-control">
            <label>Gender:</label><br />
            <input name='gender' type="radio" id="male"   value="male" onChange={changeHandler}/> Male &nbsp;
            <input name='gender' type="radio" id="female" value="female" onChange={changeHandler}/> FeMale
          </div>
          
          <div className="form-control">
            <label>Select City</label><br />
            <select name='city' value={formData.city} onChange={changeHandler}>
              <option>Select</option>
              <option value="ahmedabad">Ahmedabad</option>
              <option value="surat">Surat</option>
              <option value="Baroda">Baroda</option>
            </select>
          </div>
          
          <div className="form-control">
            <label>Languages:</label><br/>
            <input name='language' type="checkbox" value="gujarati" onChange={changeHandler}/>&nbsp;Gujarati<br/>
            <input name='language' type="checkbox" value="hindi"  onChange={changeHandler}/>&nbsp;Hindi<br/>
            <input name='language' type="checkbox" value="english"  onChange={changeHandler}/>&nbsp;English<br/>
          </div>

          <div className="address">
          <label>Address</label><br />
          <textarea value={formData.address} rows="5"
                  cols="30"
                  name="address" onChange={changeHandler}>
        </textarea>
        <br />

          <input className="submit" type="submit" value="Submit" />
        </div>

        </div><br />

      

      </form>

      <table  border="1" style={{margin:"0 auto"}} >
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-mail</th>
          <th>Password</th>
          <th>Gender</th>
          <th>City</th>
          <th>Language</th>
          <th>Address</th>
        </thead>
        <tbody>
          <td>{tableData.fname}</td>
          <td>{tableData.lname}</td>
          <td>{tableData.email}</td>
          <td>{tableData.password}</td>
          <td>{tableData.gender}</td>
          <td>{tableData.city}</td>
          <td>{tableData.languages}</td>
          <td>{tableData.address}</td>
        </tbody>
      </table>
    </>
  );
}

export default Form;