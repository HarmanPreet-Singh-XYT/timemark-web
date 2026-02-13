// changelog-data.ts
// Centralized release data for TimeMark changelog

export interface Release {
  version: string;
  date: string;
  isLatest?: boolean;
  features?: string[];
  improvements?: string[];
  fixes?: string[];
  tech?: string[];
  note?: string;
  size?:number;
  // Platform download links
  macLink?: string;
  appleStore?:string;
  windowsLink?: string;
  linuxLink?: string;
}

export const releases: Release[] = [
  {
    version: "v2.0.2",
    date: "February 12, 2026",
    isLatest: true,
    features: [
      "Fixes certain issue with idle detection causing app to crash on Windows - monitoring",
      "Option added for toggling keyboard input monitoring.",
      "add rebranding model back for windows"
    ],
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.2/Scolect.-.Track.Screen.Time.App.Usage.dmg",
    note: "Monitoring if crashes still occur. Report to bugs@scolect.com or through report bugs page if you face app crash and you know how to reproduce that same crash."
  },
  {
    version: "v2.0.0",
    date: "February 10, 2026",
    isLatest: false,
    features: [
      "Rebranded and restructured the application (TimeMark → Scolect)",
      "Native macOS support with deep OS-level integration",
      "Fully rebuilt tracking engine with up to 60× improved accuracy",
      "Advanced idle detection using keyboard, mouse, audio, HID devices, and controllers",
      "Fully customizable theming system",
      "Automated Excel report generation with detailed analytics",
      "Complete UI refresh focused on clarity, responsiveness, and performance"
    ],
    tech: [
      "macOS permissions and entitlement handling",
      "Low-level input monitoring across multiple device types",
      "High-performance tracking engine optimization",
      "Scalable theming architecture",
      "Cross-platform Flutter architecture for Windows and macOS"
    ],
    macLink: "https://github.com/HarmanPreet-Singh-XYT/Scolect-ScreenTimeApp/releases/download/v2.0.1/Scolect.-.Track.Screen.Time.App.Usage.dmg",
    note: "This is a major architectural release introducing Scolect as the new identity of TimeMark. Significant internal systems were redesigned to support cross-platform accuracy, performance, and extensibility."
  },
  {
    version: "v1.2.1",
    date: "December 23, 2025",
    isLatest: false,
    fixes: [
      "Fixed issue where opening another instance of the application would fail to load. New instances now correctly bring the existing window to focus instead of creating duplicates."
    ],
    note: "Setups here do not support auto launch at startup. Prefer Microsoft Store for that feature. GitHub Release is only used for provision and testing."
  },
  {
    version: "v1.2.0",
    date: "December 22, 2025",
    features: [
      "Import/Export Data: Backup and restore your tracking data across devices with the new data portability feature.",
      "Multi-Language Support: TimeMark now supports 11 languages including Chinese (中文), Hindi (हिन्दी), Spanish (Español), French (Français), Arabic (العربية), Bengali (বাংলা), Portuguese (Português), Russian (Русский), Urdu (اردو), Indonesian (Bahasa Indonesia), and Japanese (日本語)."
    ],
    improvements: [
      "Enhanced application tracking name recognition for better accuracy",
      "Improved scrollbar behavior to prevent overlap with applications in overview"
    ],
    fixes: [
      "Fixed scrollbar overlap with applications in overview page"
    ],
    note: "Setups here do not support auto launch at startup. Prefer Microsoft Store for that feature. GitHub Release is only used for provision and testing."
  },
  {
    version: "v1.1.0",
    date: "May 12, 2025",
    features: [
      "Custom Date Range Reports: View analytics for specific dates or date ranges with the new flexible reporting system."
    ]
  },
  {
    version: "v1.0.3",
    date: "April 27, 2025",
    improvements: [
      "Updated tracking mechanism with more reliable detection methods",
      "Enhanced error handling for improved stability",
      "Improved app usage record functionality for better accuracy"
    ]
  },
  {
    version: "v1.0.1",
    date: "March 27, 2025",
    improvements: [
      "Now uses MSIX's native launch at startup functionality",
      "Removed manual launch at startup toggle as it's handled by the system"
    ],
    fixes: [
      "Fixed settings not changing properly",
      "Removed exit confirmation dialog for smoother workflow",
      "Fixed hidden value filter not working correctly"
    ]
  },
  {
    version: "v1.0.0",
    date: "March 25, 2025",
    features: [
      "Initial Windows Release: Real-time application tracking for Windows",
      "Daily screen time analytics with detailed breakdowns",
      "Productive Score calculation to measure your productivity",
      "Custom categories for organizing tracked applications",
      "Overall daily time limits to help manage screen time",
      "Light and dark theme support for comfortable viewing"
    ]
  }
];

export interface UpcomingFeature {
  title: string;
  status: "development" | "consideration";
}

export const upcomingFeatures: UpcomingFeature[] = [
//   { title: "Focus Mode with Pomodoro timer", status: "development" },
//   { title: "Application time limits", status: "development" },
//   { title: "Distraction blocking features", status: "development" },
  { title: "Do Not Disturb scheduling", status: "consideration" },
  { title: "Weekly email reports", status: "consideration" },
  { title: "Browser extension integration", status: "consideration" },
  { title: "macOS support", status: "consideration" }
];

export const releasePhilosophy = {
  description: "TimeMark follows semantic versioning (MAJOR.MINOR.PATCH).",
  versioningRules: [
    { type: "Patch", description: "Critical bug fixes (as needed)" },
    { type: "Minor", description: "New features (every 4-6 weeks)" },
    { type: "Major", description: "Breaking changes (rare)" }
  ],
  additionalInfo: "All releases are tested internally. Critical bugs are hotfixed immediately. Microsoft Store handles updates automatically."
};