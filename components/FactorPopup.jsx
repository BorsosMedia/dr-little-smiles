import Image from "next/image";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const FactorPopup = ({ image, alt, width, height, title, bullets }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="grey-button">
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[90vw] overflow-y-auto bg-light-grey scrollbar-thin scrollbar-thumb-rounded-full">
        <DialogHeader className="flex-center flex-col">
          <Image src={image} alt={alt} width={width} height={height} />
          <DialogTitle className="subheadline blue py-4">{title}</DialogTitle>
        </DialogHeader>
        {bullets?.length > 0 &&
          bullets.map((bullet, index) => {
            return <p key={index}>{bullet}</p>;
          })}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button variant="outline" className="grey-button">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FactorPopup;
