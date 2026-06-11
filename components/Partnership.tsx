'use client';

import { motion } from 'framer-motion';
import { Percent, TrendingUp, Rocket, ArrowRight, Check } from 'lucide-react';

const OFFERS = [
  {
    icon: Percent,
    title: 'Пилот — скидка 50%',
    desc: 'Первые 3 месяца для пилотных партнёров. Тестируете кабинет на своих клиентах на выгодных условиях.',
    highlight: true,
    points: ['Скидка 50% на 3 месяца', 'White-glove запуск', 'Влияние на дорожную карту'],
  },
  {
    icon: TrendingUp,
    title: 'Партнёрские 30%',
    desc: 'С каждой подписки клиента, которого порекомендуете, — каждый месяц, пока он остаётся с нами.',
    points: ['30% с подписок', 'Выплаты ежемесячно', 'Без потолка по количеству'],
  },
  {
    icon: Rocket,
    title: 'White-glove запуск',
    desc: 'Настроим вашего первого клиента лично за 24 часа — посмотрите результат, потом решите.',
    points: ['Настройка за 24 часа', 'Перенос клиентов', 'Обучение команды'],
  },
];

export default function Partnership() {
  return (
    <section id="partnership" className="py-24 md:py-32 bg-[#FAFCFF] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            Партнёрство
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Условия для <span className="text-navy/40">бухгалтерских фирм.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 leading-relaxed">
            Esep — это и инструмент вашей фирмы, и источник дохода: получаете
            процент с клиентов, которых приводите.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
          {OFFERS.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative p-8 rounded-3xl transition-all duration-500 ${
                  o.highlight
                    ? 'bg-navy text-white shadow-2xl shadow-navy/30 md:scale-[1.03]'
                    : 'bg-white border border-navy-100 hover:shadow-2xl hover:shadow-navy/5'
                }`}
              >
                {o.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-accent-green text-white text-[10px] font-bold uppercase tracking-wider">
                    Для первых партнёров
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  o.highlight ? 'bg-white/10' : 'bg-sky-50'
                }`}>
                  <Icon className={`w-6 h-6 ${o.highlight ? 'text-accent-green' : 'text-sky-600'}`} strokeWidth={2} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${o.highlight ? 'text-white' : 'text-navy'}`}>
                  {o.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${o.highlight ? 'text-white/70' : 'text-navy/60'}`}>
                  {o.desc}
                </p>
                <ul className="space-y-2">
                  {o.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 ${o.highlight ? 'text-accent-green' : 'text-accent-green'}`} strokeWidth={2.5} />
                      <span className={o.highlight ? 'text-white/80' : 'text-navy/70'}>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Стоимость — на демо */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white border border-navy-100 p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-navy mb-1.5">Стоимость — рассчитаем под вашу фирму</h3>
            <p className="text-navy/60 leading-relaxed text-sm">
              Цена зависит от количества ваших клиентов и нужных модулей.
              Точный расчёт и пилотные условия обсудим на 15-минутном
              демо-созвоне.
            </p>
          </div>
          <a
            href="#cta"
            className="group flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-navy text-white font-semibold hover:bg-navy-700 transition-all shadow-lg shadow-navy/20 hover:shadow-navy/40"
          >
            Записаться на демо
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
