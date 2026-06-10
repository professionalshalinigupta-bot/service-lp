"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Send } from "lucide-react";

const FORM_ID = "6a23e2429ababa57f8e3f674";
const ROOT_CLASS = "ff-6a23e2429ababa57f8e3f674";
const ROOT_SELECTOR = `.${ROOT_CLASS}`;

type FlodeskFn = ((...args: unknown[]) => void) & { q?: unknown[] };

declare global {
  interface Window {
    FlodeskObject?: string;
    fd?: FlodeskFn;
  }
}

export default function CTAForm() {
  const router = useRouter();

  useEffect(() => {
    const root = document.querySelector(ROOT_SELECTOR);
    if (!root) return;

    let timeoutId: number | undefined;
    const redirectAfterSuccess = () => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        router.push("/thanks");
      }, 5000);
    };

    const hasSucceeded = () =>
      root.getAttribute("data-ff-stage") === "success" ||
      root.classList.contains("fd-has-success") ||
      Boolean(root.querySelector(".fd-has-success, .fd-form-success[style*='block']"));

    const observer = new MutationObserver(() => {
      if (hasSucceeded()) redirectAfterSuccess();
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-ff-stage", "class"],
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [router]);

  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>(`${ROOT_SELECTOR} form[data-ff-el="form"]`);
    if (!form) return;

    const saveLeadDetails = () => {
      const getValue = (selector: string) =>
        form.querySelector<HTMLInputElement>(selector)?.value.trim() ?? "";

      const details = {
        name: getValue('input[name="firstName"]'),
        email: getValue('input[name="email"]'),
        whatsapp: getValue('input[name="fields.whatsapp"]'),
        business: getValue('input[name="fields.businessName"]'),
        website: getValue('input[name="fields.websiteFacebookLink"]')
      };

      window.sessionStorage.setItem("consultationLeadDetails", JSON.stringify(details));
    };

    form.addEventListener("submit", saveLeadDetails);

    return () => form.removeEventListener("submit", saveLeadDetails);
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <link rel="preload" href="https://assets.flodesk.com/futura-pt.css" as="style" />
      <link rel="stylesheet" href="https://assets.flodesk.com/futura-pt.css" />
      <link rel="preload" href="https://use.typekit.net/knf1lko.css" as="style" />
      <link rel="stylesheet" href="https://use.typekit.net/knf1lko.css" />
      <link rel="preload" href="https://assets.flodesk.com/flodesk-sans.css" as="style" />
      <link rel="stylesheet" href="https://assets.flodesk.com/flodesk-sans.css" />
      <Script id="flodesk-loader" strategy="afterInteractive">
        {`
          (function(w, d, t, h, s, n) {
            w.FlodeskObject = n;
            var fn = function() {
              (w[n].q = w[n].q || []).push(arguments);
            };
            w[n] = w[n] || fn;
            var f = d.getElementsByTagName(t)[0];
            var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
            var sm = d.createElement(t);
            sm.async = true;
            sm.type = 'module';
            sm.src = h + s + '.mjs' + v;
            f.parentNode.insertBefore(sm, f);
            var sn = d.createElement(t);
            sn.async = true;
            sn.noModule = true;
            sn.src = h + s + '.js' + v;
            f.parentNode.insertBefore(sn, f);
          })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
        `}
      </Script>
      <Script id="flodesk-handle" strategy="afterInteractive">
        {`
          window.fd('form:handle', {
            formId: '6a23e2429ababa57f8e3f674',
            rootEl: '.ff-6a23e2429ababa57f8e3f674',
          });
        `}
      </Script>

      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-normal text-ruby">Book the Call</p>
        <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
          Book Your FREE 1:1 Consultation Call
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-700">
          Fill up the form below and we&apos;ll contact you with the next steps.
        </p>
      </div>

      <div
        className={`${ROOT_CLASS} mt-8`}
        data-ff-el="root"
        data-ff-version="3"
        data-ff-type="inline"
        data-ff-name="inlineNoImage"
        data-ff-stage="default"
      >
        <div
          data-ff-el="config"
          data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjpmYWxzZSwiZ2RwciI6eyJhY2NlcHRzTWFya2V0aW5nIjpmYWxzZSwicHJpdmFjeVBvbGljeSI6eyJlbmFibGVkIjpmYWxzZSwibWFuZGF0b3J5IjpmYWxzZX19LCJ0cmFja2luZ0NvbmZpZyI6eyJtZXRhUGl4ZWxJZCI6IiIsImNvb2tpZUJhbm5lckVuYWJsZWQiOmZhbHNlLCJnb29nbGVBbmFseXRpY3NJZCI6IiJ9fQ=="
          style={{ display: "none" }}
        />

        <div className={`${ROOT_CLASS}__container rounded-[8px] border border-rose-100 bg-white shadow-glow`}>
          <div className={`${ROOT_CLASS}__wrapper`}>
          <form
            className={`${ROOT_CLASS}__form w-full p-5 sm:p-7`}
            action="https://form.flodesk.com/forms/6a23e2429ababa57f8e3f674/submit"
            method="post"
            data-ff-el="form"
          >
            <div className={`${ROOT_CLASS}__title hidden`}>
              <div style={{ wordBreak: "break-word" }}>
                <div data-paragraph="true">Free 1:1 Consultation Call</div>
              </div>
            </div>
            <div className={`${ROOT_CLASS}__subtitle hidden`}>
              <div style={{ wordBreak: "break-word" }}>
                <div data-paragraph="true">
                  Book a FREE Digital Marketing Consultation Call with me and get a customized
                  digital marketing strategy for your business!!!
                </div>
              </div>
            </div>
            <div className="fd-form-content" data-ff-el="content">
              <div className="grid gap-5 sm:grid-cols-2" data-ff-el="fields">
                <FlodeskField
                  id={`ff-${FORM_ID}-firstName`}
                  label="First name"
                  name="firstName"
                  placeholder="First name"
                  tab="firstName::email"
                />
                <FlodeskField
                  id={`ff-${FORM_ID}-email`}
                  label="Email address"
                  name="email"
                  placeholder="Email address"
                  tab="email:firstName:fields.whatsapp"
                  required
                />
                <FlodeskField
                  id={`ff-${FORM_ID}-Y2QfhjHY2w`}
                  label="WhatsApp Number"
                  name="fields.whatsapp"
                  type="tel"
                  placeholder="WhatsApp Number"
                  tab="fields.whatsapp:email:fields.businessName"
                  required
                />
                <FlodeskField
                  id={`ff-${FORM_ID}-bUgRUIpSrp`}
                  label="Business Name"
                  name="fields.businessName"
                  placeholder="Business Name "
                  tab="fields.businessName:fields.whatsapp:fields.websiteFacebookLink"
                  required
                />
                <div className="sm:col-span-2">
                  <FlodeskField
                    id={`ff-${FORM_ID}-pvR3qu4ZUr`}
                    label="Website or Facebook Page Link"
                    name="fields.websiteFacebookLink"
                    placeholder="Website or Facebook Page Link"
                    tab="fields.websiteFacebookLink:fields.businessName:submit"
                    required
                  />
                  <div className="mt-2 rounded-[8px] bg-porcelain px-4 py-3 text-xs leading-5 text-zinc-600">
                    <p className="font-bold text-ink">How to add your link:</p>
                    <p className="mt-1">
                      On mobile, open your website or Facebook business page, tap Share,
                      choose Copy Link, then paste it here.
                    </p>
                    <p className="mt-1">
                      On laptop, open your page, copy the link from the top of your browser,
                      then paste it here.
                    </p>
                    <p className="mt-1">Example: https://facebook.com/yourbusinesspage</p>
                    <p className="mt-1 font-semibold text-ruby">
                      If you do not have a website or Facebook page yet, write: Not yet
                    </p>
                  </div>
                </div>

                <input
                  type="text"
                  maxLength={255}
                  name="confirm_email_address"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-zinc-600">
                <Lock className="h-4 w-4 text-gold" aria-hidden="true" />
                We respect your privacy. No spam.
              </div>

              <div className="mt-5" data-ff-el="footer">
                <button
                  type="submit"
                  className="fd-btn focus-ring inline-flex h-14 w-full items-center justify-center gap-2 rounded-[8px] bg-ruby px-6 text-base font-bold text-white shadow-glow transition hover:bg-[#a80f30] disabled:cursor-not-allowed disabled:opacity-70"
                  data-ff-el="submit"
                  data-ff-tab="submit"
                >
                  <div><span data-draw-element="editable">Submit &amp; Book My Free Call</span></div>
                  <Send className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="fd-form-success rounded-[8px] bg-porcelain p-5 text-center" data-ff-el="success">
              <p className="text-lg font-bold text-ink">Thank you. Your details were submitted.</p>
              <p className="mt-2 text-sm leading-6 text-zinc-700">
                Please wait a moment while we take you to the next page.
              </p>
            </div>
            <div className="fd-form-error mt-4 text-sm font-semibold text-ruby" data-ff-el="error" />
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlodeskField({
  id,
  label,
  name,
  placeholder,
  required,
  tab,
  type = "text"
}: {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  tab: string;
  type?: string;
}) {
  return (
    <div className={`${ROOT_CLASS}__field fd-form-group`}>
      <input
        id={id}
        className={`${ROOT_CLASS}__control fd-form-control focus-ring mt-2 h-12 w-full rounded-[8px] border border-zinc-300 bg-white px-4 text-sm text-ink transition placeholder:text-zinc-400 hover:border-zinc-400`}
        type={type}
        maxLength={255}
        name={name}
        placeholder={placeholder}
        data-ff-tab={tab}
        required={required}
      />
      <label htmlFor={id} className={`${ROOT_CLASS}__label fd-form-label text-sm font-bold text-ink`}>
        <div>
          <div>
            {label}
            {required ? <span className="text-ruby"> *</span> : null}
          </div>
        </div>
      </label>
      <div className="fd-form-feedback mt-2 text-sm font-medium text-ruby" />
    </div>
  );
}
