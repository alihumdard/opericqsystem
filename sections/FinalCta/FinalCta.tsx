import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./FinalCta.module.scss";

type FinalCtaContent = {
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
};

type FinalCtaProps = {
  content: FinalCtaContent;
};

export function FinalCta({ content }: FinalCtaProps) {
  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="final-cta-title">{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <Link className={styles.button} href={content.action.href}>
          {content.action.label}
          <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
