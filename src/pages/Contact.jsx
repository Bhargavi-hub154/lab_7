import { useState } from "react";

function Contact(){

  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  });

  const [errors,setErrors] = useState({});

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const validate = ()=>{

    const newErrors = {};

    if(!form.name){
      newErrors.name="Name required";
    }

    if(!form.email.includes("@")){
      newErrors.email="Invalid email";
    }

    if(form.message.length<10){
      newErrors.message="Message must be 10 chars";
    }

    return newErrors;
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    const validationErrors = validate();

    if(Object.keys(validationErrors).length>0){
      setErrors(validationErrors);
    }else{
      alert("Form submitted");
      setErrors({});
    }
  };

  return(

    <form onSubmit={handleSubmit}>

      <h2>Contact Form</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <p>{errors.name}</p>

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <p>{errors.email}</p>

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />
      <p>{errors.message}</p>

      <button type="submit">
        Submit
      </button>

    </form>
  )
}

export default Contact