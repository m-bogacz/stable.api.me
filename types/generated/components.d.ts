import type { Schema, Attribute } from '@strapi/strapi';

export interface TabTab extends Schema.Component {
  collectionName: 'components_tab_tabs';
  info: {
    displayName: 'tab';
    description: '';
  };
  attributes: {
    slug: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    executedBy: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tab.tab': TabTab;
    }
  }
}
