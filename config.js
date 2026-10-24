/* Salama Check-In: settings. Edit this file, nothing else, to connect your own database.
   BACKEND "demo"     = everything stays in this browser (for practice and training).
   BACKEND "supabase" = answers go to your database. Fill in the two Supabase values below. */
window.SALAMA_CONFIG = {
  BACKEND: "demo",
  SUPABASE_URL: "https://YOUR-PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "YOUR-ANON-PUBLIC-KEY",

  STUDY_NAME: "Salama Check-In pilot (NDU-Kenya, Defence College of Health Sciences)",
  APP_VERSION: "1.1.0",
  PROTOCOL_VERSION: "P1.0",            // change this whenever you change a question or rule, and record it in the Change log

  // Unit and group codes shown in the app. They are group labels, never names of people.
  UNITS: [
    { code: "DCHS-APP", label: "DCHS applicant (selection stage)" },
    { code: "DCHS-STU", label: "DCHS student (admitted)" },
    { code: "UNIT-A",   label: "Pilot unit A" },
    { code: "UNIT-B",   label: "Pilot unit B" },
    { code: "OTHER",    label: "Other or not sure" }
  ],

  // false = interviewers and the selection panel see nothing. Set true ONLY if the ethics committee and DCHS governance approve the
  // colour look-up. It changes the wording shown to applicants. The database role "interviewer" must also be granted (04_make_staff.sql).
  INTERVIEWER_COLOUR: false,

  // Optional AI guide. Leave "" to use the on-phone guide only (nothing leaves the phone). To use an AI model, deploy
  // database/edge_ai_guide.ts as a Supabase Edge Function and paste its URL here. Do this only with ethics and data-protection approval:
  // what people type is sent to an AI provider outside the phone.
  // Phone number of the nurse call-back phone for the "No data or signal?" text card. Leave "" to hide it.
  NURSE_SMS: "",
  AI_ENDPOINT: "",

  // Referral and contact buttons shown under "Get help". Each can have tel, whatsapp (digits with country code) and sms.
  // Fill these in with your confirmed local contacts before go-live. hours and note are free text.
  REFERRALS: [
    { label: "DCHS student support office", note: "Add the confirmed number before go-live", hours: "Weekdays", tel: "", whatsapp: "", sms: "" },
    { label: "Chaplain", note: "Add the confirmed number before go-live", tel: "", whatsapp: "" },
    { label: "Welfare officer", note: "Money, housing, family. Add before go-live", tel: "", whatsapp: "" }
  ],

  CALLBACK_HOURS_HIGH: 8,              // target for same-day requests
  CALLBACK_DAYS_ROUTINE: 7,            // target for routine requests

  // Switch off any question if ethics or legal review asks you to. Use the item id from docs/codebook.csv.
  // Example: DISABLED_ITEMS: ["fm_lost", "sec_id"]
  DISABLED_ITEMS: [],

  // Local contacts: fill in before go-live (nurse line, chaplain, welfare office, duty officer).
  LOCAL_CONTACTS: [
    { label: "Pilot nurse line", note: "Add the number before go-live", value: "to be added" }
  ],
  // National lines. Confirm every number and hours with the provider before go-live.
  NATIONAL_LINES: [
    { label: "Police and emergency", note: "Confirm before go-live", tel: "999", value: "999 or 112" },
    { label: "Gender violence helpline (free)", note: "Confirm before go-live", tel: "1195", value: "1195" },
    { label: "Kenya Red Cross counselling (free)", note: "Confirm before go-live", tel: "1199", value: "1199" },
    { label: "National mental health line", note: "Confirm before go-live", tel: "1190", value: "1190" },
    { label: "Befrienders Kenya", note: "Confirm before go-live", tel: "+254722178177", value: "+254 722 178 177" },
    { label: "Child helpline", note: "For anyone under 18. Confirm before go-live", tel: "116", value: "116" }
  ]
};
