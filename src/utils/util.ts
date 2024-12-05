/**
 * All your utils should stay here
 * Your util function should be pure!
 * i.e they should accept some argument, and then return some result without any side-effect
 * Further, they are not allowed to call any other functions
 */

// Modules
import { NextFunction, Request, Response } from 'express';
import { randomInt } from 'crypto';

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

/**
 * Wrap your function in an async try-catch block.
 * @param {Function} controllerFunction
 * @returns
 */
export const asyncWrapper = (controllerFunction: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controllerFunction(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

/**
 * Generates a unique 7-digit number for user_id.
 * @returns A 7-digit unique number as a string.
 */
export const generateUniqueUserId = (): string => {
  const number = randomInt(1000000, 10000000).toString();
  const isPattern = /^(\d)\1{6}$/.test(number);
  return isPattern ? generateUniqueUserId() : number;
};
