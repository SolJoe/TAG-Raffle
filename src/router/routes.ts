const adminNs = '/admin_panel';

const adminRoutes = {
  HOME: `${adminNs}/`,
  RAFFLES: `${adminNs}/raffles`,
};

const routes = {
  HOME: '/',
  COIN_FLIP: 'https://tag-coinflip.vercel.app',
  RAFFLES: '/raffles',
  STAKE: '/stake',
  TOOLS: '/tools',
  ADMIN: adminRoutes,
};

export { routes };
