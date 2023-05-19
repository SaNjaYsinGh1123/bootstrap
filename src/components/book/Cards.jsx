import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import  { url }  from "../../assets/data/data"
import  imageUrl from "../../assets/images/book3.jpg"
const Cards = () => {
  const [data,setData] = useState([]);
  const [book,setBook] = useState([]);
   const [loading,setLoading] = useState(true);
   useEffect(()=>{
    const books = async(key) =>{
      setLoading(true);
      
      // console.log('in card');
      console.log(url);
        try {
          const result =await fetch(`${url}/Book`);
  
                const datajson = await result.json();
                console.log(datajson);
                setBook(datajson);
                setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      books();
  },[])

  return (
    <div className='flex flex-wrap justify-around md:justify-between px-1 mt-0'>
       {loading ? <div className='w-full h-96 flex items-center justify-center'><ThreeDots color='white' height={40}/></div>:
        
          book.map((e,i)=>{
            return (
              <div key={i} className='font-medium shadow-lg p-2 poster-color  cursor-pointer mt-6 '>
                  <Link to={`/details/${e._id}`}>
                    <img className='h-96 w-80 md:h-72 md:w-44' src={imageUrl} alt='book-image' onError={(e)=>e.target.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flipkart.com%2Fhandbook-of-physics%2Fp%2Fitm478ad693d6330&psig=AOvVaw2SpqZglqtHR1VWqYd0Yk-M&ust=1684520621867000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNil5r2-__4CFQAAAAAdAAAAABAE'}/>
                  <div className='ml-2 mt-1'>
                    <h1>{(e.title)}</h1>
                    <h1 className='flex items-center'>
                    <h1>Year: {e.year}</h1>
                  
                    </h1>
                    <h1>author: {e.author}</h1>
                  </div>
                  </Link>
                </div>
               )
            })
        }
       
    </div>
  )
}

export default Cards