import { defineFrontComponent } from 'twenty-sdk/define';

import {
  ABOUT_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  APP_DISPLAY_NAME,
} from 'src/constants/universal-identifiers';

const AboutPage = () => {
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
        About {APP_DISPLAY_NAME}
      </span>
      <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
        This page was added to the app. Edit
        src/front-components/about-page.tsx to change its content.
      </span>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: ABOUT_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  name: 'About',
  description: `${APP_DISPLAY_NAME} about page`,
  component: AboutPage,
});
