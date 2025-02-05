// @ts-nocheck
const slugify = require('slugify');
const { errors } = require('@strapi/utils');
const { ApplicationError } = errors;

module.exports = {
  async beforeCreate(event) {
    const { params } = event;
    const { data } = params;
    const slug = generateSlug(data.title)

    const guides = await strapi.entityService.findMany('api::guide.guide', {
      fields: ['title', 'slug'],
      filters: { slug },
    });

    if (guides?.length) {
      throw new ApplicationError('Title must be unique', { foo: 'bar' });
    }

    data.slug = slug;
  },
};

function generateSlug(text) {
  return slugify(text, {
    lower: true, // lowercase
    locale: 'vi', // convert vietnamese
    remove: /[*+~.()'"!:@?]/g // remove special characters
  });
}