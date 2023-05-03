<script lang="ts">
  import './tailwind.css';
  import { Router, Link, Route } from "svelte-routing";
  import About from './routes/About.svelte';
  import Experience from './routes/Experience.svelte';
  import Education from './routes/Education.svelte';
  import Projects from './routes/Projects.svelte';
  import Contact from './routes/Contact.svelte';
  import { Identification, Briefcase, AcademicCap, CommandLine, ChatBubbleBottomCenterText } from "svelte-heros";
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
  import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
  import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
  
  export let url = "";
  let activeRoute = "";

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
  const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
  if (isActive && activeRoute !== href) { 
    activeRoute = href;
  }

  if (isActive) {
    return { class: "active" };
  }
  return { class: "" };
}
</script>

<Router url="{url}">
  <div class="h-screen">
    <div class="flex justify-between p-4 bg-opacity-80 dark:bg-opacity-80 fixed w-screen bg-slate-50 dark:bg-slate-950 backdrop-filter backdrop-blur-md">
      <span class="hover:text-blue-500 dark:hover:text-blue-100 cursor-default">Thomas Maneschijn</span>

      <div class="flex gap-4 hover:text-blue-500 dark:hover:text-blue-100 cursor-default">
        <a href="https://www.linkedin.com/in/thomas-maneschijn/" target="_blank" rel="noopener noreferrer" class="social-link hover:text-blue-600 text-slate-300 dark:text-slate-600 w-7 h-w-7 grid place-items-center transition-all">
          <FaLinkedin />
        </a>
        <a href="https://github.com/thomasnyma" target="_blank" rel="noopener noreferrer" class="social-link hover:text-black dark:hover:text-slate-100 text-slate-300 dark:text-slate-600 w-7 h-w-7 grid place-items-center transition-all">
          <FaGithub />
        </a>
        <a href="https://yourusername.medium.com" target="_blank" rel="noopener noreferrer" class="social-link hover:text-black dark:hover:text-slate-100 text-slate-300 dark:text-slate-600 w-7 h-w-7 grid place-items-center transition-all">
          <FaMedium class="text-black hover:text-slate-700" />
        </a>
        <a href="mailto:thomasmaneschijn@gmail.com" target="_blank" rel="noopener noreferrer" class="social-link hover:text-red-600 text-slate-300 dark:text-slate-600 w-7 h-w-7 grid place-items-center transition-all">
          <FaEnvelope />
        </a>
      </div>
    </div>
    
    <main class="grid place-items-center h-full">
      <div class="max-w-screen-lg py-16">
        <Route path="contact" component="{Contact}" />
        <Route path="projects" component="{Projects}" />
        <Route path="education" component="{Education}" />
        <Route path="experience" component="{Experience}" />
        <Route path="/" component="{About}" />
      </div>
    </main>

    <footer class="grid place-items-center p-4 bg-opacity-80 dark:bg-opacity-80 fixed bottom-0 w-screen bg-slate-50 dark:bg-slate-950 backdrop-filter backdrop-blur-md">
      <nav class="flex">
        <Link getProps="{getProps}" to="/" class="hover:text-blue-500 dark:hover:text-blue-100"><Identification size="35" variation="{activeRoute === '/' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-slate-200 transition-all {activeRoute === '/' ? 'text-blue-500 dark:text-slate-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-slate-600'}"/></Link>
        <span class="w-5 h-0.5 rounded-full bg-slate-200 dark:bg-slate-600 my-auto mx-1"></span>
        <Link getProps="{getProps}" to="experience" class="hover:text-blue-500 dark:hover:text-blue-100"><Briefcase size="35" variation="{activeRoute === '/experience' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-slate-200 transition-all {activeRoute === '/experience' ? 'text-blue-500 dark:text-slate-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-slate-600'}"/></Link>
        <span class="w-5 h-0.5 rounded-full bg-slate-200 dark:bg-slate-600 my-auto mx-1"></span>
        <Link getProps="{getProps}" to="education" class="hover:text-blue-500 dark:hover:text-blue-100"><AcademicCap size="35" variation="{activeRoute === '/education' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-slate-200 transition-all {activeRoute === '/education' ? 'text-blue-500 dark:text-slate-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-slate-600'}"/></Link>
        <span class="w-5 h-0.5 rounded-full bg-slate-200 dark:bg-slate-600 my-auto mx-1"></span>
        <Link getProps="{getProps}" to="projects" class="hover:text-blue-500 dark:hover:text-blue-100"><CommandLine size="35" variation="{activeRoute === '/projects' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-slate-200 transition-all {activeRoute === '/projects' ? 'text-blue-500 dark:text-slate-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-slate-600'}"/></Link>
        <span class="w-5 h-0.5 rounded-full bg-slate-200 dark:bg-slate-600 my-auto mx-1"></span>
        <Link getProps="{getProps}" to="contact" class="hover:text-blue-500 dark:hover:text-blue-100"><ChatBubbleBottomCenterText size="35" variation="{activeRoute === '/contact' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-slate-200 transition-all {activeRoute === '/contact' ? 'text-blue-500 dark:text-slate-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-slate-600'}"/></Link>
      </nav>
    </footer>
  </div>
</Router>
