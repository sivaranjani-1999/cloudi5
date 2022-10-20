import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


export function Secondpage()
{

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{'enctype':'multipart/form-data'}};

        await axios.post('http://localhost:3004/Second',datastring,config)
              .then(function(res){
                if(res.data.status === 'Inserted'){
                    alert('Inserted');
                    window.location.href="./Thirdpage";
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
            <form onSubmit={handlesubmit}>
                       <div className='scontainer1'>
                <div className='container2'>
                </div>
             <div className='tb_div'>
                <div className='container3'>
                <h2 className='page'>page-2<hr/></h2>
                <div className=' row col-lg-12' >
                    <div className='col-lg-4'>
                            <label>(city/town) of your Pharmacy*</label><br/>
                            <input type="text" className="sinpt" name='city'/><br/><br/>
                            <label>Pharmacy Address*</label><br/>
                            <input type="text" className="sinpt" name='address'/><br/><br/>
                            <label>Pincode Location of your Pharmacy*</label><br/>
                            <input type="text" className="sinpt" name='pincode'/><br/><br/>
                            <label>Pharmacy GST Number*</label><br/>
                            <input type="text" className="sinpt" name='gst'/><br/><br/>

                            <label>What is the apporoximate size of your pharmacy store?*</label><br/>
                            
                            <input class="form-check-input" type="radio" name="size" id="inlineRadio1" value="120 to 150 Square fee"/>
                            <label class="form-check-label" for="inlineRadio1">120 to 150 Square feet</label><br/><br/>
                            <input class="form-check-input" type="radio" name="size" id="inlineRadio1" value="150 to 200 Square feet"/>
                            <label class="form-check-label" for="inlineRadio1">150 to 200 Square feet</label><br/><br/>
                            <input class="form-check-input" type="radio" name="size" id="inlineRadio1" value="200 to 300 Square feet"/>
                            <label class="form-check-label" for="inlineRadio1">200 to 300 Square feet</label><br/><br/>
                            <input class="form-check-input" type="radio" name="size" id="inlineRadio1" value="300 to 500 Square feet"/>
                            <label class="form-check-label" for="inlineRadio1">300 to 500 Square feet</label><br/><br/>
                            <input class="form-check-input" type="radio" name="size" id="inlineRadio1" value="More than 500 square feet"/>
                            <label class="form-check-label" for="inlineRadio1">More than 500 square feet</label><br/><br/><br/>
                            </div>
                            <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                    <label>Do you own/Run a Pharmacy/Medical/
                        <br/>Chemist store?*</label><br/>
                            
                            <input class="form-check-input" type="radio" name="store" id="inlineRadio1" value="Yes"/>
                            <label class="form-check-label" for="inlineRadio1">Yes</label><br/>
                            <input class="form-check-input" type="radio" name="store" id="inlineRadio1" value="NO"/>
                            <label class="form-check-label" for="inlineRadio1">No</label><br/><br/>
                             


                            <label>Parmacy Name*</label><br/>
                            <input type="text" className="sinpt" name='pharmacyname'/><br/><br/>
                            <label>Pharmacy Business Type*</label><br/>
                            <input type="text" className="sinpt" name='business'/><br/><br/>
                            <label>Company NAme (if pharmacy name & Company name is different)*</label><br/>
                            <input type="text" className="sinpt" name='companyname'/><br/><br/>


                            <label>What is the value of inventory you have in your pharmacy store?*</label><br/>
                            
                            <input class="form-check-input" type="radio" name="inventory" id="inlineRadio1" value="oLess than 3 Lacs"/>
                            <label class="form-check-label" for="inlineRadio1">Less than 3 Lacs</label><br/><br/>
                            <input class="form-check-input" type="radio" name="inventory" id="inlineRadio1" value="5-20 Lacs"/>
                            <label class="form-check-label" for="inlineRadio1">5-20 Lacs</label><br/><br/>
                            <input class="form-check-input" type="radio" name="inventory" id="inlineRadio1" value="20-50 Lacs"/>
                            <label class="form-check-label" for="inlineRadio1">20-50 Lacs</label><br/><br/>
                            <input class="form-check-input" type="radio" name="inventory" id="inlineRadio1" value="50 Lacs-1 Crore"/>
                            <label class="form-check-label" for="inlineRadio1">50 Lacs-1 Crore</label><br/><br/>
                            <input class="form-check-input" type="radio" name="inventory" id="inlineRadio1" value="More than Crore"/>
                            <label class="form-check-label" for="inlineRadio1">More than Crore</label><br/><br/><br/>


                            

                           
                            

                    
                    
                    
                    </div>
                    
                </div>
                <div>
                    <h5 className='th5'>Terms&conditions Apply</h5>
                    <div className='box2'>
                    <Link to='/'><button className='tbtn' type='button'>Back</button></Link>
                    <button className='tbtn1' type="submit">Next</button>
                    </div>

                </div>
               
                </div>
             </div>

        </div>
        </form>
    </div>
   
    );
}