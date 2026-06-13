import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import styles from "./Hero.module.scss";

type HeroContent = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  features: readonly {
    label: string;
    icon: LucideIcon;
  }[];
};

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.titleBase}>{content.title}</span>
            <span className={styles.titleHighlight}>{content.highlightedTitle}</span>
          </h1>
          
          <p className={styles.description}>{content.description}</p>

          <div className={styles.actions}>
            <Link className={styles.primaryBtn} href={content.primaryAction.href}>
              {content.primaryAction.label}
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link className={styles.secondaryBtn} href={content.secondaryAction.href}>
              {content.secondaryAction.label}
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.featuresList}>
            {content.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div className={styles.featureItem} key={feature.label}>
                  <Icon className={styles.featureIcon} size={30} strokeWidth={1.5} aria-hidden="true" />
                  <span className={styles.featureText}>{feature.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
