"use strict";

const express = require("express");
const { covidModel } = require("../models/index.js");

const router = express.Router();

router.get( '/covid', ( req, res ) => {
    covidModel.findAll().then( ( covids ) => {
        res.send( covids );
    } ).catch( ( err ) => {
        console.log( err );
    } );
} );

router.post( '/covid', ( req, res ) => {
    const { country, date } = req.body;
    covidModel.create( { country, date } ).then( ( covid ) => {
        res.send( covid );
    } ).catch( ( err ) => {
        console.log( err );
    } );
} );

router.delete( '/covid/:id', ( req, res ) => {
    const id = req.params.id;
    covidModel.destroy( { where: { id } } ).then( ( covid ) => {
        res.status( 200 ).send( 'Record deleted' );
    } ).catch( ( err ) => {
        console.log( err );
    } );
} );

module.exports = router;
