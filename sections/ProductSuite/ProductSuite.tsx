import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ProductSuite.module.scss";

type Product = {
  name: string;
  description: string;
  color: string;
};

type ProductSuiteContent = {
  eyebrow: string;
  title: string;
  products: readonly Product[];
  action: {
    label: string;
    href: string;
  };
};

type ProductSuiteProps = {
  content: ProductSuiteContent;
};

export function ProductSuite({ content }: ProductSuiteProps) {
  return (
    <section className={styles.productSuite} id="products" aria-labelledby="product-suite-title">
      <div className={styles.inner}>
        <div className={styles.headerGroup}>
          <p>{content.eyebrow}</p>
          <h2 id="product-suite-title">{content.title}</h2>
        </div>

        <div className={styles.grid}>
          {content.products.map((product) => (
            <article
              className={styles.card}
              key={product.name}
              style={
                {
                  "--product-color": product.color
                } as React.CSSProperties
              }
            >
              <div className={styles.brandLockup}>
                <span className={styles.productLogo} aria-hidden="true" />
                <h3>
                  <span>OPERIQ</span>
                  <strong>{product.name.replace("OPERIQ ", "")}</strong>
                </h3>
              </div>

              <p className={styles.description}>{product.description}</p>

              <Link className={styles.learnMore} href="#products">
                Learn More
                <ArrowRight size={15} strokeWidth={2.1} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <Link className={styles.action} href={content.action.href}>
          {content.action.label}
          <ArrowRight size={16} strokeWidth={2.1} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
