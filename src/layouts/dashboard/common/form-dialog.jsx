import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';


export default function FormDialog(props) {
       
       const { title, children, openDialog, setOpenDialog } = props;
 
     return (
              <Dialog open={openDialog}>
                <DialogTitle>
                  title
                </DialogTitle>
                <DialogContent>
                  children
                </DialogContent>
              </Dialog>
  );

};

 FormDialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  openDialog: PropTypes.bool.isRequired,
  setOpenDialog: PropTypes.func.isRequired,
};