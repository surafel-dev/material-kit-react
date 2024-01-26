import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';


export default function formDialog(props) {
       
       const { title, children, openDialog, setOpenDialog } = props;
 
     return (
              <Dialog>
                <DialogTitle>
                  {title}
                </DialogTitle>
                <DialogContent>
                  {children}
                </DialogContent>
              </Dialog>
);

};