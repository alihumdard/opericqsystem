"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Onboarding.module.scss";
import {
  Mail,
  Bell,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import {
  onboardingSteps,
  industries,
  companySizes,
  operationalAreas,
  modules,
  interests,
} from "@/data/onboarding";
import Link from "next/link";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [theme, setTheme] = useState("dark");

  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);

    document.documentElement.setAttribute(
      "data-theme",
      nextTheme
    );
  };

  const toggleModule = (moduleId: string) => {
    setSelectedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((item) => item !== moduleId)
        : [...prev, moduleId]
    );
  };

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((item) => item !== interestId)
        : [...prev, interestId]
    );
  };

  return (
    <section className={styles.onboarding}>
      {/* Header */}

      <div className={styles.topBar}>
        <div className={styles.logo}>
          <Image
            className={styles.logoMark}
            src="/images/logo.png"
            alt="Operiq Systems"
            width={54}
            height={54}
            priority
          />

          <span className={styles.logoText}>
            <span>OPERIQ</span>
            <small>SYSTEMS</small>
          </span>
        </div>

        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
        >
          {theme === "dark"
            ? "☀ Light"
            : "🌙 Dark"}
        </button>
      </div>

      <div className={styles.container}>
        {/* Sidebar */}

        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
          
          
            <div className={styles.timeline}>
              {onboardingSteps.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.stepItem}
                  ${
                    step === item.id
                      ? styles.active
                      : step > item.id
                      ? styles.completed
                      : ""
                  }`}
                >
                  <div
                    className={styles.stepNumber}
                  >
                    {item.id}
                  </div>

                  <div
                    className={styles.stepContent}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}

        <main className={styles.content}>
          <div className={styles.formWrapper}>
            {/* STEP 1 */}

            {step === 1 && (
              <>
                <span
                  className={styles.badge}
                >
                  STEP 01
                </span>

                <h1>Create Your Account</h1>

                <p
                  className={styles.subtitle}
                >
                  Let's get started with
                  your administrator
                  account.
                </p>

                <div
                  className={styles.formGrid}
                >
                  <input
                    className={
                      styles.formInput
                    }
                    placeholder="Full Name"
                  />

                  <input
                    className={
                      styles.formInput
                    }
                    type="email"
                    placeholder="Business Email"
                  />

                  <input
                    className={
                      styles.formInput
                    }
                    type="password"
                    placeholder="Password"
                  />

                  <input
                    className={
                      styles.formInput
                    }
                    type="password"
                    placeholder="Confirm Password"
                  />

                  <input
                    className={
                      styles.formInput
                    }
                    placeholder="Organization Name"
                  />
                </div>

                <button
                  className={
                    styles.primaryBtn1
                  }
                  onClick={() =>
                    setStep(2)
                  }
                >
                  Continue
                </button>

                <p
                  className={styles.signIn}
                >
                  Already have an account?
                  <span>
                    <Link href="/signin"> Sign In</Link>
                  </span>
                </p>
              </>
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <>
                <span
                  className={styles.badge}
                >
                  STEP 02
                </span>

                <h1>
                  Organization Profile
                </h1>

                <p
                  className={styles.subtitle}
                >
                  Tell us about your
                  organization.
                </p>

                <div
                  className={styles.formGrid}
                >
                  <select
                    className={
                      styles.formSelect
                    }
                  >
                    <option>
                      Select Industry
                    </option>

                    {industries.map(
                      (industry) => (
                        <option
                          key={industry}
                        >
                          {industry}
                        </option>
                      )
                    )}
                  </select>

                  <select
                    className={
                      styles.formSelect
                    }
                  >
                    <option>
                      Company Size
                    </option>

                    {companySizes.map(
                      (size) => (
                        <option
                          key={size}
                        >
                          {size}
                        </option>
                      )
                    )}
                  </select>

                  <input
                    className={
                      styles.formInput
                    }
                    placeholder="Company Website"
                  />

                  <select
                    className={
                      styles.formSelect
                    }
                  >
                    <option>
                      Primary Operational
                      Area
                    </option>

                    {operationalAreas.map(
                      (area) => (
                        <option
                          key={area}
                        >
                          {area}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div
                  className={styles.actions}
                >
                  <button
                    className={
                      styles.secondaryBtn
                    }
                    onClick={() =>
                      setStep(1)
                    }
                  >
                    Back
                  </button>

                  <button
                    className={
                      styles.primaryBtn
                    }
                    onClick={() =>
                      setStep(3)
                    }
                  >
                    Continue
                  </button>
                </div>
              </>
            )}

            {/* STEP 3 */}

            {step === 3 && (
              <>
                <span
                  className={styles.badge}
                >
                  STEP 03
                </span>

                <h1>
                  Operational Needs
                </h1>

                <p
                  className={styles.subtitle}
                >
                  Help us understand your
                  operational
                  requirements.
                </p>

                <textarea
                  className={
                    styles.formTextarea
                  }
                  placeholder="Describe your biggest workflow challenge..."
                />

                <textarea
                  className={
                    styles.formTextarea
                  }
                  placeholder="Current operational tools/systems used..."
                />

                <h3
                  className={
                    styles.sectionTitle
                  }
                >
                  Interested Modules
                </h3>

                <div
                  className={
                    styles.moduleGrid
                  }
                >
                  {modules.map(
                    (module) => (
                      <button
  key={module.id}
  type="button"
  className={`${styles.moduleCard}
  ${
    selectedModules.includes(module.id)
      ? styles.selected
      : ""
  }`}
  onClick={() =>
    toggleModule(module.id)
  }
>
  <span
    className={styles.moduleIcon}
    style={{
      color: module.color,
    }}
  >
    {module.icon}
  </span>

  <span
    className={styles.moduleTitle}
    style={{
      color: module.color,
    }}
  >
    {module.title}
  </span>
</button>
                    )
                  )}
                </div>

                <h3
                  className={
                    styles.sectionTitle
                  }
                >
                  Interested In
                </h3>

                <div
                  className={
                    styles.checkboxGrid
                  }
                >
                  {interests.map(
                    (interest) => (
                      <label
                        key={
                          interest.id
                        }
                      >
                        <input
                          type="checkbox"
                          checked={selectedInterests.includes(
                            interest.id
                          )}
                          onChange={() =>
                            toggleInterest(
                              interest.id
                            )
                          }
                        />

                        {
                          interest.label
                        }
                      </label>
                    )
                  )}
                </div>

                <div
                  className={styles.actions}
                >
                  <button
                    className={
                      styles.secondaryBtn
                    }
                    onClick={() =>
                      setStep(2)
                    }
                  >
                    Back
                  </button>

                  <button
                    className={
                      styles.primaryBtn
                    }
                    onClick={() =>
                      setStep(4)
                    }
                  >
                    Continue
                  </button>
                </div>
              </>
            )}

            {/* STEP 4 */}

          {step === 4 && (
  <div className={styles.confirmation}>
    <div className={styles.successIcon}>
      ✓
    </div>

    <h1 className={styles.confirmationTitle}>
      You're All Set!
    </h1>

    <p className={styles.confirmationText}>
      Thank you for onboarding with Operiq Systems.
      <br />
      Your information has been received.
    </p>

    <div className={styles.confirmationCard}>
      <div className={styles.confirmationItem}>
        <Mail size={28} />

        <div>
          <p>
            We've sent a confirmation email to
          </p>

          <span>
            name@yourcompany.com
          </span>
        </div>
      </div>

      <div className={styles.confirmationItem}>
        <Bell size={28} />

        <div>
          <p>
            Our team has been notified and will
            reach out soon.
          </p>
        </div>
      </div>

      <div className={styles.confirmationItem}>
        <BarChart3 size={28} />

        <div>
          <p>
            You can now access your dashboard
            and explore the platform.
          </p>
        </div>
      </div>
    </div>

    <button className={styles.dashboardBtn}>
      Go to Dashboard

      <ArrowRight size={18} />
    </button>
  </div>
          )}
          </div>
        </main>

        {/* Right Graphic */}
<div className={styles.graphicPanel}>
  <Image
    src="/images/heroimg_1.png"
    alt="Network Visualization"
    fill
    priority
    className={styles.graphicImage}
  />
</div>
      </div>
    </section>
  );
}