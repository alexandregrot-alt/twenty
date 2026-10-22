import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';

import {
  CONTACT_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
  CONTACT_PAGE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: CONTACT_PAGE_NAVIGATION_MENU_ITEM_UNIVERSAL_IDENTIFIER,
  name: 'Contact',
  icon: 'IconMail',
  position: 2,
  type: NavigationMenuItemType.PAGE_LAYOUT,
  pageLayoutUniversalIdentifier: CONTACT_PAGE_LAYOUT_UNIVERSAL_IDENTIFIER,
});
