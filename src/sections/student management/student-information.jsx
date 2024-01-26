import {useState} from 'react';


export default function studentInformation() {


      const [openDialog, setOpenDialog] = useState(true);

   return (
    
           <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button>
      </Stack>
        </Container>

       <formDialog
         openDialog = {openDialog}
         setOpenDialog = {setOpenDialog}
        
        />
);

};

