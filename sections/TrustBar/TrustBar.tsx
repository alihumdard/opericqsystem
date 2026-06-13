import styles from "./TrustBar.module.scss";

type LogoVariant = "badge" | "wordmark" | "emblem" | "orbit";

type TrustBarContent = {
  title: string;
  logos: readonly {
    label: string;
    caption?: string;
    variant: LogoVariant;
  }[];
  moreLabel: string;
};

type TrustBarProps = {
  content: TrustBarContent;
};

export function TrustBar({ content }: TrustBarProps) {
  return (
    <section className={styles.trustBar} aria-labelledby="trust-bar-title">
      <div className={styles.inner}>
        <h2 id="trust-bar-title" className={styles.title}>
          {content.title}
        </h2>

        <div className={styles.logoRow} aria-label="Trusted public sector organizations">
          {content.logos.map((logo) => (
            <div className={`${styles.logoItem} ${styles[logo.variant]}`} key={logo.label}>
              <span className={styles.logoMark} aria-hidden="true">
                {logo.label}
              </span>
              {logo.caption ? <small>{logo.caption}</small> : null}
              <span className={styles.srOnly}>{logo.label}</span>
            </div>
          ))}

          <a className={styles.moreLink} href="#partners">
            {content.moreLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
