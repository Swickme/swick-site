import  React , {useState , useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../main.css'
import Downloadex from '../navbar/Downloadex'
import Footer from '../footer/Footer';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                <b>Amazon</b>
            </Typography>
            <Typography variant="h5" component="div">
                Leading edge tec company!
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                amazon.in
            </Typography>
            <Typography variant="body2">
               coupons and offers
                <br />
               
            </Typography>
        </CardContent>
        <CardActions>
        <Button variant="contained">More</Button>
            
        </CardActions>
    </React.Fragment>
);

export default function StorePage() {

    const [arr , setArr]  = useState([1 , 2 , 3 , 4])
    const [deal , setDeals]  = useState([1 , 2])


    return (
        <div>
            <div  style={{paddingLeft:'5%',paddingTop:'5%'}}>
                <Box sx={{ minWidth: 275, maxWidth: 70 , maxHeight:10 }}>
                    <Card variant="outlined">{card}</Card>
                    
                </Box>
                <h3 style={{marginLeft:'24%' , padding:'2%'}}> 4 Available coupons</h3>
                 {
                    arr.map((val , ind)=>{
                        return(
                            <div  style={{marginLeft:'24%',marginTop:'2%',height:'100px' ,
                              backgroundColor:'pink' , display:'flex',border:'2px solid black' , 
                              borderRadius:'10px' , marginRight:'10%'}}>
                                  <div style={{padding:'2%'}}>
                                      <h1>10%off</h1>
                                  </div>
                                 <div style={{padding:'3%'}}>
                                     <b>TOP COUPON</b>
                                     <p>Honey Members Only Coupon</p>
                                 </div>
                                 <div style={{padding:'3%' , marginLeft:'30%'}}>
                                 <Button variant="contained">Get code</Button>
                                 </div>
                           </div>
                        )
                    })
                }
                <br/>
                <br/>
                <br/>
               
                <hr style={{marginLeft:'20%'}}></hr>
                <br/> 
                <h3 style={{marginLeft:'24%' , padding:'2%'}}> 21 Deals Available</h3>
                {
                    deal.map((val , ind)=>{
                        return(
                            <div  style={{marginLeft:'20%',marginTop:'2%', display:'flex' }}>
                            <Card style={{marginRight:'10%'}} variant="outlined">{card}</Card>  {' '}
                            <Card style={{marginRight:'10%'}}variant="outlined">{card}</Card>    
                            <Card style={{marginRight:'10%'}}variant="outlined">{card}</Card>        
                           </div>
                        )
                    })
                }
            </div>
            <Downloadex/>   
            <Footer/>
        </div>

    );
}
