import {useState} from 'react';


export default function studentInformation() {


      const [openDialog, setOpenDialog] = useState(true);

   return (
    

       <formDialog
         openDialog = {openDialog}
         setOpenDialog = {setOpenDialog}
        
        />
);

};

