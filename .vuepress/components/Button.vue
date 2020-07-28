<template>
   <button><slot></slot></button>
</template>

<style>
    button {
        transition: 0.5s;
        opacity: 0.9;
        border-radius: 9999999px;
        color: #fff;
        background: #C70000;
        cursor: pointer;
    }

    button:focus, button:hover {
        outline: none;
        opacity: 1;
    }
</style>