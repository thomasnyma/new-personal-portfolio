<script lang="ts">
  import { writable } from "svelte/store";
  import type { JobInfo } from "../interfaces/jobInfo.interface";
  import { onMount } from "svelte";

  // interface ProjectInfo {
  //   title: string;
  //   subTitle: string;
  // }

  export let jobInfos: JobInfo[] = [];

const selectedJob = writable<JobInfo | null>(null);
const selectedIndex = writable<number | null>(null);

function selectJob(job: JobInfo, index: number) {
  selectedJob.set(job);
  selectedIndex.set(index);
}

  onMount(() => {
    if (jobInfos.length > 0) {
      selectJob(jobInfos[0], 0);
    }
  });
</script>


<style>
  button {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    text-align: left;
  }
  #select-highlight {
    transition: top 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
</style>

<div class="flex" style="height: {jobInfos.length * 40}px">
  <div class="flex w-1/4 h-full">
    <div class="mr-3 relative overflow-hidden">
      <div style="height: {jobInfos.length * 40}px" class="w-0.5 rounded-full bg-gray-200 dark:bg-gray-600"></div>
      <div id="select-highlight" style="top: {$selectedIndex * 40}px" class="w-0.5 h-10 rounded-full bg-blue-500 absolute"></div>
    </div>
    <ul class="h-full">
      {#each jobInfos as job, index}
      <li>
        <button
          class="p-2 w-full text-left cursor-pointer hover:text-blue-500 dark:hover:text-gray-200 {($selectedJob && $selectedJob.id === job.id) ? 'text-blue-500 dark:text-gray-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-gray-600'}"
          on:click={() => selectJob(job, index)}
        >
          {job.navText}
        </button>
      </li>
      {/each}
    </ul>
  </div>
  <div class="w-3/4 p-4">
    {#if $selectedJob}
      <h2 class="text-left font-semibold text-xl text-blue-700 dark:text-gray-400 mb-2"><strong class="text-2xl text-blue-500 dark:text-gray-200">{$selectedJob.title}</strong> <span class="opacity-70 dark:opacity-100">@ {$selectedJob.place}</span></h2>
      <p class="text-left opacity-50 dark:opacity-100 dark:text-gray-600 mb-4">
        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format($selectedJob.startDate)} - {($selectedJob.endDate) ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format($selectedJob.endDate) : 'Present'}
      </p>
      <p class="text-left opacity-80 dark:opacity-100">{$selectedJob.description}</p>
    {/if}
  </div>
</div>