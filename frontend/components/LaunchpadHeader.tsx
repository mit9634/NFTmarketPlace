import { Link } from "react-router-dom";
import { FC } from "react";

import { WalletSelector } from "@/components/WalletSelector";
import { buttonVariants } from "@/components/ui/button";

interface LaunchpadHeaderProps {
  title: string;
}

export const LaunchpadHeader: FC<LaunchpadHeaderProps> = ({ title }) => {

  return (
    <div className="flex items-center justify-between py-2 px-4 mx-auto w-full max-w-screen-xl flex-wrap">
      <h2 className="display">{title}</h2>

      <div className="flex gap-2 items-center">
        <Link className={buttonVariants({ variant: "link" })} to={"/"}>
          Home
        </Link>
        <Link className={buttonVariants({ variant: "link" })} to={"/my-collections"}>
            Browse Events
          </Link>
          <Link className={buttonVariants({ variant: "link" })} to={"/create-collection"}>
            Add Event
          </Link>
          <Link className={buttonVariants({ variant: "link" })} to={"/add-user-details"}>
            Asset Generation
          </Link>

        <WalletSelector />
      </div>
    </div>
  );
};
