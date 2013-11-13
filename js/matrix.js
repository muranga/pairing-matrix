var Matrix = function() {

	this.table = [];
	this.searchRowForItem = function(row, itemName) {
		var result = _.find(row,
			function(item) {
				return item.key === itemName
			});
		return result;
	}
	this.parsePoint = function(leader, latter) {
		var intable = this.searchRowForItem(this.table, leader);
		if (intable == undefined) {
			this.table.push({
				"key": leader,
				value: [{
					"key": latter,
					value: 1
				}]
			})
		} else {
			var searchResult = this.searchRowForItem(intable.value, latter);

			if (searchResult != undefined) {
				var selectedIndex = _.indexOf(intable.value, searchResult);
				searchResult["value"] = searchResult["value"] + 1;
				intable.value[selectedIndex] = searchResult;
			} else {
				intable.value.push({
					"key": latter,
					value: 1
				});
			}
		}
	};
	this.addDataPoint = function() {
		var first = arguments[0];
		var second = arguments[1];

		this.parsePoint(first, second);
		this.parsePoint(second, first);

		if (arguments.length == 3) {
			var third = arguments[2];
			this.parsePoint(third, first);
			this.parsePoint(first, third);
			this.parsePoint(third, second);
			this.parsePoint(second, third);

		}
	};
	this.parseArray = function(args) {
		this.addDataPoint.apply(this, args);
	};
	this.toArray = function() {
		var output = [];
		var self = this;
		row = this.getKeys();

		row.unshift("")

		output.push(row)

		_.each(this.getKeys(), function(item) {
			row = []
			row.push(item)
			_.each(self.getKeys(), function(key) {
				valuesForKey = self.searchRowForItem(self.table, item);
				itemForKey = self.searchRowForItem(valuesForKey["value"], key);
				if (itemForKey == undefined) {
					row.push("");
				}else{
					row.push(itemForKey["value"]);
				}
			});
			output.push(row)
		});
		
		return output;
	};
	this.getKeys = function() {
		return _.map(this.table, function(num, key) {
			return num["key"];
		});
	}


};
