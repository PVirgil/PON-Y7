document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.textContent=nav.classList.contains("open")?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.textContent="☰"}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
