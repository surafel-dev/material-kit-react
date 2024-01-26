import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Student management',
    icon: icon('ic_analytics'),
    subItems: [
      {
        title: 'Student information',
        
        icon: icon('ic_analytics'),
      },
      {
        title: 'Attendance',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Academic performance',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Disciplinary records',
        icon: icon('ic_analytics'),
      },
    ],
  },
    {
    title: 'Employee management',
    icon: icon('ic_analytics'),
    subItems: [
      {
        title: ' Employee information',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Attendance',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Salary management',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Performance review',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Disciplinary records',
        icon: icon('ic_analytics'),
      },
    ],
  },
    {
    title: 'Library management',
    icon: icon('ic_analytics'),
    subItems: [
      {
        title: 'Book catalog',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Library inventory',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Report & Analytics',
        icon: icon('ic_analytics'),
      },
      {
        title: 'History',
        icon: icon('ic_analytics'),
      },
    ],
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
