export const categories = [
  { label: "Stress",       slug: "stress-cheval",            color: "#E84B3A" },
  { label: "Confiance",    slug: "confiance-equitation",     color: "#3A7BD5" },
  { label: "Performance",  slug: "performance-equitation",   color: "#2ECC71" },
  { label: "Motivation",   slug: "motivation-equitation",    color: "#F39C12" },
  { label: "Relation",     slug: "relation-cavalier-cheval", color: "#9B59B6" },
  { label: "Peur",         slug: "peur-a-cheval",            color: "#E67E22" },
] as const;

const slugs = categories.map(c => c.slug);

// Zod enum exige [firstValue, ...rest]
export const categorySlugs: [string, ...string[]] = [slugs[0], ...slugs.slice(1)];

export const getCategoryLabel = (slug: string) =>
  categories.find(c => c.slug === slug)?.label ?? slug;

export const getCategoryColor = (slug: string) =>
  categories.find(c => c.slug === slug)?.color ?? '#666666';