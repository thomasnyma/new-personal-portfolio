<script lang="ts">
    import InfoStepper from '../lib/InfoStepper.svelte';
    import type { JobInfo } from '../interfaces/jobInfo.interface';
    import { mockExperience } from '../mocks/experience.mock';
    const items: JobInfo[] = mockExperience;
    export let location;
</script>

<div class="mx-12">
    <div class="text-center max-lg:mt-4">
        <!-- <h2 class="font-semibold text-2xl mb-5 text-blue-500">Experience</h2> -->
        <InfoStepper {items} />
    </div>
</div>