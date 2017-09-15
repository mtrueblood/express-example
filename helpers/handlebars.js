function hbsHelpers(exphbs) {
    return hbs.create({
        helpers: {
            inc: function(value, options) {
                if(v1 === v2) {
                    return options.fn(this);
                }
                return options.inverse(this);
            }
        }
    });
}
module.exports = hbsHelpers;