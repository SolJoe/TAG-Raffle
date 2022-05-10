import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [ 
    '8eSwb3SQdqvEXBdqHZQpDhabXi4j1sK7JBaG43Cymprt',
    {
      name: 'Raffle Booster GiveAway',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '7nqfBF61QrS9gk36meXJkgZ4pXA6b2HqupitF2aRtz8M',
    {
      name: 'Yoked Yetis 3 WL Spots',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'CbMBUCLkwiQUMv8M11JaP1QHRTrW7vC13SjgSNEvsuWQ',
    {
      name: 'Droid Capital 3 Final WL',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '41ujFNJ5QCGdkgVtGtYMne3MSv19iLR9cyHko7YJ7pJK',
    {
      name: 'Miners of Mars #2521',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ]
   
]);

export const RAFFLES_WHITELIST = prodWhitelist;
