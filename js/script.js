const { createApp } = Vue;

createApp({
    data(){
        return {
            email: [],
            numberEmails: 10
        }
    },
    mounted() {
        this.emailGenerator()
        
    },
    methods: {
    emailGenerator(){
        for(let i=0; i < this.numberEmails; i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                this.email.push(resp.data.response);
                console.log(this.email);
            });
        }
    }
}
}).mount("#app");