<template>
    <header id="header">
        <a href="#">
            <div id="logo"></div>
            <div id="title">
                <h1>Edion Larosa | Web/Mobile Developer</h1>
            </div>
        </a>
        <div id="nav">
            <ul>
                <li class="icon">
                    <a href="#"><i class="fas fa-bars fa-2x"></i></a>
                </li>

                <li><a href="#" v-scroll-to="'body'">Home</a></li>
                <li><a href="#" v-scroll-to="'#about'">About</a></li>
                <li><a href="#" v-scroll-to="'#skills'">Technologies</a></li>
                <li><a href="#" v-scroll-to="'#projects'">Projects</a></li>

            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

