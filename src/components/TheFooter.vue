<template>
    <footer id="footer">
        <div class="footer-left">
            <span>Copyright © 2018 Edion Larosa</span>
            <p>Powered by:
                <a href="https://vuejs.org" target="_blank"><i class="fab fa-vuejs"></i></a>
                and
                <a href="https://pages.github.com/" target="_blank"><i class="fab fa-github"></i></a>
            </p>
        </div>
        <div class="footer-right">
            <nav>
                <ul>
                    <li><a href="#" v-scroll-to="'body'">Home</a></li>
                    <li><a href="#" v-scroll-to="'#about'">About</a></li>
                    <li><a href="#" v-scroll-to="'#skills'">Technologies</a></li>
                    <li><a href="#" v-scroll-to="'#projects'">Projects</a></li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>
