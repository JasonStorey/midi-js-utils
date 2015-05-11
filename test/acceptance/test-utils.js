module.exports = {
    tryAndCatch: function (func, done) {
        // mocha async tests don't always catch chai's failed assertions
        try {
            func();
            done();
        } catch (e) {
            done(e);
        }
    }
};
