<script lang="ts">
    import InfoStepper from '../lib/InfoStepper.svelte';
    import type { JobInfo } from '../interfaces/jobInfo.interface';
    import { mockEducation } from '../mocks/education.mock';
    const items: JobInfo[] = mockEducation;
    export let location;
</script>

<div class="mx-12">
    <div class="text-center max-lg:mt-4 lg:text-justify">
        <!-- <h2 class="font-semibold text-2xl">Education</h2> -->
        <InfoStepper {items} />
    </div>
</div>