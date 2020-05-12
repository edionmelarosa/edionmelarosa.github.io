<template>
    <section id="blogs">
        <h2>Blogs</h2>
        <ul class="section-list">
            <li 
                class="section-item"
                v-for="(blog, index) in blogs" :key="index"
                @click="gotoPage(blog.link)"
            >
            {{blog.name}}
            <br>
            <span>{{blog.description}}</span>
            <br>
            <small><i class="far fa-clock"></i> Updated: {{blog.date_updated}}</small>
            </li>
            
        </ul>
    </section>
</template>
 target="_blank"
<script>
export default {
    name: 'BlogsPage',

    data() {
        return {
            blogs: [
                // {
                //     name: 'A comprehensive guide to Creating Github Pages and Deploying using Github Action Workflow',
                //     link: 'a-comprehensive-guide-to-creating-github-pages-and-deploying-using-github-action-workflow',
                //     description: 'A comprehensive guide on Creating Github Pages and Deploying using Github Action Workflow.',
                // },
                {
                    name: 'Deploying Github page using Github action and workflows',
                    link: 'deploying-your-github-page-using-github-action-workflow',
                    description: 'A guide on deploying your github pages using Github action and workflows.',
                    date_updated: 'May 12, 2020'
                }
            ]
        }
    },

    methods: {
        gotoPage(page) {
            this.$router.push(page);
        }
    }
}
</script>