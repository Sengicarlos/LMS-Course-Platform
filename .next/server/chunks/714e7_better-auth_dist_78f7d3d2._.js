module.exports = [
"[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareHash",
    ()=>compareHash,
    "constantTimeEqual",
    ()=>constantTimeEqual,
    "hashPassword",
    ()=>hashPassword,
    "hashToBase64",
    ()=>hashToBase64,
    "signJWT",
    ()=>signJWT,
    "symmetricDecrypt",
    ()=>symmetricDecrypt,
    "symmetricEncrypt",
    ()=>symmetricEncrypt,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ciphers@2.0.1/node_modules/@noble/ciphers/chacha.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ciphers@2.0.1/node_modules/@noble/ciphers/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$0$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.0/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$scrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/scrypt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B4Qoxdgc$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.B4Qoxdgc.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
async function signJWT(payload, secret, expiresIn = 3600) {
    const jwt = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$0$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn).sign(new TextEncoder().encode(secret));
    return jwt;
}
function constantTimeEqual(a, b) {
    const aBuffer = new Uint8Array(a);
    const bBuffer = new Uint8Array(b);
    let c = aBuffer.length ^ bBuffer.length;
    const length = Math.max(aBuffer.length, bBuffer.length);
    for(let i = 0; i < length; i++){
        c |= (i < aBuffer.length ? aBuffer[i] : 0) ^ (i < bBuffer.length ? bBuffer[i] : 0);
    }
    return c === 0;
}
async function hashToBase64(data) {
    const buffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(data);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["base64"].encode(buffer);
}
async function compareHash(data, hash) {
    const buffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(typeof data === "string" ? new TextEncoder().encode(data) : data);
    const hashBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["base64"].decode(hash);
    return constantTimeEqual(buffer, hashBuffer);
}
const config = {
    N: 16384,
    r: 16,
    p: 1,
    dkLen: 64
};
async function generateKey(password, salt) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$scrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scryptAsync"])(password.normalize("NFKC"), salt, {
        N: config.N,
        p: config.p,
        r: config.r,
        dkLen: config.dkLen,
        maxmem: 128 * config.N * config.r * 2
    });
}
const hashPassword = async (password)=>{
    const salt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hex"].encode(crypto.getRandomValues(new Uint8Array(16)));
    const key = await generateKey(password, salt);
    return `${salt}:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hex"].encode(key)}`;
};
const verifyPassword = async ({ hash, password })=>{
    const [salt, key] = hash.split(":");
    if (!salt || !key) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"]("Invalid password hash");
    }
    const targetKey = await generateKey(password, salt);
    return constantTimeEqual(targetKey, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hexToBytes"])(key));
};
const symmetricEncrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utf8ToBytes"])(data);
    const chacha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bytesToHex"])(chacha.encrypt(dataAsBytes));
};
const symmetricDecrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hexToBytes"])(data);
    const chacha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes));
    return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/api/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEndpointConflicts",
    ()=>checkEndpointConflicts,
    "getEndpoints",
    ()=>getEndpoints,
    "router",
    ()=>router,
    "signUpEmail",
    ()=>signUpEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.0.19/node_modules/better-call/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BOULxa5h.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DP$2d$TUMaw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.DP-TUMaw.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.12/node_modules/zod/v4/classic/schemas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/middleware/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CjNhg7P4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.CjNhg7P4.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/db/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B5mlN66S$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.B5mlN66S.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B4Qoxdgc$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.B4Qoxdgc.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BKEtEpt0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BKEtEpt0.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BXHrfawo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BXHrfawo.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$social$2d$providers$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/social-providers/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CW6D9eSx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.CW6D9eSx.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BUPPRXfK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BUPPRXfK.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/binary.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$NIVvsrVf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.NIVvsrVf.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$Ih8C76Vo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.Ih8C76Vo.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const signUpEmail = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-up/email", {
        method: "POST",
        body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["record"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"](), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["any"]()),
        metadata: {
            $Infer: {
                body: {}
            },
            openapi: {
                description: "Sign up a user using email and password",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the user"
                                    },
                                    email: {
                                        type: "string",
                                        description: "The email of the user"
                                    },
                                    password: {
                                        type: "string",
                                        description: "The password of the user"
                                    },
                                    image: {
                                        type: "string",
                                        description: "The profile image URL of the user"
                                    },
                                    callbackURL: {
                                        type: "string",
                                        description: "The URL to use for email verification callback"
                                    },
                                    rememberMe: {
                                        type: "boolean",
                                        description: "If this is false, the session will not be remembered. Default is `true`."
                                    }
                                },
                                required: [
                                    "name",
                                    "email",
                                    "password"
                                ]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Successfully created user",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string",
                                            nullable: true,
                                            description: "Authentication token for the session"
                                        },
                                        user: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "string",
                                                    description: "The unique identifier of the user"
                                                },
                                                email: {
                                                    type: "string",
                                                    format: "email",
                                                    description: "The email address of the user"
                                                },
                                                name: {
                                                    type: "string",
                                                    description: "The name of the user"
                                                },
                                                image: {
                                                    type: "string",
                                                    format: "uri",
                                                    nullable: true,
                                                    description: "The profile image URL of the user"
                                                },
                                                emailVerified: {
                                                    type: "boolean",
                                                    description: "Whether the email has been verified"
                                                },
                                                createdAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "When the user was created"
                                                },
                                                updatedAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "When the user was last updated"
                                                }
                                            },
                                            required: [
                                                "id",
                                                "email",
                                                "name",
                                                "emailVerified",
                                                "createdAt",
                                                "updatedAt"
                                            ]
                                        }
                                    },
                                    required: [
                                        "user"
                                    ]
                                }
                            }
                        }
                    },
                    "422": {
                        description: "Unprocessable Entity. User already exists or failed to create user.",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        if (!ctx.context.options.emailAndPassword?.enabled || ctx.context.options.emailAndPassword?.disableSignUp) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: "Email and password sign up is not enabled"
            });
        }
        const body = ctx.body;
        const { name, email, password, image, callbackURL, rememberMe, ...rest } = body;
        const isValidEmail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$12$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["email"]().safeParse(email);
        if (!isValidEmail.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].INVALID_EMAIL
            });
        }
        const minPasswordLength = ctx.context.password.config.minPasswordLength;
        if (password.length < minPasswordLength) {
            ctx.context.logger.error("Password is too short");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].PASSWORD_TOO_SHORT
            });
        }
        const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
        if (password.length > maxPasswordLength) {
            ctx.context.logger.error("Password is too long");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].PASSWORD_TOO_LONG
            });
        }
        const dbUser = await ctx.context.internalAdapter.findUserByEmail(email);
        if (dbUser?.user) {
            ctx.context.logger.info(`Sign-up attempt for existing email: ${email}`);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL
            });
        }
        const hash = await ctx.context.password.hash(password);
        let createdUser;
        try {
            const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B5mlN66S$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["d"])(ctx.context.options, rest, "create");
            createdUser = await ctx.context.internalAdapter.createUser({
                email: email.toLowerCase(),
                name,
                image,
                ...data,
                emailVerified: false
            }, ctx);
            if (!createdUser) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_USER
                });
            }
        } catch (e) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDevelopment"]) {
                ctx.context.logger.error("Failed to create user", e);
            }
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) {
                throw e;
            }
            ctx.context.logger?.error("Failed to create user", e);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_USER,
                details: e
            });
        }
        if (!createdUser) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_USER
            });
        }
        await ctx.context.internalAdapter.linkAccount({
            userId: createdUser.id,
            providerId: "credential",
            accountId: createdUser.id,
            password: hash
        }, ctx);
        if (ctx.context.options.emailVerification?.sendOnSignUp || ctx.context.options.emailAndPassword.requireEmailVerification) {
            const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])(ctx.context.secret, createdUser.email, void 0, ctx.context.options.emailVerification?.expiresIn);
            const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${body.callbackURL || "/"}`;
            const args = ctx.request ? [
                {
                    user: createdUser,
                    url,
                    token
                },
                ctx.request
            ] : [
                {
                    user: createdUser,
                    url,
                    token
                }
            ];
            await ctx.context.options.emailVerification?.sendVerificationEmail?.(...args);
        }
        if (ctx.context.options.emailAndPassword.autoSignIn === false || ctx.context.options.emailAndPassword.requireEmailVerification) {
            return ctx.json({
                token: null,
                user: {
                    id: createdUser.id,
                    email: createdUser.email,
                    name: createdUser.name,
                    image: createdUser.image,
                    emailVerified: createdUser.emailVerified,
                    createdAt: createdUser.createdAt,
                    updatedAt: createdUser.updatedAt
                }
            });
        }
        const session = await ctx.context.internalAdapter.createSession(createdUser.id, ctx, rememberMe === false);
        if (!session) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_SESSION
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CjNhg7P4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(ctx, {
            session,
            user: createdUser
        }, rememberMe === false);
        return ctx.json({
            token: session.token,
            user: {
                id: createdUser.id,
                email: createdUser.email,
                name: createdUser.name,
                image: createdUser.image,
                emailVerified: createdUser.emailVerified,
                createdAt: createdUser.createdAt,
                updatedAt: createdUser.updatedAt
            }
        });
    });
function shouldRateLimit(max, window, rateLimitData) {
    const now = Date.now();
    const windowInMs = window * 1e3;
    const timeSinceLastRequest = now - rateLimitData.lastRequest;
    return timeSinceLastRequest < windowInMs && rateLimitData.count >= max;
}
function rateLimitResponse(retryAfter) {
    return new Response(JSON.stringify({
        message: "Too many requests. Please try again later."
    }), {
        status: 429,
        statusText: "Too Many Requests",
        headers: {
            "X-Retry-After": retryAfter.toString()
        }
    });
}
function getRetryAfter(lastRequest, window) {
    const now = Date.now();
    const windowInMs = window * 1e3;
    return Math.ceil((lastRequest + windowInMs - now) / 1e3);
}
function createDBStorage(ctx) {
    const model = "rateLimit";
    const db = ctx.adapter;
    return {
        get: async (key)=>{
            const res = await db.findMany({
                model,
                where: [
                    {
                        field: "key",
                        value: key
                    }
                ]
            });
            const data = res[0];
            if (typeof data?.lastRequest === "bigint") {
                data.lastRequest = Number(data.lastRequest);
            }
            return data;
        },
        set: async (key, value, _update)=>{
            try {
                if (_update) {
                    await db.updateMany({
                        model,
                        where: [
                            {
                                field: "key",
                                value: key
                            }
                        ],
                        update: {
                            count: value.count,
                            lastRequest: value.lastRequest
                        }
                    });
                } else {
                    await db.create({
                        model,
                        data: {
                            key,
                            count: value.count,
                            lastRequest: value.lastRequest
                        }
                    });
                }
            } catch (e) {
                ctx.logger.error("Error setting rate limit", e);
            }
        }
    };
}
const memory = /* @__PURE__ */ new Map();
function getRateLimitStorage(ctx, rateLimitSettings) {
    if (ctx.options.rateLimit?.customStorage) {
        return ctx.options.rateLimit.customStorage;
    }
    const storage = ctx.rateLimit.storage;
    if (storage === "secondary-storage") {
        return {
            get: async (key)=>{
                const data = await ctx.options.secondaryStorage?.get(key);
                return data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BKEtEpt0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["s"])(data) : void 0;
            },
            set: async (key, value, _update)=>{
                const ttl = rateLimitSettings?.window ?? ctx.options.rateLimit?.window ?? 10;
                await ctx.options.secondaryStorage?.set?.(key, JSON.stringify(value), ttl);
            }
        };
    } else if (storage === "memory") {
        return {
            async get (key) {
                return memory.get(key);
            },
            async set (key, value, _update) {
                memory.set(key, value);
            }
        };
    }
    return createDBStorage(ctx);
}
async function onRequestRateLimit(req, ctx) {
    if (!ctx.rateLimit.enabled) {
        return;
    }
    const path = new URL(req.url).pathname.replace(ctx.options.basePath || "/api/auth", "");
    let window = ctx.rateLimit.window;
    let max = ctx.rateLimit.max;
    const ip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BXHrfawo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["g"])(req, ctx.options);
    if (!ip) {
        return;
    }
    const key = ip + path;
    const specialRules = getDefaultSpecialRules();
    const specialRule = specialRules.find((rule)=>rule.pathMatcher(path));
    if (specialRule) {
        window = specialRule.window;
        max = specialRule.max;
    }
    for (const plugin of ctx.options.plugins || []){
        if (plugin.rateLimit) {
            const matchedRule = plugin.rateLimit.find((rule)=>rule.pathMatcher(path));
            if (matchedRule) {
                window = matchedRule.window;
                max = matchedRule.max;
                break;
            }
        }
    }
    if (ctx.rateLimit.customRules) {
        const _path = Object.keys(ctx.rateLimit.customRules).find((p)=>{
            if (p.includes("*")) {
                const isMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["w"])(p)(path);
                return isMatch;
            }
            return p === path;
        });
        if (_path) {
            const customRule = ctx.rateLimit.customRules[_path];
            const resolved = typeof customRule === "function" ? await customRule(req) : customRule;
            if (resolved) {
                window = resolved.window;
                max = resolved.max;
            }
            if (resolved === false) {
                return;
            }
        }
    }
    const storage = getRateLimitStorage(ctx, {
        window
    });
    const data = await storage.get(key);
    const now = Date.now();
    if (!data) {
        await storage.set(key, {
            key,
            count: 1,
            lastRequest: now
        });
    } else {
        const timeSinceLastRequest = now - data.lastRequest;
        if (shouldRateLimit(max, window, data)) {
            const retryAfter = getRetryAfter(data.lastRequest, window);
            return rateLimitResponse(retryAfter);
        } else if (timeSinceLastRequest > window * 1e3) {
            await storage.set(key, {
                ...data,
                count: 1,
                lastRequest: now
            }, true);
        } else {
            await storage.set(key, {
                ...data,
                count: data.count + 1,
                lastRequest: now
            }, true);
        }
    }
}
function getDefaultSpecialRules() {
    const specialRules = [
        {
            pathMatcher (path) {
                return path.startsWith("/sign-in") || path.startsWith("/sign-up") || path.startsWith("/change-password") || path.startsWith("/change-email");
            },
            window: 10,
            max: 3
        }
    ];
    return specialRules;
}
function checkEndpointConflicts(options, logger2) {
    const endpointRegistry = /* @__PURE__ */ new Map();
    options.plugins?.forEach((plugin)=>{
        if (plugin.endpoints) {
            for (const [key, endpoint] of Object.entries(plugin.endpoints)){
                if (endpoint && "path" in endpoint) {
                    const path = endpoint.path;
                    let methods = [];
                    if (endpoint.options && "method" in endpoint.options) {
                        if (Array.isArray(endpoint.options.method)) {
                            methods = endpoint.options.method;
                        } else if (typeof endpoint.options.method === "string") {
                            methods = [
                                endpoint.options.method
                            ];
                        }
                    }
                    if (methods.length === 0) {
                        methods = [
                            "*"
                        ];
                    }
                    if (!endpointRegistry.has(path)) {
                        endpointRegistry.set(path, []);
                    }
                    endpointRegistry.get(path).push({
                        pluginId: plugin.id,
                        endpointKey: key,
                        methods
                    });
                }
            }
        }
    });
    const conflicts = [];
    for (const [path, entries] of endpointRegistry.entries()){
        if (entries.length > 1) {
            const methodMap = /* @__PURE__ */ new Map();
            let hasConflict = false;
            for (const entry of entries){
                for (const method of entry.methods){
                    if (!methodMap.has(method)) {
                        methodMap.set(method, []);
                    }
                    methodMap.get(method).push(entry.pluginId);
                    if (methodMap.get(method).length > 1) {
                        hasConflict = true;
                    }
                    if (method === "*" && entries.length > 1) {
                        hasConflict = true;
                    } else if (method !== "*" && methodMap.has("*")) {
                        hasConflict = true;
                    }
                }
            }
            if (hasConflict) {
                const uniquePlugins = [
                    ...new Set(entries.map((e)=>e.pluginId))
                ];
                const conflictingMethods = [];
                for (const [method, plugins] of methodMap.entries()){
                    if (plugins.length > 1 || method === "*" && entries.length > 1 || method !== "*" && methodMap.has("*")) {
                        conflictingMethods.push(method);
                    }
                }
                conflicts.push({
                    path,
                    plugins: uniquePlugins,
                    conflictingMethods
                });
            }
        }
    }
    if (conflicts.length > 0) {
        const conflictMessages = conflicts.map((conflict)=>`  - "${conflict.path}" [${conflict.conflictingMethods.join(", ")}] used by plugins: ${conflict.plugins.join(", ")}`).join("\n");
        logger2.error(`Endpoint path conflicts detected! Multiple plugins are trying to use the same endpoint paths with conflicting HTTP methods:
${conflictMessages}

To resolve this, you can:
	1. Use only one of the conflicting plugins
	2. Configure the plugins to use different paths (if supported)
	3. Ensure plugins use different HTTP methods for the same path
`);
    }
}
function getEndpoints(ctx, options) {
    const pluginEndpoints = options.plugins?.reduce((acc, plugin)=>{
        return {
            ...acc,
            ...plugin.endpoints
        };
    }, {}) ?? {};
    const middlewares = options.plugins?.map((plugin)=>plugin.middlewares?.map((m)=>{
            const middleware = async (context)=>{
                const authContext = await ctx;
                return m.middleware({
                    ...context,
                    context: {
                        ...authContext,
                        ...context.context
                    }
                });
            };
            middleware.options = m.middleware.options;
            return {
                path: m.path,
                middleware
            };
        })).filter((plugin)=>plugin !== void 0).flat() || [];
    const baseEndpoints = {
        signInSocial: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["J"],
        callbackOAuth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["I"],
        getSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DP$2d$TUMaw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"])(),
        signOut: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["G"],
        signUpEmail: signUpEmail(),
        signInEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["F"],
        forgetPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["E"],
        resetPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["D"],
        verifyEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["C"],
        sendVerificationEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["B"],
        changeEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["A"],
        changePassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"],
        setPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["y"],
        updateUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["u"])(),
        deleteUser: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["x"],
        forgetPasswordCallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["v"],
        requestPasswordReset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["q"],
        requestPasswordResetCallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["n"],
        listSessions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DP$2d$TUMaw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"])(),
        revokeSession: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DP$2d$TUMaw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"],
        revokeSessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DP$2d$TUMaw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["b"],
        revokeOtherSessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DP$2d$TUMaw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"],
        linkSocialAccount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["m"],
        listUserAccounts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["l"],
        deleteUserCallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["k"],
        unlinkAccount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["j"],
        refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["r"],
        getAccessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["i"],
        accountInfo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["f"]
    };
    const endpoints = {
        ...baseEndpoints,
        ...pluginEndpoints,
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["b"],
        error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["e"]
    };
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["t"])(endpoints, ctx);
    return {
        api,
        middlewares
    };
}
const router = (ctx, options)=>{
    const { api, middlewares } = getEndpoints(ctx, options);
    const basePath = new URL(ctx.baseURL).pathname;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRouter"])(api, {
        routerContext: ctx,
        openapi: {
            disabled: true
        },
        basePath,
        routerMiddleware: [
            {
                path: "/**",
                middleware: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["a"]
            },
            ...middlewares
        ],
        async onRequest (req) {
            const disabledPaths = ctx.options.disabledPaths || [];
            const path = new URL(req.url).pathname.replace(basePath, "");
            if (disabledPaths.includes(path)) {
                return new Response("Not Found", {
                    status: 404
                });
            }
            for (const plugin of ctx.options.plugins || []){
                if (plugin.onRequest) {
                    const response = await plugin.onRequest(req, ctx);
                    if (response && "response" in response) {
                        return response.response;
                    }
                }
            }
            return onRequestRateLimit(req, ctx);
        },
        async onResponse (res) {
            for (const plugin of ctx.options.plugins || []){
                if (plugin.onResponse) {
                    const response = await plugin.onResponse(res, ctx);
                    if (response) {
                        return response.response;
                    }
                }
            }
            return res;
        },
        onError (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] && e.status === "FOUND") {
                return;
            }
            if (options.onAPIError?.throw) {
                throw e;
            }
            if (options.onAPIError?.onError) {
                options.onAPIError.onError(e, ctx);
                return;
            }
            const optLogLevel = options.logger?.level;
            const log = optLogLevel === "error" || optLogLevel === "warn" || optLogLevel === "debug" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logger"] : void 0;
            if (options.logger?.disabled !== true) {
                if (e && typeof e === "object" && "message" in e && typeof e.message === "string") {
                    if (e.message.includes("no column") || e.message.includes("column") || e.message.includes("relation") || e.message.includes("table") || e.message.includes("does not exist")) {
                        ctx.logger?.error(e.message);
                        return;
                    }
                }
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) {
                    if (e.status === "INTERNAL_SERVER_ERROR") {
                        ctx.logger.error(e.status, e);
                    }
                    log?.error(e.message);
                } else {
                    ctx.logger?.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
                }
            }
        }
    });
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentAdapter",
    ()=>getCurrentAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/oauth2/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/utils/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$async_hooks$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/async_hooks/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BLRq$2d$uZX$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BLRq-uZX.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$D$2d$2CmEwz$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.D-2CmEwz.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BOULxa5h$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BOULxa5h.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BUPPRXfK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BUPPRXfK.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$telemetry$40$1$2e$3$2e$_643befc05eaf11d9fe05fcbaa76a7d7d$2f$node_modules$2f40$better$2d$auth$2f$telemetry$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+telemetry@1.3._643befc05eaf11d9fe05fcbaa76a7d7d/node_modules/@better-auth/telemetry/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.0.19/node_modules/better-call/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DP$2d$TUMaw$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.DP-TUMaw.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/middleware/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/binary.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/db/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/api/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CjNhg7P4$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.CjNhg7P4.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CW6D9eSx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.CW6D9eSx.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BKEtEpt0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BKEtEpt0.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$NIVvsrVf$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.NIVvsrVf.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$Ih8C76Vo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.Ih8C76Vo.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B5mlN66S$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.B5mlN66S.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B4Qoxdgc$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.B4Qoxdgc.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BXHrfawo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BXHrfawo.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$CcjWq_Ob$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.CcjWq_Ob.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DhziC0ap$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.DhziC0ap.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$D_t_N9Yo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.D_t_N9Yo.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DCO8QZ1H$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.DCO8QZ1H.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$15w1BFER$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.15w1BFER.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$social$2d$providers$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/social-providers/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$YwDQhoPc$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.YwDQhoPc.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let currentAdapterAsyncStorage = null;
const ensureAsyncStorage = async ()=>{
    if (!currentAdapterAsyncStorage) {
        const AsyncLocalStorage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$async_hooks$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAsyncLocalStorage"])();
        currentAdapterAsyncStorage = new AsyncLocalStorage();
    }
    return currentAdapterAsyncStorage;
};
const getCurrentAdapter = async (fallback)=>{
    return ensureAsyncStorage().then((als)=>{
        return als.getStore() || fallback;
    }).catch(()=>{
        return fallback;
    });
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/adapters/prisma-adapter/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prismaAdapter",
    ()=>prismaAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DCO8QZ1H$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.DCO8QZ1H.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BKEtEpt0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BKEtEpt0.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DhziC0ap$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.DhziC0ap.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$BUPPRXfK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.BUPPRXfK.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$0$2e$19$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.0.19/node_modules/better-call/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$B4Qoxdgc$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.B4Qoxdgc.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const prismaAdapter = (prisma, config)=>{
    let lazyOptions = null;
    const createCustomAdapter = (prisma2)=>({ getFieldName })=>{
            const db = prisma2;
            const convertSelect = (select, model)=>{
                if (!select || !model) return void 0;
                return select.reduce((prev, cur)=>{
                    return {
                        ...prev,
                        [getFieldName({
                            model,
                            field: cur
                        })]: true
                    };
                }, {});
            };
            function operatorToPrismaOperator(operator) {
                switch(operator){
                    case "starts_with":
                        return "startsWith";
                    case "ends_with":
                        return "endsWith";
                    case "ne":
                        return "not";
                    case "not_in":
                        return "notIn";
                    default:
                        return operator;
                }
            }
            const convertWhereClause = (model, where)=>{
                if (!where || !where.length) return {};
                if (where.length === 1) {
                    const w = where[0];
                    if (!w) {
                        return;
                    }
                    return {
                        [getFieldName({
                            model,
                            field: w.field
                        })]: w.operator === "eq" || !w.operator ? w.value : {
                            [operatorToPrismaOperator(w.operator)]: w.value
                        }
                    };
                }
                const and = where.filter((w)=>w.connector === "AND" || !w.connector);
                const or = where.filter((w)=>w.connector === "OR");
                const andClause = and.map((w)=>{
                    return {
                        [getFieldName({
                            model,
                            field: w.field
                        })]: w.operator === "eq" || !w.operator ? w.value : {
                            [operatorToPrismaOperator(w.operator)]: w.value
                        }
                    };
                });
                const orClause = or.map((w)=>{
                    return {
                        [getFieldName({
                            model,
                            field: w.field
                        })]: w.operator === "eq" || !w.operator ? w.value : {
                            [operatorToPrismaOperator(w.operator)]: w.value
                        }
                    };
                });
                return {
                    ...andClause.length ? {
                        AND: andClause
                    } : {},
                    ...orClause.length ? {
                        OR: orClause
                    } : {}
                };
            };
            return {
                async create ({ model, data: values, select }) {
                    if (!db[model]) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    }
                    return await db[model].create({
                        data: values,
                        select: convertSelect(select, model)
                    });
                },
                async findOne ({ model, where, select }) {
                    const whereClause = convertWhereClause(model, where);
                    if (!db[model]) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    }
                    return await db[model].findFirst({
                        where: whereClause,
                        select: convertSelect(select, model)
                    });
                },
                async findMany ({ model, where, limit, offset, sortBy }) {
                    const whereClause = convertWhereClause(model, where);
                    if (!db[model]) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    }
                    return await db[model].findMany({
                        where: whereClause,
                        take: limit || 100,
                        skip: offset || 0,
                        ...sortBy?.field ? {
                            orderBy: {
                                [getFieldName({
                                    model,
                                    field: sortBy.field
                                })]: sortBy.direction === "desc" ? "desc" : "asc"
                            }
                        } : {}
                    });
                },
                async count ({ model, where }) {
                    const whereClause = convertWhereClause(model, where);
                    if (!db[model]) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    }
                    return await db[model].count({
                        where: whereClause
                    });
                },
                async update ({ model, where, update }) {
                    if (!db[model]) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    }
                    const whereClause = convertWhereClause(model, where);
                    return await db[model].update({
                        where: whereClause,
                        data: update
                    });
                },
                async updateMany ({ model, where, update }) {
                    const whereClause = convertWhereClause(model, where);
                    const result = await db[model].updateMany({
                        where: whereClause,
                        data: update
                    });
                    return result ? result.count : 0;
                },
                async delete ({ model, where }) {
                    const whereClause = convertWhereClause(model, where);
                    try {
                        await db[model].delete({
                            where: whereClause
                        });
                    } catch (e) {}
                },
                async deleteMany ({ model, where }) {
                    const whereClause = convertWhereClause(model, where);
                    const result = await db[model].deleteMany({
                        where: whereClause
                    });
                    return result ? result.count : 0;
                },
                options: config
            };
        };
    let adapterOptions = null;
    adapterOptions = {
        config: {
            adapterId: "prisma",
            adapterName: "Prisma Adapter",
            usePlural: config.usePlural ?? false,
            debugLogs: config.debugLogs ?? false,
            transaction: config.transaction ?? false ? (cb)=>prisma.$transaction((tx)=>{
                    const adapter2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DCO8QZ1H$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])({
                        config: adapterOptions.config,
                        adapter: createCustomAdapter(tx)
                    })(lazyOptions);
                    return cb(adapter2);
                }) : false
        },
        adapter: createCustomAdapter(prisma)
    };
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$DCO8QZ1H$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["c"])(adapterOptions);
    return (options)=>{
        lazyOptions = options;
        return adapter(options);
    };
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/integrations/next-js.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nextCookies",
    ()=>nextCookies,
    "toNextJsHandler",
    ()=>toNextJsHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/binary.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$Ih8C76Vo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.3.28_better-s_71bc4d03c84001ce265c8454e33d8f52/node_modules/better-auth/dist/shared/better-auth.Ih8C76Vo.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.3.28_@b_5523256296096d34052ebac5b152f80c/node_modules/@better-auth/core/dist/middleware/index.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
function toNextJsHandler(auth) {
    const handler = async (request)=>{
        return "handler" in auth ? auth.handler(request) : auth(request);
    };
    return {
        GET: handler,
        POST: handler
    };
}
const nextCookies = ()=>{
    return {
        id: "next-cookies",
        hooks: {
            after: [
                {
                    matcher (ctx) {
                        return true;
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$3$2e$28_$40$b_5523256296096d34052ebac5b152f80c$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$middleware$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const returned = ctx.context.responseHeaders;
                        if ("_flag" in ctx && ctx._flag === "router") {
                            return;
                        }
                        if (returned instanceof Headers) {
                            const setCookies = returned?.get("set-cookie");
                            if (!setCookies) return;
                            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$3$2e$28_better$2d$s_71bc4d03c84001ce265c8454e33d8f52$2f$node_modules$2f$better$2d$auth$2f$dist$2f$shared$2f$better$2d$auth$2e$Ih8C76Vo$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["p"])(setCookies);
                            const { cookies } = await __turbopack_context__.A("[project]/node_modules/.pnpm/next@15.5.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/headers.js [app-route] (ecmascript, async loader)");
                            let cookieHelper;
                            try {
                                cookieHelper = await cookies();
                            } catch (error) {
                                if (error instanceof Error && error.message.startsWith("`cookies` was called outside a request scope.")) {
                                    return;
                                }
                                throw error;
                            }
                            parsed.forEach((value, key)=>{
                                if (!key) return;
                                const opts = {
                                    sameSite: value.samesite,
                                    secure: value.secure,
                                    maxAge: value["max-age"],
                                    httpOnly: value.httponly,
                                    domain: value.domain,
                                    path: value.path
                                };
                                try {
                                    cookieHelper.set(key, decodeURIComponent(value.value), opts);
                                } catch (e) {}
                            });
                            return;
                        }
                    })
                }
            ]
        }
    };
};
;
}),
];

//# sourceMappingURL=714e7_better-auth_dist_78f7d3d2._.js.map