import { LabeledInput } from "@/components/ui/labeled-input";
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { LaunchpadHeader } from "@/components/LaunchpadHeader.tsx";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
export const AddUserDetails = () => {
  const [image, setImage] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [eventName, setEventName] = useState("");
  const navigate = useNavigate();
  // Handle file change

  const handleFormSubmit = async(e) => {
          e.preventDefault();
          console.log("Hello World");
          console.log("iamgeon: ", image)
          const url = "http://localhost:5000/image-to-asset"
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body : JSON.stringify({image, name: eventName})
          })
          navigate('/create-collection')
          // return JSON.stringify(response)
        }
  return (
    <>
      <LaunchpadHeader title="User Details" />
      <form
        method="POST"
        onSubmit={handleFormSubmit}
      >
        <Card>
          <CardContent style={{"margin": "2vh 0 2vh 0"}}>
            <div>
               <LabeledInput
          id="image"
          required
          type={"text"}
          label="NFT Image"
          tooltip="Enter the url of your image"
          onChange={(e) => {
            console.log(image);
            setImage(e.target.value); // Update the wallet address state
          }}
          value={image}
        />

           </div>

          </CardContent>
        </Card>

        <Card>
          <CardContent style={{"margin": "2vh 0 2vh 0"}}>
        <LabeledInput
          id="event-name"
          required
          type={"text"}
          label="Event Name"
          tooltip="Enter the name of your event"
          onChange={(e) => {
            console.log(eventName);
            setEventName(e.target.value); // Update the wallet address state
          }}
          value={eventName}
        />

          </CardContent>
        </Card>

        <Card>
          <CardContent style={{"margin": "2vh 0 2vh 0"}}>
        <LabeledInput
          id="user-details"
          required
          type={"text"}
          label="Wallet Address"
          tooltip="Enter your wallet address"
          onChange={(e) => {
            console.log(walletAddress);
            setWalletAddress(e.target.value); // Update the wallet address state
          }}
          value={walletAddress}
        />
        <Button type={"submit"} style={{"margin": "2vh 0 2vh 0"}}>Submit</Button>

          </CardContent>
        </Card>


      </form>
    </>
  );
};
