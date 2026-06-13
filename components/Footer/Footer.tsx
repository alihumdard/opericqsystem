import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Footer.module.scss";

type FooterContent = {
  brand: {
    logo: {
      mark: string;
      name: string;
      suffix: string;
    };
    description: string;
  };
  columns: readonly {
    title: string;
    links: readonly string[];
  }[];
  connected: {
    title: string;
    description: string;
    placeholder: string;
    socials: readonly {
      label: string;
      mark: string;
    }[];
  };
  legal: {
    copyright: string;
    links: readonly string[];
  };
};

type FooterProps = {
  content: FooterContent;
};

function linkHref(label: string) {
  return `#${label.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`;
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.mainGrid}>
          <div className={styles.brandBlock}>
            <Link className={styles.logo} href="/" aria-label={`${content.brand.logo.name} ${content.brand.logo.suffix} home`}>
              <Image className={styles.logoMark} src="/images/logo.png" alt="" width={64} height={64} aria-hidden="true" />
              <span className={styles.logoText}>
                <span>{content.brand.logo.name}</span>
                <small>{content.brand.logo.suffix}</small>
              </span>
            </Link>
            <p>{content.brand.description}</p>
          </div>

          {content.columns.map((column) => (
            <nav
              className={`${styles.linkColumn} ${
                column.title === "PLATFORM" || column.title === "COMPANY" || column.title === "RESOURCES"
                  ? styles.noDivider
                  : ""
              }`}
              aria-label={column.title}
              key={column.title}
            >
              <h2>{column.title}</h2>
              {column.links.map((link) => (
                <Link href={linkHref(link)} key={link}>
                  {link}
                </Link>
              ))}
            </nav>
          ))}

          <div className={styles.connected}>
            <h2>{content.connected.title}</h2>
            <p>{content.connected.description}</p>

            <form className={styles.emailForm} aria-label="Subscribe for updates">
              <input type="email" placeholder={content.connected.placeholder} aria-label="Email address" />
              <button type="submit" aria-label="Submit email address">
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </form>

            <div className={styles.socials} aria-label="Social links">
              {content.connected.socials.map((social) => {
                return (
                  <Link href={linkHref(social.label)} aria-label={social.label} key={social.label}>
                    <span aria-hidden="true">{social.mark}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.legalBar}>
          <p>{content.legal.copyright}</p>
          <nav aria-label="Legal links">
            {content.legal.links.map((link, index) => (
              <span key={link}>
                <Link href={linkHref(link)}>{link}</Link>
                {index < content.legal.links.length - 1 ? <i aria-hidden="true">|</i> : null}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
