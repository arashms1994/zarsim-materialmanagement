// Configuration file for environment variables
// این فایل متغیرهای محیطی را مدیریت می‌کند

export const config = {
  // Base URL for SharePoint API
  BASE_URL: import.meta.env.VITE_BASE_URL || "https://portal.zarsim.com",

  // SharePoint List GUIDs
  LIST_GUIDS: {
    DARKHAST_MAVAD:
      import.meta.env.VITE_DARKHAST_MAVAD_LIST_GUID ||
      "BECA87A8-2DEC-4929-8E64-2BF675FC081E",
    SUPPLIERS:
      import.meta.env.VITE_SUPPLIERS_LIST_GUID ||
      "C613B477-AD61-4C26-AD72-9222CD073A6D",
    PERSONNEL:
      import.meta.env.VITE_PERSONNEL_LIST_GUID ||
      "47DD699E-D73C-4D3D-82D3-FB30F84C29D7",
  },

  // API Configuration
  API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || "30000"),
  CACHE_STALE_TIME: parseInt(import.meta.env.VITE_CACHE_STALE_TIME || "300000"),

  // Application Settings
  APP_NAME: import.meta.env.VITE_APP_NAME || "Zarsim Material Management",
  VERSION: import.meta.env.VITE_VERSION || "1.0.0",
} as const;

// Validation function to check if required environment variables are set
export const validateConfig = () => {
  const requiredVars = [
    "VITE_BASE_URL",
    "VITE_DARKHAST_MAVAD_LIST_GUID",
    "VITE_SUPPLIERS_LIST_GUID",
    "VITE_PERSONNEL_LIST_GUID",
  ];

  const missingVars = requiredVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn("Missing environment variables:", missingVars);
    console.warn(
      "Using default values. Please set these variables in your .env file."
    );
  }

  return missingVars.length === 0;
};

// Call validation on import
validateConfig();
