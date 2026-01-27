'use client';

import React from 'react';
import { 
  Code2, 
  PenTool, 
  BookOpen, 
  Globe, 
  Bug, 
  MessageCircle, 
  Megaphone, 
  Github, 
  Heart, 
  Terminal, 
  GitBranch, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Users,
  Star,
  ExternalLink,
  Book
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

// --- Visual Identity Constants ---
// Primary: #7C3AED (Violet 600)
// Background: #FAFAFA (Zinc 50) / #09090B (Zinc 950)
// Text: #18181B (Zinc 900) / #FAFAFA (Zinc 50)

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

const BenefitCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED]/40 transition-colors h-full">
    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-[#52525B] dark:text-[#A1A1AA]">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#7C3AED] shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ContributionSection = ({ 
  icon: Icon, 
  title, 
  headline, 
  whatToDo, 
  gettingStarted, 
  extraContent 
}: { 
  icon: any, 
  title: string, 
  headline: string, 
  whatToDo: string[], 
  gettingStarted: React.ReactNode, 
  extraContent?: React.ReactNode 
}) => (
  <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden mb-12 scroll-mt-24" id={title.toLowerCase().replace(/\s/g, '-')}>
    <div className="p-8 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="flex items-center gap-4 mb-2">
        <div className="p-2 rounded-lg bg-[#7C3AED] text-white">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA]">{title}</h3>
      </div>
      <p className="text-lg text-[#7C3AED] dark:text-[#8B5CF6] font-medium ml-[56px]">{headline}</p>
    </div>
    
    <div className="p-8 grid lg:grid-cols-2 gap-12">
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#18181B] dark:text-[#FAFAFA] mb-4 border-l-4 border-[#14B8A6] pl-3">What You Can Do</h4>
        <ul className="space-y-3">
          {whatToDo.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[#52525B] dark:text-[#A1A1AA]">
              <CheckCircle2 size={18} className="text-[#14B8A6] mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {extraContent}
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#18181B] dark:text-[#FAFAFA] mb-4 border-l-4 border-[#7C3AED] pl-3">Getting Started</h4>
        <div className="text-[#52525B] dark:text-[#A1A1AA] space-y-4">
          {gettingStarted}
        </div>
      </div>
    </div>
  </div>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-zinc-900 text-zinc-300 p-3 rounded-lg text-xs font-mono overflow-x-auto my-2 border border-zinc-800">
    {children}
  </pre>
);

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#09090B] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED]">
      <Navbar/>
      {/* HERO SECTION */}
      <div className="pt-32 pb-20 px-6 text-center border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] text-sm font-medium mb-6">
            <Users size={16} /> Open Source Community
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#18181B] dark:text-[#FAFAFA] mb-6">
            Join the <span className="text-[#7C3AED] dark:text-[#8B5CF6]">TimeMark</span> Community
          </h1>
          <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            TimeMark is built by people like you. Whether you code, design, write, or simply have ideas, there's a way to contribute.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#code-contributions" className="px-6 py-3 bg-[#7C3AED] text-white rounded-xl font-bold shadow-lg shadow-violet-500/20 hover:bg-[#6D28D9] transition-all">
              Start Contributing
            </a>
            <a href="https://github.com" target="_blank" className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#18181B] dark:text-[#FAFAFA] rounded-xl font-bold hover:border-[#7C3AED] transition-all flex items-center gap-2">
              <Github size={18} /> GitHub Repo
            </a>
          </div>
        </div>
      </div>

      {/* WHY CONTRIBUTE */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="What's in It for You?" subtitle="Contributing to open-source projects like TimeMark offers benefits beyond altruism." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard 
              icon={Terminal} 
              title="1. Build Your Portfolio" 
              items={[
                "Real-world experience with Flutter & Dart",
                "Contributions visible on your GitHub profile",
                "Reference-worthy experience for jobs",
                "Collaborate with developers worldwide"
              ]} 
            />
            <BenefitCard 
              icon={BookOpen} 
              title="2. Learn New Skills" 
              items={[
                "Work with production code",
                "Learn best practices from code reviews",
                "Understand software architecture",
                "Gain experience with Git version control"
              ]} 
            />
            <BenefitCard 
              icon={GitBranch} 
              title="3. Shape a Tool You Use" 
              items={[
                "Fix the bugs that annoy you",
                "Add features you wish existed",
                "Influence the product roadmap",
                "See your ideas come to life"
              ]} 
            />
            <BenefitCard 
              icon={Heart} 
              title="4. Give Back" 
              items={[
                "Help others improve their productivity",
                "Contribute to the digital wellness movement",
                "Support privacy-respecting software",
                "Be part of something meaningful"
              ]} 
            />
            <BenefitCard 
              icon={Users} 
              title="5. Join a Community" 
              items={[
                "Connect with like-minded developers",
                "Receive support and mentorship",
                "Make friends with shared interests",
                "Collaborate on a common goal"
              ]} 
            />
          </div>
        </div>
      </section>

      {/* WAYS TO CONTRIBUTE */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Ways to Contribute" subtitle="Pick the path that matches your skills and interests." />

          {/* 1. Code */}
          <ContributionSection
            icon={Code2}
            title="1. Code Contributions"
            headline="Develop Features, Fix Bugs, Improve Performance"
            whatToDo={[
              "Implement features from the roadmap",
              "Fix open bugs and issues",
              "Optimize performance and reduce resource usage",
              "Refactor code for better maintainability",
              "Add unit and integration tests"
            ]}
            gettingStarted={
              <div className="space-y-4 text-sm">
                <p>1. <strong>Fork & Clone</strong> the repository.</p>
                <div>
                  <p>2. <strong>Set Up Environment:</strong> Install Flutter/Dart.</p>
                  <CodeBlock>
                    flutter pub get{'\n'}
                    flutter run
                  </CodeBlock>
                </div>
                <p>3. <strong>Create Branch:</strong> <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">git checkout -b feature/my-feature</code></p>
                <p>4. <strong>Code & Test:</strong> Make changes and write tests.</p>
                <p>5. <strong>Pull Request:</strong> Submit with a clear description.</p>
              </div>
            }
            extraContent={
              <div className="mt-6 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <h5 className="font-bold text-xs uppercase mb-2 text-[#7C3AED]">Need Ideas?</h5>
                <ul className="text-sm space-y-1">
                  <li>• Check issues labeled <span className="font-mono bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-1 rounded">good first issue</span></li>
                  <li>• Look for <span className="font-mono bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 px-1 rounded">help wanted</span></li>
                </ul>
              </div>
            }
          />

          {/* 2. Design */}
          <ContributionSection
            icon={PenTool}
            title="2. Design Contributions"
            headline="Improve UI/UX, Create Visual Assets"
            whatToDo={[
              "Design new feature interfaces",
              "Improve existing screens for better usability",
              "Create icons and promotional materials",
              "Develop user flows and wireframes",
              "Conduct usability testing"
            ]}
            gettingStarted={
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li><strong>Review Current Design</strong> by using the app extensively.</li>
                <li><strong>Identify Pain Points</strong> in the current UI/UX.</li>
                <li><strong>Create Mockups</strong> using Figma, Sketch, or Adobe XD.</li>
                <li><strong>Share Your Designs</strong> by opening a GitHub discussion.</li>
                <li>Collaborate with developers to implement.</li>
              </ol>
            }
            extraContent={
              <div className="mt-4 text-sm">
                <strong>Tools We Use:</strong> Figma, Material Design widgets, Lucide Icons.
              </div>
            }
          />

          {/* 3. Documentation */}
          <ContributionSection
            icon={Book}
            title="3. Documentation"
            headline="Write Guides, Improve Docs, Help Users Learn"
            whatToDo={[
              "Write tutorials and how-to guides",
              "Improve existing documentation",
              "Create video walkthroughs",
              "Write blog posts about using TimeMark",
              "Document undocumented features"
            ]}
            gettingStarted={
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Identify documentation gaps by reading current docs.</li>
                <li>Write clear content in Markdown.</li>
                <li>Include screenshots for visual learners.</li>
                <li>Submit via Pull Request to the <code>docs</code> folder.</li>
              </ol>
            }
          />

          {/* 4. Translation */}
          <ContributionSection
            icon={Globe}
            title="4. Translation"
            headline="Make TimeMark Accessible Worldwide"
            whatToDo={[
              "Translate the app into new languages",
              "Improve existing AI-generated translations",
              "Localize date/time formats",
              "Adapt content for cultural context"
            ]}
            gettingStarted={
              <div className="space-y-2 text-sm">
                <p>1. Check supported languages in the repo.</p>
                <p>2. Request new language via Issue if needed.</p>
                <p>3. Translate the ARB file: <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">app_en.arb</code> → <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">app_es.arb</code></p>
                <p>4. Test your translation in the app.</p>
                <p>5. Submit Pull Request.</p>
              </div>
            }
          />

          {/* 5. Testing */}
          <ContributionSection
            icon={Bug}
            title="5. Testing & Bug Reports"
            headline="Find Bugs, Test Features, Ensure Quality"
            whatToDo={[
              "Use TimeMark daily and report bugs",
              "Test new features in beta releases",
              "Reproduce issues others have reported",
              "Test on different Windows versions",
              "Stress-test with large datasets"
            ]}
            gettingStarted={
              <div className="text-sm">
                <p className="mb-2"><strong>How to Report Bugs:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Check existing issues to avoid duplicates.</li>
                  <li>Create New Issue on GitHub with:</li>
                  <li>Title, Steps to reproduce, Expected vs Actual, Screenshots.</li>
                  <li>Label appropriately (bug, critical).</li>
                </ul>
              </div>
            }
          />

          {/* 6. Community Support */}
          <ContributionSection
            icon={MessageCircle}
            title="6. Community Support"
            headline="Help Others, Answer Questions, Build Community"
            whatToDo={[
              "Answer questions in GitHub Discussions",
              "Help troubleshoot issues in forums",
              "Create FAQ entries",
              "Welcome new contributors",
              "Share tips and best practices"
            ]}
            gettingStarted={
              <div className="text-sm">
                <p className="mb-2"><strong>Where to Help:</strong></p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">GitHub Discussions</span>
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">Reddit</span>
                  <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">Discord</span>
                </div>
                <p className="mt-4 italic">Be patient and kind—everyone starts as a beginner.</p>
              </div>
            }
          />

          {/* 7. Spread the Word */}
          <ContributionSection
            icon={Megaphone}
            title="7. Spread the Word"
            headline="Share TimeMark, Help Others Discover It"
            whatToDo={[
              "Share TimeMark on social media",
              "Write blog posts about your experience",
              "Create video reviews or tutorials",
              "Rate and review on the Microsoft Store"
            ]}
            gettingStarted={
              <div className="text-sm">
                <p className="mb-2"><strong>Content Ideas:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>"How I Doubled My Productive Time"</li>
                  <li>"Privacy-Friendly Screen Time Tracking Review"</li>
                  <li>"5 Focus Mode Tips"</li>
                </ul>
              </div>
            }
          />
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-3 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] mb-6">
            <Star size={32} />
          </div>
          <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6">We Appreciate Every Contribution</h2>
          <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] mb-8">
            All contributors are recognized in our <code>CONTRIBUTORS.md</code> file on GitHub. Your contributions—no matter how small—make TimeMark better for everyone.
          </p>
          
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-lg font-bold text-[#18181B] dark:text-[#FAFAFA] mb-6">Hall of Fame (Mockup)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-800 mb-3"></div>
                  <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800 rounded mb-2"></div>
                  <div className="h-3 w-16 bg-zinc-100 dark:bg-zinc-800/50 rounded"></div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-[#7C3AED] dark:text-[#8B5CF6] font-medium">
              Want to be featured? Start contributing today!
            </p>
          </div>
        </div>
      </section>

      {/* CODE OF CONDUCT */}
      <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheck size={32} className="text-[#18181B] dark:text-[#FAFAFA]" />
            <h2 className="text-3xl font-bold text-[#18181B] dark:text-[#FAFAFA]">Code of Conduct</h2>
          </div>
          
          <div className="prose dark:prose-invert max-w-none text-[#52525B] dark:text-[#A1A1AA]">
            <p className="mb-4">
              TimeMark is committed to providing a welcoming and inclusive environment for everyone, regardless of experience level, gender identity, sexual orientation, disability, physical appearance, race, age, religion, or nationality.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl border border-green-100 dark:border-green-900/20">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">Expected Behavior</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-green-800 dark:text-green-300">
                  <li>Be respectful and considerate</li>
                  <li>Use welcoming language</li>
                  <li>Accept constructive criticism</li>
                  <li>Show empathy toward others</li>
                </ul>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/20">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">Unacceptable Behavior</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-red-800 dark:text-red-300">
                  <li>Harassment or discrimination</li>
                  <li>Trolling or insulting comments</li>
                  <li>Personal or political attacks</li>
                  <li>Unwelcome sexual attention</li>
                </ul>
              </div>
            </div>
            <p className="text-sm italic">
              Violations can be reported to support@timemark.app. We take all reports seriously.
            </p>
          </div>
        </div>
      </section>

      {/* GETTING STARTED GUIDE & RESOURCES */}
      <section className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#09090B]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Quick Start Guide */}
          <div>
            <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-8">Your First Contribution</h2>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#7C3AED] ring-4 ring-[#FAFAFA] dark:ring-[#09090B]"></div>
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-1">Step 1: Create GitHub Account</h4>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">It's free and essential for open source.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-[#FAFAFA] dark:ring-[#09090B]"></div>
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-1">Step 2: Find an Issue</h4>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Look for <code>good first issue</code> or <code>documentation</code> labels.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-[#FAFAFA] dark:ring-[#09090B]"></div>
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-1">Step 3: Make Changes</h4>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Fork repo, create branch, edit code/docs.</p>
              </div>
              <div className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-[#FAFAFA] dark:ring-[#09090B]"></div>
                <h4 className="font-bold text-[#18181B] dark:text-[#FAFAFA] mb-1">Step 4: Pull Request</h4>
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA]">Submit your work and celebrate when merged!</p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-2xl font-bold text-[#18181B] dark:text-[#FAFAFA] mb-8">Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="#" className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-colors flex items-center justify-between group">
                <span className="text-[#18181B] dark:text-[#FAFAFA] font-medium">Contributing Guide</span>
                <ArrowRight size={16} className="text-zinc-400 group-hover:text-[#7C3AED]" />
              </a>
              <a href="#" className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-colors flex items-center justify-between group">
                <span className="text-[#18181B] dark:text-[#FAFAFA] font-medium">Code Style Guide</span>
                <ArrowRight size={16} className="text-zinc-400 group-hover:text-[#7C3AED]" />
              </a>
              <a href="#" className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-colors flex items-center justify-between group">
                <span className="text-[#18181B] dark:text-[#FAFAFA] font-medium">Flutter Docs</span>
                <ExternalLink size={16} className="text-zinc-400 group-hover:text-[#7C3AED]" />
              </a>
              <a href="#" className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#7C3AED] transition-colors flex items-center justify-between group">
                <span className="text-[#18181B] dark:text-[#FAFAFA] font-medium">Dart Language Tour</span>
                <ExternalLink size={16} className="text-zinc-400 group-hover:text-[#7C3AED]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 text-center bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether you contribute code, fix a typo, or report a bug—every contribution matters. Start small, learn as you go, and become part of the TimeMark community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] rounded-xl font-bold transition-all shadow-lg shadow-violet-900/20">
              Browse Open Issues
            </a>
            <a href="#" className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 rounded-xl font-bold transition-all">
              Join the Discussion
            </a>
          </div>
        </div>
      </section>
    <Footer/>
    </div>
  );
}