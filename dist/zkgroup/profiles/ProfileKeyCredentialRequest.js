"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ByteArray_1 = require("../internal/ByteArray");
const InvalidInputException_1 = require("../errors/InvalidInputException");
const ZkGroupError_1 = require("../errors/ZkGroupError");
const Native_1 = require("../internal/Native");
class ProfileKeyCredentialRequest extends ByteArray_1.default {
    constructor(contents) {
        super(contents, ProfileKeyCredentialRequest.SIZE, true);
        const ffi_return = Native_1.default.FFI_ProfileKeyCredentialRequest_checkValidContents(this.contents, this.contents.length);
        if (ffi_return == Native_1.FFI_RETURN_INPUT_ERROR) {
            throw new InvalidInputException_1.default('FFI_RETURN_INPUT_ERROR');
        }
        if (ffi_return != Native_1.FFI_RETURN_OK) {
            throw new ZkGroupError_1.default('FFI_RETURN!=OK');
        }
    }
}
exports.default = ProfileKeyCredentialRequest;
ProfileKeyCredentialRequest.SIZE = 232;
