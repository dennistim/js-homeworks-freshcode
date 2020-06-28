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

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean}
 */
function isTriangle(a, b, c) {

    return a <= b + c && b <= a + c && c <= a + b;

}