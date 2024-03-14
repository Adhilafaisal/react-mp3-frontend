
import React, { useState, useEffect } from 'react'
import { getCategories,updateCategory } from '../services/allApis'
import { deleteCategories,getSpecificVideo } from '../services/allApis';
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';


function CategoriesList({status}) {

  const [delCat,setDelCat]=useState({})
  const [cat, setCat] = useState([])


  useEffect(() => {
    getCat()
  }, [status,delCat])

  const getCat = async () => {
    const res = await getCategories()
    console.log(res.data)
    setCat(res.data)
 }

 const handleDrop=async(e,id)=>{
   console.log("category id:"+id)
   const vid=e.dataTransfer.getData("videoId")
   console.log("dropped video id:"+vid)
   let category=cat.find(item=>item.id==id)
   console.log(category)
   const res=await getSpecificVideo(vid) 
  //  console.log(res.data)
  category.videos.push(res.data)
  console.log(category)
  const rescat=await updateCategory(category,id)
  if(rescat.status>=200 && rescat.status<300){
    toast.success(`${res.data.caption} is added to ${category.name}`)
    getCat()
  }
  else{
    toast.error("Video adding to category failed")
  }
 }


 const handleDragOver=(e)=>{
  e.preventDefault()
  console.log("Dragging Over Category")
 }


  const handleDelete=async(id)=>{
    console.log(id)
    const res=await deleteCategories(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
        setDelCat(res)
        toast.success(" Category Deleted successfully!!")
    }
    else{
        toast.error("Category Deleted Failed")
    }
}

 
   return (
    <>
      <div className='border border-light  p-3 mt-3'>
       { 
        cat?
        cat.map(item=>(
          <div className='bg-primary mb-3 p-3 rounded shadow'onDragOver={e=>{handleDragOver(e)}}  droppable onDrop={e=>{handleDrop(e,item?.id)}}>
            
            <div>
            <span>{item.name}</span>
            <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}} style={{color:'#fd0000'}}></i>
            </div>
            <div >
              {
                item?.videos.map(v=>(
                  <VideoCard video={v} cat={true}/>
                ))
              }
            </div>
            </div> 
        ))
        :
        <h1>No Categories</h1>
        }

      </div>
    </>
  )
}



export default CategoriesList