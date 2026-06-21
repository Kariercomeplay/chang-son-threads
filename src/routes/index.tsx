import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import heroVillage from "@/assets/hero-village.jpg";
import storyVillage from "@/assets/story-village.jpg";
import artisan1 from "@/assets/artisan-1.jpg";
import artisan2 from "@/assets/artisan-2.jpg";
import artisan3 from "@/assets/artisan-3.jpg";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";
import process4 from "@/assets/process-4.jpg";
import process5 from "@/assets/process-5.jpg";
import process6 from "@/assets/process-6.jpg";
import process7 from "@/assets/process-7.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.jpg";
import collection5 from "@/assets/collection-5.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Làng Nghề Chàng Sơn — Hơn 200 năm giữ hồn nghề quạt" },
      { name: "description", content: "Câu chuyện di sản nghề quạt thủ công Chàng Sơn qua góc nhìn của thế hệ trẻ." },
      { property: "og:title", content: "Làng Nghề Chàng Sơn" },
      { property: "og:description", content: "Từ những nan tre mộc mạc đến tác phẩm mang đậm bản sắc văn hóa Việt." },
      { property: "og:image", content: heroVillage },
      { name: "twitter:image", content: heroVillage },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Trang Chủ", href: "#top" },
  { label: "Làng Nghề", href: "#story" },
  { label: "Nghệ Nhân", href: "#artisans" },
  { label: "Dự Án", href: "#project" },
  { label: "Bộ Sưu Tập", href: "#collection" },
  { label: "Thư Viện", href: "#gallery" },
  { label: "Liên Hệ", href: "#contact" },
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground paper-grain">
      <Nav />
      <Hero />
      <StorySection />
      <Timeline />
      <Artisans />
      <Process />
      <ProjectJourney />
      <Collection />
      <Gallery />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- Navigation ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-baseline gap-3">
          <span
            className={`serif-display text-2xl tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
          >
            Chàng Sơn
          </span>
          <span
            className={`hidden text-[10px] uppercase tracking-[0.32em] md:inline ${
              scrolled ? "text-ink-muted" : "text-ivory/70"
            }`}
            style={{ color: scrolled ? "var(--color-ink-muted)" : "rgba(248,244,235,0.7)" }}
          >
            Di sản · Est. ~1800
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[12px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-lacquer ${
                scrolled ? "text-ink-soft" : "text-ivory/85"
              }`}
              style={{ color: scrolled ? "var(--color-ink-soft)" : "rgba(248,244,235,0.85)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-ink" : "text-ivory"}`}
          style={{ color: scrolled ? "var(--color-ink)" : "var(--color-ivory)" }}
          aria-label="Menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ivory lg:hidden"
            style={{ background: "var(--color-ivory)" }}
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm uppercase tracking-[0.18em] text-ink-soft"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src={heroVillage}
          alt="Làng Chàng Sơn nhìn từ trên cao"
          className="h-[115%] w-full object-cover animate-slow-zoom"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 cinematic-overlay" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mb-6 text-[11px] uppercase tracking-[0.45em]"
          style={{ color: "rgba(248,244,235,0.75)" }}
        >
          Di sản · Làng nghề · Việt Nam
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="serif-display max-w-[18ch] text-[clamp(2.6rem,7vw,6rem)] font-light leading-[1.02]"
          style={{ color: "var(--color-ivory)" }}
        >
          Hơn 200 năm <em className="italic" style={{ color: "var(--color-bamboo-soft)" }}>giữ hồn</em> nghề quạt
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed md:text-lg"
          style={{ color: "rgba(248,244,235,0.85)" }}
        >
          Từ những nan tre mộc mạc đến những tác phẩm mang đậm bản sắc văn hóa Việt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <a
            href="#story"
            className="group inline-flex items-center gap-3 border border-ivory/40 bg-transparent px-8 py-4 text-[11px] uppercase tracking-[0.32em] transition-all hover:border-ivory hover:bg-ivory hover:text-ink"
            style={{ color: "var(--color-ivory)" }}
          >
            Khám phá hành trình
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <div className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-3">
        <span
          className="text-[10px] uppercase tracking-[0.4em]"
          style={{ color: "rgba(248,244,235,0.6)" }}
        >
          Cuộn xuống
        </span>
        <div className="scroll-hint h-10 w-px" style={{ background: "rgba(248,244,235,0.5)" }} />
      </div>
    </section>
  );
}

/* ---------------- Reveal helper ---------------- */
function Reveal({
  children,
  delay = 0,
  className = "",
  y = 30,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Story ---------------- */
function StorySection() {
  return (
    <section id="story" className="relative px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-12 md:gap-20">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <img
              src={storyVillage}
              alt="Hình ảnh cổ về làng Chàng Sơn"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
              width={1280}
              height={1600}
            />
            <div
              className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-bamboo md:block"
              style={{ borderColor: "var(--color-bamboo)" }}
            />
            <p
              className="mt-4 text-[11px] uppercase tracking-[0.3em]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Tư liệu · Làng Chàng Sơn, Thạch Thất, Hà Nội
            </p>
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-8">
          <Reveal delay={0.1}>
            <p className="eyebrow">Chương 01 — Cội nguồn</p>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="serif-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">
              Nơi tre <em className="italic" style={{ color: "var(--color-lacquer)" }}>kể chuyện</em>,
              <br />
              nơi nghề <em className="italic" style={{ color: "var(--color-lacquer)" }}>giữ hồn</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 hairline" />
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 space-y-6 text-[1.02rem] leading-[1.85] text-ink-soft" style={{ color: "var(--color-ink-soft)" }}>
              <p>
                Tên gọi <strong className="font-medium">Chàng Sơn</strong> bắt nguồn từ
                hình ảnh người thợ tre dưới chân núi — nơi mỗi gia đình đều có một nhịp đập riêng,
                một mùi tre, một dáng tay quen thuộc của nghề truyền đời.
              </p>
              <p>
                Từ thế kỷ XIX, làng đã trở thành cái nôi của nghề quạt giấy ở vùng đồng bằng
                Bắc Bộ. Những chiếc quạt Chàng Sơn theo chân thương lái đi khắp ba miền,
                xuất hiện trong các lễ hội, đình làng, và cả những buổi trà chiều của giới sĩ phu.
              </p>
              <p>
                Hôm nay, trước nhịp sống công nghiệp và sự mai một của nghề thủ công,
                Chàng Sơn vẫn lặng lẽ giữ lại từng nan tre, từng nét vẽ — như một cách
                nói với thế hệ sau rằng <em className="italic" style={{ color: "var(--color-lacquer)" }}>“di sản là điều cần được kể lại”</em>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8" style={{ borderColor: "var(--color-line)" }}>
              {[
                ["200+", "Năm lịch sử"],
                ["7", "Công đoạn thủ công"],
                ["~40", "Hộ làm nghề"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="serif-display text-3xl text-lacquer" style={{ color: "var(--color-lacquer)" }}>{k}</dt>
                  <dd className="mt-2 text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--color-ink-muted)" }}>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Timeline ---------------- */
const MILESTONES = [
  { year: "1800", title: "Khởi sinh nghề quạt", body: "Những hộ thợ tre đầu tiên ở Chàng Sơn bắt đầu chuốt nan, dán giấy dó, tạo nên chiếc quạt giấy mang dáng vẻ riêng của làng." },
  { year: "1900", title: "Thời kỳ mở rộng", body: "Quạt Chàng Sơn theo các phiên chợ Bắc Kỳ, trở thành vật phẩm quen thuộc trong đời sống thường nhật và lễ hội." },
  { year: "1945", title: "Phát triển truyền thống", body: "Nghề được trao truyền theo gia tộc — cha dạy con, ông dạy cháu — gìn giữ kỹ thuật pha keo, vót nan và vẽ tay đặc trưng." },
  { year: "1986", title: "Chuyển mình kinh tế", body: "Đổi mới mở ra thị trường nhưng cũng đặt nghề thủ công trước thử thách. Nhiều gia đình rời nghề, chỉ những bàn tay tâm huyết ở lại." },
  { year: "2025", title: "Bảo tồn số hóa", body: "Thế hệ trẻ trở về Chàng Sơn để ghi hình, kể chuyện và đưa di sản lên không gian số — để câu chuyện của làng tiếp tục sống." },
];

function Timeline() {
  return (
    <section
      className="relative px-6 py-32 md:px-12 md:py-44"
      style={{ background: "linear-gradient(180deg, var(--color-ivory) 0%, #f1ead7 100%)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="eyebrow text-center">Chương 02 — Dòng thời gian</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="serif-display mt-6 text-center text-[clamp(2.2rem,4.5vw,3.8rem)]">
            Hai thế kỷ <em className="italic" style={{ color: "var(--color-lacquer)" }}>không gián đoạn</em>
          </h2>
        </Reveal>

        <div className="relative mt-24">
          {/* center line */}
          <div
            className="absolute left-6 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2"
            style={{ background: "var(--color-line-strong)" }}
          />

          <div className="space-y-20 md:space-y-32">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={0.05}>
                <div
                  className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* marker */}
                  <div
                    className="absolute left-6 top-2 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2"
                    style={{ background: "var(--color-lacquer)", boxShadow: "0 0 0 6px var(--color-ivory)" }}
                  />

                  <div className={`pl-14 md:pl-0 ${i % 2 === 1 ? "md:text-left md:pl-16" : "md:text-right md:pr-16"}`}>
                    <p
                      className="serif-display text-[clamp(3rem,6vw,5.5rem)] leading-none"
                      style={{ color: "var(--color-lacquer)" }}
                    >
                      {m.year}
                    </p>
                  </div>

                  <div className={`pl-14 md:pl-0 ${i % 2 === 1 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <h3 className="serif-display text-2xl md:text-3xl">{m.title}</h3>
                    <p
                      className="mt-4 max-w-md leading-[1.85] md:max-w-none"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      {m.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Artisans ---------------- */
const ARTISANS = [
  {
    img: artisan1,
    name: "Ông Nguyễn Văn Hoà",
    years: "52 năm với nghề",
    quote: "Tre có hồn riêng. Người làm quạt là người lắng nghe nó.",
  },
  {
    img: artisan2,
    name: "Bà Trần Thị Lan",
    years: "45 năm vẽ quạt",
    quote: "Mỗi nét bút là một lời nguyện cầu cho làng còn giữ được nghề.",
  },
  {
    img: artisan3,
    name: "Ông Lê Đình Sơn",
    years: "38 năm chuốt nan",
    quote: "Cái khó không phải là làm ra chiếc quạt — mà là giữ được người làm ra nó.",
  },
];

function Artisans() {
  return (
    <section id="artisans" className="px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Chương 03 — Chân dung</p>
            <h2 className="serif-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">
              Những bàn tay <br />
              <em className="italic" style={{ color: "var(--color-lacquer)" }}>còn giữ lửa nghề</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5">
            <p className="leading-[1.85]" style={{ color: "var(--color-ink-soft)" }}>
              Họ là những người cuối cùng còn nhớ trọn quy trình thủ công. Mỗi câu chuyện
              là một mảnh ký ức của Chàng Sơn — về một thời, một nghề, và một nhịp sống đang dần lùi xa.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
          {ARTISANS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.12} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  className="aspect-[4/5] w-full object-cover grayscale-[0.1] transition-all duration-[1400ms] group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(20,12,8,0.5) 100%)" }}
                />
              </div>
              <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-line)" }}>
                <p className="text-[10px] uppercase tracking-[0.32em]" style={{ color: "var(--color-bamboo)" }}>
                  {a.years}
                </p>
                <h3 className="serif-display mt-3 text-2xl">{a.name}</h3>
                <p
                  className="serif-display mt-5 text-lg italic leading-[1.5]"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  “{a.quote}”
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
const STEPS = [
  { n: "01", title: "Chọn tre", img: process1, body: "Tre già từ 3 năm tuổi được tuyển kỹ — thân thẳng, mắt thưa, độ dẻo dai đạt chuẩn." },
  { n: "02", title: "Chẻ nan", img: process2, body: "Đôi tay người thợ chia một đốt tre thành hàng chục nan mảnh đều như sợi tóc." },
  { n: "03", title: "Vót và làm nhẵn", img: process3, body: "Từng nan được vót cong, đánh giấy nhám để khi mở ra, quạt có dáng cánh cung thanh thoát." },
  { n: "04", title: "Dựng khung", img: process4, body: "Nan tre được xâu lại bằng chỉ tơ, định hình bộ khung quạt — công đoạn đòi hỏi sự chính xác tuyệt đối." },
  { n: "05", title: "Dán giấy", img: process5, body: "Giấy dó truyền thống được phết hồ nếp, dán lên khung quạt bằng nhịp tay điêu luyện." },
  { n: "06", title: "Vẽ tay", img: process6, body: "Hoa sen, thư pháp, sơn thuỷ — mỗi chiếc quạt mang dấu ấn riêng của người nghệ nhân." },
  { n: "07", title: "Hoàn thiện", img: process7, body: "Quạt được phơi khô, gắn chốt, kiểm tra từng nếp gấp — sẵn sàng kể câu chuyện của mình." },
];

function Process() {
  return (
    <section
      className="relative px-6 py-32 md:px-12 md:py-44"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Chương 04 — Quy trình</p>
          <h2 className="serif-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">
            Bảy bước, <em className="italic" style={{ color: "var(--color-lacquer)" }}>một đời tay nghề</em>
          </h2>
          <p className="mt-8 max-w-xl leading-[1.85]" style={{ color: "var(--color-ink-soft)" }}>
            Một chiếc quạt Chàng Sơn hoàn chỉnh là kết tinh của hơn bốn mươi thao tác thủ công,
            được chắt lọc qua nhiều thế hệ.
          </p>
        </Reveal>

        <div className="mt-24 space-y-28 md:space-y-40">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} y={50}>
              <div
                className={`grid items-center gap-10 md:grid-cols-12 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-7">
                  <div className="relative overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full object-cover"
                      loading="lazy"
                      width={1280}
                      height={960}
                    />
                  </div>
                </div>
                <div className={`md:col-span-5 ${i % 2 === 1 ? "md:pr-6" : "md:pl-6"}`}>
                  <p
                    className="serif-display text-[clamp(4rem,8vw,8rem)] leading-none"
                    style={{ color: "var(--color-bamboo)" }}
                  >
                    {s.n}
                  </p>
                  <h3 className="serif-display mt-2 text-3xl md:text-4xl">{s.title}</h3>
                  <div className="mt-6 hairline w-24" />
                  <p
                    className="mt-6 text-lg leading-[1.85]"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Project Journey ---------------- */
const PHASES = [
  { p: "Phase 01", t: "Nghiên cứu thực địa", b: "Khảo sát tài liệu, bản đồ, tư liệu lịch sử về làng nghề và bối cảnh văn hoá Bắc Bộ." },
  { p: "Phase 02", t: "Thám hiểm làng nghề", b: "Đi bộ qua từng ngõ nhỏ Chàng Sơn, tiếp xúc với các hộ làm nghề và lắng nghe nhịp sống thường nhật." },
  { p: "Phase 03", t: "Phỏng vấn nghệ nhân", b: "Ghi lại tiếng nói của những người thợ — ký ức nghề, kỹ thuật riêng, nỗi trăn trở về tương lai." },
  { p: "Phase 04", t: "Ghi hình & tư liệu hoá", b: "Thực hiện loạt ảnh tài liệu và video ngắn về toàn bộ quy trình làm quạt thủ công." },
  { p: "Phase 05", t: "Phát triển website", b: "Xây dựng nền tảng số kể chuyện — kết hợp thiết kế, công nghệ và mỹ thuật văn hoá." },
  { p: "Phase 06", t: "Bảo tồn di sản số", b: "Mở rộng câu chuyện trên các kênh truyền thông, đưa Chàng Sơn đến gần hơn với cộng đồng trẻ." },
];

function ProjectJourney() {
  return (
    <section id="project" className="px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Chương 05 — Hành trình dự án</p>
          <h2 className="serif-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">
            Sáu chặng đường <br />
            <em className="italic" style={{ color: "var(--color-lacquer)" }}>của một thế hệ trẻ</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PHASES.map((ph, i) => (
            <Reveal key={ph.p} delay={i * 0.08}>
              <article
                className="group h-full border bg-paper p-8 transition-all duration-500 hover:border-lacquer hover:shadow-[0_20px_60px_-20px_rgba(139,46,46,0.18)]"
                style={{ borderColor: "var(--color-line)", background: "var(--color-paper)" }}
              >
                <div className="flex items-baseline justify-between">
                  <p
                    className="text-[10px] uppercase tracking-[0.32em]"
                    style={{ color: "var(--color-bamboo)" }}
                  >
                    {ph.p}
                  </p>
                  <span
                    className="serif-display text-3xl opacity-30 transition-opacity group-hover:opacity-100"
                    style={{ color: "var(--color-lacquer)" }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3 className="serif-display mt-6 text-2xl leading-tight">{ph.t}</h3>
                <div className="mt-6 hairline w-12" />
                <p className="mt-6 leading-[1.8]" style={{ color: "var(--color-ink-soft)" }}>
                  {ph.b}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Collection ---------------- */
const COLLECTION = [
  { img: collection1, name: "Quạt thư pháp", desc: "Nét mực Việt — nơi chữ và quạt cùng kể một câu chuyện." },
  { img: collection2, name: "Quạt lễ hội", desc: "Sắc đỏ vàng rộn rã — linh hồn của hội làng Bắc Bộ." },
  { img: collection3, name: "Quạt phong thuỷ", desc: "Bát quái, song ngư — gửi gắm lời cầu an và thịnh vượng." },
  { img: collection4, name: "Quạt nghệ thuật", desc: "Sơn thuỷ ngàn mây — chiếc quạt như một bức tranh thu nhỏ." },
  { img: collection5, name: "Quạt lưu niệm", desc: "Cánh sen mộc mạc — món quà mang theo hồn làng." },
];

function Collection() {
  return (
    <section
      id="collection"
      className="px-6 py-32 md:px-12 md:py-44"
      style={{ background: "#1a1310" }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <p className="eyebrow" style={{ color: "var(--color-bamboo)" }}>Chương 06 — Bộ sưu tập</p>
            <h2
              className="serif-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]"
              style={{ color: "var(--color-ivory)" }}
            >
              Bộ Sưu Tập <em className="italic" style={{ color: "var(--color-bamboo)" }}>Quạt</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-4">
            <p className="leading-[1.85]" style={{ color: "rgba(248,244,235,0.7)" }}>
              Năm dòng quạt tiêu biểu — mỗi dòng là một lát cắt văn hoá khác nhau của làng Chàng Sơn.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-6 md:gap-4">
          {COLLECTION.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 0.08}
              className={`group ${i === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-3"}`}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  className={`w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110 ${
                    i === 0 ? "h-full min-h-[500px]" : "aspect-[4/5]"
                  }`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.75) 100%)" }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="serif-display text-2xl md:text-3xl" style={{ color: "var(--color-ivory)" }}>
                    {c.name}
                  </h3>
                  <p
                    className="mt-2 max-w-sm text-sm leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ color: "rgba(248,244,235,0.85)" }}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
const GALLERY = [
  { img: gallery1, tag: "Đời sống làng" },
  { img: gallery2, tag: "Nghệ nhân" },
  { img: gallery3, tag: "Sản phẩm" },
  { img: gallery4, tag: "Đời sống làng" },
  { img: gallery5, tag: "Quy trình" },
  { img: gallery6, tag: "Quạt truyền thống" },
  { img: gallery7, tag: "Nghệ nhân" },
  { img: gallery8, tag: "Đời sống làng" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Chương 07 — Thư viện hình ảnh</p>
          <h2 className="serif-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.05]">
            Khung hình <em className="italic" style={{ color: "var(--color-lacquer)" }}>Chàng Sơn</em>
          </h2>
        </Reveal>

        <div className="mt-16 columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
          {GALLERY.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06} className="mb-4 break-inside-avoid md:mb-6">
              <button
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden"
                aria-label={`Mở ảnh ${g.tag}`}
              >
                <img
                  src={g.img}
                  alt={g.tag}
                  className="w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)" }}
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.3em]"
                    style={{ color: "var(--color-ivory)" }}
                  >
                    {g.tag}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
            style={{ background: "rgba(20,12,8,0.92)" }}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={GALLERY[open].img}
              alt={GALLERY[open].tag}
              className="max-h-[90vh] max-w-full object-contain"
            />
            <button
              className="absolute right-6 top-6 text-2xl"
              style={{ color: "var(--color-ivory)" }}
              onClick={() => setOpen(null)}
              aria-label="Đóng"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <img
        src={ctaBg}
        alt="Người nghệ nhân Chàng Sơn"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(20,12,8,0.55) 0%, rgba(20,12,8,0.75) 100%)" }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <p
            className="eyebrow"
            style={{ color: "var(--color-bamboo)" }}
          >
            Lời kết
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="serif-display mt-8 max-w-[18ch] text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.05]"
            style={{ color: "var(--color-ivory)" }}
          >
            Di sản chỉ sống <br />
            khi được <em className="italic" style={{ color: "var(--color-bamboo-soft)" }}>kể lại</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p
            className="mt-8 max-w-xl text-lg leading-relaxed"
            style={{ color: "rgba(248,244,235,0.82)" }}
          >
            Khám phá câu chuyện Chàng Sơn qua góc nhìn của thế hệ trẻ.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <a
            href="#project"
            className="mt-12 inline-flex items-center gap-3 border bg-transparent px-10 py-4 text-[11px] uppercase tracking-[0.32em] transition-all hover:bg-ivory hover:text-ink"
            style={{ color: "var(--color-ivory)", borderColor: "rgba(248,244,235,0.4)" }}
          >
            Khám phá dự án
            <span>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer
      id="contact"
      className="border-t px-6 py-20 md:px-12"
      style={{ borderColor: "var(--color-line)", background: "var(--color-paper)" }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="serif-display text-3xl">Chàng Sơn</p>
            <p
              className="mt-2 text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "var(--color-bamboo)" }}
            >
              Dự án di sản số · 2025
            </p>
            <p
              className="mt-8 max-w-md leading-[1.85]"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Một dự án văn hoá phi lợi nhuận của sinh viên — nhằm lưu giữ và lan toả
              câu chuyện về nghề quạt thủ công Chàng Sơn đến với cộng đồng trẻ Việt Nam.
            </p>
          </div>

          <div className="md:col-span-3">
            <p
              className="text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Trường đại học
            </p>
            <p className="mt-4 leading-[1.8]" style={{ color: "var(--color-ink-soft)" }}>
              Khoa Văn hoá & Truyền thông
              <br />
              Dự án Bảo tồn Di sản
              <br />
              Năm học 2024 – 2025
            </p>
          </div>

          <div className="md:col-span-2">
            <p
              className="text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Nhóm thực hiện
            </p>
            <ul className="mt-4 space-y-2" style={{ color: "var(--color-ink-soft)" }}>
              <li>Nguyễn Minh Anh</li>
              <li>Trần Hoàng Long</li>
              <li>Lê Thị Hương</li>
              <li>Phạm Quốc Việt</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p
              className="text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Liên hệ
            </p>
            <ul className="mt-4 space-y-2" style={{ color: "var(--color-ink-soft)" }}>
              <li>hello@changson.vn</li>
              <li>Hà Nội, Việt Nam</li>
            </ul>
            <div className="mt-6 flex gap-4 text-[11px] uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-lacquer" style={{ color: "var(--color-lacquer)" }}>Instagram</a>
              <a href="#" className="hover:text-lacquer" style={{ color: "var(--color-lacquer)" }}>YouTube</a>
            </div>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col gap-4 border-t pt-8 text-[11px] uppercase tracking-[0.2em] md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "var(--color-line)", color: "var(--color-ink-muted)" }}
        >
          <p>© 2025 Dự án Di sản Chàng Sơn. Bảo lưu mọi quyền.</p>
          <p>Made with care — for a craft that deserves to be remembered.</p>
        </div>
      </div>
    </footer>
  );
}
