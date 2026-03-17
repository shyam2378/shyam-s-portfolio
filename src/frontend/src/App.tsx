import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  Loader2,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Settings,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitForm } from "./hooks/useQueries";

const queryClient = new QueryClient();

function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const submitForm = useSubmitForm();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await submitForm.mutateAsync(formData);
      setFormSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const skills = [
    {
      category: "Data & Analysis",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "bg-rose-50 border-rose-200",
      tags: [
        "MS Excel",
        "VLOOKUP & Pivot Tables",
        "MIS Reporting",
        "Data Analysis",
        "A/B Testing Concepts",
        "Data Visualization",
      ],
    },
    {
      category: "Programming",
      icon: <Code2 className="w-5 h-5" />,
      color: "bg-amber-50 border-amber-200",
      tags: [
        "SQL",
        "Python",
        "Data Cleaning",
        "EDA",
        "Automation Basics",
        "Joins & Queries",
      ],
    },
    {
      category: "Web & Templates",
      icon: <ExternalLink className="w-5 h-5" />,
      color: "bg-sky-50 border-sky-200",
      tags: ["HTML", "CSS", "JavaScript", "Web Templates", "Email Templates"],
    },
    {
      category: "CRM & Marketing",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "bg-violet-50 border-violet-200",
      tags: [
        "Email Marketing",
        "CRM Basics",
        "Segmentation",
        "Automation",
        "Campaign Templates",
      ],
    },
    {
      category: "Operations",
      icon: <Settings className="w-5 h-5" />,
      color: "bg-emerald-50 border-emerald-200",
      tags: [
        "Documentation",
        "Process Mapping",
        "App Support",
        "Troubleshooting",
        "Communication & Training",
      ],
    },
  ];

  const experience = [
    {
      role: "Data Science Intern",
      company: "RineX",
      period: "May 2025 – July 2025",
      type: "Internship",
      points: [
        "Performed data collection, cleaning, and preprocessing using Python and SQL.",
        "Conducted Exploratory Data Analysis and created reports using Excel and visualization tools.",
        "Worked on regression and classification models to derive business insights.",
        "Supported data segmentation and targeting logic applicable to CRM and marketing analytics.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Prolify Tech India Pvt Ltd",
      period: "May 2024 – July 2024",
      type: "Internship",
      points: [
        "Developed and tested application modules using HTML, CSS, JavaScript, and Python.",
        "Debugged production issues and supported technical troubleshooting.",
        "Maintained technical documentation and followed SDLC processes.",
      ],
    },
    {
      role: "Computer Faculty",
      company: "CSC Computer Education",
      period: "Nov 2023 – Apr 2024",
      type: "Work Experience",
      points: [
        "Trained students in HTML, CSS, JavaScript, Python, and C++.",
        "Prepared structured study materials and assessments.",
        "Enhanced presentation, communication, and client-handling skills.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Sticky Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-xs border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="font-display font-bold text-xl text-foreground tracking-tight hover:text-primary transition-colors"
            >
              Shyam<span className="text-primary"> S</span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  data-ocid="nav.link"
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Download Resume */}
            <a
              href="/assets/uploads/SHYAM_Resume-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.button"
            >
              <Button size="sm" className="hidden md:flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.id}
                    data-ocid="nav.link"
                    onClick={() => scrollTo(link.id)}
                    className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="/assets/uploads/SHYAM_Resume-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="nav.button"
                >
                  <Button
                    size="sm"
                    className="w-full mt-2 flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/90 to-background/70" />

        {/* Decorative red line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5 z-10"
          style={{ background: "oklch(0.55 0.19 27)" }}
        />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                style={{
                  background: "oklch(0.55 0.19 27 / 0.08)",
                  borderColor: "oklch(0.55 0.19 27 / 0.25)",
                  color: "oklch(0.45 0.19 27)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available Immediately | Open to Shift Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-7xl md:text-8xl font-bold text-foreground leading-none tracking-tight mb-4"
            >
              SHYAM
              <span className="text-primary block md:inline"> S</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-8"
            >
              BCA Graduate &nbsp;·&nbsp; Data Analyst &nbsp;·&nbsp; Process
              Support
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                onClick={() => scrollTo("projects")}
                className="gap-2 font-semibold"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.secondary_button"
                onClick={() => scrollTo("contact")}
                className="gap-2 font-semibold"
              >
                Get In Touch
                <MessageSquare className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Contact info row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap gap-5 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Chennai, Tamil Nadu
              </span>
              <a
                href="tel:+918148955498"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +91-8148955498
              </a>
              <a
                href="mailto:shyam60838@gmail.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                shyam60838@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-px h-8"
            style={{ background: "oklch(0.55 0.19 27)" }}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Who I Am
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                BCA graduate with hands-on experience in Data Analysis,
                Reporting, and Process Support through internships in Data
                Science and Software Development. Strong working knowledge of
                Excel, SQL, Python, HTML, and basic automation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Proven ability in data cleaning, documentation, troubleshooting,
                and structured communication through teaching and project work.
                Actively seeking entry-level roles such as Junior Data Analyst,
                MIS Executive, Process Associate, CRM Executive, or Application
                Support in Chennai.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Junior Data Analyst",
                  "MIS Executive",
                  "Process Associate",
                  "CRM Executive",
                  "App Support",
                ].map((role) => (
                  <Badge key={role} variant="secondary" className="font-medium">
                    {role}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Cards column */}
            <div className="flex flex-col gap-6">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="shadow-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.55 0.19 27 / 0.1)" }}
                      >
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                          Education
                        </h3>
                        <p className="font-semibold text-foreground">
                          Bachelor of Computer Applications
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Guru Nanak College, Chennai
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge className="font-semibold">
                            CGPA: 8.0 / 10
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Certifications & Languages */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="shadow-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.55 0.19 27 / 0.1)" }}
                      >
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                          Certifications
                        </h3>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium">
                            Data Science Certification
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.55 0.19 27 / 0.1)" }}
                      >
                        <Languages className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                          Languages
                        </h3>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Tamil</Badge>
                          <Badge variant="secondary">English</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="section-label mb-3">Skills</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              What I Bring
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card
                  className={`h-full shadow-card hover:shadow-card-hover transition-shadow duration-300 border ${
                    group.color
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: "oklch(0.55 0.19 27 / 0.12)" }}
                      >
                        <span className="text-primary">{group.icon}</span>
                      </div>
                      <h3 className="font-display font-semibold text-base text-foreground">
                        {group.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.tags.map((tag) => (
                        <span key={tag} className="skill-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="section-label mb-3">Experience</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              My Journey
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5"
              style={{ background: "oklch(var(--border))" }}
            />

            <div className="flex flex-col gap-10">
              {experience.map((exp, expIdx) => (
                <motion.div
                  key={exp.role}
                  data-ocid={`experience.item.${expIdx + 1}`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: expIdx * 0.15 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot absolute left-[11px] md:left-[19px] top-1.5" />

                  <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="secondary"
                              className="text-xs font-medium"
                            >
                              {exp.type}
                            </Badge>
                          </div>
                          <h3 className="font-display font-bold text-xl text-foreground">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-primary font-semibold text-sm">
                              {exp.company}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="section-label mb-3">Projects</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              What I&apos;ve Built
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              data-ocid="projects.item.1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden">
                {/* Project header bar */}
                <div
                  className="h-2 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.55 0.19 27), oklch(0.65 0.18 50))",
                  }}
                />
                <CardContent className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-foreground mb-1">
                        Online Notes Sharing Platform
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        Jan 2025 – Mar 2025
                      </div>
                    </div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.55 0.19 27 / 0.1)" }}
                    >
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Designed and developed a web portal using HTML, CSS, and
                    JavaScript. Implemented a user-friendly UI and structured
                    content management system. Applied database concepts and
                    validation logic for seamless data handling.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript"].map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Card
                className="h-full border-dashed border-2 flex items-center justify-center cursor-pointer hover:border-primary/60 transition-colors duration-300"
                style={{ minHeight: "260px" }}
                onClick={() => scrollTo("contact")}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "oklch(0.55 0.19 27 / 0.08)" }}
                  >
                    <ArrowRight className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    Interested in Collaborating?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Let&apos;s connect and discuss opportunities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-ocid="contact.section"
        className="py-24 bg-secondary/40"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="section-label mb-3">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Let&apos;s Talk
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I&apos;m actively seeking entry-level opportunities in Chennai.
                Whether you have a role, project, or just want to connect —
                I&apos;d love to hear from you.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.55 0.19 27 / 0.1)" }}
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+918148955498"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      +91-8148955498
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.55 0.19 27 / 0.1)" }}
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:shyam60838@gmail.com"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      shyam60838@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.55 0.19 27 / 0.1)" }}
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                      Location
                    </p>
                    <span className="font-semibold text-foreground">
                      Chennai, Tamil Nadu
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.55 0.19 27 / 0.1)" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                      Availability
                    </p>
                    <span className="font-semibold text-foreground">
                      Immediate | Open to Shift
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <AnimatePresence mode="wait">
                    {formSuccess ? (
                      <motion.div
                        key="success"
                        data-ocid="contact.success_state"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center py-8"
                      >
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                          style={{ background: "oklch(0.55 0.19 27 / 0.1)" }}
                        >
                          <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-display font-bold text-xl text-foreground mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-muted-foreground text-sm mb-6">
                          Thank you for reaching out. I&apos;ll get back to you
                          soon.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setFormSuccess(false)}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-5"
                      >
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="font-medium">
                            Name
                          </Label>
                          <Input
                            id="name"
                            data-ocid="contact.input"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData((p) => ({
                                ...p,
                                name: e.target.value,
                              }))
                            }
                            disabled={submitForm.isPending}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="font-medium">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            data-ocid="contact.input"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((p) => ({
                                ...p,
                                email: e.target.value,
                              }))
                            }
                            disabled={submitForm.isPending}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="message" className="font-medium">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            data-ocid="contact.textarea"
                            placeholder="Tell me about the opportunity or project..."
                            rows={4}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData((p) => ({
                                ...p,
                                message: e.target.value,
                              }))
                            }
                            disabled={submitForm.isPending}
                          />
                        </div>

                        <Button
                          type="submit"
                          data-ocid="contact.submit_button"
                          disabled={submitForm.isPending}
                          className="w-full gap-2 font-semibold"
                        >
                          {submitForm.isPending ? (
                            <>
                              <Loader2
                                className="w-4 h-4 animate-spin"
                                data-ocid="contact.loading_state"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Mail className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Portfolio />
    </QueryClientProvider>
  );
}
