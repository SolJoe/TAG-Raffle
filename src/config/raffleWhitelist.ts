import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [ 
    'qUosZbko98T7jkd1XuG66uyhNjHHTUxVu6hq74V1tdM',
    {
      name: 'SMU #2199',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '41ujFNJ5QCGdkgVtGtYMne3MSv19iLR9cyHko7YJ7pJK',
    {
      name: 'Miners of Mars #2521',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'H6aDpAbkfNZZZ3TkPhe8crg64MMnMh2DzxRDWcds4reb',
    {
      name: 'Solana Hills #1465',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '5oQqs4nheYLLYt5tv5DnmezN768fRXjFWKCWbjxkmwmB',
    {
      name: 'Serum Surfers #2956',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ]
   
]);

export const RAFFLES_WHITELIST = prodWhitelist;
