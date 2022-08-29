import React from 'react'
import '../social.css'

const social = () => {
  return (
    <>
        <section className='social'>
            <div className='socBox'>
                <i className='fab fa-facebook'></i>
                <span>FaceBook</span>
            </div>
            <div className='socBox'>
                <i className='fab fa-youtube'></i>
                <span>Youtube</span>
            </div>
        </section>
    </>
  )
}

export default social