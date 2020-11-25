import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile__main__img}>
                <img className={s.main__img}
                     src="https://images.pexels.com/photos/545042/pexels-photo-545042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='main-img'/>
            </div>

            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;