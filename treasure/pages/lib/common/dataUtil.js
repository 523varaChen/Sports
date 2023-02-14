const compareCity = function(data, parent_code = null) {
	let res = [];
	let keys = {
		id: 'code',
		pid: 'parent_code',
		children: 'children',
		text: 'name',
		value: 'code'
	};
	let oneItemKeys = {
		text: '',
		value: '',
		children: ''
	};
	let oneItem = {};
	for (let index in data) {
		if (
			(parent_code === null && (!data[index].hasOwnProperty(keys.id) || data[index][keys.pid] ==
				parent_code)) ||
			(data[index].hasOwnProperty(keys.pid) && data[index][keys.pid] == parent_code)
		) {
			oneItem = JSON.parse(JSON.stringify(oneItemKeys));
			oneItem.text = data[index][keys.text];
			oneItem.value = data[index][keys.value];
			oneItem.children = this.compareCity(data, data[index][keys.id]);
			res.push(oneItem);
		}
	}
	return res;
};
const $dataUtil = {
	compareCity
};

export default $dataUtil;
