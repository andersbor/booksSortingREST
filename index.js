const baseUrl = "http://localhost:49687/api/books"

Vue.createApp({
    data() {
        return {
            books: []
        }
    },
    async created() { // life cycle method. Called when browser reloads page
        this.getAll(baseUrl)
    },
    methods: {
        async getAll(url) {
            try {
                const response = await axios.get(url)
                this.books = await response.data
                console.log(this.books)
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },


        sortById() {
            // https://www.w3schools.com/js/js_array_sort.asp
            this.getAll(baseUrl + "?sort_by=id")
        },
        sortByTitle() {
            this.getAll(baseUrl + "?sort_by=title")
        },
        sortByPriceAscending() {
            this.getAll(baseUrl + "?sort_by=priceAsc")
        },
        sortByPriceDescending() {
            this.getAll(baseUrl + "?sort_by=priceDesc")
        },
        // All sortByXx() methods can be combined into a single parametrized method
        sortBy(attributeToSortBy) {
            this.getAll(baseUrl + "?sort_by=" + attributeToSortBy)
        }
    }
}).mount("#app")