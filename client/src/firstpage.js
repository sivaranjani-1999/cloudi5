import React from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



export function Firstpage(){

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{'enctype':'multipart/form-data'}};

        await axios.post('http://localhost:3004/First',datastring,config)
              .then(function(res){
                if(res.data.status === 'Inserted'){
                    alert('Inserted');
                    window.location.href="./Secondpage";
                }
                else{
                    alert('Not Inserted');
                    window.location.reload();
                }
              })
              .catch(function(err){
                alert(err);
                window.location.reload();
              })

    }

    return(
    <div>
        <div className='container1'>
                <div className='container2'>
                </div>
             <div className='tb_div1'>
                <div className='container3'>
                <h2 className='page'>page-1</h2>
                <hr/>
                <h3>Partnered Pharmacy Registration Form</h3>
                <h4>Please fill the details below:</h4>
                <form onSubmit={handlesubmit}>
                    <div className='row col-lg-12'>
                    <div className='col-lg-4'>
                    <label className='lbl'>NAME*</label><br/>
                    
                    <input type="text" name="username" placeholder="Enter your name"  className="finpt1_name"/>
                     <br/><br/>
                    <label className='lbl2'>PHONE*</label>
                    <br/>
                    <input type="text" name="phoneno" placeholder=" 91+ Enter your number"  className="finpt3_name img"/>
                    <br/><br/><br/><br/>
                   
                    </div>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                    <label className='lbl1'>EMAIL-ID*</label><br/>
                    <input type="text" name="email" placeholder="Enter your email"  className="finpt2_name "/>
                    <br/><br/><br/>
                    </div>
                    </div>
                    <button className='btn' type="submit">NEXT</button>
                    

                </form>            
                </div>
             </div>

        </div>
    </div>
    );
}