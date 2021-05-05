import {
  PreEngagementConfig,
  Translations,
  Configuration,
  MapHelplineLanguage,
} from './types';

const accountSid = 'AC4446284f2248744526e50cb3f135dd7e';
const flexFlowSid = 'FO464670e049a4da4c18939fce0515aa74';
const defaultLanguage = 'en-US';
const captureIp = true;

const translations: Translations = {
  'en-US': {
    MessageInputDisabledReasonHold:
      "We'll transfer you now. Please hold for a counsellor.",
    EntryPointTagLine: 'Chat with us',
    PreEngagementDescription: "Let's get started",
    Today: 'Today',
    InputPlaceHolder: 'Type Message',
    WelcomeMessage: 'Welcome to ChildLine Zambia!',
    Yesterday: 'Yesterday',
    TypingIndicator: 'Counselor is typing',
    MessageCanvasTrayButton: 'Start New Chat',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact',
    StartChat: 'Start Chat!',
  },
  Bemba: {
    MessageInputDisabledReasonHold:
      'Twalamutuma nomba kuli Chimbusa, pembeleni ichimpusa nomba.',
    EntryPointTagLine: 'Landeni naifwe',
    PreEngagementDescription: 'tiyeni twambeko ilyashi',
    Today: 'Lelo',
    InputPlaceHolder: 'Taipeni ilyashi',
    WelcomeMessage: 'Mwaiseni kuli ChildLine Zambia!',
    Yesterday: 'Mailo',
    TypingIndicator: 'Ichimbusa chile taipa ilyashi',
    MessageCanvasTrayButton: 'Yambeni kutaipa ilyashi imbi',
    MessageCanvasTrayContent: '',
    StartChat: 'Yambeni ukulanda mukwai!',
  },
  Tonga: {
    MessageInputDisabledReasonHold:
      'Tulamuswaanganya lino asikuyumya-yumya/sikulaya. Amujatilile notucimuswaanganya.',
    EntryPointTagLine: 'Amubandike andiswe',
    PreEngagementDescription: 'Atukanke/atutalike',
    Today: 'Sunu',
    InputPlaceHolder: "Lemba kang'wadi/kagwalo",
    WelcomeMessage: 'Mwatambulwa ku ChildLine Zambia!',
    Yesterday: 'Jilo',
    TypingIndicator: 'Sikuyumyayumya watalika kulemba',
    MessageCanvasTrayButton: 'Talika mubandi mupya',
    MessageCanvasTrayContent: '',
    StartChat: 'Atubandike!',
  },
  Lunda: {
    MessageInputDisabledReasonHold:
      "Chuna kuitemesha ahembeleliku chanti kundi ankhong'u.",
    EntryPointTagLine: 'Tuhanjiki mwani',
    PreEngagementDescription: 'Tutachikiku',
    Today: 'Lelu',
    InputPlaceHolder: 'Sonekenu Muzhimbu',
    WelcomeMessage: 'Shikenu mwani kuchota cha ChildLine Zambia!',
    Yesterday: 'Haloshi',
    TypingIndicator: "Nkhong'u nakusoneka Muzhimbu",
    MessageCanvasTrayButton: 'Tachikenu kuhanjika',
    MessageCanvasTrayContent: '',
    StartChat: 'Tachikenu kuhanjeka!',
  },
  Nyanja: {
    MessageInputDisabledReasonHold:
      'Chonde tipeleka lamya lanu ku wa uphungu telo dikilani.',
    EntryPointTagLine: 'Lankhulisanani nafe!',
    PreEngagementDescription: 'Tiyeni tiyembe kulankhulisana',
    Today: 'Lelo',
    InputPlaceHolder: 'Lembani zimene zimene mufuna kulemba',
    WelcomeMessage: 'Mwalandilidwa kuno ku ChildLine Zambia!',
    Yesterday: 'Dzulo!',
    TypingIndicator: 'Wauphungu alikulemba!',
    MessageCanvasTrayButton: 'Yambani nkhani ina!',
    MessageCanvasTrayContent: '',
    StartChat: 'Yambani kulankhula!',
  },
  Kaonde: {
    MessageInputDisabledReasonHold:
      'Tusakwimi tuma pembelelai, pacheche ba nkwasho.',
    EntryPointTagLine: 'Isambai natweba',
    PreEngagementDescription: 'Twayayi tutatule',
    Today: 'Lelo',
    InputPlaceHolder: 'Lembayi mulubwe',
    WelcomeMessage: 'Mwaiyayi mwani ku ChildLine Zambia!',
    Yesterday: 'Kesha',
    TypingIndicator: 'Nkwasho wena kunemba',
    MessageCanvasTrayButton: 'Tatulayi kwisamba kipya kipya',
    MessageCanvasTrayContent: '',
    StartChat: 'Twayayi twisambe!',
  },
  Lozi: {
    MessageInputDisabledReasonHold:
      "Luka kuisa ku mwelezi, u libelele hanyani.",
    EntryPointTagLine: 'Alukalise kwa mbola',
    PreEngagementDescription: "A lukaliseni kwa mbola",
    Today: 'Lelo',
    InputPlaceHolder: 'Nola linusa',
    WelcomeMessage: 'Wamuhezwi ku ba ChildLine Zambia!',
    Yesterday: 'Mabani',
    TypingIndicator: 'Mwelezi wa nola',
    MessageCanvasTrayButton: 'Alukalise kwa mbola',
    MessageCanvasTrayContent: '',
    AutoFirstMessage: 'Incoming webchat contact',
    StartChat: 'Alukalise kwa mbola!',
  },
};

const preEngagementConfig: PreEngagementConfig = {
  description: "Let's get started",
  fields: [
    {
      label: 'Select your language',
      type: 'SelectItem',
      attributes: {
        name: 'language',
        required: true,
        readOnly: false,
      },
      options: [
        {
          value: 'English',
          label: '1. English',
          selected: true,
        },
        {
          value: 'Bemba',
          label: '2. Bemba',
          selected: false,
        },
        {
          value: 'Tonga',
          label: '3. Tonga',
          selected: false,
        },
        {
          value: 'Lunda',
          label: '4. Lunda',
          selected: false,
        },
        {
          value: 'Nyanja',
          label: '5. Nyanja',
          selected: false,
        },
        {
          value: 'Kaonde',
          label: '6. Kaonde',
          selected: false,
        },
        {
          value: 'Lozi',
          label: '7. Lozi',
          selected: false,
        }
      ],
    },
  ],
  submitLabel: 'Start Chat!',
};

const memberDisplayOptions = {
  yourDefaultName: 'You',
  yourFriendlyNameOverride: false,
  theirFriendlyNameOverride: false,
  theirDefaultName: 'ChildLine Zambia Counsellor',
}

const mapHelplineLanguage: MapHelplineLanguage = (helpline) => {
  switch (helpline) {
    default:
      return defaultLanguage;
  }
};

export const config: Configuration = {
  accountSid,
  flexFlowSid,
  defaultLanguage,
  translations,
  preEngagementConfig,
  mapHelplineLanguage,
  memberDisplayOptions,
  captureIp,
};