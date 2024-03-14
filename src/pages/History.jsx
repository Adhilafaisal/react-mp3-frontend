import React, { useEffect ,useState} from 'react'
import {deleteHistory, getHistory } from '../services/allApis'
import { toast } from 'react-toastify';



function History() {
  const [delHis,setDelHis]=useState({})
  const [allHistory,setAllHistory]=useState([])
  useEffect(() => {
    getData()
  }, [delHis])

  const getData = async () => {
    const res = await getHistory()
    setAllHistory(res.data)
    console.log(res.data)
    
  }

  const handleDelete=async(id)=>{
    console.log(id)
    const res=await deleteHistory(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
        setDelHis(res)
        toast.success(" History Deleted successfully!!")
    }
    else{
        toast.error("History Deleted Failed")
    }
}



  return (
    <>

      <div>
        <h1>Watch History</h1>
      <table className='table border border-dark'>
      <thead className='table-dark'>
        <tr className='bg-dark'>
          <th>ID</th>
          <th>CAPTION</th>
          <th>URL</th>
          <th>DATETIME</th>
        </tr>
      </thead>
      {
      allHistory.map(item=>(
      <tbody className='table-dark'>
      <tr>
          <td>{item.id}</td>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.datetime} </td>
          <td>
          <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}} style={{color:'#fd0000'}}></i>

          </td>
        </tr>
      </tbody>
      ))}
    </table>
    </div>
    </>
  )

}


export default History