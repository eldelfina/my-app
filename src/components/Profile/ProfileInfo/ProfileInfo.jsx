import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.info}>
            <div className={s.profile__avatar}>
                <img className={s.profile__avatar__img}
                     src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                     alt="profile-avatar"/>
            </div>
            <div className={s.profile__info}>
                <h2>Kim Yung</h2>
                <p>Date of Birth: 4 May</p>
                <p>City: Yekaterinburg</p>
                <p>Education: URFU</p>
                <p>Favourite flower: Peony</p>
            </div>
        </div>)
}

export default ProfileInfo