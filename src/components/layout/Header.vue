<template>
    <header class="header">
        <div class="header-content">
            <v-icon name="MdCatchingpokemon" scale=2  />
            <nav class="header__navigation">
                <router-link to="/">Homepage</router-link>
                <router-link to="/profile">Profile</router-link>
            </nav>
        </div>

    </header>
</template>

<script>

import ProfilePage from "../../pages/ProfilePage.vue";

export default {
    components: {ProfilePage}

}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: var(--blue-color);
}
.header__navigation{
    display: flex;
    column-gap: 30px;
}
</style>