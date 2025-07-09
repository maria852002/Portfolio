(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function p(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=p(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
  <header class="fade-in">
    <nav class="navbar">
      <div class="logo">Maria Sibu</div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero fade-in" id="home">
    <h1>Hello, I'm <span>Maria Sibu</span></h1>
    <h2><span class="typed-text"></span><span class="cursor">|</span></h2>
    <p>I specialize in manual & automation testing with expertise in Selenium, Java, and SQL.</p>
    <a href="/Portfolio/Maria_Sibu_Resume.pdf" class="btn" download>Download Resume</a>
  </section>

  <section class="about fade-in" id="about">
    <div class="about-container">
      <div class="about-text">
        <h2>About Me</h2>
        <p>
          I'm a passionate Software Tester skilled in both manual and automation testing. I enjoy ensuring the quality and reliability of software through structured testing practices.
        </p>
        <h3>Career Objective</h3>
        <p>
          To obtain a challenging and responsible position in the area of software testing where my knowledge, ability, and dedication will be utilized.
        </p>
        <h3>Education</h3>
        <p>
          <strong>Bachelor of Technology in Computer Science</strong><br />
          Younus College of Engineering & Technology<br />
          Kollam, Kerala (2019 – 2023)
        </p>
      </div>
      <div class="about-image">
        <img src="https://via.placeholder.com/250" alt="Maria Sibu Profile Picture" />
      </div>
    </div>
  </section>

  <section class="skills fade-in" id="skills">
    <div class="skills-container">
      <h2>My Skills</h2>
      <div class="skills-list">
        <div class="skill">
          <label>SQL</label>
          <div class="bar"><div class="fill" data-percent="85%"></div></div>
        </div>
        <div class="skill">
          <label>Core Java</label>
          <div class="bar"><div class="fill" data-percent="80%"></div></div>
        </div>
        <div class="skill">
          <label>Manual Testing</label>
          <div class="bar"><div class="fill" data-percent="90%"></div></div>
        </div>
        <div class="skill">
          <label>Automation Testing</label>
          <div class="bar"><div class="fill" data-percent="70%"></div></div>
        </div>
        <div class="skill">
          <label>Selenium</label>
          <div class="bar"><div class="fill" data-percent="75%"></div></div>
        </div>
        <div class="skill">
          <label>TestNG</label>
          <div class="bar"><div class="fill" data-percent="65%"></div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="certifications fade-in" id="certifications">
    <div class="cert-container">
      <h2>Certifications & Courses</h2>
      <div class="cert-grid">
        <div class="cert-card">
          <h3>Software Testing</h3>
          <p>Certification from Q Spiders, Kochi.</p>
        </div>
        <div class="cert-card">
          <h3>Manual Testing</h3>
          <ul>
            <li>Advanced knowledge of SDLC & STLC</li>
            <li>Functional, integration, system, performance, regression testing</li>
            <li>Comprehensive test cases and defect analysis</li>
          </ul>
        </div>
        <div class="cert-card">
          <h3>Core Java</h3>
          <ul>
            <li>OOPs principles, Exception Handling, Arrays</li>
            <li>Object & String class, Constructors, Interfaces</li>
            <li>Upcasting/Downcasting, File Handling</li>
          </ul>
        </div>
        <div class="cert-card">
          <h3>SQL</h3>
          <ul>
            <li>Written 400+ queries across domains</li>
            <li>CRUD operations, joins, aggregate functions</li>
            <li>Data manipulation and retrieval</li>
          </ul>
        </div>
        <div class="cert-card">
          <h3>Selenium + TestNG</h3>
          <ul>
            <li>Developed automation scripts</li>
            <li>Web testing using Selenium WebDriver</li>
            <li>Test suite and assertions with TestNG</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="projects fade-in" id="projects">
    <div class="projects-container">
      <h2>Projects</h2>
      <div class="project-grid">
        <div class="project-card">
          <h3>Plant Leaf Disease Detection</h3>
          <span class="duration">Sep 2022 – May 2023</span>
          <p>
            Built a user-friendly system to upload plant leaf images and detect diseases in real-time using Convolutional Neural Networks (CNNs).
          </p>
          <ul>
            <li>Real-time image classification</li>
            <li>High accuracy model with deep learning</li>
            <li>Tested and validated with real-world datasets</li>
          </ul>
        </div>
        <div class="project-card">
          <h3>Food Management & Donation System</h3>
          <span class="duration">Mar 2022 – Aug 2022</span>
          <p>
            A web platform to connect food donors with NGOs and shelters for surplus food distribution and management.
          </p>
          <ul>
            <li>Frontend + Backend integrated portal</li>
            <li>Supports real-time food request matching</li>
            <li>Designed for community-level use</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="contact fade-in" id="contact">
    <div class="contact-container">
      <h2>Contact Me</h2>
      <p>You can reach out to me via the form below or directly through email or LinkedIn.</p>
      <div class="contact-info">
        <p><strong>Email:</strong> <a href="mailto:mariaaah75@gmail.com">mariaaah75@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+917736997046">+91 7736997046</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mariasibu08" target="_blank">linkedin.com/in/mariasibu08</a></p>
      </div>
      <form class="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>

  <button id="backToTop" title="Back to Top">↑</button>
`;const v=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&a.target.classList.add("fade-in-visible")})},{threshold:.1});document.querySelectorAll(".fade-in").forEach(t=>{v.observe(t)});const h=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&document.querySelectorAll(".fill").forEach(l=>{l.style.width=l.getAttribute("data-percent")})})},{threshold:.4});document.querySelectorAll(".skills").forEach(t=>{h.observe(t)});const f=document.querySelector(".typed-text");document.querySelector(".cursor");const r=["Software Tester","QA Engineer","Automation Enthusiast"];let o=0,s=0,d=!0;function n(){d?s<r[o].length?(f.textContent+=r[o].charAt(s),s++,setTimeout(n,100)):(d=!1,setTimeout(n,1200)):s>0?(f.textContent=r[o].substring(0,s-1),s--,setTimeout(n,50)):(d=!0,o=(o+1)%r.length,setTimeout(n,300))}n();const u=document.getElementById("backToTop");window.addEventListener("scroll",()=>{window.scrollY>300?u.style.display="block":u.style.display="none"});u.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
