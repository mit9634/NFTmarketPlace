const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors')
const envPath = path.join(__dirname, '../.env');
dotenv.config({ path: envPath });

const app = express();
app.use(express.json());
app.use(cors())

app.post('/update-wallet', (req, res) => {
  const { newWalletAddress } = req.body;

  if (!newWalletAddress) {
    return res.status(400).send({ error: 'Invalid wallet address' });
  }

  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const updatedEnv = envContent.replace(
      /VITE_COLLECTION_CREATOR_ADDRESS=.*/,
      `VITE_COLLECTION_CREATOR_ADDRESS="${newWalletAddress}"`
    );

    fs.writeFileSync(envPath, updatedEnv);
    dotenv.config({ path: envPath });

    res.status(200).send({ message: 'Wallet address updated successfully', newWalletAddress});
  } catch (error) {
    console.error('Error accessing .env file:', error);
    res.status(500).send({ error: 'Error updating wallet address' });
  }
});
app.get(`/mint/:collectionID`, (req, res) => {
  const {collectionID} = req.params

  if (!collectionID) {
    return res.status(400).send({ error: 'Invalid wallet address' });
  }

  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const updatedEnv = envContent.replace(
      /VITE_COLLECTION_ADDRESS=.*/,
      `VITE_COLLECTION_ADDRESS="${collectionID}"`
    );

    fs.writeFileSync(envPath, updatedEnv);
    dotenv.config({ path: envPath });

    res.status(200).send({ message: 'Wallet address updated successfully' });
  } catch (error) {
    console.error('Error accessing .env file:', error);
    res.status(500).send({ error: 'Error updating wallet address' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
