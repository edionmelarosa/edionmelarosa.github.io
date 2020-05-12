<template>
  <div>
    <about-page />
    <skillsPage />
    <projectsPage />
  </div>
</template>
<script>

export default {
    name: 'HomePage',

    components: {
        AboutPage: () => import('@/pages/AboutPage'),
        ProjectsPage: () => import('@/pages/ProjectsPage'),
        SkillsPage: () => import('@/pages/SkillsPage')
    }
}
</script>
