const express = require('express');
const app = express();

const hbs=require('hbs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

var json = require('./data/datos.json');
hbs.registerHelper('productos', function() {
    var da = JSON.stringify(json);
    var ret ="";
    var oj =  JSON.parse(da)
    for (var i = 0; i< oj.length; i++) {
        ret = ret + ' <div class="cajon"><img src="'+oj[i].img+'" alt=""><hr><div><h1>'+oj[i].descripcion+'<br> by Chef</h1><h3>'+oj[i].precio+'</h3></div></div>';
    };
    return ret;
});

app.set('view engine', 'hbs'); 

app.get('/',(req,res)=>{
   res.render('home',{
        nombre: "Romel Romero",
        anio: new Date().getFullYear() 
   }); 
});
app.use(express.static(__dirname+'/public'));

app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto 3000 ${port}`);
});