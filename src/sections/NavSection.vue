<template>
    <nav id="nav">
        <ul>
            <li><a href="#" v-scroll-to="'body'">Home</a></li>
            <li><a href="#" v-scroll-to="'#about'">About</a></li>
            <li><a href="#" v-scroll-to="'#skills'">Technologies</a></li>
            <li><a href="#" v-scroll-to="'#projects'">Projects</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'NavSection'
}
</script>