describe("Matrix",
function() {
    var matrix;
    beforeEach(function() {
        matrix = new Matrix();

    });

    describe("searchRowForItem",
    function() {
        it("should find item in array",
        function() {
            var result = matrix.searchRowForItem([{
                "key": "MJ"
            }], "MJ");
            expect(result).toEqual({
                "key": "MJ"
            });
        });

        it("should return undefined for an item in not in the  array",
        function() {
            var result = matrix.searchRowForItem([{
                "key": "JK"
            }], "MJ");
            expect(result).toEqual(undefined);
        });

    });

    describe("addDataPoint",
    function() {
        it("should be able to add a single data point",
        function() {
            matrix.addDataPoint("MJ", "FELIX");
            expect(matrix.table).toEqual(
            [{
                "key": "MJ",
                "value": [{
                    "key": "FELIX",
                    "value": 1
                }]
            },
            {
                "key": "FELIX",
                "value": [{
                    "key": "MJ",
                    "value": 1
                }]
            }]);
        });
        it("should be able to add two data points",
        function() {
            matrix.addDataPoint("MJ", "FELIX");
            matrix.addDataPoint("MJ", "FELIX");
            expect(matrix.table).toEqual(
            [{
                "key": "MJ",
                "value": [{
                    "key": "FELIX",
                    "value": 2
                }]
            },
            {
                "key": "FELIX",
                "value": [{
                    "key": "MJ",
                    "value": 2
                }]
            }]);

        });
        it("should be able to three data points",
        function() {
            matrix.addDataPoint("MJ", "FELIX");
            matrix.addDataPoint("MJ", "FELIX");
            matrix.addDataPoint("MJ", "FELIX");
            expect(matrix.table).toEqual(
            [{
                "key": "MJ",
                "value": [{
                    "key": "FELIX",
                    "value": 3
                }]
            },
            {
                "key": "FELIX",
                "value": [{
                    "key": "MJ",
                    "value": 3
                }]
            }]);

        });
        it("should be able to two different data points",
        function() {
            matrix.addDataPoint("MJ", "FELIX");
            matrix.addDataPoint("MJ", "JS");
            expect(matrix.table).toEqual(

            [{
                "key": "MJ",
                "value": [{
                    "key": "FELIX",
                    "value": 1
                },
                {
                    "key": "JS",
                    "value": 1
                }]
            },
            {
                "key": "FELIX",
                "value": [{
                    "key": "MJ",
                    "value": 1
                }]
            },
            {
                "key": "JS",
                "value": [{
                    "key": "MJ",
                    "value": 1
                }]
            }]);

        });
        it("should be able to enter  three data points",
        function() {
            matrix.addDataPoint("MJ", "FELIX", "JS");
            expect(matrix.table).toEqual(
            [{
                "key": "MJ",
                "value": [
                {
                    "key": "FELIX",
                    "value": 1
                },
                {
                    "key": "JS",
                    "value": 1
                }
                ]
            },
            {
                "key": "FELIX",
                "value": [
                {
                    "key": "MJ",
                    "value": 1
                },
                {
                    "key": "JS",
                    "value": 1
                }
                ]
            },

            {
                "key": "JS",
                "value": [
                {
                    "key": "MJ",
                    "value": 1
                },
                {
                    "key": "FELIX",
                    "value": 1
                }

                ]
            }
            ]
            );
        });

        it("should be able to two sets of  data points",
        function() {
            matrix.addDataPoint("MJ", "FELIX");
            matrix.addDataPoint("FE", "JS");
            expect(matrix.table).toEqual(
            [{
                "key": "MJ",
                "value": [{
                    "key": "FELIX",
                    "value": 1
                }]
            },
            {
                "key": "FELIX",
                "value": [{
                    "key": "MJ",
                    "value": 1
                }]
            },
            {
                "key": "FE",
                "value": [{
                    "key": "JS",
                    "value": 1
                }]
            },
            {
                "key": "JS",
                "value": [{
                    "key": "FE",
                    "value": 1
                }]
            }
            ]
            );


        });

    });


    describe("parseArray",
    function() {

        it("should parse array input ",
        function() {
            matrix.parseArray(["MJ", "FELIX"]);
            expect(matrix.table).toEqual(
            [{
                "key": "MJ",
                "value": [{
                    "key": "FELIX",
                    "value": 1
                }]
            },
            {
                "key": "FELIX",
                "value": [{
                    "key": "MJ",
                    "value": 1
                }]
            }]);

        });
    });







});
