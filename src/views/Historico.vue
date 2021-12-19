<template>
    <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div class="flex flex-col justify-center mt-4">
            <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-grey-200">
                <header class="px-5 py-4 border-b border-gray-100">
                    <h2 class="font-semibold text-gray-800">Sanduiches:</h2>
                </header>
                <div class="p-3">
                    <div class="overflow-x-auto">
                        <table class="table-auto w-full">
                            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">#</div></th>
                                    <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Pão</div></th>
                                    <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Tamanho</div></th>
                                    <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Recheio</div></th>
                                    <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Queijo</div></th>
                                    <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Vegetal</div></th>
                                    <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Molhos</div></th>
                                    <th class="p-2 whitespace-nowrap"><div class="font-semibold text-left">Adicionais</div></th>
                                </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-gray-100" v-for="sandwich in sandwich_list" :key="sandwich.id">
                                <tr>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">{{sandwich.id}}</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">{{sandwich.pao}}</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">{{sandwich.tamanho}}</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">{{sandwich.recheio}}</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">{{sandwich.queijo}}</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">{{sandwich.vegetais}}</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">{{sandwich.molhos}}</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">{{sandwich.adicionais}}</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    <div class="justify-center w-full flex mt-5" @click="deleteSandwiches">
        <p class="button mt-3 text-center w-50">Limpar histórico</p>
    </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            sandwich_list: null,
            sandwich_amount: null
        }
    },
    methods:{
        async getSandwiches(){
            const req = await fetch("http://localhost:3000/historico")

            const data = await req.json()

            this.sandwich_list = data
            this.sandwich_amount = this.sandwich_list.length
        },
        async deleteSandwiches(){
            const sandwich_array = this.sandwich_list
            for (let i = 0; i<sandwich_array.length; i++){
                const req = await fetch(`http://localhost:3000/historico/${i+1}`,{method: "DELETE"})
                const res = await req.json()
            }
            
            window.location.reload(true)

        }
    },

    mounted(){
        this.getSandwiches()
    }
}
</script>

<style scoped>
    .button{
        background-color: rgb(255, 0, 0);
        color: white;
        border-radius: 5px;
        padding: 0.3rem;
        padding-right: 1rem;
        padding-left: 1rem;
        margin-right: 10px;
        transition: .3s;
        cursor:pointer;
    }
    .button:hover{
        background-color: rgb(177, 0, 0);
    }
</style>