<template>
  <div>
    <about></about>
    <skills></skills>
    <projects></projects>
  </div>
</template>

<script>
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'

export default {
    name: 'Home',

    components: {
        About,
        Projects,
        Skills
    }
}
</script>
