import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';

import {
  HELP_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  HELP_PAGE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: HELP_PAGE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'Help',
  icon: 'IconHelp',
  position: 1,
  type: NavigationMenuItemType.PAGE_LAYOUT,
  pageLayoutUniversalIdentifier: HELP_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
});
