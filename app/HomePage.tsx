"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Check, CircleCheck, Ear, Globe2, GraduationCap, MapPin, MessageCircle, Mic2, NotebookText, School, Send, Sparkles, Users, Volume2 } from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import { FAQ } from "./components/FAQ";
import { Navigation } from "./components/Navigation";
import { Container, GlassCard, PrimaryLink, Reveal, SecondaryLink, SectionHeading } from "./components/UI";

const whatsapp = "https://wa.me/995571010750";
const trust = [[Globe2, "Носитель языка"], [MessageCircle, "Понятные объяснения на русском"], [Mic2, "Практика с первого занятия"], [Sparkles, "Спокойная атмосфера"]] as const;
const audience = [
  [MapPin, "Для переехавших в Грузию", "Чтобы увереннее общаться с соседями, врачами, в магазинах и решать обычные дела без лишнего стресса."],
  [School, "Для детей и подростков", "Чтобы понимать язык вокруг, легче адаптироваться в школе и постепенно начать говорить."],
  [BookOpen, "Для начинающих с нуля", "Начнём с букв, звуков и полезных фраз — без предположения, что вы уже что-то знаете."],
  [GraduationCap, "Для тех, кто знает основы", "Соберём знания в систему, расширим словарный запас и добавим больше разговорной практики."],
  [MessageCircle, "Для повседневного общения", "Разберём ситуации, которые действительно встречаются: знакомство, покупки, транспорт и бытовые вопросы."],
  [Globe2, "Для подготовки к поездке", "Освоим вежливые обращения, навигацию, заказ в кафе и короткие диалоги, которые пригодятся в Грузии."],
] as const;
const formats = [
  ["01", "Индивидуально", "Подойдёт, если важны личный темп и конкретная цель.", "Всё внимание — одному ученику: можно подробнее разбирать сложные темы и больше говорить."],
  ["02", "В мини-группе", "Подойдёт тем, кому помогает общение с другими учениками.", "Живые диалоги, парная практика и спокойная поддержка небольшой группы."],
  ["03", "Онлайн", "Подойдёт для занятий из дома или другого города.", "Видеосвязь, понятные материалы и та же разговорная практика без дороги до студии."],
] as const;
const valued = [[MessageCircle, "Спокойные объяснения", "Можно переспросить и разобрать тему ещё раз — без неловкости."], [Mic2, "Много разговорной практики", "Новые слова сразу превращаются в короткие живые диалоги."], [Users, "Темп под ученика", "Возраст, уровень и цель влияют на подачу и сложность заданий."], [NotebookText, "Материал для жизни", "Учимся тому, что пригодится в Батуми, поездке и повседневном общении."]] as const;

export function HomePage() {
  const reduced = useReducedMotion();
  return <>
    <a className="skip-link" href="#main">Перейти к содержанию</a>
    <Navigation />
    <main id="main">
      <section className="hero" id="top">
        <div className="georgian-letter letter-a" aria-hidden="true">ა</div><div className="georgian-letter letter-b" aria-hidden="true">ბ</div><div className="georgian-letter letter-g" aria-hidden="true">გ</div>
        <Container className="hero-grid">
          <motion.div className="hero-copy" initial={reduced ? false : "hidden"} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .09 } } }}>
            <motion.p className="trust-label" variants={reduced ? undefined : { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}><span>ა</span> Уроки грузинского с носителем языка</motion.p>
            <motion.h1 variants={reduced ? undefined : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>Заговорите по-грузински <em>уверенно</em></motion.h1>
            <motion.p className="hero-lead" variants={reduced ? undefined : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>Спокойно, понятно и без зубрёжки. Индивидуальные, групповые и онлайн-занятия с носителем языка для детей и взрослых — учимся понимать живую речь и пользоваться грузинским каждый день.</motion.p>
            <motion.div className="hero-actions" variants={reduced ? undefined : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}><PrimaryLink>Узнать о свободных местах</PrimaryLink><SecondaryLink href={whatsapp}>Написать в WhatsApp</SecondaryLink></motion.div>
            <motion.ul className="hero-facts" variants={reduced ? undefined : { hidden: { opacity: 0 }, show: { opacity: 1 } }}><li><Users />Для детей и взрослых</li><li><MapPin />Онлайн и в Батуми</li><li><CircleCheck />20 ₾ за занятие</li></motion.ul>
          </motion.div>
          <motion.div className="hero-visual" initial={reduced ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .2, ease: [0.22, 1, 0.36, 1] }}>
            <picture><source srcSet="/images/hero-studio.avif" type="image/avif" /><source srcSet="/images/hero-studio.webp" type="image/webp" /><img src="/images/hero-studio.webp" alt="Светлая студия для занятий грузинским языком в Батуми" width="1600" height="1067" fetchPriority="high" /></picture>
            <div className="image-note"><span>გამარჯობა</span><p><strong>гамарджоба</strong> — здравствуйте</p></div>
          </motion.div>
        </Container>
      </section>

      <Container><Reveal><div className="trust-strip">{trust.map(([Icon, title]) => <div key={title}><Icon aria-hidden="true" /><span>{title}</span></div>)}</div></Reveal></Container>

      <section className="section" id="about"><Container className="about-grid"><Reveal><SectionHeading eyebrow="О Кристине" title="Преподаватель, с которым не страшно ошибаться" text="Кристина — носитель грузинского языка и работает с русскоговорящими учениками. Незнакомые звуки, конструкции и правила она объясняет спокойно и понятным языком." /><div className="about-points">{["Индивидуальный подход", "Практический разговорный язык", "Произношение и понимание речи", "Для детей и взрослых"].map(x => <span key={x}><Check />{x}</span>)}</div></Reveal><Reveal delay={.12}><GlassCard className="quote-card"><span className="quote-mark">„</span><blockquote>Моя задача — помочь вам не просто запомнить правила, а начать понимать и использовать грузинский в жизни.</blockquote><p>Кристина Беридзе</p><div className="mini-note">Занятия адаптируются к возрасту, текущим знаниям и целям ученика.</div></GlassCard></Reveal></Container></section>

      <section className="section soft-section" id="audience"><Container><Reveal><SectionHeading eyebrow="Для кого" title="Грузинский, который нужен именно вам" text="От первых букв до более свободных бытовых диалогов — содержание зависит от вашей отправной точки и реальных задач." align="center" /></Reveal><div className="audience-grid">{audience.map(([Icon, title, text], i) => <Reveal key={title} delay={(i % 3) * .06}><GlassCard className="audience-card"><div className="icon-box"><Icon /></div><h3>{title}</h3><p>{text}</p></GlassCard></Reveal>)}</div></Container></section>

      <section className="section" id="formats"><Container><Reveal><SectionHeading eyebrow="Форматы занятий" title="Выберите удобный способ учиться" text="Доступность каждого формата зависит от текущего расписания. Оставьте заявку — Кристина лично подтвердит возможные варианты." /></Reveal><div className="format-grid">{formats.map(([num, title, best, text], i) => <Reveal key={title} delay={i * .08}><GlassCard className="format-card"><span className="format-num">{num}</span><h3>{title}</h3><p className="best">{best}</p><p>{text}</p><div className="format-bottom"><strong>20 ₾ <small>за занятие</small></strong><PrimaryLink small>Узнать о местах</PrimaryLink></div></GlassCard></Reveal>)}</div><p className="availability-note"><CircleCheck />Количество мест зависит от текущего расписания — Кристина сообщит о ближайших доступных вариантах.</p></Container></section>

      <section className="section program-section" id="program"><Container><div className="program-grid"><Reveal><SectionHeading eyebrow="Что изучаем" title="От первых букв — к живому разговору" text="Не набор разрозненных правил, а понятная последовательность: научиться слышать, читать и отвечать в реальных ситуациях." /><div className="learning-path" aria-label="Путь обучения"><span>Понимаю</span><i>→</i><span>Читаю</span><i>→</i><span>Отвечаю</span><i>→</i><span>Общаюсь увереннее</span></div></Reveal><Reveal delay={.1}><div className="curriculum"><div className="curriculum-main"><span className="georgian-stack">ა ბ გ</span><h3>Основа языка</h3><p>Грузинский алфавит и чтение, правильное произношение и базовая грамматика — простыми словами.</p></div><div className="curriculum-list">{[[Volume2, "Понимание живой речи"], [MessageCircle, "Повседневные фразы"], [Ear, "Слушаю и различаю"], [MapPin, "Магазины, кафе, транспорт и школа"]].map(([Icon, text]) => <div key={String(text)}><Icon /><span>{String(text)}</span></div>)}</div></div></Reveal></div></Container></section>

      <section className="studio-section"><Container><Reveal><div className="studio-image"><picture><source srcSet="/images/group-lesson.avif" type="image/avif" /><source srcSet="/images/group-lesson.webp" type="image/webp" /><img src="/images/group-lesson.webp" alt="Дети и взрослые изучают простые грузинские буквы за столом в светлой студии Батуми" width="1600" height="900" loading="lazy" /></picture><div className="studio-caption"><span>Урок в Батуми</span><strong>Слушаем, читаем и говорим — вместе</strong></div></div></Reveal></Container></section>

      <section className="section" id="reviews"><Container><Reveal><SectionHeading eyebrow="Что ценят ученики" title="Обучение в спокойной и понятной атмосфере" text="Здесь нет выдуманных отзывов или обещаний. В основе занятий — четыре простых принципа, которые помогают учиться без лишнего напряжения." align="center" /></Reveal><div className="valued-grid">{valued.map(([Icon, title, text], i) => <Reveal key={title} delay={i * .06}><div className="valued-item"><Icon /><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></Container></section>

      <section className="section price-section"><Container><Reveal><div className="price-card"><div><p className="eyebrow light">Стоимость</p><h2>Занятие грузинским языком</h2><p className="price-intro">Один понятный тариф без запутанных пакетов и разных цен для форматов.</p></div><div className="price"><strong>20 ₾</strong><span>за занятие</span></div><ul>{["Формат согласовывается индивидуально", "Онлайн или в Батуми", "Для детей и взрослых", "Материалы под уровень ученика", "Расписание обсуждается с Кристиной"].map(x => <li key={x}><Check />{x}</li>)}</ul><div className="price-action"><PrimaryLink>Узнать о свободных местах</PrimaryLink><p>Оставьте заявку — Кристина свяжется с вами и предложит доступные варианты времени.</p></div></div></Reveal></Container></section>

      <section className="section contact-section" id="contact"><Container className="contact-grid"><Reveal><div><SectionHeading eyebrow="Связаться" title="Узнайте, есть ли сейчас свободные места" text="Расскажите немного об ученике и удобном формате. Кристина ответит лично и поможет подобрать подходящее время." /><div className="contact-details"><a href="tel:+995571010750"><span><MessageCircle /></span><div><small>Телефон и WhatsApp</small><strong>+995 571 01 07 50</strong></div></a><a href="mailto:K.beridze1982@gmail.com"><span><Send /></span><div><small>Электронная почта</small><strong>K.beridze1982@gmail.com</strong></div></a><div><span><MapPin /></span><div><small>Очные занятия</small><strong>Батуми, Грузия</strong></div></div></div></div></Reveal><Reveal delay={.1}><ContactForm /></Reveal></Container></section>

      <section className="section faq-section"><Container className="faq-grid"><Reveal><SectionHeading eyebrow="Частые вопросы" title="Всё важное перед первым сообщением" text="Если вашего вопроса нет в списке, напишите Кристине в WhatsApp — она ответит лично." /></Reveal><Reveal delay={.08}><FAQ /></Reveal></Container></section>

      <section className="final-cta"><Container><Reveal><div className="final-panel"><div className="final-letters" aria-hidden="true">ა ბ გ</div><p className="eyebrow light">Можно начать с вопроса</p><h2>Есть вопросы или хотите начать?</h2><p>Узнайте, какие места сейчас свободны — Кристина лично поможет подобрать формат и время.</p><div className="hero-actions"><PrimaryLink>Узнать о свободных местах</PrimaryLink><SecondaryLink href={whatsapp}>Написать в WhatsApp</SecondaryLink></div></div></Reveal></Container></section>
    </main>
    <footer><Container><div className="footer-grid"><div><a className="wordmark footer-logo" href="#top"><span>კბ</span><strong>Кристина Беридзе</strong></a><p>Уроки грузинского языка<br />Батуми, Грузия</p></div><div><strong>Навигация</strong><a href="#about">Обо мне</a><a href="#formats">Форматы</a><a href="#program">Программа</a><a href="#contact">Контакты</a></div><div><strong>Связаться</strong><a href="tel:+995571010750">+995 571 01 07 50</a><a href="mailto:K.beridze1982@gmail.com">K.beridze1982@gmail.com</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Кристина Беридзе</span><span>Данные из формы используются только для ответа на заявку.</span></div></Container></footer>
  </>;
}
