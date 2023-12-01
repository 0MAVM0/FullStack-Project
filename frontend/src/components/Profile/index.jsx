import './style.scss';
import { useNavigate } from 'react-router-dom';
import { logoutEntirely } from '../../conf/common';

function Profile() {
    const navigate = useNavigate();
    function logout() {
        navigate('/auth');
        logoutEntirely();
    }

    return (
        <div id="profile-component">
            <h1>Profile</h1>

            <hr />

            <button className='danger-btn' onClick={logout}>Log out</button>
        </div>
    )
}

export default Profile