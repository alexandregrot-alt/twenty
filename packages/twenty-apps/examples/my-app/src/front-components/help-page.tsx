import { defineFrontComponent } from 'twenty-sdk/define';

import {
  HELP_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  APP_DISPLAY_NAME,
} from 'src/constants/universal-identifiers';

const HelpPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '40px',
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <span style={{ fontSize: '24px', fontWeight: 600, color: '#333' }}>
        Help
      </span>
      <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
        Need a hand with {APP_DISPLAY_NAME}? Edit
        src/front-components/help-page.tsx to change its content.
      </span>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: HELP_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  name: 'Help',
  description: `${APP_DISPLAY_NAME} help page`,
  component: HelpPage,
});
