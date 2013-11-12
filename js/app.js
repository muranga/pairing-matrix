var view;
window.matrix = new Matrix();
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
    this.pic ="http://placehold.it/50x50";
    this.name = "author";
    if (commit.author.avatar_url){
        this.pic =commit.author.avatar_url; 
    }
    if (commit.author.name){
        this.name = commit.author.name;
    }
    this.message ="";
    if(commit.commit.message){
        this.message = commit.commit.message;
    }
    this.pairs =this.message.match(/\[(.*)\]/)[1];
    var individuals = this.pairs.split(",");
    var cleanedNames = [];
    _.each(individuals, function(individual){
        cleanedName = $.trim(individual);
        cleanedNames.push(cleanedName);
    });
    window.matrix.parseArray(cleanedNames);
};
ko.applyBindings(view);
jQuery(document).ready(function(){

        jQuery.getJSON("https://api.github.com/repos/unicefuganda/ureport/commits?since=2012-11-01&page=1&per_page=100",function(data){
            console.log(data.length," commits");
            for (var i=0;i<data.length;i++){

                if(data[i].commit.message.substring(0, "[".length) === "["){
                    view.commits.push(commitModel(data[i]));

                }
            }
        });


});

