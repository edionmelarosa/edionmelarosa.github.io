<template>
    <footer id="footer">
        <div class="footer-left">
            <p>Powered by:
                <a href="https://vuejs.org" target="_blank"><i class="fab fa-vuejs"></i></a>
                and
                <a href="https://pages.github.com/" target="_blank"><i class="fab fa-github"></i></a>
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterSection',

    components: {
        NavSection: () => import('@/sections/NavSection')
    }
}
</script>
