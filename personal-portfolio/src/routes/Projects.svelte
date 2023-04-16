<script lang="ts">
    import InfoStepper from '../lib/InfoStepper.svelte';
    import type { ProjectInfo } from '../interfaces/projectInfo.interface';
    import { mockProjects } from '../mocks/projects.mock';
    const items: ProjectInfo[] = mockProjects;
    export let location;
</script>

<div class="mx-12 h-full">
    <div class="text-center max-lg:mt-4 h-5/6">
        <InfoStepper {items} />
    </div>
</div>