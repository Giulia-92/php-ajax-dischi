const app = new Vue({
    el:'#app',
    data:{
        dischi:[],
        apiPath:'./server.php'
    },
    methods:{
        search(){

        },
        getData(){
        let path = this.apiPath;
        axios.get(path).then((res)=>{
            this.dischi = res.data;
        })
        }
    },
    mounted(){
        this.getData();
    }
});