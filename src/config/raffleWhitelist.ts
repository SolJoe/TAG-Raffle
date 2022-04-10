import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [ 
    '3gce7612sT3pTWtAYp5xcU2fjEfEX1U7tEFHyoftbKD5',
    {
      name: 'DADBOD NFT',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'D4iojpC3Dz7iLaGb4fxRCkLdgftBLbgMStoX9qoCucLE',
    {
      name: 'NFT Raffle',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '9aDZyjaw7yJ5UEUEsT7iSg9KMkd6ixnbrzM4Ya38BagL',
    {
      name: 'NFT Raffle Test',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ] 
]);

export const RAFFLES_WHITELIST = prodWhitelist;
