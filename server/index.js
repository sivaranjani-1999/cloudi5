const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const fileupload = require('express-fileupload');
const e = require('express');
const { response } = require('express');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(fileupload());

var c = mysql.createConnection({
    host : "localhost",
    user:"root",
    password : "fullstack@123",
    database : "res"
});

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log('Database Connected');}
})

app.post('/First',(request,response)=>{
    let name1=request.body.username;
    let email=request.body.email;
    let phone=request.body.phoneno;
    
    

    let sql = 'insert into firstpage (name1,email,phone) values(?,?,?)';

    c.query(sql,[name1,email,phone],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }
    })
   
 });
app.post('/Second',(request,response)=>{
    let city=request.body.city;
    let address=request.body.address;
    let pincode=request.body.pincode;
    let gst=request.body.gst;
    let size=request.body.size;
    let store=request.body.store;
    let pharmacyname=request.body.pharmacyname;
    let business=request.body.business;
    let companyname=request.body.companyname;
    let inventory=request.body.inventory;
    
    

    let sql = 'insert into secondpage(city,address,pincode,gst,size,store,pharmacyname,business,companyname,inventory)values(?,?,?,?,?,?,?,?,?,?)';

    c.query(sql,[city,address,pincode,gst,size,store,pharmacyname,business,companyname,inventory],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }
    })
   
});

app.post('/Third',(request,response)=>{
    let working=request.body.working;
    let staffs=request.body.staffs;
    let discounts=request.body.discounts;
    let delivery=request.body.delivery;
    let onlinepharmacy=request.body.onlinepharmacy;
    let licence=request.body.licence;
    let discount_on_medicines=request.body.discount_on_medicines;
    let wholesale_licence=request.body.wholesale_licence;
    let software=request.body.software;
    

    let sql = 'insert into thirdpage(working,staffs,discounts,delivery,onlinepharmacy,licence,discount_on_medicines,wholesale_licence,software)values(?,?,?,?,?,?,?,?,?)';

    c.query(sql,[working,staffs,discounts,delivery,onlinepharmacy,licence,discount_on_medicines,wholesale_licence,software],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }
    })
   
});

app.listen(3004);