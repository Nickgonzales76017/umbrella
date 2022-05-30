import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
import slug from '../fields/slug';
import meta, { Type as MetaType } from '../fields/meta';
import { Content, Type as ContentType } from '../blocks/Content';
import { Media, Type as MediaBlockType } from '../blocks/Media';
import Statistics, { Type as StatisticsType } from '../blocks/Statistics';
import Spacer, { Type as SpacerType } from '../blocks/Spacer';
import StickyContent, { Type as StickyContentType } from '../blocks/StickyContent';
import { CallToAction, Type as CallToActionType } from '../blocks/CallToAction';
import Slider, { Type as SliderType } from '../blocks/Slider';
import MediaContentCollage, { Type as ImageContentCollageType } from '../blocks/MediaContentCollage';
import MediaStatCollage, { Type as MediaStatCollageType } from '../blocks/MediaStatCollage';
import MediaGrid, { Type as MediaGridType } from '../blocks/MediaGrid';
import MediaCollage, { Type as MediaCollageType } from '../blocks/MediaCollage';
import CTAGrid, { Type as CTAGridType } from '../blocks/CTAGrid';
import RedHeadline from '../components/RichText/leaves/RedHeadline';
import RedUnderline from '../components/RichText/leaves/RedUnderline';

export type Layout =
  CallToActionType
  | ContentType
  | CTAGridType
  | MediaBlockType
  | MediaCollageType
  | ImageContentCollageType
  | MediaGridType
  | MediaStatCollageType
  | SliderType
  | SpacerType
  | StatisticsType
  | StickyContentType

export type HeroType = 'minimal' | 'contentAboveMedia' | 'contentLeftOfMedia'

export type Type = {
  title: string
  heroType: 'minimal' | 'contentAboveMedia' | 'contentLeftOfMedia'
  heroContent: unknown
  heroMedia?: MediaType
  slug: string
  image?: MediaType
  layout: Layout[]
  meta: MetaType
}

export const Bands: CollectionConfig = {
  slug: 'bands',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  upload: {
    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'card',
        width: 640,
        height: 480,
      },
      {
        name: 'feature',
        width: 1024,
        height: 576,
      },
    ],
  },
  fields: [
    {
      name: 'title',
      label: 'Band Name',
      type: 'text',
      required: true,
    },
    {
      name: 'genre',
      label: 'Genre',
      type: 'text',
      required: true,
    },
    {
      name: 'start_year',
      label: 'Formation year',
      type: 'text',
      required: true,
    },
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        CallToAction,
        Content,
        CTAGrid,
        Media,
        MediaCollage,
        MediaContentCollage,
        MediaGrid,
        MediaStatCollage,
        Slider,
        Spacer,
        Statistics,
        StickyContent,
      ],
    },
    meta,
    slug,
  ],
};

export default Bands;