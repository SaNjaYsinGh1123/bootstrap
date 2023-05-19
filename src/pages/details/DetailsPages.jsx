import React, { useState,useContext } from "react"
import "./details.css"
import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams,useNavigate} from "react-router-dom"
import { useEffect } from "react"
import  { url }  from "../../assets/data/data"
import { Appstate } from "../../App"
import {Oval} from 'react-loader-spinner'

const DetailsPages = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(true);
  const [loading, setLoading] = useState(true);
  const [updateMode, setUpdateMode] = useState(false);
  
  // const [delform,setDelForm] = useState({
  //   username: UserName
  // })
  const delform = {
  }
  const deletePost = async() =>{
   
      try {
        setLoading(true)
        const result =await fetch(`${url}/Book/${id}`, {
                method: 'DELETE', 
                headers:{
                 'Content-Type': 'application/json'
                },
                body:JSON.stringify(delform)
              });
              if(result.status === 200){
                await result.json();
                setLoading(false);
               
                navigate('/');     
              }
      } catch (error) {
        setLoading(false);
       
        navigate('/');  
      }

    }

  
    const [form,setForm] = useState(true);
 
    
      const updatepost = async(e) =>{
        e.preventDefault();    
        const formData = {
          title:form.title,
          year :form.year,
          author :form.author

        }
    
      
          try {
            setLoading(true);
            console.log("formdata",formData)
            const result =await fetch(`${url}/Book/${id}`, {
                    method: 'PUT', 
                    headers:{
                      'Content-Type': 'application/json'
                     },
                    body:JSON.stringify(formData),
                  });
                  await result.json();
                  setLoading(false);
                 
                  navigate('/');           
          } catch (error) {
            setLoading(false);
                  
                  navigate('/');    
          }
      
        }

  useEffect(() => {
   
    const books = async() =>{
     
        try {
          const result =await fetch(`${url}/Book/${id}`);
              
           if(result.status === 200){
             const datajson = await result.json();
              setLoading(false);
              console.log(datajson)
              setBook(datajson);
              setForm({
                title: datajson.title,
                author:datajson.author,
                year:datajson.year
              });
           }
                 
          
        } catch (error) {
          console.log(error);
        }
      }
    books();
  }, [])

  return (
    <>
     {!updateMode  ? (loading ?(<div className='loading'><Oval
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
    
    /></div>):
        <section className='singlePage1'>
          <div className='container1'>
           
            <div className='right1'>
              <h1>{book.title}</h1>
              <p>{book.year}</p>
              {/* <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p> */}
              <p>Author: {book.author}</p>
              <div className='buttons1'>
                <button className='button l'
                  onClick={()=>setUpdateMode(true)}
                >

                    <BsPencilSquare />
                  </button>
               
                <button className='button button1' onClick={deletePost}>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        </section>
       ):

       (  
        loading ?(<div className='loading'><Oval
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
      
      /></div>):    
          <section className='newPost'>
            <div className='container boxItems'>
              <div className='img'>
              </div>
              <form onSubmit={updatepost}>
                <div className='inputfile flexCenter'>
              
                </div>
                <span> title * </span>
                <input 
                    name="title"
                    type='text' 
                    value={form.title} 
                    placeholder={book.title} 
                    onChange={(e)=>setForm({...form,title:e.target.value})}  
                    />
                
                <span> year *</span>
                <input 
                    name="year"
                    type='number' 
                    value={form.year} 
                    placeholder={book.year} 
                    onChange={(e)=>setForm({...form,year:e.target.value})}  
                    />
                <span>author  *</span>
                <input 
                    name="author"
                    type='text' 
                    value={form.author} 
                    placeholder={book.author} 
                    onChange={(e)=>setForm({...form,author:e.target.value})}  
                    />
                <input value='Update'type="submit"/>
    
                </form>
            </div>
          </section>
          )
      }
    </>
  )
}

export default DetailsPages;
