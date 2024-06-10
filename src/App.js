import {useState} from 'react';
import './App.css';

function App() {
  const[formData,setFormData] = useState({firstName:"",lastName:"",textArea:"",isVisible:true,mode:"",favCar:""});
  console.log(formData);
  function changeHandler(event){
    const{name,value,checked,type} = event.target;
    setFormData(prevData =>{
      return{
       ...prevData,
      [event.target.name] :type==='checkbox'?checked: event.target.value
      }
    });
  }
  function submitHandler(event){
    event.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='First Name' onChange={changeHandler} name='firstName' value={formData.firstName}></input>

        <br/>
        <br/>
        <input type="text" placeholder='Last Name' onChange={changeHandler} name='lastName' value={formData.lastName}></input>
        <br/>
        <br/>
        <textarea placeholder='Text Area' onChange={changeHandler} name='textArea' value={formData.textArea}/>

        <br/>
        <br/>
        <label htmlFor='isVisible'>Visible?</label>
        <input type='checkbox' onChange={changeHandler} name='isVisible' id='isVisible' checked={formData.isVisible}/>

        <br/>
        <br/>
        <label htmlFor='onlineMode'>Online Mode</label>
        <input type='radio' onChange={changeHandler} name='mode' value= 'onlineMode' id='onlineMode' checked={formData.mode === "onlineMode"}/>

        <br/>
        <br/>
        <label htmlFor='offlineMode'>Offline Mode</label>
        <input type='radio' onChange={changeHandler} name='mode' value= 'offlineMode' id='offlineMode' checked={formData.mode==="offlineMode"}/>
        <br/>
        <br/>

        <label htmlFor='favCar'>Choose Favourite Car: </label>
        <select name='favCar' id='favCar' value={formData.favCar} onChange={changeHandler}>
          <option value='Scorpio'>Scorpio</option>
          <option value='Creta'>Creta</option>
          <option value='Zapper'>Zapper</option>
          <option value='Thar'>Thar</option>
        </select>

        <br/>
        <br/>
        <button>Submit</button>



      </form>
    </div>
  );
}

export default App;
