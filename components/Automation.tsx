'use client';

import { motion } from 'framer-motion';

// Анимированная секция «рутина в движении»: браузер-окно на лупе из 3 сцен —
// выписка → налог, формы → ИСНА, выигрыш фирмы. Дополняет статичный Cabinet.
export default function Automation() {
  return (
    <section id="automation" className="az-sec py-24 md:py-32 bg-gradient-hero">
      {/* Фон */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl aurora-1" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-3xl aurora-2" />
      </div>
      <div className="absolute inset-0 dot-grid opacity-[0.05]" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
            Система управления бухгалтерской фирмой
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] text-balance">
            Рутину Esep берёт <span className="gradient-text-light">на себя.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Выписка → налог → формы 910 / 200 / 300 → ИСНА. Вы ведёте больше
            клиентов — без найма ещё одного бухгалтера.
          </p>
        </motion.div>

        {/* Браузер-окно с 3 сценами на лупе */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="az-win">
            <div className="az-bar">
              <i className="d1" />
              <i className="d2" />
              <i className="d3" />
              <div className="az-url"><span>app.esepkz.com/cabinet</span></div>
            </div>
            <div className="az-body">

              {/* Сцена 1 — выписка → налог */}
              <div className="scene scene1">
                <div className="az-hd"><span className="ic">↧</span> Импорт выписки · ИП Сериков</div>
                <div className="az-cols">
                  <div>
                    <div className="trow"><span className="dot dot-in" /><div className="tx"><div className="nm">Оплата от клиента</div><div className="dt">24.06.2026 · Kaspi</div></div><span className="am am-in">+540 000 ₸</span><span className="tg tg-in">доход</span></div>
                    <div className="trow"><span className="dot dot-out" /><div className="tx"><div className="nm">Аренда офиса</div><div className="dt">23.06.2026</div></div><span className="am am-out">−180 000 ₸</span><span className="tg tg-out">расход</span></div>
                    <div className="trow"><span className="dot dot-in" /><div className="tx"><div className="nm">Оплата от клиента</div><div className="dt">22.06.2026 · Halyk</div></div><span className="am am-in">+320 000 ₸</span><span className="tg tg-in">доход</span></div>
                    <div className="trow"><span className="dot dot-out" /><div className="tx"><div className="nm">Услуги связи</div><div className="dt">21.06.2026</div></div><span className="am am-out">−12 400 ₸</span><span className="tg tg-out">расход</span></div>
                  </div>
                  <div className="res">
                    <div className="ok">✓ Разнесено 32 операции</div>
                    <div className="lbl">Налог к уплате посчитан</div>
                    <div className="big">48 000 ₸</div>
                    <div className="form">форма 910 · готова</div>
                  </div>
                </div>
              </div>

              {/* Сцена 2 — формы → ИСНА */}
              <div className="scene scene2">
                <div className="az-hd"><span className="ic">📄</span> Налоговые формы · II квартал</div>
                <div className="fcards">
                  <div className="fc"><div className="fc-top"><span className="fc-code">Ф.910</span><span className="fc-badge">готова</span></div><div className="fc-nm">Упрощёнка · доход</div><div className="fc-bar"><div className="fc-fill" /></div></div>
                  <div className="fc"><div className="fc-top"><span className="fc-code">Ф.200</span><span className="fc-badge">готова</span></div><div className="fc-nm">ИПН и соцплатежи</div><div className="fc-bar"><div className="fc-fill" /></div></div>
                  <div className="fc"><div className="fc-top"><span className="fc-code">Ф.300</span><span className="fc-badge">готова</span></div><div className="fc-nm">НДС · II квартал</div><div className="fc-bar"><div className="fc-fill" /></div></div>
                </div>
                <div className="isna">
                  <div className="chk">✓</div>
                  <div>
                    <div className="t1">Выгружено в ИСНА</div>
                    <div className="t2">3 формы отправлены в кабинет налогоплательщика</div>
                  </div>
                </div>
              </div>

              {/* Сцена 3 — выигрыш фирмы */}
              <div className="scene scene3">
                <div className="az-hd"><span className="ic">📊</span> Ваша фирма · отчётный сезон</div>
                <div className="stats">
                  <div className="stat"><div className="v v-navy">35</div><div className="l">клиентов</div></div>
                  <div className="stat"><div className="v v-green">0</div><div className="l">просрочек</div></div>
                  <div className="stat"><div className="v v-sky">−25 ч</div><div className="l">в неделю</div></div>
                </div>
                <div className="clients">
                  <span className="cchip"><span className="c">✓</span> ТОО Алтын</span>
                  <span className="cchip"><span className="c">✓</span> ИП Сериков</span>
                  <span className="cchip"><span className="c">✓</span> ТОО Мерей</span>
                  <span className="cchip"><span className="c">✓</span> KazFood</span>
                  <span className="cchip"><span className="c">✓</span> ИП Айгерим</span>
                  <span className="cchip"><span className="c">✓</span> +30</span>
                </div>
                <div className="ftag">Больше клиентов — <span className="hl">без найма</span></div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Подписи-шаги (подсвечиваются синхронно со сценами) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="fcaps"
        >
          <div className="fcap fcap1">
            <div className="ci">🏦</div>
            <div><div className="ct">Выписка → налог</div><div className="cd">Импорт банка, авто-разнос операций, налог посчитан.</div></div>
          </div>
          <div className="fcap fcap2">
            <div className="ci">📄</div>
            <div><div className="ct">Формы → ИСНА</div><div className="cd">910 / 200 / 300 заполняются и уходят в кабинет.</div></div>
          </div>
          <div className="fcap fcap3">
            <div className="ci">🚀</div>
            <div><div className="ct">Больше клиентов</div><div className="cd">Единый контроль сроков. 0 пропусков — без найма.</div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
