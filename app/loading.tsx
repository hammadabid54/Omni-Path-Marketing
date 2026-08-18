import { Section } from "@/components/ui/section";

export default function Loading() {
  return (
    <Section>
      <div className="container-page">
        <div className="space-y-6 max-w-3xl">
          <div className="skeleton h-8 w-1/3" />
          <div className="skeleton h-16 w-3/4" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-5/6" />
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="skeleton h-32 rounded-2xl" />
            <div className="skeleton h-32 rounded-2xl" />
            <div className="skeleton h-32 rounded-2xl" />
          </div>
        </div>
      </div>
    </Section>
  );
}
