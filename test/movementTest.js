const axios = require('axios');
const { use } = require('chai');
const chai = require('chai');
const { DESCRIBE } = require('sequelize');
const { assert } = chai;
const { Client, Account } = require('../src/db/models');


describe('There always are <= 10 movements', function (){
    it('Movement test', function (done) {
        axios.get('http://localhost:5555/movements/' + 2).then(function (res){
            let movements = res.data;
            console.log(movements.length)
            let result = movements.length <= 10
            assert.equal(result, true)
            done()
        })



    })
})