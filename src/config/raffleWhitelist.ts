import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [ 
    'dUq8j8zofCfGD8Excn2a8MG2JDsuUGnYfnXU7k25qni',
    {
      name: 'Trippin Ape Tribe #9060',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '8nWmSeVi9HMXQx3LVAW2cMESVTxMDSkHkhsYxK3EMCUc',
    {
      name: 'Primate #3018',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '9AEhEHzvvQf5kLhvLCALkSQEgknV8rvhRxTKmcWTa6ZK',
    {
      name: 'TombStoned & Skull',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '8pUEAK1nEBvxS5oLYQFsQ3ixvqng8KG7Mf4Q6umTcURz',
    {
      name: 'Cubist 3061',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'H9BxJMVW7ScnH9TKhsksTirDeqSiDDSZgDE8ukk5ZAoo',
    {
      name: 'Lizard #2696',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '7msqovNbAxgz8Jq3qQvhcxXLoVzWVJJzKqsLr2WdN4K',
    {
      name: 'Great Goats #8625',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '5EnJfzzBUp9gyow3fXuiMj18v24keAG8w2sZSMjV6CDp',
    {
      name: 'Droid Capital #991',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '2xRwPRuwmfPm19uxJKuAGpVkcxADHaGJ4Nc8aQ3qw1Yy',
    {
      name: 'Noahs Ark #3270',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'D4TE5FU2WuT7Yk3G3pSt1Mtou3Yy7RT1eJtfcwJu1Cof',
    {
      name: 'The Stoned Frogs #7857',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
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
  ]
  
   
]);

export const RAFFLES_WHITELIST = prodWhitelist;
