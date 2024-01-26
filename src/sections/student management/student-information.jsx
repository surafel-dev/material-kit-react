import {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Iconify from 'src/components/iconify';
import { formDialog } from 'src/layouts/dashboard/common/from-dialog';

export default function studentInformation() {


      const [openDialog, setOpenDialog] = useState(false);

   return (
    
           <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />} onClick={() => setOpenDialog(true)}>
          New student
        </Button>
      </Stack>
      
       <formDialog
         openDialog = {openDialog}
         setOpenDialog = {setOpenDialog}

        />

        </Container>
);

};

