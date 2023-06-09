"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const tslib_1 = require("tslib");
const axios_1 = require("axios");
const helpers_1 = require("../helpers");
const constants_1 = require("../constants");
const updateUser = (options) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { user, profilePictureCID = '', name = '', env = constants_1.default.ENV.PROD, } = options || {};
    const API_BASE_URL = (0, helpers_1.getAPIBaseUrls)(env);
    const apiEndpoint = `${API_BASE_URL}/v1/w2w/users/${user}`;
    const requestUrl = `${apiEndpoint}`;
    const body = {
        caip10: user,
        profilePictureCID,
        name,
    };
    return axios_1.default.put(requestUrl, body)
        .catch((err) => {
        console.error(`[EPNS-SDK] - API ${requestUrl}: `, err);
        throw Error(`[EPNS-SDK] - API ${requestUrl}: ${err}`);
    });
});
exports.updateUser = updateUser;
//# sourceMappingURL=updateUser.js.map