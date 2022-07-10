import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

// const testWhitelist = new Map<string, RaffleMetaData>([
// ]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [ 
    '2JGioiuGb185vY9irKwHnqeaF11Uf7qtgdVy8KqWdB4V',
    {
      name: 'Trippin Ape Tribe #1089',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '78sKeeoGRJxvAn1JnRHtyX2JTFerjTVEtmjj46DqfexU',
    {
      name: 'TAG #977 & #9',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '4TF18Re1RMrv3dW7j8SYriLmUg9D1rVqv34w5g1Lks7S',
    {
      name: 'Gothic Degens #1414',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    'AKoPujv5yAfJqTeMdMeiiNYPYnXFEUeb1bVCeu3xkPKB',
    {
      name: 'Primate #5941',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],

  [ 
    '43WnKe1fUoGy8NeGdozKTa91Cos1bpfrRnPW4vCWUkq4',
    {
      name: 'Cet #4800',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  
  [ 
    '6v28SQvcMoAmwSHy5kwugWLTQWDwyBWBA8qksBiyiH4X',
    {
      name: 'Bohemian #1465',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [ 
    '8MkckjFabdoeLaDBQjjAhrJ8k1Cud3WPSxgsv3ZXsxZh',
    {
      name: 'Bubblegoose Baller #9006',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
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
  ]
  
   
]);

export const RAFFLES_WHITELIST = prodWhitelist;
