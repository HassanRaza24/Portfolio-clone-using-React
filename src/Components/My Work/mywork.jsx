import React from 'react'
import './mywork.css'
import download from'../../assets/download.svg'
// import mywork_data from '../../assets/mywork_data'

const Mywork = () => {
  return (
    <div className="mywork">
        <div className="mywork-title">
            <h1>My Projects</h1>
            <img src={download} alt="" />
        </div>
        <div className="mywork-container">
            {/* {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img}  alt="" />
            })} */}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
        </div>
    </div>
  )
}

export default Mywork