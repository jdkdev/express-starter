new Vue({
    el: '#app',
    data: {
        message: 'hello there',
        scss: 'h1 { color: red; > small { color: pink }}',
        css: 'color: red',
    },
    filters: {
    },
    created() {
        this.convert()
    }
    computed: {
    },
    methods: {
        convert() {
            axios.get('http://localhost:3000/convert?scss=' + encodeURIComponent(this.scss))
            .then(res => {
                console.log(res.data)
                this.css = res.data.css
                styles = document.getElementById('preview')
                styles.innerHTML = this.css
            })
        }
    },
})
