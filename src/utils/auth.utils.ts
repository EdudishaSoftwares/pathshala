import { randomInt } from 'crypto';

/**
 * Generates a unique 7-digit number for user_id.
 * @returns A 7-digit unique number as a string.
 */
export const generateUniqueUserId = (): string => {
  const number = randomInt(1000000, 10000000).toString();
  const isPattern = /^(\d)\1{6}$/.test(number);
  return isPattern ? generateUniqueUserId() : number;
};
