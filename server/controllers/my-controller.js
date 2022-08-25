'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('app-version')
      .service('myService')
      .getWelcomeMessage();
  },
};
