import React from 'react'
import { useEffect,useState } from 'react';
import NewsCard from './NewsCard';

let API_KEY = 'db2fea66d8353b43da34a03813e5aa95';
let url = `https://gnews.io/api/v4/search?q=example&apikey=${API_KEY}`;



const NewsList = () => {
    let [news,setNews] = useState([]);
    
    useEffect(()=>{
        const fetchdata=async()=>{
            await fetch(url)
            .then((res)=>res.json())
            .then((da)=>{
                setNews(da?.articles);
                localStorage.setItem("news",JSON.stringify(da?.articles));
        })
        }

        fetchdata();
        


        // localStorage.setItem("news",JSON.stringify(news));
        
    },[])

  return (
    <div>
      <div className="row gy-2">
        {
            news.map((val)=>
               <div className="col-sm-12 col-md-4 col-lg-4"  >
                 <NewsCard title={val.title} des={val.description} imgurl={val.image}/>

               </div>
            )
        }

      </div>
    </div>
  )
}

export default NewsList
