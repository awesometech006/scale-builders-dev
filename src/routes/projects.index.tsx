import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader, PageHero, ProjectVisual } from "@/components/site-chrome";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Work — Technologics Portfolio" },
      {
        name: "description",
        content:
          "Selected mobile and e-commerce work from Technologics, including the Fameo React Native application and Shopify commerce builds.",
      },
      { property: "og:title", content: "Work — Technologics" },
      {
        property: "og:description",
        content: "Selected mobile and commerce projects. Client identities remain private by design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Selected work"
          title="Projects built for real-world momentum."
          text="Mobile and commerce work across international markets. Client identities remain private by design."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="group bg-background p-4 transition-colors hover:bg-surface"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-strong">
                    {!project.image && <div className="grid-lines absolute inset-0 opacity-50" />}
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:-translate-y-1">
                      <ProjectVisual visual={project.visual} icon={project.icon} image={project.image} alt={project.title} />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4 px-2 pb-3 pt-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">{project.index}</span>
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{project.type}</p>
                    </div>
                    {project.status && (
                      <span className="shrink-0 border border-primary/40 bg-brand-soft px-2 py-1 text-[10px] font-semibold uppercase text-primary">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <ul className="grid gap-1.5 px-2 pb-4">
                    {project.highlights.slice(0, 4).map((item) => (
                      <li key={item} className="text-xs leading-5 text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                  <span className="mx-2 mb-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View project <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
