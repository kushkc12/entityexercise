"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Category = void 0;
var typeorm_1 = require("typeorm");
var product_entity_1 = require("../../product/entities/product.entity");
var tag_entity_1 = require("../../tags/entities/tag.entity");
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Category.prototype, "id");
    __decorate([
        typeorm_1.ManyToMany(function (type) { return tag_entity_1.Tag; }, function (tags) { return tags.categories; }),
        typeorm_1.JoinTable()
    ], Category.prototype, "tags");
    __decorate([
        typeorm_1.Column()
    ], Category.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Category.prototype, "country");
    __decorate([
        typeorm_1.Column()
    ], Category.prototype, "mpath");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.Product; }, function (product) { return product.categoriesId; })
    ], Category.prototype, "product");
    __decorate([
        typeorm_1.Column()
    ], Category.prototype, "parentCategoryId");
    return Category;
}());
exports.Category = Category;