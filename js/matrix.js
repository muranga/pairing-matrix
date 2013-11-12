var Matrix= function(){

    this.table ={};	
    this.parsePoint= function(leader,latter){
        if (!(leader in this.table))
        {
            data ={};
            data[latter]=1
                this.table[leader]=[data] 
        }else{
            var searchResult = _.find(this.table[leader], function(item){ return latter in item; });
            if (searchResult){
                var selectedIndex = _.indexOf(this.table[leader], searchResult); 
                searchResult[latter] =  searchResult[latter]+1;
                this.table[leader][selectedIndex] = searchResult;
            }else{
                data ={};
                data[latter]=1;
                this.table[leader].push(data); 
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
