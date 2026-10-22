import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';

import {
  FAQ_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  FAQ_PAGE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: FAQ_PAGE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'FAQ',
  icon: 'IconHelpCircle',
  position: 3,
  type: NavigationMenuItemType.PAGE_LAYOUT,
  pageLayoutUniversalIdentifier: FAQ_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
});
