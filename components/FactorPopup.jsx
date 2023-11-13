import { Button } from "./ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"



const FactorPopup = ({title, bullets}) => {
  return(
    <Dialog>
      <DialogTrigger asChild><Button variant="outline">Learn More</Button></DialogTrigger>
       <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {bullets?.length > 0 && bullets.map((bullet, index) => {
        return(
          <p key={index}>{bullet}</p>
        )
      })}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FactorPopup