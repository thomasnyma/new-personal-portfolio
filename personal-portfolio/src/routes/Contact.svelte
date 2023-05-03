<script lang="ts">
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
    import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
  
    export let location;
  </script>

  <style>
    .social-link {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      /* transition: color 0.4s ease-in-out; */
    }
    .social-link:hover {
      transform: scale(1.1);
    }
  </style>
  
  <div class="mx-12">
    <div class="text-center max-lg:mt-4 lg:text-justify">
        <h2 class="text-center font-semibold text-xl text-blue-700 dark:text-slate-400 mb-10">
          <strong class="text-2xl text-blue-500 dark:text-slate-200">Find me on SoMe</strong>
          <br>
          <span class="opacity-70 dark:opacity-100">or send me an email</span>
        </h2>
      <div class="grid max-md:grid-cols-2 grid-cols-4 justify-center gap-8">
        <a href="https://www.linkedin.com/in/thomas-maneschijn/" target="_blank" rel="noopener noreferrer" class="social-link hover:text-blue-600 text-slate-300 dark:text-slate-600 w-28 h-w-28 grid place-items-center">
          <FaLinkedin />
        </a>
        <a href="https://github.com/thomasnyma" target="_blank" rel="noopener noreferrer" class="social-link hover:text-black dark:hover:text-slate-100 text-slate-300 dark:text-slate-600 w-28 h-w-28 grid place-items-center">
          <FaGithub />
        </a>
        <a href="https://yourusername.medium.com" target="_blank" rel="noopener noreferrer" class="social-link hover:text-black dark:hover:text-slate-100 text-slate-300 dark:text-slate-600 w-28 h-w-28 grid place-items-center">
          <FaMedium />
        </a>
        <a href="mailto:thomasmaneschijn@gmail.com" target="_blank" rel="noopener noreferrer" class="social-link hover:text-red-600 text-slate-300 dark:text-slate-600 w-28 h-w-28 grid place-items-center">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </div>
  