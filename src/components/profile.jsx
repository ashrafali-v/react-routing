import React,{useState,useEffect} from 'react';
import '../App.css';

function Profile({match}) {
  useEffect(()=>{
    fetchProfile();
    console.log(match);
  },[]);
  const [profile,setProfile] = useState({});
  const fetchProfile = async () =>{
    const data = await fetch(`http://localhost:3027/api/user/${match.params.id}`);
    const profile = await data.json();
    setProfile(profile);
    console.log(profile);
    
  }
  return (
    <div>
        <h3>{profile.email}</h3>
    </div>
  );
}

export default Profile;
