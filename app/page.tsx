import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { FinalCta } from "@/sections/FinalCta/FinalCta";
import { Hero } from "@/sections/Hero/Hero";
import { ProductSuite } from "@/sections/ProductSuite/ProductSuite";
import { TrustBar } from "@/sections/TrustBar/TrustBar";
import { ValuePillars } from "@/sections/ValuePillars/ValuePillars";
import { landingPage } from "@/data/landing";

export default function Home() {
  return (
    <main>
      <Header logo={landingPage.logo} navigation={landingPage.navigation} cta={landingPage.headerCta} />
      <Hero content={landingPage.hero} />
      <TrustBar content={landingPage.trustBar} />
      <ProductSuite content={landingPage.productSuite} />
      <ValuePillars content={landingPage.valuePillars} />
      <FinalCta content={landingPage.finalCta} />
      <Footer content={landingPage.footer} />
    </main>
  );
}
