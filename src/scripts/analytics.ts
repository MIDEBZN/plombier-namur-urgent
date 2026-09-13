// Privacy-safe conversion event tracking for Plombier Namur Urgent
// Strictly NO Personally Identifiable Information (names, emails, phone numbers, messages) is recorded.

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  try {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      ...params
    };

    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }

    // Also dispatch a browser custom event for potential listeners
    window.dispatchEvent(new CustomEvent('analytics_event', { detail: payload }));
  } catch {
    // Fail silently to avoid breaking UX
  }
}

export function initAnalytics() {
  if (typeof window === 'undefined') return;

  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement)?.closest('a');
    if (!target) return;

    const href = target.getAttribute('href') || '';

    // Phone clicks
    if (href.startsWith('tel:')) {
      trackEvent('phone_click', {
        link_location: target.getAttribute('data-location') || 'cta'
      });
      return;
    }

    // WhatsApp clicks
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      trackEvent('whatsapp_click', {
        link_location: target.getAttribute('data-location') || 'floating_button'
      });
      return;
    }

    // Google Business Profile / Maps clicks
    if (href.includes('maps.app.goo.gl') || href.includes('google.com/maps')) {
      trackEvent('google_business_profile_click', {
        source_page: window.location.pathname
      });
      return;
    }

    // Service CTA clicks
    if (target.classList.contains('service-link') || target.classList.contains('service-card-link')) {
      trackEvent('service_cta_click', {
        destination: href
      });
      return;
    }
  });

  // Track quote form interaction and submission
  document.querySelectorAll('form').forEach((form) => {
    let formStarted = false;

    form.querySelectorAll('input, select, textarea').forEach((input) => {
      input.addEventListener('focus', () => {
        if (!formStarted) {
          formStarted = true;
          trackEvent('quote_form_start', {
            form_id: form.getAttribute('id') || 'contact_form'
          });
        }
      }, { once: true });
    });

    form.addEventListener('submit', (e) => {
      // Validate that required fields are valid before tracking submission
      if (form.checkValidity()) {
        const serviceField = (form.querySelector('[name="service"]') as HTMLSelectElement)?.value || 'unspecified';
        trackEvent('quote_form_submit', {
          form_id: form.getAttribute('id') || 'contact_form',
          service_type: serviceField
        });
      }
    });
  });
}
