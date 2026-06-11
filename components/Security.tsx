'use client';

import { motion } from 'framer-motion';
import { Server, KeyRound, FileCheck, Shield } from 'lucide-react';

const ITEMS = [
  {
    icon: Server,
    title: 'Данные — в Казахстане',
    text: 'Серверы в РК, регулярное резервное копирование в зашифрованном виде. Доступ к данным клиентов — только у вашей фирмы.',
  },
  {
    icon: KeyRound,
    title: 'Ваша ЭЦП остаётся у вас',
    text: 'Esep считает формы и готовит выгрузку в ИСНА. Подписываете и сдаёте вы сами своей ЭЦП — мы не храним и не используем ваши ключи.',
  },
  {
    icon: FileCheck,
    title: 'Формы по схемам КГД',
    text: 'Расчёты и выгрузки соответствуют официальным схемам форм (910 v27, 200 v33, 300 v29). Обновления при изменениях закона — на нашей стороне.',
  },
  {
    icon: Shield,
    title: 'Работает параллельно с 1С',
    text: 'Esep не ломает ваш процесс: основной учёт может оставаться в 1С. Начинаете с части клиентов и переходите в комфортном темпе.',
  },
];

export default function Security() {
  return (
    <section id="security" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
              Безопасно и без риска
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance mb-6">
              Попробовать можно
              <br />
              <span className="text-navy/40">без риска.</span>
            </h2>
            <p className="text-lg text-navy/60 leading-relaxed mb-8">
              Вы ничем не рискуете: учёт остаётся под вашим контролем, ЭЦП —
              у вас, а если не подойдёт — вернём деньги в первый месяц.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-navy-50">
                <div className="text-3xl font-bold text-navy mb-1">100%</div>
                <div className="text-xs text-navy/60">Данные хранятся в РК</div>
              </div>
              <div className="p-5 rounded-2xl bg-navy-50">
                <div className="text-3xl font-bold text-navy mb-1">ЭЦП</div>
                <div className="text-xs text-navy/60">Остаётся у вас</div>
              </div>
              <div className="p-5 rounded-2xl bg-navy-50">
                <div className="text-3xl font-bold text-navy mb-1">1 мес</div>
                <div className="text-xs text-navy/60">Money-back гарантия</div>
              </div>
              <div className="p-5 rounded-2xl bg-navy-50">
                <div className="text-3xl font-bold text-navy mb-1">1С</div>
                <div className="text-xs text-navy/60">Работает параллельно</div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl bg-white border border-navy-100 hover:border-navy-200 hover:shadow-lg hover:shadow-navy/5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                      <Icon className="w-5 h-5 text-navy" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1.5">{item.title}</h3>
                      <p className="text-sm text-navy/60 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
