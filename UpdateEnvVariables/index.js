var express = require('express');
var fs = require('fs');
var dotenv = require('dotenv');
var path = require('path');
var cors = require('cors');
var envPath = path.join(__dirname, '../.env');
dotenv.config({ path: envPath });
var app = express();
app.use(express.json());
app.use(cors());
app.post('/update-wallet', function (req, res) {
    var newWalletAddress = req.body.newWalletAddress;
    if (!newWalletAddress) {
        return res.status(400).send({ error: 'Invalid wallet address' });
    }
    try {
        var envContent = fs.readFileSync(envPath, 'utf8');
        var updatedEnv = envContent.replace(/VITE_COLLECTION_CREATOR_ADDRESS=.*/, "VITE_COLLECTION_CREATOR_ADDRESS=\"".concat(newWalletAddress, "\""));
        fs.writeFileSync(envPath, updatedEnv);
        dotenv.config({ path: envPath });
        res.status(200).send({ message: 'Wallet address updated successfully', newWalletAddress: newWalletAddress });
    }
    catch (error) {
        console.error('Error accessing .env file:', error);
        res.status(500).send({ error: 'Error updating wallet address' });
    }
});
app.get("/mint/:collectionID", function (req, res) {
    var collectionID = req.params.collectionID;
    if (!collectionID) {
        return res.status(400).send({ error: 'Invalid wallet address' });
    }
    try {
        var envContent = fs.readFileSync(envPath, 'utf8');
        var updatedEnv = envContent.replace(/VITE_COLLECTION_ADDRESS=.*/, "VITE_COLLECTION_ADDRESS=\"".concat(collectionID, "\""));
        fs.writeFileSync(envPath, updatedEnv);
        dotenv.config({ path: envPath });
        res.status(200).send({ message: 'Wallet address updated successfully' });
    }
    catch (error) {
        console.error('Error accessing .env file:', error);
        res.status(500).send({ error: 'Error updating wallet address' });
    }
});
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
