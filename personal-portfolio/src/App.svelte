<script lang="ts">
  import './tailwind.css';
  import { Router, Link, Route } from "svelte-routing";
  import About from './routes/About.svelte';
  import Experience from './routes/Experience.svelte';
  import Education from './routes/Education.svelte';
  import Projects from './routes/Projects.svelte';
  import Contact from './routes/Contact.svelte';
  
  export let url = "";
</script>

<Router url="{url}">
  <div class="h-screen grid grid-rows-[auto_1fr]">
    <div class="flex justify-between p-4">
      <span class="hover:text-blue-500 dark:hover:text-blue-100 cursor-default">Thomas Maneschijn</span>

      <div class="hover:text-blue-500 dark:hover:text-blue-100 cursor-default">
        (Social links)
      </div>
    </div>
    
    <main class="grid place-items-center">
      <div class="max-w-screen-lg">
        <Route path="contact" component="{Contact}" />
        <Route path="projects" component="{Projects}" />
        <Route path="education" component="{Education}" />
        <Route path="experience" component="{Experience}" />
        <Route path="/" component="{About}" />
      </div>
    </main>

    <nav>
      <Link to="/" class="hover:text-blue-500 dark:hover:text-blue-100">About</Link>
      <Link to="experience" class="hover:text-blue-500 dark:hover:text-blue-100">Experience</Link>
      <Link to="education" class="hover:text-blue-500 dark:hover:text-blue-100">Education</Link>
      <Link to="projects" class="hover:text-blue-500 dark:hover:text-blue-100">Projects</Link>
      <Link to="contact" class="hover:text-blue-500 dark:hover:text-blue-100">Contact</Link>
    </nav>
  </div>
</Router>