<template>
  <div>
    <about-page />
    <BlogsPage />
  </div>
</template>
<script>

export default {
    name: 'HomePage',

    components: {
        AboutPage: () => import('@/pages/AboutPage'),
        BlogsPage: () => import('@/pages/BlogsPage')
    }
}
</script>
