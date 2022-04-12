import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [ 
    'HXyu5ANjJ3L7oz21aZcjkKcm6echY17ejSBCVJfj1KV5',
    {
      name: 'Parcl HOA #1512',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '9hYmgzutGhWhHzi4ZN5ep8uB5rESCBfCm5Hce48Cyujk',
    {
      name: 'Undead Apes #2125',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ] 
]);

export const RAFFLES_WHITELIST = prodWhitelist;
