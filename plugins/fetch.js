export default defineNuxtPlugin({
    function ({ app }) {
        app.fetch = fetch;
    }
})