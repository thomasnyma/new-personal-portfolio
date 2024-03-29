<script lang="ts">
  import { writable } from "svelte/store";
  import type { JobInfo } from "../interfaces/jobInfo.interface";
  import { onMount } from "svelte";
  import type { ProjectInfo } from "../interfaces/projectInfo.interface";

  export let items: Array<JobInfo | ProjectInfo> = [];

  const selectedItem = writable<JobInfo | ProjectInfo | null>(null);
  const selectedIndex = writable<number | null>(null);

  function selectItem(item: JobInfo | ProjectInfo, index: number) {
    selectedItem.set(item);
    selectedIndex.set(index);
  }

  onMount(() => {
    if (items.length > 0) {
      selectItem(items[0], 0);
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
  .stepper-controls {
    position: fixed;
    top: 50%;
    left: 16px;
    transform: translate(0, -50%);
  }
</style>

<div class="grid place-items-center h-full">
  <div class="stepper-controls flex w-1/5 h-full" style="height: {items.length * 40}px">
    <div class="mr-3 relative overflow-hidden">
      <div style="height: {items.length * 40}px" class="w-0.5 rounded-full bg-slate-200 dark:bg-slate-600"></div>
      <div id="select-highlight" style="top: {$selectedIndex * 40}px" class="w-0.5 h-10 rounded-full bg-blue-500 absolute"></div>
    </div>
    <ul class="h-full">
      {#each items as item, index}
      <li>
        <button
          class="p-2 w-full text-left cursor-pointer hover:text-blue-500 dark:hover:text-slate-200 {($selectedItem && $selectedItem.id === item.id) ? 'text-blue-500 dark:text-slate-200 opacity-100' : 'dark:opacity-100 opacity-50 dark:text-slate-600'}"
          on:click={() => selectItem(item, index)}
        >
          {item.navText}
        </button>
      </li>
      {/each}
    </ul>    
  </div>
  <div class="w-4/5 min-h-full">
    {#if $selectedItem}
      <h2 class="text-center font-semibold text-xl text-blue-700 dark:text-slate-400 mb-2">
        <strong class="text-2xl text-blue-500 dark:text-slate-200">{$selectedItem.title}</strong>
        {#if 'place' in $selectedItem}<span class="opacity-70 dark:opacity-100">@ {$selectedItem.place}</span>{/if}
      </h2>
      <p class="text-center opacity-50 dark:opacity-100 dark:text-slate-600 mb-4">
        {#if 'startDate' in $selectedItem}
          {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format($selectedItem.startDate)} - {($selectedItem.endDate) ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format($selectedItem.endDate) : 'Present'}
        {/if}
      </p>
      {#if 'image' in $selectedItem}<img src="{$selectedItem.image}" alt="Image of {$selectedItem.title}" class="w-full h-auto mb-4">{/if}
      {#if 'features' in $selectedItem}<ul class="list-disc pl-5 mb-4">{#each $selectedItem.features as feature}<li>{feature}</li>{/each}</ul>{/if}
      {#each $selectedItem.description as description}<p class="text-center opacity-80 dark:opacity-100 mb-4">{description}</p>{/each}
    {/if}
  </div>
</div>