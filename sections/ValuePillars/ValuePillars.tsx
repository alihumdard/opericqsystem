import type { LucideIcon } from "lucide-react";
import styles from "./ValuePillars.module.scss";

type ValuePillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ValuePillarsContent = {
  eyebrow: string;
  title: string;
  pillars: readonly ValuePillar[];
};

type ValuePillarsProps = {
  content: ValuePillarsContent;
};

export function ValuePillars({ content }: ValuePillarsProps) {
  return (
    <section className={styles.valuePillars} aria-labelledby="value-pillars-title">
      <div className={styles.inner}>
        <div className={styles.headerGroup}>
          <p>{content.eyebrow}</p>
          <h2 id="value-pillars-title">{content.title}</h2>
        </div>

        <div className={styles.grid}>
          {content.pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article className={styles.pillar} key={pillar.title}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <Icon size={52} strokeWidth={1.65} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
