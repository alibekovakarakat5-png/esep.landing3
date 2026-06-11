'use client';

import { motion } from 'framer-motion';
import { FileSpreadsheet, Cable, Palette, Rocket, ArrowRight } from 'lucide-react';

const ITEMS = [
  {
    icon: FileSpreadsheet,
    title: 'Свои отчёты и выгрузки',
    text: 'Нужный вам формат реестров, актов, сводов по клиентам — сделаем под ваш процесс, а не наоборот.',
  },
  {
    icon: Cable,
    title: 'Интеграции под вас',
    text: 'Ваш банк, ваша касса, выгрузка в вашу систему. Подключим источники данных, с которыми вы уже работаете.',
  },
  {
    icon: Palette,
    title: 'White-label кабинет',
    text: 'Кабинет с вашим логотипом и брендом для ваших клиентов — фирма выглядит как полноценный IT-продукт. (Запуск Q3 2026)',
  },
  {
    icon: Rocket,
    title: 'Приоритет в разработке',
    text: 'Что нужно вашим бухгалтерам — реализуем в первую очередь. Пилотные партнёры напрямую влияют на дорожную карту.',
  },
];

export default function Custom() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFCFF] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Под ваши требования
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Допишем модули <span className="text-navy/40">под вашу фирму.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 leading-relaxed">
            У каждой фирмы свои клиенты и свои процессы. Esep — не коробка:
            нужные именно вам сервисы мы создаём и встраиваем в кабинет.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group p-7 rounded-3xl bg-white border border-navy-100 hover:border-navy-200 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-sky-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-navy/60 leading-relaxed text-sm">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Навигационная полоса к демо */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-hero p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute inset-0 dot-grid opacity-[0.06]" />
          <div className="absolute -right-10 -top-10 w-60 h-60 bg-sky-500/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Расскажите, что нужно вашим бухгалтерам
              </h3>
              <p className="text-white/60 leading-relaxed max-w-xl">
                Обсудим ваш сценарий на демо и предложим, что доработать под
                вашу фирму в первую очередь.
              </p>
            </div>
            <a
              href="#cta"
              className="group flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-navy font-semibold shadow-2xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all"
            >
              Обсудить сценарий
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
