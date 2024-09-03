import React from 'react'
import './Whychooseus.css'


const Whyus = () => {
  return (
    <div className='wrapper'>
    <div className="top">
        <h1 className='h-w'>Why Choose Us</h1>
        <p>We help our clients throughout the journey</p>
    </div>

    <div className="info">
        <div className="info-1">
            <img className='img' src='happy.png' alt="" />
            <p>5000+</p>
            <p>Happy Customers</p>
        </div>

        <div className="info-2">
        <img className='img' src='prize.png' alt="" />
            <p>Best Prize</p>
            <p>In Industry</p>
        </div>

        <div className="info-3">
        <img className='img' src='Service.png' alt="" />
            <p>24 x 7</p>
            <p>Customer Services</p>
        </div>

        <div className="info-4">
      
        <img className='img' src='booking.png' alt="" />
            <p>  Hassle Free</p>
            <p>Bookings</p>
        </div>

    </div>
      
    </div>
  )
}

export default Whyus