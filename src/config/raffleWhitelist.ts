import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
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
  ]
   
]);

export const RAFFLES_WHITELIST = prodWhitelist;
