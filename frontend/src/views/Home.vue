
<script>
// @ is an alias to /src
import MeetupCard from '@/components/meetup-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    MeetupCard
  },
  computed: {
    ...mapState(['meetups'])
  },
  methods: {
    ...mapActions(['fetchMeetups'])
  },
  created() {
    this.fetchMeetups()
  }
}
</script>

<template>
  <main>
    <h1> Holy shit </h1>
    <div> {{ meetups }} </div>
  </main>
</template>