import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import formBuilder from '@payloadcms/plugin-form-builder';
import FormSubmission from './collections/FormSubmission';
import Study from './collections/Study';
import Category from './collections/Category';
import breadcrumbs from 'payload-plugin-nested-pages';
import MegaMenu from './globals/MegaMenu';
import SocialMedia from './globals/SocialMedia';
import Footer from './globals/Footer';
import Pagetest from './collections/Pagetest';
import Bands from './collections/Bands';


dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Pagetest,
    Media,
    Bands,
    {
      slug: 'posts',
      fields: [
          {
              name: 'title',
              type: 'text',
          },
          {
              name: 'author',
              label: 'Post Author',
              type: 'relationship',
              relationTo: 'users',
          }
      ]
  },
  
  {
      slug: 'departments',
      fields: [
          {
              name: 'name',
              type: 'text',
          }
      ]
  }
  ],
  plugins: [
    formBuilder({
      fields: {
        text: true,
        select: true,
        email: true,
        state: true,
        country: true,
        checkbox: true,
        number: true,
        message: true,
        payment: false
      }
    })
  ],
  globals: [
    MegaMenu,
    SocialMedia,
    Footer,
      {
          slug: 'header',
          fields: [
              {
                  name: 'nav',
                  type: 'array',
                  fields: [
                      {
                          name: 'page',
                          type: 'relationship',
                          relationTo: 'pages',
                      },
                  ]
              }
          ]
      }
  ]
});
