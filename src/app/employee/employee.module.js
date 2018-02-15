"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var employee_list_component_1 = require("./employee-list/employee-list.component");
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [employee_list_component_1.EmployeeListComponent]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
var Employee = /** @class */ (function () {
    function Employee(_fname, _lname, _mname, _age, _salary) {
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
var Address = /** @class */ (function () {
    function Address(_city, _state, _street, _zipcode) {
        this._city = _city;
        this._state = _state;
        this._street = _street;
        this._zipcode = _zipcode;
    }
    Object.defineProperty(Address.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (city) {
            this._city = city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "zipcode", {
        get: function () {
            return this._zipcode;
        },
        set: function (zipcode) {
            this._zipcode = zipcode;
        },
        enumerable: true,
        configurable: true
    });
    return Address;
}());
exports.Address = Address;
