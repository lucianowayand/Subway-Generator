<template>
    <div class="header text-center mt-10 mb-10">
        <h1 class="text-4xl">Apenas um pré-visualizador de pedidos feito em Vue.js</h1>
        <p class="">Oque acha de deixar seu lanche pré-pensado antes de entrar na fila pra evitar problemas?</p>
    </div>
    <form class="sandwich-form" id="sandwich-form">
        <div class="input-container">
            <label for="pao" class="mr-2">Escolha o tipo de pão: </label>
            <select name="pao" id="pao" v-model="pao">
                <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
            </select>
        </div>
        <div class="input-container">
            <label for="tamanho" class="mr-2">Qual tamanho do seu sanduiche?</label>
            <div>
                <input type="checkbox" name="15cm" id="15cm" class="ml-1 mr-1">15cm
                <input type="checkbox" name="30cm" id="30cm" class="ml-1 mr-1">30cm
            </div>
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
        <div class="checkbox-container mt-2">
            <label for="vegetais" class="mr-2" >Vegetais:</label>
            <div v-for="vegetal in vegetais" :key="vegetal.id">
                <input type="checkbox" :id="vegetal.tipo" class="mr-1 ml-4"  :value="vegetal.tipo">
                <label :for="vegetal.id" class="mr-2">{{vegetal.tipo}}</label>
            </div>
        </div>
        <div class="checkbox-container mt-2">
            <label for="adicionais" class="mr-2" >Adicionais:</label>
            <div v-for="adicional in adicionais" :key="adicional.id">
                <input type="checkbox" :id="adicional.tipo" class="mr-1 ml-4" >
                <label :for="adicional.id" class="mr-2">{{adicional.tipo}}</label>
            </div>
        </div>
        <div class="input-container text-center mt-5">
            <input type="submit" class="submit-btn" value="Salvar">
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return{
            paes: null,
            recheios: null,
            queijos: null,
            adicionais: null,
            vegetais: null,
            molhos: null,
            pao: null,
            tamanho: null,
            recheio: null,
            queijo: null,
            vegetais: [],
            adicionais: []
        }
    },
    methods:{
        async getIngredientes(){
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json()

            this.paes = data.paes
            this.recheios = data.recheios
            this.queijos = data.queijos
            this.vegetais = data.vegetais
            this.adicionais = data.adicionais
            this.molhos = data.molhos

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