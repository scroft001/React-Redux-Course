import React from 'react'

const ProfileCard = ({image, name, handle, desc}) => {
  return (
    <div className='app__profileCard'>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p className='italic'>{handle}</p>
        <p>{desc}</p>
    </div>
  )
}

export default ProfileCard