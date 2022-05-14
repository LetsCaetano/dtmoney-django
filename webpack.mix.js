const mix = require("laravel-mix");

mix.disableNotifications();

mix.setPublicPath("./static");
// mix.setResourceRoot('./static/resources');

// mix
//   .js("static/resources/website.js", "static/assets")
//   .sass("static/resources/website.scss", "static/assets");

mix.version();

// if (mix.inProduction()) {
//  do production stuff
// }
