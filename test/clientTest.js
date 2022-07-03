const axios = require('axios');
const { use } = require('chai');
const chai = require('chai');
const { DESCRIBE } = require('sequelize');
const { assert } = chai;
const { Client, Account } = require('../src/db/models');


describe('Client Insertion in DB', function () {


    before('Setting up Database - Insert Client', async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:5555/clients',
            data: {
                name: "Fede",
                surname: "Medel",
                dni: "42222219"
            },
        });

        console.log('TERMINOOOO EL BEFOREEEE')
    }
    );

    it('Client should have account', function (done) {
        //let getClient = await axios.get('http://localhost:5555/clients/' + 42222219);
        let getClient = Client.findOne({where: {dni: 42222219}}).then(async function(){
        let getAccount = Account.findOne({where: {clientId: getClient.id }})
            //assert.equal(account.id, getClient.id);
            assert.equal(getAccount.clientId, getClient.id);
            done();
        })
    });


    after('Delete client', async function() {
        let getClient = await Client.findOne({where: {dni: 42222219}})
        await Account.destroy({where:{clientId:getClient.id}})
       await Client.destroy({where:{dni:42222219 }})
    });


});
