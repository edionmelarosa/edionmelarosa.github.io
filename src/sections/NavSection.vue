<template>
    <nav id="nav">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="blogs">Blogs</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'NavSection'
}
</script>