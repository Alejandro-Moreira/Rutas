//Creacion de un web server en express
//Invocar la libreria de express
const express = require('express') //COMMONJS
//Uso de la dependencia
//const {engine} = require('express-handlebars')
//import {engine} from 'express-handlebars' //ESMODULES


//Crear una instancia
const app = express()

//Creacion de rutas
// app.get('/',(req,res)=>{
//     res.send("Bienvenidos") 
// })

// app.get('/dashboard',(req,res)=>{
//     res.send("Dashboard principal") 
// })

// app.use((req,res)=>{
//     res.send("404 - Not Found") 
// })

//Mandar info en formato JSON
app.use(express.json())

// app.post('/register',(req,res)=>{
//     const {email,password} = req.body //Desestructuracion
//     res.send(` La contraseña ${password} pertenece a ${email}` )
    // console.log(req.body)
// })


// app.get('/pedido/:tipo',(req,res)=>{
//     res.send(`El pedido es hamburguesa ${req.params.tipo}`)
// })

// app.use(express.json())

// app.get('/search',(req,res)=>{
//     if (req.query.tipo ==="sencilla"){
//         res.send("Hamburguesa sencilla")
//     }
//     else{
//         res.send("Otro tipo de hamburquesa")
//     }
// })

// app.use(express.json())

//  app.get('/hamburguesa/simple',(req,res)=>{
//          res.send("Hamburquesa simple")
// })

// console.log(__dirname)//Muestra el path

//  app.get('/hamburguesa/doble',(req,res)=>{
//          res.sendFile('./doble.jpg',{
//             root:__dirname
//          })
// })
//  app.get('/hamburguesa/triple',(req,res)=>{
//          res.sendFile('./triple.docx',{
//             root:__dirname
//          })
// })
//  app.get('/hamburguesa/mixta',(req,res)=>{
//          res.status(200).json({
//             "tipo" : "mixta",
//             "extra " : "NO"
//          })
// })


//Importacion de plantilla
//Motor
// app.engine('handlebars',engine())
// //Extension de paginas
// app.set('view engine','handlebars')
// //Ubicacion del directorio views
// app.set('views','./src/views')
// // En caso de que el anterior no funcione
// // const ruta = path.join(__dirname,"views")
// // app.set('views',ruta)
// //Creacion de la ruta
// app.get('/hamburguesa/vegana',(req,res)=>{
//     res.render('home')
// })
// app.get('/hamburguesa/contactos',(req,res)=>{
//     res.render('contactos')
// })
// app.get('/hamburguesa/about',(req,res)=>{
//     res.render('about')
// })

//Middleware

// app.get('/entrada',(req,res)=>{
//     res.send("Entrada al local")
// })

// app.get('/consumo',(req,res)=>{
//     res.send(`Bienvenido - Consumo`)
// })

// //Creacion del middleware
// app.use((req,res,next)=>{
//     const{email,password} = req.body
//     if (email === "moreiramikel11@gmail.com" && password === "123"){
//         next()
//     }else{
//         res.send("Usuario no registrado")
//     }
// })

// app.get('/pedido',(req,res)=>{
//     res.send(`Bienvenido -${req.body.email} - Listo para tomar su orden`)
// })

app.get('/',(req,res)=>{
    res.send("Landing page")
})

app.get('/entrada',(req,res)=>{
    res.send("Entrada al local")
})

//Iniciar el servidor en el puerto 3000
app.listen(3000)
console.log("Web Server ejecutandose en el puerto 3000")
