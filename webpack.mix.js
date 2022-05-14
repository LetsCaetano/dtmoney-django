const mix = require("laravel-mix");

mix.disableNotifications();

mix.setPublicPath("./static");
// mix.setResourceRoot('./static/resources');

mix
  .js("static/resources/finances.js", "static/assets")
  .sass("static/resources/finances.scss", "static/assets");

mix.version();

// if (mix.inProduction()) {
//  do production stuff
// }
