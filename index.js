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

/**
 *
 * @param {number} a
 * @param {number} h
 * @return {number}
 */
function rhombus(a, h) {

    return a*h;
}

/**
 *
 * @param {number} r
 * @param {number} h
 * @return {number}
 */
function cylinder(r, h) {

    return 2*3.14*r*(r+h);

}

/**
 *
 * @param {number} a
 * @param {number} h
 * @return {number}
 */
function triangle(a, h) {

    return 1/2*a*h;

}

/**
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function rectangle(a, b) {

    return a*b;

}