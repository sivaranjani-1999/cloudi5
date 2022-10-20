import React from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



export function Thirdpage()
{

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{'enctype':'multipart/form-data'}};

        await axios.post('http://localhost:3004/Third',datastring,config)
              .then(function(res){
                if(res.data.status === 'Inserted'){
                    alert('Inserted');
                    window.location.href="./";
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
        <div className='tcontainer1'>
                <div className='container2'>
                </div>
             <div className='tb_div'>
                <div className='container3'>
                <h2 className='page'>page-3<hr/></h2>
                <div className='now'>
                <div className=' row col-lg-12'>
                    <div  className='col-lg-8'>
                        <label>How many Pharmacy are working in your Pharmacy?*</label><br/>
                        <input type="text" className="tinpt" name='working'/><br/><br/>
                        <label>How many staffs are working in your pharmacy?*</label><br/>
                        
                        <input class="form-check-input" type="radio" name="staffs" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">1-2</label><br/><br/>
                        <input class="form-check-input" type="radio" name="staffs" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">2-4</label><br/><br/>
                        <input class="form-check-input" type="radio" name="staffs" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">5-10</label><br/><br/>
                        <input class="form-check-input" type="radio" name="staffs" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">More than 10</label><br/><br/><br/>


                        <label>Do you provide discounts on healthcare products to your<br/> customers?*</label><br/>
                        
                        <input class="form-check-input" type="radio" name="discounts" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Yes,I give up to 60% on certain categories</label><br/><br/>
                        <input class="form-check-input" type="radio" name="discounts" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Yes,I give up to 40% on certain categories</label><br/><br/>
                        <input class="form-check-input" type="radio" name="discounts" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Yes,i give various discounts</label><br/><br/>
                        <input class="form-check-input" type="radio" name="discounts" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">No,I don't provide any discount on healthcare products</label><br/><br/><br/>

                        <label>Do you have a delivery person/staff todeliverorders to your<br/> customers?*</label><br/><br/>
                        
                        <input class="form-check-input" type="radio" name="delivery" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">yes</label><br/><br/>
                        <input class="form-check-input" type="radio" name="delivery" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">No</label><br/><br/><br/>
                        <label>Are you currently part of any online pharamacy/ health-tech<br/> platforms?*</label><br/><br/>
                        
                        <input class="form-check-input" type="radio" name="onlinepharmacy" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Yes,i am currently part of online pharmacy/health-tech<be/>platform</label><br/><br/>
                        <input class="form-check-input" type="radio" name="ionlinepharmacy" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">No,I have not used nor be associated with any other online<br/>platforms for carrying out my business acitivites</label><br/><br/>
                        



                    </div>             
                    <div className='col-lg-4'>
                    <label>Your pharamacit's licence number*</label><br/>
                        <input type="text" className="tinpt" name='licence'/><br/><br/>
                        <label>Do you provide discount on medicines to your customers?</label><br/>
                        
                        <input class="form-check-input" type="radio" name="discount_on_medicines" id="inlineRadio1" value="Yes,I provide 10% discount on medicines"/>
                        <label class="form-check-label" for="inlineRadio1">Yes,I provide 10% discount on medicines</label><br/><br/>
                        <input class="form-check-input" type="radio" name="discount_on_medicines" id="inlineRadio1" value="Yes,I provide 10% discount on medicines"/>
                        <label class="form-check-label" for="inlineRadio1">Yes,I provide 10% discount on medicines</label><br/><br/>
                        <input class="form-check-input" type="radio" name="discount_on_medicines" id="inlineRadio1" value="No,I don't provide any discounts on medicines"/>
                        <label class="form-check-label" for="inlineRadio1">No,I don't provide any discounts on medicines</label><br/><br/>
                        <input class="form-check-input" type="radio" name="discount_on_medicines" id="inlineRadio1" value="others"/>
                        <label class="form-check-label" for="inlineRadio1">others</label><br/><br/><br/>


                        <label>Do you have a wholesale licence?*</label><br/>
                        
                        <input class="form-check-input" type="radio" name="wholesale_licence" id="inlineRadio1" value="Yes,I have both retail and whosale license"/>
                        <label class="form-check-label" for="inlineRadio1">Yes,I have both retail and whosale license</label><br/><br/>
                        <input class="form-check-input" type="radio" name="wholesale_licence" id="inlineRadio1" value="No, I have only retial license"/>
                        <label class="form-check-label" for="inlineRadio1">No, I have only retial license</label><br/><br/>
                        <input class="form-check-input" type="radio" name="wholesale_licence" id="inlineRadio1" value="Yes,I have wholesale licence"/>
                        <label class="form-check-label" for="inlineRadio1">Yes,I have wholesale licence</label><br/><br/><br/><br/><br/><br/>

                        <label>Do you current use any biling/sales/ERP software?*</label><br/>
                        
                        <input class="form-check-input" type="radio" name="software" id="inlineRadio1" value="Yes,I using the follwing biling/sales/ERP software"/>
                        <label class="form-check-label" for="inlineRadio1">Yes,I using the follwing biling/sales/ERP software</label><br/><br/>
                        <input class="form-check-input" type="radio" name="software" id="inlineRadio1" value="NO,I am not using the follwing biling/sales/ERP software"/>
                        <label class="form-check-label" for="inlineRadio1">NO,I am not using the follwing biling/sales/ERP software</label><br/><br/>
                        
                        
                        </div>
                
                        </div>
                        </div>
                <div>
                    <h5 className='th5'>Terms&conditions Apply</h5>

                    <Link to='/Secondpage'><button className='tbtn' type='button'>Back</button></Link>
                    <button className='tbtn1' type="submit">Next</button>

                </div>      
             </div>
             </div>
        </div>
        </form>
    </div>
   
    );
}