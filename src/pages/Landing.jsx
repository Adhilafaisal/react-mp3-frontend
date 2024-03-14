import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
        <div className='row p-5 shadow'>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Media player 2024</h1>
            <p>Explores media player for youtube video upload and management.you can add and manage videos,categories and even check the history.</p>
            <div>
              <Link to={'/dash'} className='btn btn-info'>Explore</Link>
            </div>
          </div>
          <div className='col'>
            <img style={{ height: '500px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lC323VhTsaE2bol0tZjZCuYFceNpV_YuTg&usqp=CAU" alt="img" className='img-fluid shadow' />
          </div>
        </div>
      </div>
      <div className='mt-3 p-5'>
        <h2 className='text-center'>Features</h2>
        <div className='d-flex mt-2 flex-row justify-content-between'>
          
          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/1186469/screenshots/2926719/upload.gif" alt="..."/>
              <div className="card-body">
                <h5 className='card-title'>Upload Videos</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/1044993/screenshots/4647139/media/3aeb01af114ff757dee01edd95db7865.gif" alt="..."/>
              <div className="card-body">
                <h5 className='card-title'>Watch Videos</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src="https://i.gifer.com/F1Wp.gif" alt="..."/>
              <div className="card-body">
              <h5 className='card-title'>View History</h5>

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>


        </div>
      </div>
      <div className='mt-5 row p-5'>
        <div className='col'>
          <h2>Simple ,Fast & Secured</h2>
          <p style={{textAlign:"justify"}}>Media Player 2024 is a platform for simple and faster youtube video uploading and management of video watch history too where you
            get a simple video player interface with the app itself...
          </p>
        </div>
        <div className='col'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/S7-4xSY1vsA?si=1NLSSQLyUgNOD2N_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Landing