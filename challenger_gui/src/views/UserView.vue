<template>
    <div class="container">
        <div class="row">
            <h2 class="class-display2">Users</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="users">
            <div class="col" v-for="user in users" :key="user.userID">
                <div class="card" style="width: 18rem;">
                    <img :src="user.profileURL" class="card-img-top" :alt="user.firstName">
                    <div class="card-body">
                      <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
                      <p class="card-text"><span>Email Address: {{ user.emailAdd }}</span></p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
        </div>
        <div v-else class="row">
            <Spinner/>
        </div>
    </div>
</template>

<script>
import Spinner from "../components/Spinner.vue"
    export default {
        components:{
            Spinner
        },
        computed: {
            users() {
                return this.$store.state.users
            }
        },
        mounted() {
            this.$store.dispatch('fetchUsers')
        }
    }
</script>

<style scoped>

</style>