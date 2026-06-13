"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./SignIn.module.scss";

export default function SignInPage() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);

    document.documentElement.setAttribute(
      "data-theme",
      nextTheme
    );
  };

  return (
    <section className={styles.signIn}>
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
        {/* Form Section */}

        <div className={styles.content}>
          <div className={styles.formWrapper}>
            <span className={styles.badge}>
              WELCOME BACK
            </span>

            <h1>Sign In</h1>

            <p className={styles.subtitle}>
              Access your Operiq Systems
              dashboard and continue
              managing your operations.
            </p>

            <form className={styles.form}>
              <input
                type="email"
                placeholder="Business Email"
                className={styles.formInput}
              />

              <input
                type="password"
                placeholder="Password"
                className={styles.formInput}
              />

              <div className={styles.options}>
                <label>
                  <input
                    type="checkbox"
                  />
                  Remember Me
                </label>

                <Link href="#">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className={styles.primaryBtn}
              >
                Sign In
              </button>
            </form>

            <p className={styles.signupLink}>
              Don't have an account?
              <Link href="/onboarding">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Graphic */}

        <div className={styles.graphicPanel}>
          <Image
            src="/images/heroimg_1.png"
            alt="Network"
            fill
            priority
            className={
              styles.graphicImage
            }
          />
        </div>
      </div>
    </section>
  );
}