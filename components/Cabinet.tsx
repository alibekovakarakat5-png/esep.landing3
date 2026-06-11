'use client';

import { motion } from 'framer-motion';
import {
  Search, Plus, Check, FileText, ScanLine, Landmark,
  CalendarClock, Users, LayoutGrid, Bell,
} from 'lucide-react';

// ── Список клиентов в боковой панели ──────────────────────────────────────
const CLIENTS = [
  { ini: 'АЛ', name: 'ТОО «Алтын Логистика»', meta: 'ОУР · НДС', chip: 'ф.300 · 3 дня', tone: 'amber', sel: true },
  { ini: 'СА', name: 'ИП Сериков А.', meta: 'Упрощёнка · 910', chip: 'ф.910 сдана', tone: 'green' },
  { ini: 'МС', name: 'ТОО «Мерей Строй»', meta: 'ОУР · НДС', chip: 'ф.200 · сегодня', tone: 'rose' },
  { ini: 'НК', name: 'ИП Нурлан К.', meta: 'Самозанятый', chip: 'в норме', tone: 'green' },
  { ini: 'KF', name: 'ТОО «KazFood»', meta: 'ОУР · НДС', chip: 'ф.300 · 5 дн', tone: 'sky' },
  { ini: 'АТ', name: 'ИП Айгерим Т.', meta: 'Упрощёнка · 910', chip: 'черновик', tone: 'slate' },
];

const chipTone: Record<string, string> = {
  amber: 'bg-accent-amber/10 text-accent-amber',
  green: 'bg-accent-green/10 text-accent-green',
  rose: 'bg-accent-rose/10 text-accent-rose',
  sky: 'bg-sky-50 text-sky-600',
  slate: 'bg-navy-50 text-navy-400',
};

const avaTone = [
  'bg-sky-100 text-sky-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-violet-100 text-violet-700',
  'bg-rose-100 text-rose-700',
  'bg-navy-100 text-navy-600',
];

// ── Налоговые формы выбранного клиента ────────────────────────────────────
const FORMS = [
  { code: 'Ф.300', name: 'НДС · II квартал', status: 'Готова к сдаче', tone: 'green', due: 'до 15.07', pct: 100 },
  { code: 'Ф.200', name: 'ИПН и соцплатежи · II кв.', status: 'В работе', tone: 'amber', due: 'до 15.07', pct: 70 },
  { code: 'Зарплата', name: 'Расчёт · июнь', status: 'Рассчитана', tone: 'sky', due: '14 сотр.', pct: 100 },
];

const formTone: Record<string, { bar: string; badge: string }> = {
  green: { bar: 'bg-accent-green', badge: 'bg-accent-green/10 text-accent-green' },
  amber: { bar: 'bg-accent-amber', badge: 'bg-accent-amber/10 text-accent-amber' },
  sky: { bar: 'bg-sky-500', badge: 'bg-sky-50 text-sky-600' },
};

// ── Лента действий ────────────────────────────────────────────────────────
const FEED = [
  { icon: ScanLine, text: 'OCR: распознан чек на 84 500 ₸', time: '2 мин назад' },
  { icon: Landmark, text: 'Импорт Kaspi: 32 операции разнесены', time: '18 мин назад' },
  { icon: FileText, text: 'Ф.910 по ИП Сериков — выгружена в ИСНА', time: '1 ч назад' },
];

const CAPTIONS = [
  { icon: Users, t: 'Все клиенты в одном списке' },
  { icon: FileText, t: 'Формы 910 · 200 · 300 авто' },
  { icon: CalendarClock, t: 'Дедлайны по каждому' },
  { icon: ScanLine, t: 'OCR чеков + импорт Kaspi' },
];

export default function Cabinet() {
  return (
    <section id="cabinet" className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl aurora-1" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-3xl aurora-2" />
      </div>
      <div className="absolute inset-0 dot-grid opacity-[0.05]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-wider mb-6">
            <LayoutGrid className="w-3.5 h-3.5 text-accent-green" />
            Мульти-кабинет
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] text-balance">
            Все клиенты — <span className="gradient-text-light">на одном экране.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Слева — список клиентов с дедлайнами. Справа — карточка клиента:
            формы, налоги к уплате, зарплаты и лента действий. Один клик — и
            вы у следующего клиента.
          </p>
        </motion.div>

        {/* Окно приложения */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-2xl bg-white shadow-2xl shadow-black/40 ring-1 ring-white/10 overflow-hidden"
        >
          {/* Браузерная панель */}
          <div className="h-11 bg-navy-50 border-b border-navy-100 flex items-center px-4 gap-2">
            <span className="w-3 h-3 rounded-full bg-accent-rose/70" />
            <span className="w-3 h-3 rounded-full bg-accent-amber/70" />
            <span className="w-3 h-3 rounded-full bg-accent-green/70" />
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-md bg-white border border-navy-100 text-[11px] text-navy-400 font-mono">
                app.esepkz.com/cabinet
              </div>
            </div>
          </div>

          {/* Тело приложения */}
          <div className="grid grid-cols-1 lg:grid-cols-12 text-left">
            {/* ── Боковая панель: клиенты ── */}
            <aside className="lg:col-span-4 xl:col-span-3 border-b lg:border-b-0 lg:border-r border-navy-100 bg-white">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-navy text-sm">Клиенты</span>
                  <span className="px-1.5 py-0.5 rounded-md bg-navy-50 text-navy-400 text-[11px] font-bold">12</span>
                </div>
                <button className="w-7 h-7 rounded-lg bg-navy text-white flex items-center justify-center">
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>
              <div className="px-4 pb-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-50 text-navy-400 text-xs">
                  <Search className="w-3.5 h-3.5" />
                  Поиск клиента…
                </div>
                <div className="flex gap-1.5 mt-3">
                  {['Все', 'ИП', 'ТОО'].map((f, i) => (
                    <span
                      key={f}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                        i === 0 ? 'bg-sky-50 text-sky-600' : 'bg-navy-50 text-navy-400'
                      }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pb-2">
                {CLIENTS.map((c, i) => (
                  <div
                    key={c.name}
                    className={`relative flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors ${
                      c.sel ? 'bg-sky-50/70' : 'hover:bg-navy-50/50'
                    }`}
                  >
                    {c.sel && <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r bg-sky-500" />}
                    <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-bold ${avaTone[i % avaTone.length]}`}>
                      {c.ini}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] font-semibold text-navy truncate">{c.name}</div>
                      <div className="text-[11px] text-navy-400">{c.meta}</div>
                    </div>
                    <span className={`flex-shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold ${chipTone[c.tone]}`}>
                      {c.chip}
                    </span>
                  </div>
                ))}
              </div>
            </aside>

            {/* ── Основная панель: карточка клиента ── */}
            <div className="lg:col-span-8 xl:col-span-9 bg-[#FAFCFF]">
              {/* Верхняя строка */}
              <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-navy-100 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center text-sm font-bold">АЛ</div>
                  <div>
                    <div className="font-bold text-navy text-[15px] leading-tight">ТОО «Алтын Логистика»</div>
                    <div className="text-[11px] text-navy-400">БИН 180440••••12 · ОУР · плательщик НДС · 14 сотрудников</div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-navy-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                    синхронизировано
                  </span>
                  <Bell className="w-4 h-4 text-navy-400" />
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-5">
                {/* Сводка */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { l: 'Налоги к уплате · июнь', v: '1 240 000 ₸', s: 'text-navy' },
                    { l: 'Ближайший дедлайн', v: 'ф.300 — 15.07', s: 'text-accent-amber' },
                    { l: 'Сотрудников', v: '14', s: 'text-navy' },
                  ].map((k) => (
                    <div key={k.l} className="rounded-xl bg-white border border-navy-100 p-3.5">
                      <div className="text-[10px] uppercase tracking-wider text-navy-400 font-bold mb-1.5">{k.l}</div>
                      <div className={`text-base md:text-lg font-bold ${k.s}`}>{k.v}</div>
                    </div>
                  ))}
                </div>

                {/* Налоговые формы */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-navy">Налоговые формы</h4>
                    <span className="text-[11px] text-sky-600 font-semibold">Выгрузка в ИСНА →</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {FORMS.map((f) => {
                      const t = formTone[f.tone];
                      return (
                        <div key={f.code} className="rounded-xl bg-white border border-navy-100 p-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-navy text-sm">{f.code}</span>
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${t.badge}`}>{f.status}</span>
                          </div>
                          <div className="text-[11px] text-navy-400 mb-3">{f.name}</div>
                          <div className="h-1.5 rounded-full bg-navy-50 overflow-hidden mb-2">
                            <div className={`h-full rounded-full ${t.bar}`} style={{ width: `${f.pct}%` }} />
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-navy-400">
                            {f.tone === 'green' && <Check className="w-3 h-3 text-accent-green" strokeWidth={3} />}
                            {f.due}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Лента действий */}
                <div className="rounded-xl bg-white border border-navy-100 p-4">
                  <h4 className="text-sm font-bold text-navy mb-3">Последние действия</h4>
                  <div className="space-y-2.5">
                    {FEED.map((a, i) => {
                      const Icon = a.icon;
                      return (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-3.5 h-3.5 text-sky-600" strokeWidth={2} />
                          </div>
                          <span className="text-[12px] text-navy/70 flex-1">{a.text}</span>
                          <span className="text-[10px] text-navy-400 flex-shrink-0">{a.time}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Подписи-возможности */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {CAPTIONS.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.t} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <Icon className="w-4 h-4 text-accent-green flex-shrink-0" strokeWidth={2} />
                <span className="text-[12px] text-white/80 font-medium leading-tight">{c.t}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
