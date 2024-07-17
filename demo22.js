const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3020;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://23010101628:NHLHWFts97u5I6e0@cluster0.i4z3wkc.mongodb.net/payment?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("connection!!!")
    // const db = mongoose.connection;


    // Define Rent Payment Schema
    const schema = mongoose.Schema({
        paymentid: String,
        tenantname: String,
        propertyaddress: String,
        rentamount: String,
        paymentdate: String
    }, { versionKey: false });

    const RentPayment = mongoose.model('Payment', schema);
    app.use(express.json());
    // Get all rent payments
    app.get('/', async (req, res) => {
        try {
            const rentPayments = await RentPayment.find();
            res.json(rentPayments);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    // Get a specific rent payment by paymentid
    app.get('/api/rentPayments/:paymentid', async (req, res) => {
        try {
            const rentPayment = await RentPayment.findOne({ paymentid: req.params.paymentid });
            if (rentPayment) {
                res.json(rentPayment);
            } else {
                res.status(404).json({ error: 'Rent payment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    // Add a new rent payment
    app.post('/api/rentPayments', async (req, res) => {
        const result = await RentPayment.create(req.body)
        res.json(result);
    });

    // Update a rent payment by paymentid
    app.put('/api/rentPayments/:paymentid', async (req, res) => {
        try {
            const updatedRentPayment = await RentPayment.findOneAndUpdate(
                { paymentid: req.params.paymentid },
                req.body,
                { new: true }
            );
            if (updatedRentPayment) {
                res.json(updatedRentPayment);
            } else {
                res.status(404).json({ error: 'Rent payment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    // Delete a rent payment by paymentid
    app.delete('/api/rentPayments/:paymentid', async (req, res) => {
        try {
            const deletedRentPayment = await RentPayment.findOneAndDelete({ paymentid: req.params.paymentid });
            if (deletedRentPayment) {
                res.json(deletedRentPayment);
            } else {
                res.status(404).json({ error: 'Rent payment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    // Start the server
    app.listen(3000, () => {
        console.log("Server Started:3000")
    })
});