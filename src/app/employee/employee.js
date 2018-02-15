"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(_fname, _lname, _mname, _age, _salary, gender) {
        this._fname = _fname;
        this._lname = _lname;
        this._mname = _mname;
        this._age = _age;
        this._salary = _salary;
    }
    Object.defineProperty(Employee.prototype, "fname", {
        get: function () {
            return this._fname;
        },
        set: function (fname) {
            this._fname = fname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lname", {
        get: function () {
            return this._lname;
        },
        set: function (lname) {
            this._fname = lname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "mname", {
        get: function () {
            return this._mname;
        },
        set: function (mname) {
            this._mname = mname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (salary) {
            this._salary = salary;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
