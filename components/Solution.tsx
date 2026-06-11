'use client';

import { motion } from 'framer-motion';
import { Layers, Zap, ShieldCheck } from 'lucide-react';

const ITEMS = [
  {
    icon: Layers,
    title: 'Один кабинет на всех клиентов',
    big: '1 окно',
    desc: 'ИП и ТОО, дедлайны по каждому — на одном экране. Переключаетесь между клиентами в один клик, без отдельных входов в КГД и десятка таблиц Excel.',
    color: 'from-sky-400 to-sky-600',
    bg: 'bg-sky-50',
    text: 'text-sky-600',
  },
  {
    icon: Zap,
    title: 'Формы — автоматически',
    big: '910/200/300',
    desc: 'Считаются из данных клиента и выгружаются в формат ИСНА. Загружаете со своей ЭЦП. Меньше ручной сборки в отчётный сезон — меньше ошибок.',
    color: 'from-accent-green to-emerald-600',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
  },
  {
    icon: ShieldCheck,
    title: 'Под Налоговый кодекс 2026',
    big: '100%',
    desc: 'НДС 16%, прогрессивный ИПН, зарплаты и соцплатежи — по актуальным правилам. Обновления закона мы закрываем на своей стороне.',
    color: 'from-navy-700 to-navy',
    bg: 'bg-navy-50',
    text: 'text-navy',
  },
];

export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAFCFF] to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-green/10 text-accent-green text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Решение Esep
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Всё, что раньше делалось руками —{' '}
            <span className="gradient-text">в одном кабинете</span>.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-navy/60 leading-relaxed text-balance">
            Esep — облачный кабинет бухгалтера под новый Налоговый кодекс.
            Бухгалтер ведёт 30 клиентов за время, что раньше уходило на 10.
          </p>
        </motion.div>

        {/* 3 ключевых УТП */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative p-8 rounded-3xl bg-white border border-navy-100 hover:border-transparent hover:shadow-2xl hover:shadow-navy/10 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.04] transition-opacity`}
                />
                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-7 h-7 ${item.text}`} strokeWidth={2} />
                  </div>
                  <div className={`text-5xl font-bold ${item.text} mb-2`}>
                    {item.big}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
