'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Clock, FileWarning, Layers } from 'lucide-react';

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: 'НДС 12% → 16%, новый ИПН',
    text: 'Выросла ставка НДС, добавился прогрессивный ИПН (10% / 15%), отменены патент и ЕСП. Каждый расчёт по клиенту приходится пересобирать под новые правила вручную.',
  },
  {
    icon: Clock,
    title: 'СОНО уходит, приходит ИСНА',
    text: 'Старый кабинет сдачи отчётности отключается. Все формы — теперь в новом формате ИСНА и сдаются со своей ЭЦП. Для каждого клиента — заново разбираться.',
  },
  {
    icon: FileWarning,
    title: 'Новые правила по 200 и 300',
    text: 'Формы 200 и 300 изменены и сдаются за каждый квартал. Ручная сборка по каждому клиенту — это часы работы и высокий риск ошибки в отчётный сезон.',
  },
  {
    icon: Layers,
    title: 'Каждый клиент — отдельно',
    text: 'Свои дедлайны, свои формы, свой вход в кабинет КГД. 20 клиентов = 20 разрозненных процессов и таблиц Excel. Уследить за всеми сроками почти невозможно.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFCFF] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок секции */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-amber/10 text-accent-amber text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse" />
            Почему сейчас
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Реформа 2026 удвоила
            <br />
            <span className="text-navy/40">ручную работу бухгалтера.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 leading-relaxed max-w-2xl">
            Новый Налоговый кодекс и Закон 214-VIII — крупнейшая реформа за
            десять лет. Особенно тяжело аутсорс-фирмам: клиентов много, а
            правила поменялись у всех сразу.
          </p>
        </motion.div>

        {/* Грид проблем */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white border border-navy-100 hover:border-navy-200 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-amber/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-amber/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-accent-amber" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {p.title}
                    </h3>
                    <p className="text-navy/60 leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
