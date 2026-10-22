import {
  definePageLayout,
  PageLayoutTabLayoutMode,
  PageLayoutWidgetVerticalListHeightBehavior,
} from 'twenty-sdk/define';

import {
  ABOUT_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  ABOUT_PAGE_LAYOUT_TAB_UNIVERSAL_IDENTIFIER,
  ABOUT_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  ABOUT_PAGE_WIDGET_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default definePageLayout({
  universalIdentifier: ABOUT_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  name: 'About',
  type: 'STANDALONE_PAGE',
  tabs: [
    {
      universalIdentifier: ABOUT_PAGE_LAYOUT_TAB_UNIVERSAL_IDENTIFIER,
      title: 'About',
      position: 0,
      icon: 'IconInfoCircle',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: ABOUT_PAGE_WIDGET_UNIVERSAL_IDENTIFIER,
          title: ' ',
          type: 'FRONT_COMPONENT',
          heightBehavior:
            PageLayoutWidgetVerticalListHeightBehavior.TAB_VIEWPORT,
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier:
              ABOUT_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
