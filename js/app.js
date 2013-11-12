var view;
window.matrix = new Matrix();
var ViewModel = function() {
    this.commits = ko.observableArray([]);
    this.pairs = ko.observableArray([]);
    this.names = ko.observableArray([]);
    this.matrix = ko.observable("JJJJJ");
    this.username = ko.observable("unicefuganda");
    this.repository = ko.observable("ureport");

};
var member = function(name) {
    this.key = name;
};
view = new ViewModel();
var namesDump = Array();
var commitModel = function(commit) {
    this.data = commit;
    this.message = "";
    if (commit.commit.message) {
        this.message = commit.commit.message;
    }
    this.pairs = this.message.match(/\[(.*)\]/)[1];
    var individuals = this.pairs.split(",");
    var cleanedNames = [];
    _.each(individuals,
    function(individual) {
        cleanedName = $.trim(individual);
        cleanedNames.push(cleanedName);
    });
    window.matrix.parseArray(cleanedNames);
    view.matrix(window.matrix.table);
};
ko.applyBindings(view);

jQuery(document).ready(function() {
    getCommits();

});
var loadData = function(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].commit.message.substring(0, "[".length) === "[") {
            view.commits.push(commitModel(data[i]));
        }
    }
};
var getCommits = function() {
    username = view.username();
    repository = view.repository();
    jQuery.getJSON("https://api.github.com/repos/" + username + "/" + repository + "/commits?since=2012-11-01&page=1&per_page=100",
    loadData);

}
view.matrix.subscribe(function(data) {
    plot(data);

});
view.username.subscribe(function(data) {
    window.matrix.table = [];
    view.matrix(window.matrix.table);
    getCommits();

});
view.repository.subscribe(function(data) {
    window.matrix.table = [];
    view.matrix(window.matrix.table);
    getCommits();

});
var plot = function(data) {

    $(".matrix").html(" ");
    var rows = d3.select(".matrix").append('table').selectAll("tr")
    .data(data)
    .enter().append("tr");

    rows.append("td").text(function(d) {
        return d.key;
    });

    var lines = rows.selectAll("tr")
    .data(function(d) {
        return d.value
    });

    lines.enter().append("td")
    .text(function(d, i) {
        return d.key + " -- " + d.value;
    });

    lines.exit().remove();
}

