<template>
    <div>
        <v-app>
            <navbar-component></navbar-component>
            <router-view></router-view>
            <footer-component></footer-component>
        </v-app>
    </div>
</template>
<script>
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/footer';

export default {
    components: {
        NavbarComponent,
        FooterComponent
    }
}
</script>