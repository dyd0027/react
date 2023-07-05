import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name ='용휘';
  const list = ['가가','나나','다다'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hellos</h2>
      <ul>
        {
          list.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
      <img style={{width: '300px', height:'100px;'}}src='https://sangsanginib.com/_upload//attFile/SS0002/SS0002_5_1.png' alt='ddd' />
      
    </>
  );
}

export default AppJSX;
