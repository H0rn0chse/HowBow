<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
        >
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    :src="require('./assets/icon.png')"
                    transition="scale-transition"
                    width="40"
                />
                <h2>HowBow</h2>
            </div>

            <v-spacer></v-spacer>
            <span class="body-2">
                Eingeloggt als <i>IchLiebeJulia</i>
            </span>
            <v-btn
                target="_blank"
                text
            >
                <span class="mr-2">Logout</span>
                <v-icon>mdi-logout-variant</v-icon>
            </v-btn>
            <v-btn
                target="_blank"
                text
            >
                <span class="mr-2">Settings</span>
                <v-icon>mdi-cog</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: "App",

    data: () => ({
        //
    }),
};
</script>
