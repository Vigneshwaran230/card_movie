import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {

  return (
    <div className="App">
       <h1 className="headcontent"> Top Box office collection </h1>
    <Users />
    
    </div>
  );
}



function Users(){
  const namess = [
    {
      name: "Robo 2.0",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/cf/2.0_film_poster.jpg",
      dis: "After mobiles start mysteriously flying out of the hands of people in Chennai, Dr Vaseegaran summons his trusted robot Chitti to ward off the bird-shaped supernatural powers of Pakshirajan."
    },
    {
      name: "Bigil",
      image:
        "https://vimocafe.com/wp-content/uploads/2019/11/Vijay-Bigil-Movie-Release-Date-on-Oct-25-Poster-HD.jpg",
      dis: "A former football player struggles to train a women's football team and avenge his father's death."
    },
    {
      name: "Kabali",
      image:
        "https://bloximages.chicago2.vip.townnews.com/indiawest.com/content/tncms/assets/v3/editorial/6/25/625b5d5c-5032-11e6-8a3b-c3248ab0f489/579258e1044a0.image.jpg?resize=1200%2C1599",
      dis: "Returning from prison, aged gangster Kabali confronts those who had destroyed his life. While doing so, he learns about what had happened to his family when he was gone."
    },
    {
      name: "Mersal",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGY5NTI3NmQtMGYxMy00N2ZlLTg2YmUtMjNkYTQ3ZTJkYzliXkEyXkFqcGdeQXVyMTMwOTgxMTA4._V1_.jpg",
      dis: "A magician and a doctor attempt to expose the corruption at the heart of India's medical industry."
    }
  ];

  const [initialNames , setInitialNames] = useState(namess);

  const [names , setNames] = useState({name:"" , image:"" , dis:""});

  const styles ={
    backgroundColor: "white",
    fonstSize:"1.5rem",
    fontWeight:"bold",
    margin:"10px 0"
}
  return(
    <div>
     <div className="content">
      <input 
        type='text'
        style={styles}
        value = {names.name}
        placeholder="Charcter Name"
        onChange={e =>setNames({...names , name: e.target.value})}
        />
        <input 
        type='text'
        style={styles}
        value = {names.image}
        placeholder="Character Image Address"
        onChange={e =>setNames({...names , image: e.target.value})}
        />
         <input 
        type='text'
        style={styles}
        value = {names.dis}
        placeholder="Character Image Description"
        onChange={e =>setNames({...names , dis: e.target.value})}
        />
        <button onClick={()=>setInitialNames([...initialNames,names])}>Add </button>
      </div>
        <div class="movie">
          {initialNames.map((nm)=>(<Msg image={nm.image} name={nm.name} des={nm.dis} />))}
          </div>
    </div>
  )
}


function Msg({image , name, des}){
  return(
    <div className="movieslot">
      <img height="150" className="images" src={image} alt={name} />
      <div className="inside">
        
        <Counter />
        <button>Delete</button>
      </div>
      <h4 class="titlecontent" > Movie: {name} </h4>
      <h5 className="msgcontent"> Description: {des} </h5>
    </div>
  );
}

function Counter(){
  const [ like , SetLike] = useState(10);
  const [ disLike , DisLike] = useState(0);
  return(
    <div>
      <button onClick={()=>SetLike(like+1)}>👍{like}</button>
      <button onClick={()=>DisLike(disLike+1)}>👎{disLike}</button>
    </div>
  )
}


