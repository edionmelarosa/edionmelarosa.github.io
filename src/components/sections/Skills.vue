<template>
    <section id="skills">
        <span class="h1"><a href="#">Technologies / Skills</a></span>
        <ul class="post-list">
            <li v-for="(skill, index) in skills" :key="index" class="post-item">
                <div class="meta">{{skill.skill}} | </div>
                <span v-text="skill.level"></span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Skills',

    data() {
        return {
            skills: [
                { skill: 'PHP/Laravel', level: 'Advanced' },
                { skill: 'VueJS', level: 'Advanced' },
                { skill: 'HTML,HTML5', level: 'Advanced' },
                { skill: 'GIT', level: 'Advanced' },
                { skill: 'Css, Sass, Scss', level: 'Intermediate' },
                { skill: 'WordPress', level: 'Intermediate' },
                { skill: 'MySQL', level: 'Intermediate' },
                { skill: 'MeteorJS', level: 'Limited' },
                { skill: 'GoLang', level: 'Limited' },
                { skill: 'System Administration', level: 'Limited' },
                { skill: 'Amazon AWS', level: 'Limited' },
                { skill: 'Project Management', level: 'Limited' },
            ]
        }
    }
}
</script>
