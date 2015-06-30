module.exports = {
	/*
	 * Filters and returns only numbers from a given array
	 * @param {array} the array to be filtered
	 * @returns {array}
	 */
	filterNumbers: function(arr) {
		return arr.filter(function(val) {
			return (typeof val === 'number');
		});
	},

	/*
	 * Calculates GCD of two numbers
	 * @param {number, number} the numbers whose GCD is to be calculated
	 * @returns {number}
	 */
	gcd: function(a, b) {
		if (b === 0) {
			return a;
		}
		return this.gcd(b, a % b);
	}
}