import { Helmet } from 'react-helmet-async';

import { ProductsView } from 'src/sections/products/view';

// ----------------------------------------------------------------------

export default function StudentInfoPage() {
  return (
    <>
      <Helmet>
        <title> Student information </title>
      </Helmet>

      <ProductsView />
    </>
  );
}