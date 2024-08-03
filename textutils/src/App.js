import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from'react';



function App(){
      const[mode,setMode]=useState('light');//Whether dark mode is enable or not
      const[alert,setAlert]=useState(null);
      const showAlert =(message,type)=>{
            setAlert({
                  msg:message,
                  type:type
            })
            setTimeout(()=>{
                  setAlert(null);
            },1500);
                  
            
      }
      const toggleMode =()=>{
            if(mode==='light'){
                  setMode('dark');
                  document.body.style.background='#042743';
                  showAlert("Dark mode has been enabled","success");
                  document.title='TextUtils-Dark Mode';
                  //user ko chmkane ke liye
                  //setInterval(()=>{
                      //  document.title='TextUtils is Amazing Mode';
                  //},2000);
                  //setInterval(()=>{
                        //document.title='Install TextUTils Now';
                  //}, 1500);
            }
            else{
                  setMode('light');
                  document.body.style.background='white';
                  showAlert("light mode has been enabled","success");
                  document.title='TextUtils-Light Mode';
             }
      }
      return(
      <>
            {/*<Navbar title="TextUtils"aboutText="About TextUtils"/>*/}
            {/*<Navbar/>*/}
          
       <Navbar title ="TextUtils"mode={mode}toggleMode={toggleMode}/>
            <Alert alert ={alert}/>
            <div className="container my-3">
                
                        <TextForm  showAlert={showAlert}heading="Enter the text to analyze below"mode={mode}/>
                       
                  
             </div>
           
            </>
          
       
      );
}

export default App; 
