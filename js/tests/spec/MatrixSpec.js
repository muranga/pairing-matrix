describe("Matrix", function() {
    var matrix;
    beforeEach(function() {
        matrix = new Matrix();

    });

    it("should be able to add a single data point", function() {
        matrix.addDataPoint("MJ","FELIX");
        expect(matrix.table).toEqual(
            {"MJ":[{"FELIX":1}],"FELIX":[{"MJ":1}]});
    });
    it("should be able to add two data points", function() {
        matrix.addDataPoint("MJ","FELIX");
        matrix.addDataPoint("MJ","FELIX");
        expect(matrix.table).toEqual(
            {"MJ":[{"FELIX":2}],"FELIX":[{"MJ":2}]});

    });
    it("should be able to three data points", function() {
        matrix.addDataPoint("MJ","FELIX");
        matrix.addDataPoint("MJ","FELIX");
        matrix.addDataPoint("MJ","FELIX");
        expect(matrix.table).toEqual(
            {"MJ":[{"FELIX":3}],"FELIX":[{"MJ":3}]});

    });
    it("should be able to two different data points", function() {
        matrix.addDataPoint("MJ","FELIX");
        matrix.addDataPoint("MJ","JS");
        expect(matrix.table).toEqual(
            {"MJ":[{"FELIX":1},{"JS":1}],"FELIX":[{"MJ":1}],"JS":[{"MJ":1}]});

    });
    it("should be able to enter  three data points", function() {
        matrix.addDataPoint("MJ","FELIX","JS");
        expect(matrix.table).toEqual(
            {"MJ":[{"FELIX":1},{"JS":1}],"FELIX":[{"MJ":1},{"JS":1}],"JS":[{"MJ":1},{"FELIX":1}]});

    });


    it("should be able to two sets of  data points", function() {
        matrix.addDataPoint("MJ","FELIX");
        matrix.addDataPoint("FE","JS");
        expect(matrix.table).toEqual(
            {"MJ":[{"FELIX":1}],"FELIX":[{"MJ":1}],"FE":[{"JS":1}],"JS":[{"FE":1}]});

    });
    it("should parse array input ",function(){
        matrix.parseArray(["MJ","FELIX"]);
        expect(matrix.table).toEqual(
            {"MJ":[{"FELIX":1}],"FELIX":[{"MJ":1}]});

    });



});
