import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [ 
    '5a4VngLuzP6AV6C1ndvEcrAw2GgwZQdxdPFi8McqjjV5',
    {
      name: 'Solminator 237',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'HAWBikaGUWw7trXan6MJCD2yxheygLAopC3nW8dHVNr9',
    {
      name: 'Soul of Hidama #232',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '86JqdpnZwn9qP8Qft44aD5a2onDAzDoLeM4frhjTdFAi',
    {
      name: 'Cheetah Coalition #1534',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'Dmectrd4SXZq7BnyBzB22qxiFvVUb6VgDyDAvKbBeztc',
    {
      name: 'Flavor Flamez #3140',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
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
