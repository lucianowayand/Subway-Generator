<template>
    <div class="header text-center mt-10 mb-10">
        <h1 class="text-4xl">Apenas um pré-visualizador de pedidos feito em Vue.js</h1>
        <p class="">Oque acha de deixar seu lanche pré-pensado antes de entrar na fila pra evitar problemas?</p>
    </div>

    <div v-if="this.alert" class="sandwich-form mb-5">
        <alert :danger="false" :message="this.mensagem"/>
    </div>
    
    <form class="sandwich-form" id="sandwich-form" @submit="postSandwich">

        <div class="input-container">
            <label for="pao" class="mr-2">Escolha o tipo de pão: </label>
            <select name="pao" id="pao" v-model="pao">
                <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
            </select>
        </div>

        <div class="input-container">
            <label for="tamanho" class="mr-2">Escolha o tamanho: </label>
            <select name="tamanho" id="tamanho" v-model="tamanho">
                <option value="15cm">15 cm</option>
                <option value="30cm">30 cm</option>
            </select>
        </div>

        <div class="input-container">
            <label for="recheio" class="mr-2">Escolha o recheio: </label>
            <select name="recheio" id="recheio" v-model="recheio">
                <option v-for="recheio in recheios" :key="recheio.id" :value="recheio.tipo">{{recheio.tipo}}</option>
            </select>
        </div>

        <div class="input-container">
            <label for="queijo" class="mr-2">Escolha o queijo: </label>
            <select name="queijo" id="queijo" v-model="queijo">
                <option v-for="queijo in queijos" :key="queijo.id" :value="queijo.tipo">{{queijo.tipo}}</option>
            </select>
        </div>
        <div id="vegetais-container" class="input-container">
            <label id="vegetais-title" for="vegetais">Selecione os vegetais:</label>
            <div class="checkbox-container" v-for="vegetal in vegetais_data" :key="vegetal.id">
                <input type="checkbox" name="vegetais" v-model="vegetais" :value="vegetal.tipo">
                <span>{{ vegetal.tipo }}</span>
            </div>
        </div>
        <div id="molhos-container" class="input-container">
            <label id="molhos-title" for="molhos">Selecione os molhos:</label>
            <div class="checkbox-container" v-for="molho in molhos_data" :key="molho.id">
                <input type="checkbox" name="molhos" v-model="molhos" :value="molho.tipo">
                <span>{{ molho.tipo }}</span>
            </div>
        </div>
        <div id="adicionais-container" class="input-container">
            <label id="adicionais-title" for="adicionais">Selecione os adicionais:</label>
            <div class="checkbox-container" v-for="adicional in adicionais_data" :key="adicional.id">
                <input type="checkbox" name="adicionais" v-model="adicionais" :value="adicional.tipo">
                <span>{{ adicional.tipo }}</span>
            </div>
        </div>

        <div class="input-container text-center mt-5">
            <input type="submit" class="submit-btn" value="Salvar">
        </div>
    </form>
</template>

<script>
import Alert from '../components/Alert.vue'

export default {
  components: { Alert },
    data() {
        return{
            paes: null,
            recheios: null,
            queijos: null,
            vegetais_data: null,
            vegetais: [],
            molhos_data: null,
            molhos: [],
            adicionais_data: null,
            adicionais: [],

            pao: null,
            tamanho: null,
            recheio: null,
            queijo: null,

            mensagem: null,
            alert: false
        }
    },
    methods:{
        async getIngredientes(){
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json()

            this.paes = data.paes
            this.recheios = data.recheios
            this.queijos = data.queijos
            this.vegetais_data = data.vegetais
            this.molhos_data = data.molhos
            this.adicionais_data = data.adicionais
        },
        async postSandwich(e){
            e.preventDefault();
            const data ={
                pao: this.pao,
                recheio: this.recheio,
                queijo: this.queijo,
                tamanho: this.tamanho,
                vegetais: Array.from(this.vegetais),
                molhos: Array.from(this.molhos),
                adicionais: Array.from(this.adicionais)
            }
            const dataJson = JSON.stringify(data)
            const req = await fetch("http://localhost:3000/historico", {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: dataJson
            })
            const res = await req.json()

            this.pao = ""
            this.recheio = ""
            this.queijo = ""
            this.tamanho = ""
            this.vegetais = ""
            this.molhos = ""
            this.adicionais = ""

            this.alert=true,
            this.mensagem="Adicionado ao histórico!"
        }
    },
    mounted(){
        this.getIngredientes()
    }
}
</script>

<style>
    .sandwich-form{
        margin: auto;
        max-width: 450px;
    }
    .input-container{
        display:flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
    .submit-btn{
        cursor:pointer;
        margin: 2px;
        border-radius: 2rem;
    }
</style>