<script lang="ts">
  import './tailwind.css';
  import { Router, Link, Route } from "svelte-routing";
  import About from './routes/About.svelte';
  import Experience from './routes/Experience.svelte';
  import Education from './routes/Education.svelte';
  import Projects from './routes/Projects.svelte';
  import Contact from './routes/Contact.svelte';
  import { Identification, Briefcase, AcademicCap, CommandLine, ChatBubbleBottomCenterText } from "svelte-heros";
  
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
    <div class="flex justify-between p-4 bg-opacity-80 dark:bg-opacity-80 fixed w-screen bg-gray-50 dark:bg-gray-900 backdrop-filter backdrop-blur-md">
      <span class="hover:text-blue-500 dark:hover:text-blue-100 cursor-default">Thomas Maneschijn</span>

      <div class="hover:text-blue-500 dark:hover:text-blue-100 cursor-default">
        (Social links)
      </div>
    </div>
    
    <main class="grid place-items-center">
      <div class="max-w-screen-lg overflow-hidden py-8">
        <Route path="contact" component="{Contact}" />
        <Route path="projects" component="{Projects}" />
        <Route path="education" component="{Education}" />
        <Route path="experience" component="{Experience}" />
        <Route path="/" component="{About}" />
      </div>
    </main>

    <footer class="grid place-items-center p-4 bg-opacity-80 dark:bg-opacity-80 fixed bottom-0 w-screen bg-gray-50 dark:bg-gray-900 backdrop-filter backdrop-blur-md">
      <nav class="flex">
        <Link getProps="{getProps}" to="/" class="hover:text-blue-500 dark:hover:text-blue-100"><Identification size="35" variation="{activeRoute === '/' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-gray-200 {activeRoute === '/' ? 'text-blue-500 dark:text-gray-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-gray-600'}"/></Link>
        <span class="w-5 h-0.5 rounded-full bg-gray-200 dark:bg-gray-600 my-auto mx-1"></span>
        <Link getProps="{getProps}" to="experience" class="hover:text-blue-500 dark:hover:text-blue-100"><Briefcase size="35" variation="{activeRoute === '/experience' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-gray-200 {activeRoute === '/experience' ? 'text-blue-500 dark:text-gray-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-gray-600'}"/></Link>
        <span class="w-5 h-0.5 rounded-full bg-gray-200 dark:bg-gray-600 my-auto mx-1"></span>
        <Link getProps="{getProps}" to="education" class="hover:text-blue-500 dark:hover:text-blue-100"><AcademicCap size="35" variation="{activeRoute === '/education' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-gray-200 {activeRoute === '/education' ? 'text-blue-500 dark:text-gray-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-gray-600'}"/></Link>
        <span class="w-5 h-0.5 rounded-full bg-gray-200 dark:bg-gray-600 my-auto mx-1"></span>
        <Link getProps="{getProps}" to="projects" class="hover:text-blue-500 dark:hover:text-blue-100"><CommandLine size="35" variation="{activeRoute === '/projects' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-gray-200 {activeRoute === '/projects' ? 'text-blue-500 dark:text-gray-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-gray-600'}"/></Link>
        <span class="w-5 h-0.5 rounded-full bg-gray-200 dark:bg-gray-600 my-auto mx-1"></span>
        <Link getProps="{getProps}" to="contact" class="hover:text-blue-500 dark:hover:text-blue-100"><ChatBubbleBottomCenterText size="35" variation="{activeRoute === '/contact' ? 'solid' : 'outline'}" class="hover:text-blue-500 dark:hover:text-gray-200 {activeRoute === '/contact' ? 'text-blue-500 dark:text-gray-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-gray-600'}"/></Link>
      </nav>
    </footer>
  </div>
</Router>
