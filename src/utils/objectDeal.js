/**
	对象处理 
**/

'use strict';

export default {
	objectToArray(obj, ...itemKeep) {
		const array = [];
		
		for (let {key, value} of obj) {
			array.push({
				[ itemKeep[0] ]: key,
				[ itemKeep[1] ]: value
			}); 	
		}

		return array;
	}
};
