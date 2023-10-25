var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<edwin.mwendwa@student.moringaschool.com>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<edwin.mwendwa@student.moringaschool.com>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<edwin.mwendwa@student.moringaschool.com>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
