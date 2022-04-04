import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  ['3gce7612sT3pTWtAYp5xcU2fjEfEX1U7tEFHyoftbKD5', { name: 'dRafflenet #1' }],
  [
    '3u7t4uGkMP1VW5obT78rgk74zdATTuNuy6BWPfRucLfj',
    {
      name: 'dRaffle for the win',
      alternatePurchaseMints: [
        new PublicKey('72UgZ7avdJZBbv3wR7hbWcFy6dyHHNAoJw7CimGA55Zh'),
      ],
    },
  ],
  [
    '2mrwjEz67DXTWKaVPjWwkwVPtGRWyKrTeyK5VzintsC5',
    { name: 'dRaffle with a loooooooooooooooong name' },
  ],
  [
    '9FoUjfUpWwhHYaGKM9G5eYab7qow3oWqdo2G5Ehj3h5L',
    {
      name: 'Oh my dRaffle',
      overviewImageUri: '/resources/001-mainnet-launch.gif',
      alternatePurchaseMints: [
        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    '3gce7612sT3pTWtAYp5xcU2fjEfEX1U7tEFHyoftbKD5',
    {
      name: 'DADBOD NFT',
      // overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [
    '2QjkshNu3mrcCnriekTpppa3PFwnAR9Yf7v5vc54m2Yh',
    {
      name: 'First SOL raffle',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    '8aEm1MoDqkYT5vCB21jC6aMMcMbdQJgmHpyBbtHDfUjU',
    {
      name: 'Anti Artist Club',
      overviewImageUri: '/resources/aartist-raffle-overview.gif',
    },
  ],
  [
    '2ziwAj4awgvNyn8ywwjkBRkBsmv259u9vVyEdrGYTb54',
    {
      name: 'More SOL',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    'EgHys3WPcM5WRpKqVHs1REfK6Npzq9sJ7dZPFPzQy2xG',
    {
      name: 'Triple SOL',
      overviewImageUri: '/resources/solana-logo-x3.gif',
    },
  ],
  [
    'CjzFZfrMW4D1jZVm5upCobRi96UYnQTk5cescSt12rhV',
    {
      name: 'SAMO raffle',
      overviewImageUri: '/resources/samo-x3.gif',
    },
  ],
  [
    'EZtBKgWq66KT4jRKtd4VT3LWh3mVC4pwcCsqLzKas63G',
    {
      name: 'BitBoat raffle',
      overviewImageUri: '/resources/bitboat-raffle.gif',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING
  ? testWhitelist
  : prodWhitelist;
