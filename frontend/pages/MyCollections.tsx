import { Link, useNavigate } from "react-router-dom";
import { GetCollectionDataResponse } from "@aptos-labs/ts-sdk";
// Internal components
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LaunchpadHeader } from "@/components/LaunchpadHeader";
import { Image } from "@/components/ui/image";
// Internal hooks
import { useGetCollections } from "@/hooks/useGetCollections";
// Internal constants
import { IS_PROD, NETWORK } from "@/constants";

export function MyCollections() {
  const collections: Array<GetCollectionDataResponse> = useGetCollections();

  // If we are in Production mode, redirect to the mint page
  const navigate = useNavigate();
  if (IS_PROD) navigate("/", { replace: true });

  const handleMintClick = async (collectionId: string) => {
    const url = `http://localhost:3000/mint/${collectionId}`;
    try {
      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const jsonResponse = await response.json();
      console.log(jsonResponse); // Log the response from the server
    } catch (error) {
      console.error("Error updating collection address:", error);
    }
  };

  return (
    <>
      <LaunchpadHeader title="My Collections" />
      <Table className="max-w-screen-xl mx-auto">
        {!collections.length && (
          <TableCaption>A list of the collections created under the current contract.</TableCaption>
        )}
        <TableHeader>
          <TableRow>
            <TableHead>Collection</TableHead>
            <TableHead>Collection Address</TableHead>
            <TableHead>Minted NFTs</TableHead>
            <TableHead>Max Supply</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {collections.length > 0 &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            collections.map((collection: any) => {
              return (
                <TableRow key={collection?.collection_id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Image
                        src={collection?.cdn_asset_uris?.cdn_image_uri ?? ""}
                        rounded
                        className="w-10 h-10 bg-gray-100 shrink-0"
                      />
                      <Link to={`/mint/${collection?.collection_id}`} onClick={() => handleMintClick(collection?.collection_id)}>
                        <span>{collection?.collection_name}</span>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link
                      to={`https://explorer.aptoslabs.com/object/${collection?.collection_id}?network=${NETWORK}`}
                      target="_blank"
                      style={{ textDecoration: "underline" }}
                    >
                      {collection?.collection_id}
                    </Link>
                  </TableCell>
                  <TableCell>{collection?.total_minted_v2}</TableCell>
                  <TableCell>{collection?.max_supply}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </>
  );
}
