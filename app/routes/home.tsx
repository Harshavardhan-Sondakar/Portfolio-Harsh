import type { Route } from "./+types/home";
import styles from "./home.module.css";
import { portfolioData } from "~/data/portfolio-data";
import { Mail, Phone, MapPin, Linkedin, Github, X, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `HELLO | ${portfolioData.name}` },
    {
      name: "description",
      content: portfolioData.tagline,
    },
  ];
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Flatten skills for the marquee
  const allSkills = portfolioData.skillCategories.flatMap(cat => cat.skills);

  return (
    <main className={styles.home}>
      {/* Navigation */}
      <button onClick={toggleMenu} className={styles.menuToggle} aria-label="Toggle Menu">
        MENU
      </button>

      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <button onClick={toggleMenu} className={styles.closeButton} aria-label="Close Menu">
            <X size={32} />
          </button>
          <nav className={styles.menuNav}>
            {['Hero', 'About', 'Experience', 'Projects', 'Education', 'Contact'].map(item => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())} 
                className={styles.menuLink}
              >
                {item === 'Hero' ? 'Home' : item}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Scroll Top */}
      {showScrollTop && (
        <div className={styles.floatingControls}>
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className={styles.scrollTopButton}
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </button>
        </div>
      )}

      {/* Hero Section */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>PORTFOLIO {new Date().getFullYear()}</div>
          <h1 className={styles.heroName}>
            {portfolioData.name.split(' ')[0]}<br/>
            {portfolioData.name.split(' ')[1]}
          </h1>
          <p className={styles.heroTagline}>{portfolioData.tagline}</p>
          <div className={styles.heroButtons}>
            <button 
              className={styles.brutalButton}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
            <button 
              className={`${styles.brutalButton} ${styles.brutalButtonOutline}`}
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Skills Marquee Section */}
      <section className={styles.skillsContainer}>
        <div className={styles.marquee}>
          {/* Repeat list for seamless loop */}
          {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
             <span key={i} className={styles.marqueeItem}>
               {skill} <span style={{color: 'var(--color-accent-9)'}}>✦</span> 
             </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section} id="about">
        <h2 className={styles.sectionTitle}>About_Me</h2>
        <div className={styles.aboutContent}>
          <p>{portfolioData.objective}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.section} id="experience">
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.experienceList}>
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.experienceTitle}>{exp.title}</h3>
                <span className={styles.experienceCompany}>@{exp.company}</span>
                <span className={styles.experiencePeriod}>{exp.period}</span>
              </div>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                {exp.responsibilities.map((res, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section} id="projects">
        <h2 className={styles.sectionTitle}>Selected_Works</h2>
        <div className={styles.projectsGrid}>
          {portfolioData.projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.section} id="education">
        <h2 className={styles.sectionTitle}>Education</h2>
        <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
          {portfolioData.education.map((edu, index) => (
            <div key={index} className={styles.brutalBox} style={{ padding: 'var(--space-6)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 'var(--space-2)' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem' }}>{edu.degree}</h3>
                <span style={{ background: 'var(--color-accent-9)', padding: '0 8px', fontWeight: 700 }}>{edu.year}</span>
              </div>
              <p style={{ fontWeight: 700, color: 'var(--color-neutral-10)' }}>{edu.institution}</p>
              <p>{edu.score}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className={styles.section} id="certificates">
        <h2 className={styles.sectionTitle}>Certificates</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
           {portfolioData.certificates.map((cert, index) => (
             <div key={index} className={styles.brutalBox} style={{ padding: 'var(--space-4)', background: 'var(--color-neutral-2)' }}>
               <h4 style={{ fontWeight: 700 }}>{cert.title}</h4>
               <p style={{ fontSize: '0.9rem', color: 'var(--color-neutral-10)' }}>{cert.issuer}</p>
               <small>{cert.date}</small>
             </div>
           ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact} id="contact">
        <h2 className={styles.contactTitle}>Let's Talk</h2>
        <div className={styles.contactInfo}>
          <a href={`mailto:${portfolioData.email}`} className={styles.contactItem}>
            <Mail size={24} /> {portfolioData.email}
          </a>
          <div className={styles.contactItem}>
            <Phone size={24} /> {portfolioData.phone}
          </div>
          <div className={styles.contactItem}>
            <MapPin size={24} /> {portfolioData.location}
          </div>
        </div>
        
        <div className={styles.heroButtons} style={{ justifyContent: 'center' }}>
          <a 
            href={portfolioData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.brutalButton}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a 
            href={portfolioData.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.brutalButton} ${styles.brutalButtonOutline}`}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
            <Github size={20} /> GitHub
          </a>
        </div>
        
        <p style={{ marginTop: 'var(--space-8)', fontFamily: 'var(--font-code)' }}>
          © {new Date().getFullYear()} {portfolioData.name.toUpperCase()}
        </p>
      </section>
    </main>
  );
}
