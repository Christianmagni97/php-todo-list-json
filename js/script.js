const { createApp } = Vue

createApp({
    data() {
        return {
            razza: " ",
            liste: [],
        }
    },
    methods: {
        getData() {
            axios.get('./server.php', {
                params: {
                    razza: this.razza,
                }
            })
                .then((response) => {
                    console.log(response);
                    this.liste = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created(){
        this.getData();
    }
}).mount('#app')