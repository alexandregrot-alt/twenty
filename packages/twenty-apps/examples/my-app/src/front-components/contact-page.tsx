import { defineFrontComponent } from 'twenty-sdk/define';

import {
  CONTACT_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  APP_DISPLAY_NAME,
} from 'src/constants/universal-identifiers';

const ContactPage = () => {
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
        Contact
      </span>
      <span style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
        Get in touch about {APP_DISPLAY_NAME}. Edit
        src/front-components/contact-page.tsx to change its content.
      </span>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: CONTACT_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  name: 'Contact',
  description: `${APP_DISPLAY_NAME} contact page`,
  component: ContactPage,
});
