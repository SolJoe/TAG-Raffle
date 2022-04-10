import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [ 
    '7AiszfLM9AG53RoZ3HWsBxbHwyWQ886aJm2UqSAAQbpE',
    {
      name: 'UndeadApes #2125',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ] 
]);

export const RAFFLES_WHITELIST = prodWhitelist;
