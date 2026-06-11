'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'Нужно ли отказываться от 1С?',
    a: 'Нет. Esep работает параллельно с вашим 1С — основной учёт может оставаться там. Можно начать с части клиентов, посмотреть на результат и переходить в удобном темпе.',
  },
  {
    q: 'Нужен ли опыт работы в 1С?',
    a: 'Нет. Кабинет рассчитан на бухгалтера без опыта 1С — он проще, работает в облаке из браузера, не требует установки и лицензий. Обучение команды входит в запуск.',
  },
  {
    q: 'Как сдаются формы — через вас?',
    a: 'Нет, со своей ЭЦП. Esep считает формы 910 / 200 / 300 и готовит выгрузку в формат ИСНА. Вы загружаете её в кабинет налогоплательщика и подписываете своей ЭЦП сами. Ключи мы не храним.',
  },
  {
    q: 'Сколько клиентов можно вести в кабинете?',
    a: 'Без ограничения. Все клиенты — ИП и ТОО — в одном окне с дедлайнами по каждому. За счёт автоматизации бухгалтер ведёт примерно 30 клиентов за время, что раньше уходило на 10.',
  },
  {
    q: 'Что будет, когда закон снова поменяется?',
    a: 'Обновления мы закрываем на своей стороне — в кабинете ничего перенастраивать не нужно. Реформу 2026 (НДС 16%, переход на ИСНА, прогрессивный ИПН) уже учли.',
  },
  {
    q: 'Можно ли свой бренд для клиентов (white-label)?',
    a: 'Да — в разработке, запуск Q3 2026. Кабинет будет с вашим логотипом и брендом: для ваших клиентов фирма выглядит как полноценный IT-продукт.',
  },
  {
    q: 'А если нам нужен модуль, которого пока нет?',
    a: 'Допишем под вашу фирму. Нужные именно вам отчёты, выгрузки и интеграции встраиваем в кабинет. Пилотные партнёры напрямую влияют на то, что мы делаем в первую очередь.',
  },
  {
    q: 'Сколько это стоит?',
    a: 'Цена зависит от количества ваших клиентов и нужных модулей. Точный расчёт и пилотные условия (скидка 50% для первых партнёров) обсудим на 15-минутном демо-созвоне.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FAFCFF] relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            Вопросы и ответы
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Часто спрашивают.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-navy-100 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-semibold text-navy pr-4">{item.q}</span>
                <Plus
                  className={`w-5 h-5 flex-shrink-0 text-sky-500 transition-transform ${
                    open === i ? 'rotate-45' : ''
                  }`}
                  strokeWidth={2.5}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-navy/70 leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
