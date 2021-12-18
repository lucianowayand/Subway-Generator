<template>
<div class="navbar">
    <div class="logo">
        <router-link to="/"><img src="https://logos-download.com/wp-content/uploads/2016/03/Subway_logo_white.png" alt="Subway" style="width:6rem;"></router-link>
    </div>
    <div class="buttons-bar">
        <router-link to="/sobre"><div class="button">SOBRE</div></router-link>
        <router-link to="/historico"><div class="button">HISTORICO</div></router-link>
    </div>
</div>
    
</template>

<style>
    .navbar{
        background-color: #145c40;
        padding: 2rem;
        width: -webkit-fill-available;
        display: flex;
        justify-content: space-between;
    }
    .buttons-bar{
        color: #145c40;
        font-weight: 900;
        display: inline-flex;
    }
    .button{
        background-color: white;
        border-radius: 5px;
        padding: 0.3rem;
        margin-right: 10px;
    }
    .button:hover{
        background-color: darkgrey;
    }
</style>