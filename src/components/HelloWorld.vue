<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img
                    :src="require('../assets/icon.png')"
                    class="my-3"
                    contain
                    height="200"
                />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    Stuff
                </h1>

                <p class="subheading font-weight-regular">
                    Got some Updates! (v0.0.4)
                </p>

                <p class="subheading font-weight-regular">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "HelloWorld",

    data: () => ({
    }),
};
</script>
