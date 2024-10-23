"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deflateStream = exports.deflateBuffer = void 0;
var stream_1 = require("stream");
var promises_1 = require("stream/promises");
var zlib_1 = require("zlib");
var util_1 = require("util");
var crc32_1 = require("./crc32");
var tee_1 = __importDefault(require("./tee"));
var deflateRaw = (0, util_1.promisify)(zlib_1.deflateRaw);
/**
 * A stream transformer that records the number of bytes
 * passed in its `size` property.
 */
var ByteCounter = /** @class */ (function (_super) {
    __extends(ByteCounter, _super);
    function ByteCounter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 0;
        return _this;
    }
    ByteCounter.prototype._transform = function (chunk, encoding, callback) {
        if ("length" in chunk)
            this.size += chunk.length;
        _super.prototype._transform.call(this, chunk, encoding, callback);
    };
    return ByteCounter;
}(stream_1.PassThrough));
/**
 * @param data buffer containing the data to be compressed
 * @returns a buffer containing the compressed/deflated data and the crc32 checksum
 *  of the source data
 */
function deflateBuffer(data) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, deflated, checksum;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, Promise.all([deflateRaw(data), (0, crc32_1.crc32)(data)])];
                case 1:
                    _a = __read.apply(void 0, [_b.sent(), 2]), deflated = _a[0], checksum = _a[1];
                    return [2 /*return*/, { deflated: deflated, crc32: checksum }];
            }
        });
    });
}
exports.deflateBuffer = deflateBuffer;
/**
 * @param input a byte stream, containing data to be compressed
 * @param sink a method that will accept chunks of compressed data; We don't pass
 *   a writable here, since we don't want the writablestream to be closed after
 *   a single file
 * @returns a promise, which will resolve with the crc32 checksum and the
 * compressed size
 */
function deflateStream(input, sink) {
    return __awaiter(this, void 0, void 0, function () {
        var deflateWriter, _a, rs1, rs2, byteCounter, _b, _, crc;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    deflateWriter = new stream_1.Writable({
                        write: function (chunk, _, callback) {
                            sink(chunk);
                            callback();
                        }
                    });
                    _a = __read((0, tee_1.default)(input), 2), rs1 = _a[0], rs2 = _a[1];
                    byteCounter = new ByteCounter();
                    return [4 /*yield*/, Promise.all([
                            // pipe input into zip compressor, count the bytes
                            // returned and pass compressed data to the sink
                            (0, promises_1.pipeline)(rs1, (0, zlib_1.createDeflateRaw)(), byteCounter, deflateWriter),
                            // calc checksum
                            (0, crc32_1.crc32)(rs2)
                        ])];
                case 1:
                    _b = __read.apply(void 0, [_c.sent(), 2]), _ = _b[0], crc = _b[1];
                    return [2 /*return*/, { crc32: crc, compressedSize: byteCounter.size }];
            }
        });
    });
}
exports.deflateStream = deflateStream;
//# sourceMappingURL=deflate.js.map