<script lang="ts">
    import portrait from "../assets/portrait.jpg";
    export let location;

    function redirectToExperience() {
        window.location.href = "/experience";
    }
</script>

<div class="mx-12 lg:grid lg:grid-cols-[auto_1fr]">
    <img src="{portrait}" alt="Portrait of Thomas Maneschijn" class="mx-auto rounded-xl lg:w-72 h-72 lg:rounded-full lg:mr-6">
    <div class="text-center max-lg:mt-4 lg:text-justify">
        <span class="font-semibold text-2xl">Hi there! My name is</span>
        <h1 class="py-4 font-semibold text-6xl text-blue-500">Thomas Maneschijn</h1>
        <p class="font-light text-xl">
            I'm a software developer based in Copenhagen, Denmark with four years of experience in front-end web development. I'm proficient in Angular, React, VueJs, and ASP.NET frameworks and technologies.
        </p>
        <p class="mt-4 font-light text-xl">I enjoy playing the guitar in my free time as a way to relax and be creative.</p>

        <button on:click={redirectToExperience} class="mt-10 p-2 border-2 rounded text-blue-500 hover:text-blue-700 hover:border-blue-700 border-blue-500 dark:hover:text-blue-100 dark:hover:border-blue-100 dark:border-blue-500">
            Learn more about me
        </button>
    </div>
</div>
