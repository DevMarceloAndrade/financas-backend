var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { Controller, Get, Post, Delete } from '@nestjs/common';
let FinanceController = (() => {
    let _classDecorators = [Controller('finance')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _findAll_decorators;
    let _createItem_decorators;
    let _deleteItem_decorators;
    let _addTransaction_decorators;
    let _removeTransaction_decorators;
    var FinanceController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _findAll_decorators = [Get()];
            _createItem_decorators = [Post()];
            _deleteItem_decorators = [Delete(':id')];
            _addTransaction_decorators = [Post(':itemId/transactions')];
            _removeTransaction_decorators = [Delete('transactions/:txId')];
            __esDecorate(this, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: obj => "findAll" in obj, get: obj => obj.findAll }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _createItem_decorators, { kind: "method", name: "createItem", static: false, private: false, access: { has: obj => "createItem" in obj, get: obj => obj.createItem }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _deleteItem_decorators, { kind: "method", name: "deleteItem", static: false, private: false, access: { has: obj => "deleteItem" in obj, get: obj => obj.deleteItem }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addTransaction_decorators, { kind: "method", name: "addTransaction", static: false, private: false, access: { has: obj => "addTransaction" in obj, get: obj => obj.addTransaction }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _removeTransaction_decorators, { kind: "method", name: "removeTransaction", static: false, private: false, access: { has: obj => "removeTransaction" in obj, get: obj => obj.removeTransaction }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FinanceController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        financeService = __runInitializers(this, _instanceExtraInitializers);
        constructor(financeService) {
            this.financeService = financeService;
        }
        // ROTA: GET /finance?type=gastos&period=2026-03
        findAll(type, period) {
            if (!type)
                throw new Error("O parâmetro 'type' (gastos/investimentos) é obrigatório.");
            return this.financeService.findAll(type, period);
        }
        // ROTA: POST /finance
        createItem(body) {
            return this.financeService.createItem(body);
        }
        // ROTA: DELETE /finance/:id
        deleteItem(id) {
            return this.financeService.deleteItem(id);
        }
        // ROTA: POST /finance/:itemId/transactions
        addTransaction(itemId, body) {
            return this.financeService.addTransaction(itemId, body);
        }
        // ROTA: DELETE /finance/transactions/:txId
        removeTransaction(txId) {
            return this.financeService.removeTransaction(txId);
        }
    };
    return FinanceController = _classThis;
})();
export { FinanceController };
