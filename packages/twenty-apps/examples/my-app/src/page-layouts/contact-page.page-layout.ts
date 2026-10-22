import {
  definePageLayout,
  PageLayoutTabLayoutMode,
  PageLayoutWidgetVerticalListHeightBehavior,
} from 'twenty-sdk/define';

import {
  CONTACT_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  CONTACT_PAGE_LAYOUT_TAB_UNIVERSAL_IDENTIFIER,
  CONTACT_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  CONTACT_PAGE_WIDGET_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default definePageLayout({
  universalIdentifier: CONTACT_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  name: 'Contact',
  type: 'STANDALONE_PAGE',
  tabs: [
    {
      universalIdentifier: CONTACT_PAGE_LAYOUT_TAB_UNIVERSAL_IDENTIFIER,
      title: 'Contact',
      position: 0,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: CONTACT_PAGE_WIDGET_UNIVERSAL_IDENTIFIER,
          title: ' ',
          type: 'FRONT_COMPONENT',
          heightBehavior:
            PageLayoutWidgetVerticalListHeightBehavior.TAB_VIEWPORT,
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier:
              CONTACT_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
