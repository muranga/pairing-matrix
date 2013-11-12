var view;
var ViewModel = function() {
    this.commits = ko.observableArray([]);
    this.pairs = ko.observableArray([]);
    this.names = ko.observableArray([]);
};
var member = function(name){
    this.key = name;
};
view = new ViewModel();
var namesDump = Array();
var commitModel = function(commit){
    this.data = commit;
    this.message = commit.commit.message;
    this.pairs =this.message.match(/\[(.*)\]/)[1];
    var individuals = this.pairs.split(",");
    _.each(individuals, function(individual){
        cleanedName = $.trim(individual);
        nameEntered = _.contains(namesDump, cleanedName);
        if(!nameEntered){
            namesDump.push(cleanedName);
            view.names.push(cleanedName);
            view.pairs.push({cleanedName :new member(cleanedName)});
        }else{

        }
    });
};
ko.applyBindings(view);
jQuery(document).ready(function(){
    jQuery.getJSON("https://api.github.com/repos/unicefuganda/ureport/commits?since=2012-11-01",function(data){
        for (var i=0;i<data.length;i++){

            if(data[i].commit.message.substring(0, "[".length) === "["){
                view.commits.push(commitModel(data[i]));

            }
        }
    });
});

