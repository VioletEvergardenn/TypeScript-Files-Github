"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done");
    });
});
promise.then((data) => data);
//# sourceMappingURL=app.js.map