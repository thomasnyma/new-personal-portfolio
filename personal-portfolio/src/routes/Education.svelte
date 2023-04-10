<script lang="ts">
    import InfoStepper from '../lib/InfoStepper.svelte';
    import type { JobInfo } from '../interfaces/jobInfo.interface';
    import { mockEducation } from '../mocks/education.mock';
    const jobInfos: JobInfo[] = mockEducation;
</script>

<div class="mx-12">
    <div class="text-center max-lg:mt-4 lg:text-justify">
        <!-- <h2 class="font-semibold text-2xl">Education</h2> -->
        <InfoStepper {jobInfos} />
    </div>
</div>