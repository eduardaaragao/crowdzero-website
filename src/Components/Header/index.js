import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import '../../CSS/style.css';

export default ({user}) => {
    return (
        <header>
            <div className="header--elements">
                <div className="header--info">
                    <p className="header--userName">{user.userName}</p>
                    <p className="header--admin">Administrador</p>
                </div>                
                
                <img className="header--userPhoto" src={`${user.userImg}`}/>

                <div className="header--dropdown">
                    <ExpandMoreIcon/>
                </div>

                <div className="header--notifications">
                    <NotificationsIcon/>
                </div>
            </div>
        </header>
    );
}