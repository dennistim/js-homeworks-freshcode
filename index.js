'use strict';

const ADULT_AGE= 18;

/**
 *
 * @param {number} n
 * @return {boolean}
 */
function isAdult(n){

    return n >= ADULT_AGE;

}

/**
 *
 * @param {number} a
 * @param {number} b
 * @return {boolean}
 */
function checkMultiplicity(a, b) {

    return a % b === 0;

}