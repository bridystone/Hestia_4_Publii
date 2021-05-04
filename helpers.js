let themeHelpers = {

    /* get count of posts */
    getPostCount: function(posts) {
        return posts.length
    },
    /* helper functions to set and get custom variables in .hbs files */
    setVar: function(name, value, context){
        context[name] = value;
    },
    getVar: function(name, context){
        return context[name];
    },
    incVar: function(name, context) {
        context[name]++;
        return context[name]
    }
};
module.exports = themeHelpers