import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile';
import Avartar from './component/Avartar';

function AppProfile() {
 
  return (
    <>
     <Avartar
      url = "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
     />
     <Profile 
      url = "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
      name = "ㄱㅇㅎ"
      title = "개발자"
      isNew = {true}/>
      <Profile 
      url = "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
      name = "ㄱㅇㅎ2"
      title = "개발자2"/>
       <Profile 
      url = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      name = "ㄱㅇㅎ3"
      title = "개발자3"/>
    </>
  );
}

export default AppProfile;
