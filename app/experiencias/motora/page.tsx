import type { Metadata } from "next";
import { experiences } from "@/data/experiences";
import { ExperienceDetail } from "@/components/content/ExperienceDetail";
import { notFound } from "next/navigation";

const experience = experiences.find((e) => e.slug === "motora");

export const metadata: Metadata = {
  title: experience?.title ?? "Experiência",
  description: experience?.description ?? "",
};

export default function ExperiencePage() {
  if (!experience) return notFound();
  return <ExperienceDetail experience={experience} />;
}
