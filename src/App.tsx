import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Instagram, Mail, Menu, X } from "lucide-react";

const works = [
  { title: "Featured Work 01", category: "Illustration", src: "" },
  { title: "Featured Work 02", category: "Character", src: "" },
  { title: "Featured Work 03", category: "Animation", src: "" },
  { title: "Featured Work 04", category: "Personal", src: "" },
  { title: "Featured Work 05", category: "Illustration", src: "" },
  { title: "Featured Work 06", category: "Character", src: "" },
];

function Art({work, index}:{work: typeof works[number], index:number}) {
  return <article className={`art art-${index+1}`}>
    {work.src ? <img src={work.src} alt={`${work.title} by PonYuy`} /> :
      <div className="art-placeholder"><span>YOUR ARTWORK</span><small>/0{index+1}</small></div>}
    <div className="art-meta"><span>{work.title}</span><span>{work.category}</span></div>
  </article>
}

export default function App() {
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[]);
  const close=()=>setOpen(false);

  return <main>
    <header>
      <a className="logo" href="#top">PON<span>YUY</span></a>
      <nav className={open?"open":""}>
        <a onClick={close} href="#work">Work</a>
        <a onClick={close} href="#about">About</a>
        <a onClick={close} href="#commissions">Commissions</a>
        <a onClick={close} href="#contact">Contact</a>
      </nav>
      <a className="status" href="#commissions"><i/> Commissions open</a>
      <button className="menu" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </header>

    <section className="hero" id="top">
      <div className="eyebrow">Digital artist · Animator · Philippines</div>
      <h1>Art with a<br/><em>pulse.</em></h1>
      <div className="hero-bottom">
        <p>Characters, illustrations and visual worlds shaped by games, film, fashion and feeling.</p>
        <a href="#work">Explore selected work <ArrowDownRight/></a>
      </div>
      <div className="orb orb1"/><div className="orb orb2"/>
    </section>

    <section id="work" className="work section-pad">
      <div className="section-head reveal">
        <div><span>01 / Selected work</span><h2>A few things<br/>I've made.</h2></div>
        <p>A curated selection of illustration, character work and visual experiments.</p>
      </div>
      <div className="gallery">{works.map((w,i)=><Art key={w.title} work={w} index={i}/>)}</div>
    </section>

    <section id="about" className="about section-pad">
      <div className="about-mark reveal">P<span>Y</span></div>
      <div className="about-copy reveal">
        <span className="kicker">02 / The artist</span>
        <h2>Hi, I'm PonYuy.</h2>
        <p className="lead">I'm a digital artist and animator from the Philippines, creating work inspired by the things I keep coming back to: video games, films, fashion, stories and feelings.</p>
        <p>When I'm not making art, I'm probably playing something, reading, watching a film, thinking too much, or talking about how I feel during some much-needed alone time. And then, eventually, I get back to making art.</p>
        <a className="text-link" href="#contact">Say hello <ArrowUpRight/></a>
      </div>
    </section>

    <section id="commissions" className="commissions section-pad">
      <div className="section-head reveal">
        <div><span>03 / Commissions</span><h2>Let's make<br/>something yours.</h2></div>
        <div className="availability"><i/> Currently accepting projects</div>
      </div>
      <div className="commission-grid reveal">
        <div className="commission-intro">
          <p>Have a character, idea or visual in mind? Tell me what you're imagining. I'll review the brief, confirm scope and pricing, and we'll take it from there.</p>
          <p className="note">Pricing depends on complexity, number of characters, background and intended usage. Final quotes are confirmed before work begins.</p>
        </div>
        <form name="commission-request" method="POST" data-netlify="true" action="/?submitted=true">
          <input type="hidden" name="form-name" value="commission-request"/>
          <label>Your name<input required name="name" placeholder="Name"/></label>
          <label>Email<input required type="email" name="email" placeholder="you@example.com"/></label>
          <label>What are you looking for?
            <select name="type" defaultValue="">
              <option value="" disabled>Select a commission type</option>
              <option>Character artwork</option><option>Illustration</option><option>Animation / motion</option><option>Commercial work</option><option>Other</option>
            </select>
          </label>
          <label>Tell me about your idea<textarea required name="brief" rows={5} placeholder="The concept, characters, mood, references, deadline…"/></label>
          <label>Budget range
            <select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under $100</option><option>$100–250</option><option>$250–500</option><option>$500–1,000</option><option>$1,000+</option>
            </select>
          </label>
          <button type="submit">Send commission request <ArrowUpRight/></button>
        </form>
      </div>
    </section>

    <section id="contact" className="contact section-pad reveal">
      <span>04 / Contact</span>
      <h2>Let's talk.</h2>
      <p>For commissions, collaborations, or just to say hi.</p>
      <div className="contact-links">
        <a href="mailto:YOUR_EMAIL_HERE"><Mail/> Email <ArrowUpRight/></a>
        <a href="https://twitter.com/Pon_Yuy" target="_blank" rel="noreferrer">X / Twitter <ArrowUpRight/></a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram/> Instagram <ArrowUpRight/></a>
      </div>
    </section>

    <footer><a className="logo" href="#top">PON<span>YUY</span></a><p>Digital artist & animator · Philippines</p><p>© {new Date().getFullYear()} PonYuy</p></footer>
  </main>
}
