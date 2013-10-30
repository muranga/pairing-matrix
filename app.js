jQuery(document).ready(function(){
    var unicef = new Gh3.User("unicefuganda");
    var ureport = new Gh3.Repository("ureport", unicef);
    ureport.fetch(function(err,msg){ console.log(ureport);});

});
var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);

    this.fullName = ko.computed(function() {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return this.firstName() + " " + this.lastName();
    }, this);
};

ko.applyBindings(new ViewModel("Planet", "Earth"));
