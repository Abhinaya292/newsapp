import React from 'react'

const NewsCard = ({title,des,imgurl}) => {
  return (
    <div className='card'>
      <img src={imgurl} alt="" width={"100%"} height={"200px"}/>
      <h3>{title}</h3>
    </div>
  )
}

export default NewsCard
