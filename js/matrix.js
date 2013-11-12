var Matrix= function(){

    this.table =[];	
    this.parsePoint= function(leader,latter){
     
		var intable = _.find(this.table, function(item){ return item.key === leader; });
		console.log(intable);
		if(!intable)
        {
				this.table.push({"key":leader,value:[{"key":latter,value:1}]})
        }else{
            var searchResult = _.find(intable.value, function(item){ return item.key === latter });
            if (searchResult){
                var selectedIndex = _.indexOf(intable.value, searchResult); 
                searchResult["value"] =  searchResult["value"]+1;
                intable.value[selectedIndex] = searchResult;
            }else{
				this.table.push({"key":leader,value:[{"key":latter,value:1}]})
            }
        }  
    };
    this.addDataPoint= function(){
        var first = arguments[0];
        var second = arguments[1];

        this.parsePoint(first,second);
        this.parsePoint(second,first);

        if (arguments.length ==3){
            var third = arguments[2];
            this.parsePoint(third,first);
            this.parsePoint(first,third);
            this.parsePoint(third,second);
            this.parsePoint(second,third);

        }
    };
    this.parseArray= function(args){
        this.addDataPoint.apply(this,args);
    };
	 
	
};
