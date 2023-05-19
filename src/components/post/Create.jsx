import React, {useState} from "react"
import "./create.css"
// import { IoIosAddCircleOutline } from "react-icons/io"
import  { url }  from "../../assets/data/data"
// import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Oval} from 'react-loader-spinner'
import imageurl from "../../assets/images/book2.jpg"
const Create = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [form,setForm] = useState({
    title:'',
    year:'',
    author:''
  });

  const handleImage = (e) =>{
    e.preventDefault();
   
  }
  const send = async(e) =>{
    e.preventDefault();

    const formData = {
      title:form.title,
      year:form.year,
      author:form.author
    }

      try {
        setLoading(true);
        console.log("formdata",formData)
        console.log(JSON.parse(JSON.stringify(formData)))
        const result =await fetch(`${url}/Book/create`, {
                method: 'POST',
                headers:{
                  'Content-Type': 'application/json'
                 },
                body:JSON.stringify(formData),
              });
              await result.json();
              
              setLoading(false);
              navigate('/')
      } catch (error) {
     
      }
   
    }
  return (
    <>
    {
     loading ?<div className='loading'><Oval
     height={40}
     width={40}
     color='black'
     wrapperStyle={{}}
     wrapperClass=""
     visible={true}
     ariaLabel='oval-loading'
     secondaryColor="black"
     strokeWidth={4}
     strokeWidthSecondary={4}
   
   /></div>:
   <section className='newPost'>
   <div className='container boxItems'>
     <div className='img'>
       <img src={imageurl} alt='lo' className ='image-preview' />
     </div>
     <form onSubmit={send}>
       <div className='inputfile flexCenter'>
         <input
            name="post"
            type="file"
           //  accept='image/*'
           disabled
            alt='img'
            onChange={handleImage}
            />
       </div>
       <span> title * </span>
       <input
           name="title"
           type='text'
           required
           onChange={(e)=>setForm({...form,title:e.target.value})}
           />

       <span> year *</span>
       <input
           name="year"
           type='Number'
           required
           onChange={(e)=>setForm({...form,year:e.target.value})}
           />
       <span>author  *</span>
       <input
           name="author"
           type='text'
           required
           onChange={(e)=>setForm({...form,author:e.target.value})}
           />
       <div className="button-look">
         <input type="submit" value='create'/>
       </div>

       </form>
   </div>
 </section>
}
    </>
  )
}
export default Create;

