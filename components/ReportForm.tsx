'use client';

import React, { useState } from 'react';
import {
  Bug, Lock, Send, ChevronDown, CheckCircle2,
  AlertTriangle, Settings2, Loader2,
} from 'lucide-react';

type Severity   = 'critical' | 'high' | 'medium' | 'low' | '';
type ReportType = 'bug' | 'security';
type Mode       = 'simple' | 'advanced';
type Status     = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  type: ReportType;
  title: string;
  severity: Severity;
  description: string;
  email: string;
  steps: string;
  expected: string;
  actual: string;
  operatingSystem: string;
  scolectVersion: string;
  ram: string;
}

const EMPTY: FormData = {
  type: 'bug', title: '', severity: '', description: '', email: '',
  steps: '', expected: '', actual: '', operatingSystem: '', scolectVersion: '', ram: '',
};

const SEVERITIES = [
  { value: 'critical' as Severity, label: 'Critical', hint: 'App unusable / data loss',  dot: 'bg-rose-500',   ring: 'ring-rose-500/30',   active: 'border-rose-500 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400'    },
  { value: 'high'     as Severity, label: 'High',     hint: 'Major feature broken',       dot: 'bg-orange-500', ring: 'ring-orange-500/30', active: 'border-orange-500 bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400' },
  { value: 'medium'   as Severity, label: 'Medium',   hint: 'Partially working',          dot: 'bg-yellow-500', ring: 'ring-yellow-500/30', active: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400' },
  { value: 'low'      as Severity, label: 'Low',      hint: 'Minor / cosmetic',           dot: 'bg-green-500',  ring: 'ring-green-500/30',  active: 'border-green-500 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400'   },
] as const;

const inputCls = [
  'w-full px-4 py-3 rounded-xl text-sm',
  'bg-zinc-50 dark:bg-zinc-800',
  'border border-zinc-200 dark:border-zinc-700',
  'text-zinc-900 dark:text-zinc-100',
  'placeholder:text-zinc-400 dark:placeholder:text-zinc-500',
  'focus:outline-none focus:ring-2 focus:ring-violet-500/25 focus:border-violet-500',
  'transition-all duration-150',
].join(' ');

const labelCls = 'block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5';

export default function BugReportForm() {
  const [mode,   setMode]   = useState<Mode>('simple');
  const [status, setStatus] = useState<Status>('idle');
  const [form,   setForm]   = useState<FormData>(EMPTY);

  const set = (k: keyof FormData, v: string) => setForm(p => ({ ...p, [k]: v }));

  const valid =
    form.title.trim()       !== '' &&
    form.severity           !== '' &&
    form.description.trim() !== '' &&
    form.email.trim()       !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setStatus('submitting');
    try {
      const payload = {
        ...form,
        windowsVersion: form.operatingSystem, // API field name
        ScolectVersion: form.scolectVersion,  // API field name (capital S)
      };
      const res  = await fetch('/api/send-bug-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setTimeout(() => { setForm(EMPTY); setStatus('idle'); }, 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // ── Success state ──
  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl p-14 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={30} className="text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Report received!</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs mx-auto">
            We sent a confirmation to{' '}
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">{form.email}</span>.
            We'll look into it within 24–48 hours.
          </p>
        </div>
      </div>
    );
  }

  const isSecurity      = form.type === 'security';
  const accentGradient  = isSecurity ? 'from-rose-500 to-rose-600'     : 'from-violet-600 to-violet-700';
  const submitActiveBtn = isSecurity
    ? 'bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 shadow-rose-500/20'
    : 'bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 shadow-violet-500/20';

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">

        {/* Top accent stripe */}
        <div className={`h-1 bg-gradient-to-r ${accentGradient} transition-all duration-300`} />

        {/* Header */}
        <div className="px-8 pt-7 pb-5 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2.5 mb-1">
            {isSecurity
              ? <Lock size={18} className="text-rose-500" />
              : <Bug  size={18} className="text-violet-600" />
            }
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {isSecurity ? 'Report a Security Issue' : 'Report a Bug'}
            </h3>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {isSecurity
              ? 'Handled confidentially and with priority.'
              : 'Fill in 4 quick fields — extra details are always welcome.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">

          {/* Type toggle */}
          <div className="flex gap-2 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            {(['bug', 'security'] as ReportType[]).map(t => (
              <button
                key={t}
                type="button"
                onClick={() => set('type', t)}
                className={[
                  'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200',
                  form.type === t
                    ? 'bg-white dark:bg-zinc-700 shadow-sm text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300',
                ].join(' ')}
              >
                {t === 'bug' ? <Bug size={14} /> : <Lock size={14} />}
                {t === 'bug' ? 'Bug Report' : 'Security Issue'}
              </button>
            ))}
          </div>

          {/* Title */}
          <div>
            <label className={labelCls}>
              What's broken? <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              className={inputCls}
              placeholder="e.g. App crashes when exporting data"
              value={form.title}
              onChange={e => set('title', e.target.value)}
            />
          </div>

          {/* Severity pills */}
          <div>
            <label className={labelCls}>
              How bad is it? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {SEVERITIES.map(sv => {
                const active = form.severity === sv.value;
                return (
                  <button
                    key={sv.value}
                    type="button"
                    onClick={() => set('severity', sv.value)}
                    className={[
                      'flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all duration-150',
                      active
                        ? `${sv.active} ring-2 ${sv.ring} scale-[1.02]`
                        : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600',
                    ].join(' ')}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${sv.dot}`} />
                    <span>
                      <span className={`block text-sm font-semibold ${active ? '' : 'text-zinc-700 dark:text-zinc-300'}`}>
                        {sv.label}
                      </span>
                      <span className={`block text-xs mt-0.5 ${active ? 'opacity-75' : 'text-zinc-400 dark:text-zinc-500'}`}>
                        {sv.hint}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={labelCls}>
              What happened? <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              className={`${inputCls} resize-none`}
              placeholder="What were you doing, and what went wrong?"
              value={form.description}
              onChange={e => set('description', e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelCls}>
              Your email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              className={inputCls}
              placeholder="you'll get a confirmation + we'll follow up here"
              value={form.email}
              onChange={e => set('email', e.target.value)}
            />
          </div>

          {/* Advanced accordion */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
            <button
              type="button"
              onClick={() => setMode(m => m === 'simple' ? 'advanced' : 'simple')}
              className="w-full flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700/60 transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                <Settings2 size={14} />
                {mode === 'simple' ? 'Add more details (optional)' : 'Hide extra details'}
              </span>
              <ChevronDown
                size={15}
                className={`text-zinc-400 transition-transform duration-200 ${mode === 'advanced' ? 'rotate-180' : ''}`}
              />
            </button>

            {mode === 'advanced' && (
              <div className="px-5 py-5 border-t border-zinc-100 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/30 space-y-4">

                <div>
                  <label className={labelCls}>Steps to reproduce</label>
                  <textarea
                    rows={4}
                    className={`${inputCls} resize-none font-mono text-xs`}
                    placeholder={"1. Open the app\n2. Click Settings\n3. Bug occurs"}
                    value={form.steps}
                    onChange={e => set('steps', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>Expected</label>
                    <textarea
                      rows={3}
                      className={`${inputCls} resize-none`}
                      placeholder="What should happen?"
                      value={form.expected}
                      onChange={e => set('expected', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Actual</label>
                    <textarea
                      rows={3}
                      className={`${inputCls} resize-none`}
                      placeholder="What actually happened?"
                      value={form.actual}
                      onChange={e => set('actual', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: 'operatingSystem', label: 'OS',              ph: 'macOS 14.2' },
                    { key: 'scolectVersion',  label: 'Scolect version', ph: '1.2.5'      },
                    { key: 'ram',             label: 'RAM',             ph: '16 GB'      },
                  ].map(f => (
                    <div key={f.key}>
                      <label className={labelCls}>{f.label}</label>
                      <input
                        type="text"
                        className={inputCls}
                        placeholder={f.ph}
                        value={form[f.key as keyof FormData]}
                        onChange={e => set(f.key as keyof FormData, e.target.value)}
                      />
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>

          {/* Error */}
          {status === 'error' && (
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-sm">
              <AlertTriangle size={15} className="text-rose-500 shrink-0 mt-0.5" />
              <span className="text-rose-700 dark:text-rose-400">
                Something went wrong — try again or email{' '}
                <a href="mailto:bugs.scolect@harmanita.com" className="underline font-medium">
                  bugs.scolect@harmanita.com
                </a>.
              </span>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!valid || status === 'submitting'}
            className={[
              'w-full py-3.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 shadow-lg',
              valid && status !== 'submitting'
                ? `${submitActiveBtn} hover:-translate-y-0.5 hover:shadow-xl`
                : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-400 dark:text-zinc-500 cursor-not-allowed shadow-none',
            ].join(' ')}
          >
            {status === 'submitting'
              ? <><Loader2 size={16} className="animate-spin" /> Submitting…</>
              : <><Send size={16} /> Submit Report</>
            }
          </button>

          <p className="text-xs text-center text-zinc-400 dark:text-zinc-500">
            4 fields required · extra details help us fix it faster
          </p>

        </form>
      </div>
    </div>
  );
}