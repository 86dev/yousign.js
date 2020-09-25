class Tools {
	/**
	 * Check if an item has a property
	 * @param item Item to check
	 * @param property Property name
	 * @see https://ultimatecourses.com/blog/methods-to-determine-if-an-object-has-a-given-property#Gotchas-2
	 */
	public hasProperty(item: object, property: string): boolean {
		return Object.prototype.hasOwnProperty.call(item, property)
	}
	/**
	 * Extend an item existing properties
	 * @param item Item to extend
	 * @param sources Source objects used to extend item
	 */
	public extendOwn(item: object, ...sources: object[]) {
		const properties = Object.getOwnPropertyNames(item)
		sources.forEach((source) => {
			properties.forEach((property) => {
				if (this.hasProperty(source, property)) {
					item[property] = source[property]
				}
			})
		})
	}
	/**
	 * Check if an object or array is empty (no properties or no items, but not empty properties).
	 * @param item Item to check
	 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_isempty
	 */
	public isEmpty(item: any): boolean {
		return [Object, Array].includes((item || {}).constructor) && !Object.entries((item || {})).length
	}
	/**
	 * Pick only given properties in an object
	 * @param item Item to pick from
	 * @param properties Properties' names to pick
	 * @see https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_pick
	 */
	public pick(item: object, ...properties: string[]): object {
		return properties.reduce((result, property) => {
			if (item[property]) {
				result[property] = item[property]
			}
			return result
		}, {})
	}
	/**
	 * Check if is array
	 * @param item Item to check
	 */
	public isArray(item: any): boolean {
		return Array.isArray(item)
	}
}

export default new Tools()
