import React from 'react';
import type { NextPage } from "next";
import Head from "next/head";

/**
 * SplineViewer Component
 * Renders a 3D scene using Spline's web viewer
 * Implemented using dangerouslySetInnerHTML due to Web Component compatibility
 */
const SplineViewer = () => {
  return (
    <div
      className="planet-3D"
      dangerouslySetInnerHTML={{
        __html: '<spline-viewer url="https://prod.spline.design/xhR0PRqNRK8y5CM9/scene.splinecode"></spline-viewer>'
      }}
    />
  );
};

/**
 * Home Page Component
 * Main landing page featuring responsive design with interactive elements
 * Includes gradient text animations and 3D visualization
 */
const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>My Website</title>
        <meta name="description" content="A mobile-friendly website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Load Spline viewer for 3D rendering */}
        <script
          async
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"
        />
      </Head>

      {/* Header section with logo and contact button */}
      <header>
        <div className="logo">Ac3Cod3z</div>
        <button className="contact-button">Contact</button>
      </header>

      <main>
        {/* Hero section with responsive typography */}
        <div className="title-section">
          <h1>Web Developer</h1>
          <h2>Web Dev</h2> {/* Mobile fallback */}
          <div className="location">
            <p>BASED<br />IN<br />USA</p>
          </div>
        </div>

        {/* Bio section with gradient text highlights */}
        <div className="bio-section">
          <p className="bio">
            I&apos;M A WEB DEVELOPER WITH A PASSION FOR CREATING <span className="gradient-text">BEAUTIFUL</span>
            AND <span className="gradient-text">FUNCTIONAL</span> WEBSITES.
          </p>
        </div>

        {/* Scroll indicator animation */}
        <div className="scroll-down" />

        {/* 3D scene integration */}
        <SplineViewer />
      </main>
    </div>
  );
};

export default Home;
