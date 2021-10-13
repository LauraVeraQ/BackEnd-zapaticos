import Express from "express"

const app = Express()

/*PARA USO DE FORMATO JSON - ENTREGA DATOS DEL FRONT EN req.body (extrae la info y la pone es esa variable) */
app.use(Express.json())

/*AGREGAR RUTAS AL SERVIDOR*/
app.use(Express.json());

app.get('/usuarios', (req, res) => {
    console.log("alguien hizo GET en la ruta /usuarios");
    const usuarios =[
        {id: 1001, nombre:"Laura", rol: "Administrador", estado: "Pendiente"},
        {id: 2001, nombre:"Carlos", rol: "vendedor", estado: "Autorizado"},
        {id: 1002, nombre:"Michael", rol: "Administrador", estado: "Autorizado"},
        {id: 2002, nombre:"Miguel", rol: "vendedor", estado: "No autorizado"},
        {id: 2003, nombre:"Johanna", rol: "vendedor", estado: "Pendiente"}
    ];
    res.send("no hay usuarios")
});

app.post('/usuarios/nuevos', (req, res) => {
    console.log("Eto es una solicitud POST /usuarios/nuevo");
    //Implementar código para crear usuario en la BD
    console.log("Usuario nuevo: ", req.body);
    res.send("ok usuario creado");
    //ok o no ok
    const datosUsuario = req.body;
    console.log("llaves: ", object.keys(datosUsuario));
    try{
        if (
            object.keys(datosUsuario).includes("id")&&
            object.keys(datosUsuario).includes("nombre")&&
            object.keys(datosUsuario).includes("rol")&&
            object.keys(datosUsuario).includes("estado")
        ){
            res.sendStatus(200);//todo ok
        }else {
            res.sendStatus(500);// no ok
        }
    } catch {
    res.sendStatus(500);// no ok
    }
    });

/*PRENDER EL SERVIDOR*/
app.listen(5000, () =>{
    console.log("Escuchando puerto 5000")
});

/*----------*/





