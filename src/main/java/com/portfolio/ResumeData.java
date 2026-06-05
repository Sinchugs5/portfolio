package com.portfolio;

import java.util.List;
import java.util.Map;

public class ResumeData {
    
    public static class Education {
        public String degree;
        public String institution;
        public String year;
        public String score;
        
        public Education(String degree, String institution, String year, String score) {
            this.degree = degree;
            this.institution = institution;
            this.year = year;
            this.score = score;
        }
    }
    
    public static class Project {
        public String title;
        public String year;
        public String description;
        
        public Project(String title, String year, String description) {
            this.title = title;
            this.year = year;
            this.description = description;
        }
    }
    
    public static class Experience {
        public String role;
        public String company;
        public String duration;
        public String description;
        
        public Experience(String role, String company, String duration, String description) {
            this.role = role;
            this.company = company;
            this.duration = duration;
            this.description = description;
        }
    }

    public String name = "Sinchana G S";
    public String location = "Davangere";
    public String phone = "+91-8762701330";
    public String email = "sinchugs5@gmail.com";
    public String objective = "I am a passionate Computer Science Engineering graduate (2026) with hands-on internship experience in Java Full-Stack Development. Skilled in Java, SQL, HTML, CSS, JavaScript, and web technologies with a strong foundation in software development and database management. Seeking a Software Engineer position to apply my technical skills, solve real-world problems, and build a successful career in the IT industry.";
    
    public List<Education> educationList = List.of(
        new Education("Bachelor of Engineering (B.E.) - CSE", "Jain Institute of Technology, Davangere", "2026", "87.8%"),
        new Education("Pre-University Course (PUC) - PCMB", "ST Johns PU College, Davangere", "2022", "81.83%"),
        new Education("SSLC", "Sri Someshwara English Medium High School, Gonivada", "2020", "96%")
    );
    
    public Map<String, String> skills = Map.of(
        "Programming Languages", "Java, SQL",
        "Web Technologies", "HTML, CSS, JavaScript, React.js",
        "Databases", "MySQL",
        "Core Concepts", "Data Structures and Algorithms, OOPs, DBMS",
        "Tools & Platforms", "Git, VS Code, Eclipse",
        "Soft Skills", "Problem Solving, Communication, Teamwork, Time Management"
    );
    
    public List<Project> projects = List.of(
        new Project("Yogachetana: Full-Stack Ayurvedic E-Commerce Platform", "2026", "Designed and developed a scalable full-stack e-commerce platform for Ayurvedic wellness products using Next.js, Java Spring Boot, and MySQL, featuring JWT-based authentication, Razorpay payment integration, dynamic shopping cart management, secure checkout, and an admin dashboard for real-time inventory, order tracking, and business analytics."),
        new Project("Votex: AI-Enhanced Next-Gen Blockchain Voting", "2025", "Designed and implemented a multi-layer secure e-voting system featuring AI-based face & iris recognition, real-time video proctoring, behavioral fraud detection, and private blockchain vote storage, achieving high authentication accuracy and tamper-proof election results."),
        new Project("Civix Digital Democracy Platform", "2025", "Developing a full-stack civic engagement app with Node.js, Express.js, MongoDB, and React, featuring secure authentication, CRUD petitions, and role-based APIs."),
        new Project("Emotion Responsive Music Player using EEG Signals", "2024", "Developed a music recommendation system using CNN, RNN, EEG signal analysis, and Machine Learning. Implemented real-time signal processing and improved model accuracy through data preprocessing.")
    );
    
    public List<Experience> experiences = List.of(
        new Experience("Technical Intern - Java Full Stack with Cloud and DevOps Essentials", "Dhee Coding Lab, Bengaluru", "Feb 2026 - Present", "Working on Java Full Stack development, building backend applications and RESTful APIs. Gaining hands-on experience in Cloud computing and DevOps fundamentals while developing real-world projects in a professional environment."),
        new Experience("Machine Learning Internship", "Cognifyz Technologies", "Sep 2025 - Oct 2025", "Completed a machine learning internship focused on developing models for restaurant rating prediction, cuisine classification, and personalized recommendations using Python and Scikit-learn. Applied data preprocessing, feature engineering, and model evaluation techniques to extract insights and improve prediction accuracy."),
        new Experience("Virtual Internship 6.0", "Infosys Springboard", "Sep 2025 - Nov 2025", "Successfully completed Virtual Internship 6.0 at Infosys Springboard, where I designed and implemented a MERN stack full-stack application featuring authentication workflows, CRUD-based petition management, REST APIs, and responsive frontend design.")
    );
    
    public List<String> certifications = List.of(
        "Infosys Springboard (2024): Artificial Intelligence Primer, Database Management System, Python Foundation",
        "Deloitte Forage (2024): Data Analytics Virtual Job Simulation",
        "NPTEL (IITs, 2023-2024): Joy of Computing Using Python (IIT Madras), Programming in Java (IIT Kharagpur)",
        "Internshala Trainings (Skill India & NSDC, 2023): Web Development",
        "Infosys - Pragati Path to Future Cohort 3 (2025): 4-day training on communication, assertiveness, presentation, and interpersonal skills"
    );
    
    public List<String> publications = List.of(
        "Sinchana G S, \"Emotion Responsive Music Player Using EEG Signals Through NeuroSky Headset,\" International Journal of Progressive Research in Engineering Management and Science (IJPREMS), Vol. 5, Issue 3, March 2025. [Paper ID: IJPREMS50300036032]",
        "Sinchana G S, “Votex: AI-Enhanced Next-Gen Blockchain Voting with Multimodal Authentication,” International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE), Vol. 13, Issue 12, December 2025."
    );

    public List<String> extracurriculars = List.of(
        "Secured 2nd place in \"Stacksphere: A State Level Mini Project Exhibition,\" Jain Institute of Technology, Davangere.",
        "Secured 1st Place at Project-EXPO 2025, Jain Institute of Technology, Davanagere."
    );
}
