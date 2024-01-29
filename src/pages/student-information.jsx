import { Helmet } from 'react-helmet-async';

import { studentInformation } from 'src/sections/student management';

// ----------------------------------------------------------------------

export default function StudentInfoPage() {
  return (
    <>
      <Helmet>
        <title> Student information </title>
      </Helmet>

      <studentInformation />
    </>
  );
}