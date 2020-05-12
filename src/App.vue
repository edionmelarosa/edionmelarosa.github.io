<style src="./assets/css/style.styl" lang="styl"></style>
<style src="./assets/css/style.scss" lang="css"></style>
<template>
    <div id="app" class="max-width mx-auto px3">
        <div class="content index my4">
            <header-section />
            <router-view/>
        </div>
            <footer-section />
    </div>
</template>

<script>

export default {
    name: 'App',

    components: {
        HeaderSection: () => import('./sections/HeaderSection'),
        FooterSection: () => import('@/sections/FooterSection')
    }
}
</script>
