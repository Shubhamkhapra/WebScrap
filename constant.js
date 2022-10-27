exports.FREELANCE_REQUEST_STATUS = {
    NEW: 1,
    ACTIVE: 2,
    SUBMITTED: 3,
    REVISION: 4,
    ACCEPTED: 5,
    REJECTED: 6,
    PULLED_OFF: 7,
    ASSIGNED: 8,
    JUMP_STATUS: 99, // Makeshifter
  };
  exports.REQUEST_STATUS = {
    NEW: "NEW",
    QUEUED: "QUEUED",
    IN_PROGRESS: "IN PROGRESS",
    // SUBMITTED: 3,
    // REVISION: 4,
    // ACCEPTED: 5,
    // REJECTED: 6,
    // PULLED_OFF: 7,
    // ASSIGNED: 8,
  };
  
  exports.NOTIFICATION_TEXT = {
    1: "has assigned a new task ",
    2: "accepted",
    3: "submitted deliverable for",
    4: "has requested revision for task",
    5: "Your submission for task request_title has been accepted. Congratulations!",
    6: "rejected on",
    7: "reassigned to someone else.",
  };
  
  exports.SCALENUT_NOTIFICATION_ID = process.env.NODE_ENV === "test" ? 734 : 765;
  
  exports.CONTENT_TABLE = process.env.NODE_ENV === "test" ? 238 : 489;
  
  exports.FREELANCER_TYPE = {
    CONTENT_EDITOR: 1,
    GRAPHIC_EDITOR: 2,
    WRITER: 3,
    DESIGNER: 4,
  };
  
  exports.GENERATE_LIMIT = {
    PER_MINUTE: 500,
    PER_HOUR: 2000,
    PER_DAY: 2000,
  };
  
  exports.QUALITY_LIMIT = 25;
  
  exports.IMAGE_BASE_URL = {
    BEST: "https://scalenut.s3.us-east-2.amazonaws.com/best/",
    AVERAGE: "https://scalenut.s3.us-east-2.amazonaws.com/average/",
    SMALL: "https://scalenut.s3.us-east-2.amazonaws.com/small/",
  };
  
  exports.USER_COUNTRY = {
    INDIAN: "+91",
    INDIAN_BY_NAME: "india"
  };
  
  exports.VARIANT_UNIT_TYPES = {
    NOTHING_TO_SHOW: 0,
    NO_OF_PIECES: 1,
    NO_OF_WORDS: 2,
    NO_OF_SECONDS: 3,
  };
  
  exports.UPDATE_REQUEST_TEXT = {
    EDD_TEXT: "Expected Delivery Date update to",
    LDD_TEXT: "Last Delivery Date updated to",
    FDD_TEXT: "First Delivery Date updated to",
    NAME_CHANGE_TEXT: "Request name changed to",
  };
  
  exports.REQUEST_TAGS = {
    ALL_DONE: null,
    PENDING_REQ_PAY: 0,
    PENDING_REQ: 1,
    PENDING_PAYMENT: 2,
  };
  exports.TRANSACTION_TYPE = {
    REQUEST: 1,
    WALLET: 2,
    SUBSCRIPTION: 3,
  };
  exports.TRANSACTION_REQUEST_TYPE = {
    REQUEST: 0,
    RECHARGE: 1,
    REFUND: 3,
    PLAN_UPGRADE: 4,
    FAILED: 5,
    MONTHLY_QOUTA: 6,
  };
  exports.TRANSACTION_CLIENT_TYPE = {
    BUSINESS_TEAM: 1,
    USER_WITH_PLAN: 2,
    USER_SELF: 3,
  };
  exports.TRANSACTION_STATUS = {
    SUCCESS: 1,
    FAILED: 0,
  };
  exports.TRANSACTION_MESSAGES = {
    WALLET_RECHARGE: `Wallet Recharge`,
    PROMOTIONAL_CREDITS: `Promotional Credits`,
  };
  exports.PLANS = {
    CUSTOM: "Elite (custom)",
  };
  
  exports.USERS = {
    ADMIN: "admin",
    MANAGER: "account_manager",
    FREELANCER: "free_lancer",
    USER: "user",
  };
  exports.GSTVALUE = 118; // This is calculaation and if GST value changes replace 18with new gst value
  
  exports.RECHARGE_AMOUNT = {
    MIN_AMOUNT_RS: 2000000,
    MAX_AMOUNT_RS: 5000000,
  
    MIN_AMOUNT_DOLLAR: 39900,
    MAX_AMOUNT_DOLLAR: 79900,
  };
  
  exports.ABILITY = {
    ENABLE: "ENABLE",
    DISABLE: "DISABLE",
  };
  
  exports.STAGES_STATUS = {
    NOTHING: 0,
    ASSIGN_FREELANCER: 1,
    SUBMIT_TO_CLIENT: 2,
  };
  exports.ACCEPTED_LOG_STAGES = [
    2,
    3,
    4, //v 1
    12,
    13, //v 2
    19,
  ];
  exports.CREATORS_STATUS = {
    NOT_ASKED: 0,
    GRANTED: 1,
    ASKED: 2,
    BLOCKED: 3,
  };
  
  exports.SUBSCRIPTION_TYPES = {
    FREE: 1,
    INDIVIDUAL_MONTH: 2,
    INDIVIDUAL_ANNUAL: 3,
    INDIVIDUAL_LIFETIME: 4,
    GROWTH_MONTH: 5,
    GROWTH_ANNUAL: 6,
    GROWTH_LIFETIME: 7,
    PRO_MONTH: 8,
    PRO_ANNUAL: 9,
    PRO_LIFETIME: 10,
  };
  
  exports.SAMPLE_REPORT_ID = {
    REPORT_ID: process.env.NODE_ENV === "test" ? 5951 : 1680,
    REPORT_TEXT:
      process.env.NODE_ENV === "test" ? "Keto Diet" : "Keto Diet",
    REPORT_HASH: process.env.NODE_ENV === "test" ? "4c84380e-8346-421f-a4c4-bbc1fd84eaf6" : "9fae1440-bc7f-46b4-a7dd-542427d8a771",
  };
  exports.ACCESS_CODES = {
    EDIT_ACCESS_CODE: "56vge87e348",
    READ_ACCESS_CODE: "kj8jd9r9do",
  };
  
  exports.SEO_REVISION_DURATION = 15; //Seo revison duration is in minutes
  exports.SEO_REVISION_CHARACTER = 100; // Seo revision minimum character for revision
  
  exports.GENERATE_CONSTANTS = {
    MINIMUM_RESPONSES: 2,
    MAXIMUM_OPEN_API_HIT: 3,
  };
  
  exports.SERP_EXCLUDE_WEBSITES = `+-inurl:*.youtube.*`;
  
  exports.COMPETITOR_WORD_LIMIT = 50;
  
  exports.URL_NOT_PROCESSED_COUNT = 9;
  exports.LIMIT_EXHAUSTED = "Limit Exhausted";
  exports.PLAN_EXPIRED = "Plan Expired";
  // exports.WATSON_ERROR = "Could not process. This can happen if the language of the top-ranking content is not English."
  // exports.SERP_ERROR = "Could not process. This can happen if our engine could not find search results against the key term."
  
  exports.SEO_REPORT_STATUS = {
    PROCESSING: 0,
    COMPLETED: 1,
    FAILED: 2,
    NOT_PROCESSED: 3,
    SAMPLE_REPORT: 4,
    DELETED: 5,
  };
  
  exports.SEO_REPORT_ARCHIVED_STATUS = {
    DELETED: 1,
    RESTORED: 0
  }
  
  exports.SAMPLE_REPORT_USER = process.env.NODE_ENV === "test" ? 2031 : 2941;
  
  exports.ZOHO_TAGS = {
    SIGNUP_CONVERSION: "SignupConversion",
    LTD_USER: "LtdUser",
    PAYING_SUBSCRIBER: "PayingSubscription",
    CHURNED_USER: "ChurnedUser",
  };
  
  exports.SIGNUP_MODE_TAGS = {
    1: "signupMode1",
    2: "signupMode2"
  }
  
  exports.ZOHO_SIGNUP_MODE_LIST = ["signupMode1", "signupMode2"]
  
  exports.INTERCOM_TAGS = {
    NEW_USER: "5829366",
    LTD_USER: "5829391",
    PAYING_SUBSCRIBER: "5836687",
    CHURNED_USER: "5829397",
    VERIFIED_USER: "6435542"
  };
  
  exports.INTERCOM_SIGNUP_MODE_TAGS = {
    1: "6963568",  // signup mode 1
    2: "6963575"  // signup mode 2
  }
  
  exports.INTERCOM_SIGNUP_MODE_LIST = ["6963568", "6963575"]
  
  exports.REPORT_FAIL_MESSAGE = {
    WATSON_ERROR: 1, // "Could not process. This can happen if the language of the top-ranking content is not English."
    SERP_ERROR: 2, // "Could not process. This can happen if our engine could not find search results against the key term."
    WATSON_GENERIC_ERROR: 3, // Technical Error. Please contact support via Chat to get it resolved. Thanks
  };
  
  exports.SUPERADMIN_PLAN_ACTION = {
    COUPON_EXPIRE: 1,
    SUBSCRIPTION_ADD: 2,
    SUBSCRIPTION_UPDATE: 3,
  };
  exports.INVITE_STATUS = {
    ACCEPTED: 1,
    PENDING: 2,
    DELETED: 3,
    DECLINED: 4,
    EXPIRED: 5
  };
  
  exports.URL_FE =
    process.env.NODE_ENV === "test"
      ? `https://appscalenut.web.app/`
      : `https://app.scalenut.com/`;
  
  
  exports.GPU_SERVER =
    process.env.NODE_ENV === "test"
      ? `http://54.234.161.101:5001` : `http://172.31.25.118:5000`;
  
  
  exports.WATSON_ERR_MESSAGE = `Technical Error. Please contact support via Chat to get it resolved. Thanks`;
  exports.LANGUAGE_ERR_MESSAGE = `Could not process. This can happen if the language of the top-ranking content is not English.`;
  exports.DELETED_REPORT_ERROR = `This SEO Report has been archived. Kindly restore it from Archive section.`
  
  exports.CREDIT_COST_INR = {
    SEO_REPORT: 150,
    LONG_FORM_AI: 0.15,
    SHORT_FORM_AI: 0.15,
    AI_WORDS: 0.15,
    CLUSTERS: 150
  };
  
  exports.CREDIT_COST_USD = {
    SEO_REPORT: 2,
    LONG_FORM_AI: 0.002,
    SHORT_FORM_AI: 0.002,
    AI_WORDS: 0.002,
    CLUSTERS: 2
  };
  
  exports.MINIMUM_WALLET_BALANCE = {
    USD: 2,
    INR: 150,
  };
  
  exports.CREDIT_TYPE = {
    SEO_REPORT: 1,
    LONG_FORM_AI: 2,
    SHORT_FORM_AI: 3,
    AI_WORDS: 4,
    CLUSTERS: 5
  };
  
  exports.COST_PER_WORD_USD_LF = 0.01;
  
  exports.SOFTWARE_TOOL_TYPE = {
    MARKET_PLACE: 1,
    SEO_ASSISTANT: 2,
    LONG_FORM_AI: 3,
    SHORT_FORM_AI: 4,
    AI_WORDS: 5,
    CLUSTERS: 6
  };
  exports.SOFTWARE_TOOL_TYPE_QUOTA = {
    1: `Market place`,
    2: `Seo Report Quota`,
    3: `Long Form AI Quota`,
    4: `Short Form AI Quota`,
    5: `AI words Quota`
  };
  
  exports.DEDUCTION_MESSAGE = {
    REPORT_DEDUCTION: "Report Deduction",
    LONG_FORM_DEDUCTION: "Long Form Deduction",
    SHORT_FORM_DEDUCTION: "Short Form Deduction",
    AI_WORDS_DEDUCTION: "AI words Deduction",
    CLUSTER_DEDUCTION: "Cluster Deduction"
  };
  
  exports.MONTHLY_QOUTA_MESSAGE = `Monthly Quota`;
  exports.NOT_ENOUGH_BALANCE = "Monthly Quota exhausted , low balance";
  exports.CHARGE_FROM_CREDIT =
    "Monthly Quota exhausted, usage will be charged from credit";
  
  exports.PLAN_CATEGORY = {
    TRIAL_PERIOD: 1,
    INDIVIDUAL: 2,
    GROWTH: 3,
    UNLIMITED: 4,
    FREE_FOREVER: 5,
    TEAM_MEMBER: 6,
  };
  
  exports.EMAIL_SENT_JSON = JSON.stringify([
    {
      report: 0,
      long_ai: 0,
      short_ai: 0,
    },
  ]);
  
  exports.PERCENTAGE_VALUE_NLP_IMPORTANACE = {
    10: {
      PERCENTAGE: 2.0,
      LOGIT_BIAS_VALUE: 4,
    },
    9: {
      PERCENTAGE: 1.6,
      LOGIT_BIAS_VALUE: 3.6,
    },
    8: {
      PERCENTAGE: 1.2,
      LOGIT_BIAS_VALUE: 3.2,
    },
    7: {
      PERCENTAGE: 0.8,
      LOGIT_BIAS_VALUE: 2.8,
    },
    6: {
      PERCENTAGE: 0.8,
      LOGIT_BIAS_VALUE: 2.4,
    },
    5: {
      PERCENTAGE: 0.4,
      LOGIT_BIAS_VALUE: 2.0,
    },
    4: {
      PERCENTAGE: 0.3,
      LOGIT_BIAS_VALUE: 1.6,
    },
    3: {
      PERCENTAGE: 0.2,
      LOGIT_BIAS_VALUE: 1.2,
    },
    2: {
      PERCENTAGE: 0.1,
      LOGIT_BIAS_VALUE: 0.8,
    },
    1: {
      PERCENTAGE: 0.0,
      LOGIT_BIAS_VALUE: 0,
    },
    0: {
      PERCENTAGE: 0.0,
      LOGIT_BIAS_VALUE: 0,
    },
  };
  
  let SERP_TYPE = {
    1: `https://serpapi.com/search.json?engine=google&api_key=3D80321F274641A780D83B9F3D9DEE4D&`, // serp api
    2: `https://api.valueserp.com/search?api_key=3D80321F274641A780D83B9F3D9DEE4D&`, // value serp
  };
  // let SERP_TYPE = {
  //   1: `https://serpapi.com/search.json?engine=google&api_key=c86234780db752feeb820818f5b1cc7bb1024f98796fea874f8fdebe9b3b6f2b&`, // serp api
  //   2: `https://api.valueserp.com/search?api_key=c86234780db752feeb820818f5b1cc7bb1024f98796fea874f8fdebe9b3b6f2b&`, // value serp
  // };
  
  exports.SERP_CHOICE = SERP_TYPE[2];
  exports.SERP_API = SERP_TYPE[1];
  exports.INTERNAL_SERVER_ERROR = "Internal server error!";
  
  exports.SUBSCRIPTION_PLAN = {
    TRIAL_PERIOD: 1,
    FREE_FOREVER: 24,
    FREE_FOREVER_INR: 26,
  };
  
  exports.SUBS_PERMIT_CATEGORY = {
    WRITE_FOR_ME: [],
    INSTRUCT: [2, 5],
    AI_SETTINGS: [2, 5],
    PARAPHRASING: [2, 5],
    SERP_FACTS: [2, 5],
  };
  
  exports.FEATURE_TYPE = {
    WRITE_FOR_ME: 1,
    INSTRUCT: 12,
    AI_SETTINGS: 3,
    PARAPHRASING: 4,
    SERP_FACTS: 5,
    CRUISE_MODE: 6
  };
  
  exports.SUBS_TYPES = {
    PLANS: 1,
    TEAM_MEMBERS: 2,
  };
  
  exports.MEMBER_PLAN = {
    TEAM_MEMBER: 25,
  };
  exports.CATEGORY_PROMO_CHECK = [2, 5]; // 2=individual, 5=Free Forever plan
  exports.NO_PROMO_CREDITS_ERROR =
    "Please upgrade to higher plan to continue using services outside monthly quota.";
  exports.PREV_SUBS_USERS =
    process.env.NODE_ENV === "test" ? [687, 2338] : [7862, 7919, 8117]; // 8117= copy@leapfinance.com, 7919 = caitlin.johnson151@gmail.com, 7862 = xinxuandtc@gmail.com
  
  exports.ADMIN_ERROR = "You are not authorized to use this service!";
  
  exports.TRIAL_PERIOD_LIMIT = {
    SEO_REPORT: 2,
    TOTAL_AI_LIMIT: 400,
    TOTAL_CLUSTER_LIMIT: 5
  };
  
  exports.TRIAL_QUOTA_EXHAUST =
    "Alert! Daily Limit Reached in Trial Period. To remove daily limits, upgrade to a plan.";
  
  exports.SUBSCRIPTION_PLAN_TYPE = {
    MONTHLY: 1,
    ANNUALLY: 2,
    LTD: 3,
  };
  
  exports.MEMBER_NOT_ALLOWED = "Please contact your admin.";
  exports.INVALID_REPORT_ID = "Please provide valid report_id.";
  exports.INVALID_DOCUMENT_ID = "Please provide valid document id.";
  exports.DISPOSABLE_EMAIL_ERR = "Disposable Emails are not allowed.";
  exports.MISSING_REPORT_ID = "Report Id is not valid";
  exports.MISSING_DOCUMENT_ID = "document Id is not valid";
  exports.OPEN_AI_ENGINE = {
    curie: "text-curie-001",
    davinci: "text-davinci-001",
  };
  
  exports.PROMO_CODE = process.env.NODE_ENV === "test" ? "qfblEjcS" : "pQPkytIR";
  
  exports.USER_STATUS = {
    TOKEN_EXPIRE: 0,
    LOGIN: 1,
    LOGOUT: 2,
  };
  exports.SIGNOUT_PROMPT =
    "Session expired. Please login again to continue.";
  
  exports.ON_BOARDING = [
    {
      text: "Getting Started with Scalenut",
      items: [
        {
          id: 4,
          name: "Cruise Mode",
          headline: "Create Blog in under 5 minutes with",
          status: 0,
          link: "https://www.youtube.com/embed/brUzgJgFGTs?list=PLo9RZbV81QoQRJ_2YPIDIvr8_-pDqbsFQ",
          mainText: "Your wish is AI's command. Get your blog's first draft within 5 minutes! Just build an outline and generate writing points for all your headings, to get well-written blog paragraphs. It's that easy!"
        },
        {
          id: 3,
          name: "SEO Research Report",
          headline: "Generate",
          status: 0,
          link: "https://www.youtube.com/embed/krfPAlmZsTo?list=PLo9RZbV81QoQRJ_2YPIDIvr8_-pDqbsFQ",
          mainText: "View all SEO data of your search in one place! The Report shows you insights on your top-ranking competitors' blogs. Coupled with a customised list of themes and NLP terms, you get an edge over the rest!",
          actionText: "Create Your First SEO Doc",
        },
        {
          id: 2,
          name: "AI Tools",
          headline: "Explore",
          status: 0,
          link: "https://www.youtube.com/embed/U6Ippd8IIe0?list=PLo9RZbV81QoQRJ_2YPIDIvr8_-pDqbsFQ",
          mainText: "Create content that is consistent in quality with our AI Toolbar options. Let AI Connectors take charge of keeping the piece going when you run out of ideas. Unlock a world of new features like SERP ideas generator for publishing well-rounded content!",
          actionText: "Hit Up the AI Toolbar",
        },
        {
          id: 1,
          name: "AI Templates",
          headline: "Use",
          status: 0,
          link: "https://www.youtube.com/embed/6VOfdDqQ8jI?list=PLo9RZbV81QoQRJ_2YPIDIvr8_-pDqbsFQ",
          mainText: "Take the guesswork out of writing by choosing from over 40 AI templates generating ready-to-use content for every niche. Simply select a template, fill in the information, and hit 'Generate Content.'",
          actionText: "Try a Template",
        },
        {
          id: 5,
          name: "Content Grade",
          headline: "Improve Quality with",
          status: 0,
          link: "https://www.youtube.com/embed/AZIfqjhMS3Y?list=PLo9RZbV81QoQRJ_2YPIDIvr8_-pDqbsFQ",
          mainText: "Simply putting out content is not enough. It is necessary to assess your quality as well. With 'Content Grade' you reach an AI-suggested grade at which you are sure to deliver better content to your readers.",
          actionText: "Evaluate Your Quality",
        },
        {
          id: 6,
          name: "Topic Clusters",
          headline: "Plan your content strategy with",
          status: 0,
          link: "https://www.youtube.com/embed/tqPZIOwWOzw",
          mainText: `It is not sufficient to merely publish content. Obtaining topical authority in your field is also essential. With the help of "Topic Clusters," you can bundle semantically related keywords into clusters and write about each cluster to gain topical authority.`,
          actionText: "Get Started",
        },
      ],
    },
  ]
  exports.video_preferences = '{ "template": { "link": "https://www.youtube.com/embed/6VOfdDqQ8jI", "status": 1 }, "seo": { "link": "https://www.youtube.com/embed/qDZKaOtvLHs", "status": 1 }, "cluster": { "link": "https://www.youtube.com/embed/tqPZIOwWOzw", "status": 1 }, "docs": { "link": "https://www.youtube.com/embed/j_h8t_yGBdg", "status": 1 } }'
  
  exports.DOCUMENT_STATUS = {
    ACTIVE: 1,
    DELETE: 0
  }
  
  exports.ACHIEVEMENT_UNLOCKED = {
    AI_TEMPLATE: 1,
    AI_TOOLBAR: 2,
    SEO_REPORT: 3,
    CRUISE_MODE: 4,
    CONTENT_GRADE: 5,
    CLUSTER: 6
  }
  exports.EXCLUDE_GENERATE_VARIANTS_COLUMNS = ["id", "useCase", "created_at", "updated_at", "isTitleRequired"];
  
  exports.LOGS_EMAIL_LIST = ["saurabh@scalenut.com", "gaurav@scalenut.com", "ankit.sharma@scalenut.com", "mayank@scalenut.com", "shreyanshi.gupta@scalenut.com"]
  exports.EMAIL_SUBJECTS = {
    INVITE_ACCEPTED: "Scalenut Invitation Accepted by (name).",
    INVITE_DECLINED: "Scalenut Invitation Declined by (name)",
    INVITE_REMINDER: "Scalenut Invitation Reminder by (name).",
    INVITE_EXPIRED: "Scalenut Invite for (name) has Expired."
  }
  
  exports.EMAIL_TEXTS = {
    INVITE_ACCEPTED: "(name) has accepted invitation sent by you for your Scalenut account.",
    INVITE_DECLINED: "(name) has Declined invitation sent by you for your Scalenut account.",
    INVITE_REMINDER: "Invitation link for (name) on your Scalenut account will expire in next 3 days.",
    INVITE_EXPIRED: "Invitation link for (name) on your Scalenut account has expired. You may re-add the team member or add someone else on the available seat in your account."
  }
  
  exports.NEW_RELIC_EVENT_NAME = {
    OPEN_AI: "OPEN AI",
    IBM_WATSON: "IBM Watson",
    VALUE_SERP: "VALUE SERP API",
    SERP_API: "SERP API",
    REPORT_CREATION: "Report Creation"
  }
  
  exports.NEW_RELIC_STATUS_CODE = {
    SUCCESS: 200,
    FAILED: 400
  }
  
  exports.NEW_RELIC_STATUS = {
    SUCCESS: "PASS",
    FAILED: "FAILED"
  }
  
  exports.NOT_ALLOWED_CRUISE_MODE = "You are not allowed to use this service!";
  
  exports.IN_PROGRESS_ERR = "Another SEO Report is currently being created. Please wait for it to be completed before requesting a new one."
  exports.IN_PROGRESS_CLUSTER_ERR = "Another CLUSTER is currently being created. Please wait for it to be completed before requesting a new one."
  exports.USER_NOT_FOUND = "user not found!"
  exports.VERIFIED_ERROR = "This email is Already verified!";
  exports.FUGU_WEBHOOK_URL = {
    SUBSCRIPTION_PAGE_VISITORS: "https://chat-api.fuguchat.com/api/webhook?token=4de1ec0a4367b0cf1d6fa5240b85fab1f65ff3fac4f9eb62c719a3926d00da60"
  }
  exports.INVALID_KEYWORD = "Enter a valid keyword";
  exports.INVALID_REQUEST = "Invalid Request";
  exports.NO_KEYWORD_FOUND = "Please provide a valid keyword"
  exports.FAIR_USAGE_LIMIT = {
    AI_WORDS: 2500000
  }
  
  exports.FAIR_USAGE_ERR = `System detected abnormal usage against this account. Please contact support on chat to enable usage on your account. Otherwise, the usage quotas will automatically refresh next month.`
  
  exports.SOCKET_EVENT = {
    USER_ROOM: "user_room",
    DISCONNECT: "disconnect",
    REPORT_CREATED: "report_created",
    REPORT_FAILED: "report_failed",
    TOPIC_CLUSTER_CREATION_SUCCESS: "topic_cluster_creation_success",
    TOPIC_CLUSTER_CREATION_FAILED: "topic_cluster_creation_failed",
    SUBSCRIPTION_PAYMENT_STATUS: "subscription_payment_status"
  }
  
  exports.CLUSTER = {
    cluster: "/cluster",
    NOT_ENOUGH_KEYWORDS: "Not enough SERP data to process this request. Try with some other keyword."
  }
  
  exports.GOOGLE_ENDPOINTS = {
    CREATE_ACCESS_TOKEN: "https://oauth2.googleapis.com/token?refresh_token=1//0guXXEM8TikKnCgYIARAAGBASNwF-L9IrCGE-aBmdyqhrLNn7Q_ua-7DA4l5eomZBKJtaQZDTefklfL88fOeBpAyX7lD1RUcjmc4&client_id=140377556913-vpuoib4fk2kq6lslt85lv1i7d62p2brj.apps.googleusercontent.com&client_secret=ZBGI3WNmy2AOud5yGFwVh4Lo&grant_type=refresh_token",
    GEO_TARGET_CONSTANTS: "https://googleads.googleapis.com/v7/geoTargetConstants:suggest",
    GENERATE_KEYWORDS: "https://googleads.googleapis.com/v7/customers/2073592548:generateKeywordIdeas"
  }
  
  exports.SIGNUP_MODE = {
    NORMAL_WITHOUT_CREDIT_CARD: 1,
    WITH_CREDIT_CARD: 2
  }
  
  exports.BYPASS_USER_FOR_REPORTS =
    process.env.NODE_ENV === "test" ? [3778, 2002] : [35139, 2516];
  
  exports.TOPIC_CLUSTER_STATUS = {
    PROCESSING: 0,
    COMPLETED: 1,
    FAILED: 2,
    DELETED: 3,
    NO_KEYWORD: 4
  }
  
  exports.TOPIC_CLUSTER_ARCHIVED_STATUS = {
    DELETED: 1,
    RESTORED: 0
  }
  
  exports.DEFAULT_LOCATIONS = [
    {
      "name": "United States",
      "full_name": "United States",
      "type": "Country",
      "country_code": "US",
      "reach": 227000000
    },
    {
      "name": "United Kingdom",
      "full_name": "United Kingdom",
      "type": "Country",
      "country_code": "GB",
      "reach": 41400000
    },
    {
      "name": "India",
      "full_name": "India",
      "type": "Country",
      "country_code": "IN",
      "reach": 34620000
    },
    {
      "name": "Canada",
      "full_name": "Canada",
      "type": "Country",
      "country_code": "CA",
      "reach": 22700000
    },
    {
      "name": "Singapore",
      "full_name": "Singapore",
      "type": "Country",
      "country_code": "SG",
      "reach": 4910000
    },
    {
      "name": "Australia",
      "full_name": "Australia",
      "type": "Country",
      "country_code": "AU",
      "reach": 13600000
    },
    {
      "name": "New York",
      "full_name": "New York, United States",
      "type": "State",
      "country_code": "US",
      "reach": 23600000
    },
    {
      "name": "London",
      "full_name": "London, United Kingdom",
      "type": "City",
      "country_code": "GB",
      "reach": 19900000
    }
  ]
  
  exports.PREP_WORDS = ["how", "why", "where", "when", "like", "what", "which", "can", "is", "whome", "whose", "for", "like", "from"]
  exports.PREP_ALPHABETS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  exports.PREP_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  exports.GOOGLE_SUGGESTION_URL = 'http://suggestqueries.google.com/complete/search?output=search&client=chrome&q='
  
  exports.RANK_RANGER_URL = 'https://www.rankranger.com/api/v2/?'
  
  exports.SAMPLE_CLUSTER = process.env.NODE_ENV === "test" ? '45f71dd1-afd6-41de-8329-dad01a27505e' : '6075a22e-afe2-46a0-a608-f49edf59714a';
  
  exports.SAMPLE_REPORT_INFO = {
    clusters: [
      {
        id: process.env.NODE_ENV === "test" ? '1696' : '563',
        hash: process.env.NODE_ENV == 'test' ? "780ce0d1-697f-4337-98fc-c7f9cea19fbc" : "283bea7c-abf0-42a3-8a23-6365faa3891e",
        name: "Keto Diet"
      },
      {
        id: process.env.NODE_ENV === "test" ? '1695' : '564',
        hash: process.env.NODE_ENV == 'test' ? "d36fbc2e-ed52-4073-ba7b-f8cbd2455b9f" : "f7b4a194-a96d-4a34-9318-3d9a4957fb2d",
        name: "Content Marketing"
      },
      {
        id: process.env.NODE_ENV === "test" ? '1698' : '565',
        hash: process.env.NODE_ENV == 'test' ? "33802fd5-14b4-4b84-80f9-fca829fc4b39" : "56657e52-29f3-4ee6-aeab-53270a8273d7",
        name: "Artificial Intelligence"
      },
    ],
    seo: [
      {
        id: process.env.NODE_ENV == 'test' ? '5951' : '100687',
        hash: process.env.NODE_ENV == 'test' ? "4c84380e-8346-421f-a4c4-bbc1fd84eaf6" : "a1d231f9-4cca-4456-b62e-9d45837e7f1e",
        name: "Keto Diet"
      },
      {
        id: process.env.NODE_ENV == 'test' ? '5924' : '100688',
        hash: process.env.NODE_ENV == 'test' ? "43cdbab9-e714-4a50-87f2-1f2e66a04886" : "8906b394-c2d7-474a-8367-26776399f361",
        name: "Content Marketing"
      },
      {
        id: process.env.NODE_ENV == 'test' ? '5926' : '100689',
        hash: process.env.NODE_ENV == 'test' ? "4a120cbe-6ff5-4f93-a6a4-87fa61d297ee" : "b4d9dd16-8393-4603-b2ec-8a5f0966dcc1",
        name: "Artificial Intelligence"
      }
    ],
  }
  
  exports.SENTRY_TAGS_VALUE = {
    SERP_ERROR: "SerpError",
    VALUE_SERP_ERROR: "ValueSerpError",
    WATSON_ERROR: "WatsonError",
    REPORT_CREATE_ERROR: "CreateError",
    OPEN_AI_ERROR: "OpenAIError",
    GENERATE_ERROR: "GenerateError",
    RANK_RANGER_ERROR: "RankRangerError",
    GOOGLE_ERROR: "GoogleError",
    TWIN_WORD_ERROR: "TwinWordError",
    SCALENUT_KEYWEORD_GPU_ERROR: "ScalenutKeywordGpuError",
    CLUSTERING_ENGINE_ERROR: "ClusteringGpuError",
    CLUSTERING_ERROR: "ClusteringError",
    QUICK_EMAIL_VERIFY_ERROR: "QuickEmailVerificationError",
    ZOHO_ERROR: "ZohoError",
    SEMRUSH_ERROR: "SemrushError",
    COPYSCAPE_ERROR: "CopyscapeError",
    UNPLASH_ERROR: "UnsplashError",
    PARAPHRASER_ERROR: "ParaphraserError",
    SIMILARITY_ERROR: "SimilarityError",
    GOOGLE_AUTH_ERROR: "GoogleAuthError",
    USER_COM_ERROR: "UserComError",
  
  }
  
  exports.SENTRY_TAGS = {
    GENERATE: "generate",
    REPORT_CREATE: "keyword_create",
    CLUSTER: "cluster",
    QUICK_EMAIL_VERIFY: "verify_email",
    ZOHO: "zoho",
    SEMRUSH: "semrush",
    COPYSCAPE: "copyscape",
    UNPLASH: "unsplash",
    PARAPHRASER: "paraphraser",
    SIMILARITY: "similarity",
    GOOGLE_AUTH: "google_auth",
    USER_COM: "user_com"
  }
  exports.CRUISE_MODE_SOCKET_EVENTS = {
    PARAGRAPH_GENERATION_SUCCESS: "para_success",
    PARAGRAPH_GENERATION_FAILED: "para_failed",
    INTRO: 'intro',
    CONCLUSION: 'conclusion',
  }
  
  exports.SEGMENT_2_COUNTRIES = ["United States", "United Kingdom", "Australia", "Canada"]
  
  
  exports.INTEGRATION = {
    CONNECTED: 1,
    NOT_CONNECTED: 0
  }
  
  exports.INTEGRATION_APPS = {
    PLAGIARISM: {
      APP_ID: 1,
      DEVELOPER_TYPE: 1
    },
    KEYWORD_RESEARCH: {
      APP_ID: 2,
      DEVELOPER_TYPE: 2
    },
    CLUSTER_BOOSTER: {
      APP_ID: 3,
      DEVELOPER_TYPE: 2
    }
  }
  
  exports.LIMIT_EXCEEDED_MSG = "Total Limit exceeded"
  exports.NO_DATA_FOUND = "No Data Found"
  
  exports.SEMRUSH_ALLOWED_PLAN_CATEGORIES = [1, 3, 4];
  exports.INTEGRATION_USAGE_S3_BUCKET = process.env.NODE_ENV === "test" ? "scalenut-nonprod-copyscape-responses" : "scalenut-prod-copyscape-responses";
  
  exports.NON_ABUSER_COUNTRIES = ["India", "United States", "United Kingdom", "Australia", "Canada"]
  
  exports.RESPONSE_MESSAGES = {
    INVALID_DATA: " Invalid Data",
    FIELDS_UPDATED: "Fields Updated",
    INVALID_EMAIL: "Please enter a valid email address",
    RATE_LIMIT: 'Alert! Wait for some time before using this service again, rate limit exceeded. Feel free to talk to our chat support anytime. Thanks.',
    TECH_ERROR: "Technical Error. Reach out to Chat support for more details.",
    NO_REFERRAL_CODE: "No referral code found.",
    REFERRAL_NOT_ALLOWED: "You cannot enter your own referral code.",
    INVALID_REFERRAL_CODE: "Invalid referral code",
    NOT_ALLOWED_REFERRAL: "You are not allowed to use referral code",
  }
  
  exports.REFERRAL = {
    MODE: {
      REFERRAL_CODE: 1,
      REFERRAL_LINK: 2
    },
  }
  
  exports.CONSTANT_TABLE_KEYS = {
    ACTIVE_DEVICES: "active_device",
    DASHBOARD: "dashboard",
    MINIMUM_VERSION: "minimum_version",
    BASE_URL: "base_url",
    REFRESH_VALUE: "refresh_value",
    REFERRAL_AMOUNT: "referral_amount",
  }
  
  exports.CURRENCY = {
    "inr": 100, // 1 Rs = 100 paise
    "usd": 100, // 1 USD = 100 cents
  }
  
  exports.PLEASE_RECONNECT_SEMRUSH = "Please reconnect your Semrush account";
  exports.TECHNICAL_ERRORS = {
    REQUIRED_COMPANY_ID: "Company id is required"
  }
  
  exports.USER_DOT_COM_TAGS = {
    SIGNUP_CONVERSION: "SignupConversion",
    NEW_USER: "NewUser",
    LTD_USER: "LTDUser",
    PAYING_SUBSCRIBER: "PayingSubscription",
    CHURNED_USER: "ChurnedUser",
    // VERIFIED_USER: "verifiedUser"
  };
  
  exports.USER_COM_SIGNUP_MODE_LIST = ["signupMode1", "signupMode2"]
  
  exports.USER_DOT_COM_EVENTS = {
    SIGNUP_CONVERSION: "signup_conversion",
    NEW_USER: "new_user",
    LTD_USER: "ltd_user",
    PAYING_SUBSCRIBER: "paying_subscription",
    CHURNED_USER: "churned_user",
    SIGNED_UP: "signed_up",
    REFER_SiGN_UP: 'refer_email',
    REFER_SELF_MAIL: 'refer_self_mail',
    REFER_SUB_BUY: 'refer_sub_buy',
    MODE2_TRIAL: "mode2_trial_user",
    
  
  };
  exports.IGNORED_USECASE = 24
  
  exports.CONSTANT_NAMES = {
    TRIAL_PERIOD_LIMIT: "trial_limit"
  }
  
  exports.HTTP_CODES = [400, 402, 403, 404]
  
  exports.OFFLINE_PAYMENTS = "Offline"
  
  exports.RESPONSE_STATUS = {
    VALID: "valid",
    INVALID: "invalid"
  }
  
  exports.BOOLEAN_STATUS = {
    TRUE: 1,
    FALSE: 0
  }
  
  exports.BOOLEAN_STRING = {
    TRUE: "true",
    FALSE: "false"
  }
  
  exports.EXCLUDE_LINK = "youtube"
  
  
  exports.SUPER_ADMIN = {
    DOMAIN: {
      NAME_NOT_ENTER : "Request Domain name is required.",
      NOT_FOUND: "Domain Name Not Found",
      ID_NOT_SELECT: "Domain Id is required",
      DISPOSABLE_VALUE: "Required valid disposable value ",
      DISPOSABLE_UPDATE_SUCCESS: "Successful updated domain disposable"
    },
    USER_STATUS: {
      EMAIL_STATUS_REQUIRED : "Request Email or status value is required",
      STATUS_VALUE_ERROR : "Required valid status value ",
      STATUS_UPDATE_SUCCESS : "Successful updated user status"    
    }
  }
  
  
  exports.SUPER_ADMIN_SUBS_UPDATE = {
    PAID: "Paid",
    PROMOTIONAL: "Promotional",
    NAME_REQUIRED : "Request Subscription Type is required.",
    VALUE_TYPE_ERROR : "Required valid Subscription Type value.",
    SIGNUP_MODE : 2,
    SIGNUP_MODE_UPDATE : 1
    }
  exports.CONSTANT_TABLE_KEYS = {
    ACTIVE_DEVICES : "active_devices",
    DASHBOARD : "dashboard",
    MINIMUM_VERSION : "minimum_version",
    BASE_URL : "base_url",
    REFRESH_VALUE : "refresh_value",
    REFERRAL_AMOUNT : "referral_amount",
    IBM_SUPPORTED_LANGUAGES : "ibm_supported_languages",
    TRIAL_LIMIT : "trial_limit",
    FUGU_URL : "fuguUrl",
    STORE_WRITING_POINTS_USING_PUBLIC_GPU_SERVER : "store_writing_points_using_public_GPU_server"
  }
  
  exports.REPHRASER={
    MINIMUM_WORDS_SELECTED : 2,
    MAXIMUM_SENTENCE_SELECTED : 7
  }
  