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

const FactorPopup = ({ title, bullets }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full border-button-grey px-20 text-button-grey"
        >
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-dark-grey text-black">
        <DialogHeader>
          <DialogTitle className="subheadline-blue">{title}</DialogTitle>
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
