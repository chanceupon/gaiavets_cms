'use strict';

/**
 * guide controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::guide.guide', ({ strapi }) => ({
  async search(ctx, next) {
    await this.validateQuery(ctx);
    let sanitizedQueryParams = await this.sanitizeQuery(ctx);

    const keyword = ctx?.query?.key;

    if (keyword) {
      sanitizedQueryParams.filters = {
          $or: [
            { title: { $containsi: keyword } },
            { subTitle: { $containsi: keyword } },
            { content: { $containsi: keyword } },
            { tags: { $containsi: keyword } }
          ]
        };
    }

    sanitizedQueryParams.populate = {
      image: true,
    };
    
    const { results, pagination } = await strapi
      .service("api::guide.guide")
      .find(sanitizedQueryParams);
    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(sanitizedResults, { pagination });
  },
}));
