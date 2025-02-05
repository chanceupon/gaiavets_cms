import type { Schema, Attribute } from '@strapi/strapi';

export interface TeamPageTeamInfo extends Schema.Component {
  collectionName: 'components_team_page_team_infos';
  info: {
    displayName: 'TeamInfo';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    buttonBookNow: Attribute.Component<'common.button'>;
    members: Attribute.Component<'team-page.member', true>;
  };
}

export interface TeamPageMember extends Schema.Component {
  collectionName: 'components_team_page_members';
  info: {
    displayName: 'Member';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.Text;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ServicesPageItemService extends Schema.Component {
  collectionName: 'components_services_page_item_services';
  info: {
    displayName: 'ItemService';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    textColumn1: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    textColumn2: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface ServicesPageBannerService extends Schema.Component {
  collectionName: 'components_services_page_banner_services';
  info: {
    displayName: 'BannerService';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    buttonBookNow: Attribute.Component<'common.button'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ServicesPageAllServices extends Schema.Component {
  collectionName: 'components_services_page_all_services';
  info: {
    displayName: 'AllServices';
  };
  attributes: {
    title: Attribute.String;
    services: Attribute.Component<'services-page.item-service', true>;
  };
}

export interface LocationPageUseFulFaQs extends Schema.Component {
  collectionName: 'components_location_page_use_ful_fa_qs';
  info: {
    displayName: 'UseFulFAQs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    data: Attribute.Component<'location-page.item-use-ful-fa-qs', true>;
  };
}

export interface LocationPageLocation extends Schema.Component {
  collectionName: 'components_location_page_locations';
  info: {
    displayName: 'Location';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mapIframe: Attribute.Text;
    information: Attribute.JSON;
    buttonCallNow: Attribute.Component<'common.button'>;
    buttonWhatsapp: Attribute.Component<'common.button'>;
    locationTips: Attribute.Component<'location-page.location-tips'>;
  };
}

export interface LocationPageLocationTips extends Schema.Component {
  collectionName: 'components_location_page_location_tips';
  info: {
    displayName: 'LocationTips';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    tips: Attribute.Component<'location-page.item-location-tip', true>;
  };
}

export interface LocationPageItemUseFulFaQs extends Schema.Component {
  collectionName: 'components_location_page_item_use_ful_fa_qs';
  info: {
    displayName: 'ItemUseFulFAQs';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface LocationPageItemLocationTip extends Schema.Component {
  collectionName: 'components_location_page_item_location_tips';
  info: {
    displayName: 'ItemLocationTip';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface HomePageWhyPeopleLoveUs extends Schema.Component {
  collectionName: 'components_home_page_why_people_loveuses';
  info: {
    displayName: 'WhyPeopleLoveUs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reviewCards: Attribute.Component<'home-page.item-why-people-love-us', true>;
  };
}

export interface HomePageWhyChooseUs extends Schema.Component {
  collectionName: 'components_home_page_why_chooseuses';
  info: {
    displayName: 'WhyChooseUs';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    causes: Attribute.Component<'home-page.item-cause', true>;
  };
}

export interface HomePageOurLocations extends Schema.Component {
  collectionName: 'components_home_page_our_locations';
  info: {
    displayName: 'OurLocations';
  };
  attributes: {
    title: Attribute.String;
    data: Attribute.JSON;
  };
}

export interface HomePageItemWhyPeopleLoveUs extends Schema.Component {
  collectionName: 'components_home_page_item_why_people_loveuses';
  info: {
    displayName: 'ItemReviewCard';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    star: Attribute.Float;
  };
}

export interface HomePageItemCause extends Schema.Component {
  collectionName: 'components_home_page_item_causes';
  info: {
    displayName: 'ItemCause';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    textLink: Attribute.Text;
    link: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobileTitle: Attribute.Text;
  };
}

export interface HomePageItemAchievement extends Schema.Component {
  collectionName: 'components_home_page_item_achievements';
  info: {
    displayName: 'ItemAchievement';
  };
  attributes: {
    text: Attribute.Text;
    number: Attribute.Float;
  };
}

export interface HomePageGaiaGuide extends Schema.Component {
  collectionName: 'components_home_page_gaia_guides';
  info: {
    displayName: 'GaiaGuide';
    description: '';
  };
  attributes: {
    smallText: Attribute.Text;
    bigText: Attribute.Text;
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    achievements: Attribute.Component<'home-page.item-achievement', true>;
    bigTextMobile: Attribute.Text;
  };
}

export interface HomePageForAllYourPetNeeds extends Schema.Component {
  collectionName: 'components_home_page_for_all_your_pet_needs';
  info: {
    displayName: 'ForAllYourPetNeeds';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
    buttonVisitOurShop: Attribute.Component<'common.button'>;
  };
}

export interface HomePageBanner extends Schema.Component {
  collectionName: 'components_home_page_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    slides: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    mainText: Attribute.Text;
    subText: Attribute.Text;
    buttonBook: Attribute.Component<'common.button'>;
    mobileImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface GuidePageGuideHeader extends Schema.Component {
  collectionName: 'components_guide_page_guide_headers';
  info: {
    displayName: 'GuideHeader';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
  };
}

export interface CommonMetaPage extends Schema.Component {
  collectionName: 'components_common_meta_pages';
  info: {
    displayName: 'MetaPage';
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
  };
}

export interface CommonMenu extends Schema.Component {
  collectionName: 'components_common_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    data: Attribute.Component<'common.item-menu', true>;
  };
}

export interface CommonItemSocial extends Schema.Component {
  collectionName: 'components_common_item_socials';
  info: {
    displayName: 'Item Social';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Text;
  };
}

export interface CommonItemMenu extends Schema.Component {
  collectionName: 'components_common_item_menus';
  info: {
    displayName: 'Item Menu';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.Text;
    menuChildren: Attribute.JSON;
  };
}

export interface CommonDocument extends Schema.Component {
  collectionName: 'components_common_documents';
  info: {
    displayName: 'Document';
  };
  attributes: {
    name: Attribute.String;
    lastUpdate: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Text;
  };
}

export interface AboutPageWhatDrives extends Schema.Component {
  collectionName: 'components_about_page_what_drives';
  info: {
    displayName: 'WhatDrives';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    listWhatDrives: Attribute.Component<'about-page.item-what-drives', true>;
  };
}

export interface AboutPageItemWhatDrives extends Schema.Component {
  collectionName: 'components_about_page_item_what_drives';
  info: {
    displayName: 'ItemWhatDrives';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    buttonLink: Attribute.Component<'common.button'>;
  };
}

export interface AboutPageAboutUs extends Schema.Component {
  collectionName: 'components_about_page_aboutuses';
  info: {
    displayName: 'AboutUs';
  };
  attributes: {
    mainTitle: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'team-page.team-info': TeamPageTeamInfo;
      'team-page.member': TeamPageMember;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'services-page.item-service': ServicesPageItemService;
      'services-page.banner-service': ServicesPageBannerService;
      'services-page.all-services': ServicesPageAllServices;
      'location-page.use-ful-fa-qs': LocationPageUseFulFaQs;
      'location-page.location': LocationPageLocation;
      'location-page.location-tips': LocationPageLocationTips;
      'location-page.item-use-ful-fa-qs': LocationPageItemUseFulFaQs;
      'location-page.item-location-tip': LocationPageItemLocationTip;
      'home-page.why-people-love-us': HomePageWhyPeopleLoveUs;
      'home-page.why-choose-us': HomePageWhyChooseUs;
      'home-page.our-locations': HomePageOurLocations;
      'home-page.item-why-people-love-us': HomePageItemWhyPeopleLoveUs;
      'home-page.item-cause': HomePageItemCause;
      'home-page.item-achievement': HomePageItemAchievement;
      'home-page.gaia-guide': HomePageGaiaGuide;
      'home-page.for-all-your-pet-needs': HomePageForAllYourPetNeeds;
      'home-page.banner': HomePageBanner;
      'guide-page.guide-header': GuidePageGuideHeader;
      'common.meta-page': CommonMetaPage;
      'common.menu': CommonMenu;
      'common.item-social': CommonItemSocial;
      'common.item-menu': CommonItemMenu;
      'common.document': CommonDocument;
      'common.button': CommonButton;
      'about-page.what-drives': AboutPageWhatDrives;
      'about-page.item-what-drives': AboutPageItemWhatDrives;
      'about-page.about-us': AboutPageAboutUs;
    }
  }
}
