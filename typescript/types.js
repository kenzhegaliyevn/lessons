var Utility;
(function (Utility) {
    var usefull = /** @class */ (function () {
        function usefull() {
        }
        usefull.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return usefull;
    }());
    Utility.usefull = usefull;
})(Utility || (Utility = {}));
