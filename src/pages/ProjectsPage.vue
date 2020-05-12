<template>
    <section id="projects">
        <h2>Projects</h2>
        <ul class="project-list">

            <li class="project-item"
                v-for="(project, index) in projects" :key="index"
            >
                <p>
                    <a 
                        :href="project.link" target="_blank"
                    >
                    {{project.name}}
                </a>
                    : {{project.description}}
                    <br>
                    * {{project.company}}
                    <span v-if="project.role">| Role: {{project.role}}</span>
                </p>
            </li>
            
        </ul>
    </section>
</template>
 target="_blank"
<script>
export default {
    name: 'ProjectsPage',

    data() {
        return {
            projects: [
                {
                    name: 'Grow It Local',
                    link: 'https://www.growitlocal.com/',
                    description: 'Local grow community.',
                    company: 'Project with SandboxDigital',
                    role: 'Full stack Developer, System Admin'
                },
                {
                    name: 'Curator.io',
                    link: 'https://curator.io/',
                    description: 'A social aggregator pulls your social media posts across multiple channels into one feed that can be embedded anywhere and customised with your own unique branding.',
                    company: 'Project with SandboxDigital',
                    role: 'Back-end Developer'
                },
                {
                    name: 'Aircamp',
                    link: 'https://www.aircamp.com.au/',
                    description: 'Campsites and Caravan finder in Australia.',
                    company: 'Project with SandboxDigital',
                    role: 'Back-end Developer'
                },
                {
                    name: 'E-Hunter',
                    link: 'https://github.com/edionmelarosa/e-hunter',
                    description: 'Simple email address finder using MeteorJs.',
                    company: 'Personal Project',
                    role: null
                },
                {
                    name: 'Email-helper',
                    link: 'https://github.com/edionmelarosa/email-helper',
                    description: 'MeteorJs Package for sending emails.',
                    company: 'Personal Project',
                    role: null
                }
            ]
        }
    }
}
</script>
