import type { Schema, Struct } from '@strapi/strapi';

export interface PollPollOption extends Struct.ComponentSchema {
  collectionName: 'components_poll_poll_options';
  info: {
    displayName: 'PollOption';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'poll.poll-option': PollPollOption;
    }
  }
}
