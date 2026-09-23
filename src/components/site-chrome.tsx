import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X, Sparkles, type LucideIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/content/site";

const navItems = [
  { label: "Services", to: "/services" as const },
  { label: "Work", to: "/projects" as const },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Technologics home">
          <span className="grid size-9 place-items-center border border-primary bg-brand-soft font-display text-sm font-bold text-primary">
            T
          </span>
          <span className="font-display text-lg font-semibold">Technologics</span>
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/" hash="about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="/" hash="contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/" hash="contact">
              Start a project <ArrowRight />
            </Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <nav
          className="border-t border-line bg-background px-5 py-5 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-4 text-base">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="py-1 text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="about"
              onClick={() => setMenuOpen(false)}
              className="py-1 text-muted-foreground"
            >
              About
            </Link>
            <Link
              to="/"
              hash="contact"
              onClick={() => setMenuOpen(false)}
              className="py-1 text-muted-foreground"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="section-rule py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="font-display text-lg font-semibold">
          Technologics<span className="text-primary">.</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <span>LinkedIn</span>
          <span>Instagram</span>
          <span>GitHub</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Technologics. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 lg:pt-44 lg:pb-24">
      <div className="grid-lines absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-primary">
          <span className="h-px w-10 bg-primary" /> {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
          {/* {title == "Quillo" && (
            <a href="https://quillo.co.in/" target="_blank" rel="noopener noreferrer">
              quillo.co.in
            </a>
          )} */}
        </h1>
        {title == "Quillo" && (
          <a
            href="https://quillo.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 border border-line bg-brand-soft px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/10"
          >
            quillo.co.in
            <ExternalLink className="size-3.5" />
          </a>
        )}
        {text && <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{text}</p>}
      </div>
    </section>
  );
}

function BrowserChrome({ children }: { children?: ReactNode }) {
  return (
    <div className="absolute inset-6 border border-line bg-card shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="size-1.5 rounded-full bg-muted-foreground/40" />
        <span className="size-1.5 rounded-full bg-muted-foreground/40" />
        <span className="size-1.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-2 h-1.5 w-20 bg-muted" />
      </div>
      {children}
    </div>
  );
}

/** A representative mockup for a project card or detail hero. Renders `image` when the
 *  project has one (drop files in /public/projects and set `image` on the project),
 *  otherwise falls back to a design-system illustration for the given visual kind. */
export function ProjectVisual({
  visual,
  icon: Icon,
  image,
  alt,
}: {
  visual: Project["visual"];
  icon?: LucideIcon;
  image?: string;
  alt?: string;
}) {
  if (image) {
    return <img src={image} alt={alt ?? ""} className="absolute inset-0 size-full object-cover" />;
  }

  if (visual === "mobile") {
    return (
      <div className="absolute left-1/2 top-1/2 h-4/5 w-2/5 -translate-x-1/2 -translate-y-1/2 border-4 border-background bg-card p-2 shadow-2xl">
        <div className="h-full bg-brand-soft">
          <div className="mx-auto mt-3 h-1 w-8 bg-primary" />
          <div className="mx-3 mt-8 h-2/5 bg-primary/20" />
          <div className="mx-3 mt-3 h-2 bg-muted" />
          <div className="mx-3 mt-2 h-2 w-2/3 bg-muted" />
        </div>
      </div>
    );
  }

  if (visual === "dashboard") {
    return (
      <BrowserChrome>
        <div className="flex h-[calc(100%-2.25rem)]">
          <div className="grid w-1/4 content-start gap-2 border-r border-line p-3">
            <div className="h-1.5 w-full bg-muted" />
            <div className="h-1.5 w-4/5 bg-primary/60" />
            <div className="h-1.5 w-3/5 bg-muted" />
            <div className="h-1.5 w-4/5 bg-muted" />
          </div>
          <div className="grid flex-1 content-start gap-2 p-3">
            <div className="flex gap-2">
              <div className="h-8 flex-1 bg-brand-soft" />
              <div className="h-8 flex-1 bg-muted" />
              <div className="h-8 flex-1 bg-secondary" />
            </div>
            <div className="mt-2 flex h-16 items-end gap-1.5">
              <span className="h-1/3 w-2 bg-primary/40" />
              <span className="h-2/3 w-2 bg-primary/60" />
              <span className="h-full w-2 bg-primary" />
              <span className="h-1/2 w-2 bg-primary/50" />
              <span className="h-3/4 w-2 bg-primary/70" />
              <span className="h-1/4 w-2 bg-primary/30" />
            </div>
          </div>
        </div>
      </BrowserChrome>
    );
  }

  if (visual === "web-mobile") {
    return (
      <div className="absolute inset-6">
        <div className="absolute inset-0 right-10 border border-line bg-card shadow-xl">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            <span className="size-1.5 rounded-full bg-muted-foreground/40" />
            <span className="size-1.5 rounded-full bg-muted-foreground/40" />
            <span className="size-1.5 rounded-full bg-muted-foreground/40" />
          </div>
          <div className="grid gap-2 p-3">
            <div className="h-2 w-2/3 bg-muted" />
            <div className="h-2 w-1/2 bg-muted" />
            <div className="h-2 w-3/5 bg-muted" />
            <div className="h-2 w-2/5 bg-muted" />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-4/5 w-[38%] border-4 border-background bg-card p-2 shadow-2xl">
          <div className="h-full bg-brand-soft">
            <div className="mx-auto mt-3 h-1 w-6 bg-primary" />
            <div className="mx-2 mt-6 h-2 bg-muted" />
            <div className="mx-2 mt-2 h-2 w-2/3 bg-muted" />
          </div>
        </div>
        <div className="absolute left-[38%] top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/40 bg-brand-soft text-primary">
          <Sparkles className="size-5" />
        </div>
      </div>
    );
  }

  // "commerce" — a storefront/product page mockup
  return (
    <BrowserChrome>
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="grid aspect-square place-items-center bg-brand-soft">
          {Icon && <Icon className="size-8 text-primary" />}
        </div>
        <div className="grid content-start gap-2 pt-1">
          <div className="h-2 w-3/4 bg-muted" />
          <div className="h-2 w-1/2 bg-muted" />
          <div className="mt-2 h-2 w-1/3 bg-secondary" />
          <div className="mt-4 h-6 w-2/3 bg-primary/80" />
        </div>
      </div>
    </BrowserChrome>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="border border-line bg-background px-3 py-2 text-sm font-medium">
          {item}
        </span>
      ))}
    </div>
  );
}
