import React from 'react'
import './Accomodation.css';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
};

const Accomodation = () => {
  return (
    <div className='container'>
    <div className='text1'>Accomodation 
        <br></br>
        <div className='text2'>
        <p>There are a small number of rooms available at the venue, the majority of these are reserved for close family. If you are interested in staying at the venue, please check with us as there may be some availabilty. <br></br>Rooms will not be able to be booked directly with the venue.</p>
        <br></br><p>Hotels nearby:</p><br></br>
        <p>Holiday Inn Express London - Epsom Downs</p><br></br>
        <p>Premier Inn Epsom Central hotel</p><br></br>
        <p>Premier Inn - Epsom Town Central Hotel</p><br></br>
        <p></p><br></br>
        </div>
        <div className='text1'>
        <a href="https://www.booking.com/searchresults.en-gb.html?label=gog235jc-1DCAMoUEIRZXBzb20tYWlyZWJvcm91Z2hICVgDaFCIAQGYAQm4AQfIAQzYAQPoAQH4AQKIAgGoAgO4AsnN6aEGwAIB0gIkODQyYzg2ZjEtM2FiNS00MDY3LThiMzQtZTA1MjRjZWE0NDFj2AIE4AIB&sid=8effc7b35de9316cdf49cfe2c0a98195&aid=356980&checkin=2023-07-14&checkout=2023-07-17&dest_id=-2595655&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0" target="_blank" style={linkStyle}>More hotels</a>
    </div>
    </div>
    </div>
  )
}

export default Accomodation
