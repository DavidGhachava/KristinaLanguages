"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  ["Подойдут ли занятия начинающим?", "Да. Можно начать с алфавита, чтения и самых нужных фраз. Темп и материалы Кристина подбирает под ваш уровень."],
  ["Можно ли заниматься ребёнку?", "Да, занятия подходят детям и подросткам. Содержание, длительность заданий и подача адаптируются к возрасту ребёнка."],
  ["Где проходят очные занятия?", "Очные занятия проходят в Батуми. Точное место Кристина сообщит при личном согласовании."],
  ["Можно ли заниматься онлайн?", "Да. Онлайн-формат подходит тем, кто живёт в другом городе, часто путешествует или предпочитает заниматься из дома."],
  ["Сколько стоит занятие?", "Стоимость одного занятия — 20 ₾. Для разных форматов не заявляются отдельные цены."],
  ["Как выбрать время?", "Расписание меняется. Оставьте заявку, и Кристина предложит ближайшие доступные варианты, чтобы выбрать удобный вместе."],
  ["Нужно ли покупать учебники?", "Сначала ничего покупать не нужно. Кристина подберёт материалы под возраст, уровень и цель ученика и подскажет, если понадобится что-то дополнительно."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0); const reduced = useReducedMotion();
  return <div className="faq-list">{items.map(([question, answer], index) => { const expanded = open === index; return <div className="faq-item" key={question}><h3><button type="button" aria-expanded={expanded} aria-controls={`faq-${index}`} onClick={() => setOpen(expanded ? null : index)}><span>{question}</span><ChevronDown aria-hidden="true" /></button></h3><AnimatePresence initial={false}>{expanded && <m.div id={`faq-${index}`} className="faq-answer" initial={reduced ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduced ? undefined : { height: 0, opacity: 0 }} transition={{ duration: .25 }}><p>{answer}</p></m.div>}</AnimatePresence></div>; })}</div>;
}
