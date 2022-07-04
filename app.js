//Importaciones
const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const { randNumber } = require('@ngneat/falso')

//Configuracion de las rutas

//Definir el puerto de escucha
app.listen(process.env.PORT)

const { Client, Account, Movement } = require('./src/db/models');

app.get('/hola', async function(req, res){
    return res.status(201).send('hola')
})


//-------------------------------issue-1--------------------------------------------
app.post('/clients', async function(req, res){
    console.log('entraste al metodo')
    const {name, surname, dni} = req.body;
    console.log(req.body)

    try{
        let client = await Client.findOne({where: { dni:dni } })

        if(client){
            res.status(201).send('Ya existe un cliente con ese dni')
        }else{
            let newClient = await Client.build({
                name: name,
                surname: surname,
                dni: dni,
            });

            newClient.save().then(async function (){
                let client = await Client.findOne({where: { dni:dni}});
                let clientId = client.id;

                let newAccount = Account.build({
                    address: 123456,
                    balance: 0,
                    clientId: clientId
                })

                await newAccount.save();

                res.status(201).send('Cliente Creado');
            })
        }
    }catch(err) {
        res.status(500).send('No se pudo realizar la operacion');
    }
})


//-------------------------------issue-2--------------------------------------------
app.get('/clients/:accountid', async function(req, res) {
    try {
        let accountid = req.params.accountid;
        let account = await Account.findByPk(accountid);
      //  console.log(client)

        if(account){
            let movements = await Movement.findAll({where:{accountId: accountid}})
            let result = movements.slice(0,10)
            return res.status(200).json(result);
        }else{
            res.status(201).send('No existe un account con ese id')
        }


    } catch (error) {
        return res.status(400).json(error.error);
    }

});













//------------------------------------------------------------