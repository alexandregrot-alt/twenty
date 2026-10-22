import {
  definePageLayout,
  PageLayoutTabLayoutMode,
  PageLayoutWidgetVerticalListHeightBehavior,
} from 'twenty-sdk/define';

import {
  HELP_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  HELP_PAGE_LAYOUT_TAB_UNIVERSAL_IDENTIFIER,
  HELP_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  HELP_PAGE_WIDGET_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default definePageLayout({
  universalIdentifier: HELP_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  name: 'Help',
  type: 'STANDALONE_PAGE',
  tabs: [
    {
      universalIdentifier: HELP_PAGE_LAYOUT_TAB_UNIVERSAL_IDENTIFIER,
      title: 'Help',
      position: 0,
      icon: 'IconHelp',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: HELP_PAGE_WIDGET_UNIVERSAL_IDENTIFIER,
          title: ' ',
          type: 'FRONT_COMPONENT',
          heightBehavior:
            PageLayoutWidgetVerticalListHeightBehavior.TAB_VIEWPORT,
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier:
              HELP_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
          },
        },
      ],
    },
  ],
});
