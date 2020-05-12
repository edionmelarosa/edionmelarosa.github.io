<template>
  <div>
    <about-page />
    <BlogsPage />
    <!-- <skillsPage />
    <projectsPage /> -->
  </div>
</template>
<script>

export default {
    name: 'HomePage',

    components: {
        AboutPage: () => import('@/pages/AboutPage'),
        // ProjectsPage: () => import('@/pages/ProjectsPage'),
        // SkillsPage: () => import('@/pages/SkillsPage'),
        BlogsPage: () => import('@/pages/BlogsPage')
    }
}
</script>
