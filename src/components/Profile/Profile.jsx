import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile__main__img}>
                <img className={s.main__img}
                     src="https://images.pexels.com/photos/545042/pexels-photo-545042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='main-img'/>
            </div>
            <div className={s.info}>
                <div className={s.profile__avatar}>
                    <img className={s.profile__avatar__img}
                         src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='profile-avatar'/>
                </div>
                <div className={s.profile__info}>
                    <h2>Kim Yung</h2>
                    <p>Date of Birth: 4 May</p>
                    <p>City: Yekaterinburg</p>
                    <p>Education: URFU</p>
                    <p>Favourite flower: Peony</p>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;