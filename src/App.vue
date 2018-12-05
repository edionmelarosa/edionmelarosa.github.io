<style src="./assets/css/style.styl" lang="styl"></style>
<style src="./assets/css/style.scss" lang="css"></style>
<template>
    <div id="app" class="max-width mx-auto px3">
        <div class="content index my4">
            <the-header></the-header>
            <router-view/>
        </div>
            <the-footer></the-footer>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
    name: 'App',

    components: {
        TheHeader,
        TheFooter
    }
}
</script>
