'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    n: 'Шаг 1',
    title: 'Демо 15 минут',
    desc: 'Короткий созвон в WhatsApp или Zoom. Покажем кабинет на примере вашего клиента, ответим на вопросы, рассчитаем стоимость под вашу фирму.',
  },
  {
    n: 'Шаг 2',
    title: 'Заводим первого клиента',
    desc: 'За 24 часа настроим одного вашего клиента под ключ — вы увидите результат на реальных данных, прежде чем принимать решение.',
  },
  {
    n: 'Шаг 3',
    title: 'Переносим остальных',
    desc: 'Помогаем перенести клиентов и обучаем команду. Esep работает параллельно с вашим 1С — основной учёт остаётся у вас, переходите спокойно.',
  },
  {
    n: 'Шаг 4',
    title: 'Сопровождение',
    desc: 'На связи в WhatsApp, отвечаем команде. Обновления закона закрываем на своей стороне. Money-back в первый месяц, если не подойдёт.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            Как начать
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            От демо до первого клиента —
            <br />
            <span className="text-navy/40">за 24 часа.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-200 via-sky-100 to-transparent md:-translate-x-px" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative pl-12 md:pl-0 mb-12 last:mb-0 md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? '' : 'md:[direction:rtl]'
              }`}
            >
              {/* Точка */}
              <div className="absolute left-4 md:left-1/2 top-3 w-3 h-3 -translate-x-1/2 rounded-full bg-sky-500 ring-4 ring-sky-100" />

              <div
                className={`md:[direction:ltr] ${
                  i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'
                }`}
              >
                <div className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest mb-2">
                  {step.n}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-navy/60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
