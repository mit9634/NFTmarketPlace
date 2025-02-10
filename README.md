## Aptos Dapp NFT Ticket Platform

The Project is a Ticket Buying/Selling platform that solves many issues in traditional web2 ticket booking platforms
like, fake tickets, ticket reselling, blackmarketing, etc.
The project achieve this by creating every ticket as a NFT that can be traceble by anyone in the world.

## running the project

_this is a core DAPP, optional centralised backend is used only to serve smooth asset generation_

### terminal 1
pip instal flask_cors  
cd imageToAssetsAPI  
python imageToAsset.py  

### terminal 2
npm install typescript  
cd UpdateEnvVariables  
tsc index.ts  
node index.ts  
npm install  

### terminal 3
npm install  
npm run dev  

make a .env file in root dir

## resources and media

docs :-
https://aptos.dev/en/build/create-aptos-dapp/templates/nft-minting-dapp  
https://aptos.dev/en/build/smart-contracts/digital-asset#using-the-digital-asset-standard
