import {
  definePageLayout,
  PageLayoutTabLayoutMode,
  PageLayoutWidgetVerticalListHeightBehavior,
} from 'twenty-sdk/define';

import {
  FAQ_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  FAQ_PAGE_LAYOUT_TAB_UNIVERSAL_IDENTIFIER,
  FAQ_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  FAQ_PAGE_WIDGET_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default definePageLayout({
  universalIdentifier: FAQ_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  name: 'FAQ',
  type: 'STANDALONE_PAGE',
  tabs: [
    {
      universalIdentifier: FAQ_PAGE_LAYOUT_TAB_UNIVERSAL_IDENTIFIER,
      title: 'FAQ',
      position: 0,
      icon: 'IconHelpCircle',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: FAQ_PAGE_WIDGET_UNIVERSAL_IDENTIFIER,
          title: ' ',
          type: 'FRONT_COMPONENT',
          heightBehavior:
            PageLayoutWidgetVerticalListHeightBehavior.TAB_VIEWPORT,
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier:
              FAQ_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
