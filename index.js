'use strict';

/**
* 17の倍数かどうかを判定する
* @n {number}
*/

function isMultipleOfSeventeen(n) {
	return n % 17 === 0;
}


module.exports = {
	isMultipleOfSeventeen: isMultipleOfSeventeen
}
