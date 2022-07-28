import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [ 
    '3tCHDtHFapaJrTapKqEWH5m9oDddTkLVugUpUkewnLG5',
    {
      name: 'DOJO DEGEN #1441',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'ES144xt97vciaDrXVZU3SffvEBRBKqU7h8bg6wSbCgYB',
    {
      name: 'TFF #5570',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '5MGY4NU543ysQvfigumXAWuZQUqK6B1mett4i91oM62q',
    {
      name: 'Degen Fat Cat #16313',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'Crzjbzus9zMfex7V8BcdcqtMt3BRSNeAvryVHbuwWKaU',
    {
      name: 'Froots #4411',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],

  [ 
    '3Ma2tJ1SMsdrA2w6bBUiNMMdDVDwdgGSyNQUTA5FV44u',
    {
      name: 'AI Degen # 174',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'CfMwgxhQ8P6bhNhWYT82z8hgyDQqTnKRP1VzR9puWkeU',
    {
      name: 'Liberty Square #3802 & #5782',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '87wijZwsBBo4zPqDUSPLCKFr1orgqzAVqxzGJ3PVXJ2K',
    {
      name: 'Jelly Rascals #5073',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],

  [ 
    '2JGioiuGb185vY9irKwHnqeaF11Uf7qtgdVy8KqWdB4V',
    {
      name: 'Trippin Ape Tribe #1089',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
 
  [ 
    '4TF18Re1RMrv3dW7j8SYriLmUg9D1rVqv34w5g1Lks7S',
    {
      name: 'Gothic Degens #1414',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ]
  
   
]);

export const RAFFLES_WHITELIST = prodWhitelist;
