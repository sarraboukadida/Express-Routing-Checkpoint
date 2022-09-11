const express = require ('express') ;
const app = express () ;
// console.log (app);
app.listen(5000, (err) => err ? console.log(err) : console.log ('server is running'));

let date = new Date();
//console.log (date);
let dayOfWeekNumber = date.getDay();
//console.log (dayOfWeekNumber);
let hour = date.getHours();
//console.log(hour);

const middleware = (req, res, next) => {
   
    if (dayOfWeekNumber === 0 || dayOfWeekNumber === 6 || hour<9 || hour>=17 ) {
    
            return   res.send('service disponible uniquement de lundi au vendredi de 09 à 17h ') };
        
        next ()
    };


app.use(middleware);


app.get('/', (req,res) => {
    res.sendFile (__dirname +'/home.html') ;
});
app.get('/home.html', (req,res) => {
    res.sendFile (__dirname +'/home.html') ;
});

app.get('/services.html', (req,res) => {
    res.sendFile (__dirname +'/services.html') ;
});

app.get('/contactUs.html', (req,res) => {
    res.sendFile (__dirname +'/contactUs.html') ;
});
app.get('/app.css', (req,res) => {
    res.sendFile (__dirname +'/app.css') ;
});

app.get('/img.png', (req,res) => {
    res.sendFile (__dirname +'/img.png') ;
});











