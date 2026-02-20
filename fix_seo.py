import os

pages = {
    "about": {
        "title": "About Scolect | Open Source Screen Time Tracker",
        "desc": "Learn about Scolect: a privacy-first, free, and open-source screen time tracker. Discover our mission to give you digital autonomy."
    },
    "changelog": {
        "title": "Changelog | Scolect Updates",
        "desc": "Keep track of all new features, bug fixes, and improvements in the latest versions of Scolect screen time tracker."
    },
    "community": {
        "title": "Community | Join Scolect",
        "desc": "Join the Scolect community of users and contributors. Together we are building the best open-source screen time tracking experience."
    },
    "comparison": {
        "title": "Compare Scolect | Free Screen Time Alternatives",
        "desc": "See how Scolect compares to other screen time trackers. Why open-source, privacy-first, and local-data tools are better."
    },
    "contact": {
        "title": "Contact Us | Scolect Support",
        "desc": "Get in touch with the Scolect team. Ask questions, report bugs, or share your feedback about our open-source software."
    },
    "docs": {
        "title": "Documentation | Scolect Guide",
        "desc": "Read the official documentation for Scolect. Learn how to install, configure, and make the most out of your digital life."
    },
    "faq": {
        "title": "FAQ | Scolect Helper",
        "desc": "Frequently asked questions for Scolect. Find quick answers about installation, usage, privacy, and our open-source philosophy."
    },
    "features": {
        "title": "Features | What Scolect Can Do",
        "desc": "Explore the powerful features of Scolect. Focus modes, detailed analytics, custom limits, native integrations, and more."
    },
    "feedback": {
        "title": "Feedback | Improve Scolect",
        "desc": "We value your opinion. Send feedback or suggest new features to help make Scolect the best free screen time tracker."
    },
    "gallery": {
        "title": "Gallery | Scolect Screenshots",
        "desc": "View screenshots and see Scolect's beautiful, modern interface in action. Real-time stats, dynamic reports, and more."
    }
}

base_dir = "/Users/harmanpreetsingh/Public/Code/timeweb/app"

for page, meta in pages.items():
    dir_path = os.path.join(base_dir, page)
    if not os.path.exists(dir_path):
        continue
    layout_path = os.path.join(dir_path, "layout.tsx")
    
    code = f"""import type {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{meta["title"]}',
  description: '{meta["desc"]}',
  openGraph: {{
    title: '{meta["title"]}',
    description: '{meta["desc"]}',
    url: 'https://scolect.com/{page}',
  }},
}};

export default function {page.capitalize()}Layout({{
  children,
}}: {{
  children: React.ReactNode;
}}) {{
  return children;
}}
"""
    with open(layout_path, "w") as f:
        f.write(code)

print("Created layout.tsx for all SEO pages.")
