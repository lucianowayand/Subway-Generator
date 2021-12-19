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
                            <tbody class="text-sm divide-y divide-gray-100">
                                <tr>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">1</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">3 queijos</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">15 cm</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">Steak churrasco</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">Cheddar</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">Alface, Cebola, Rúcula</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">Parmesão, Maionese, Mostarda e mel</div></td>
                                    <td class="p-2 whitespace-nowrap"><div class="text-left">Bacon, Dobro de bacon</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            sandwich_list: null,
            sandwich_id: null
        }
    }
}
</script>