<template>
	<div class="banner"><slot></slot></div>
</template>
<style>
    @font-face {
    font-family: 'Birmingham';
    font-style: normal;
    font-weight: normal;
    src: url('/Birmingham.ttf');
  }
	.banner {
		  text-align: center;
		  font-family: 'Birmingham';
		  color: white;
		  background: #C70000;
		  padding: 11px;
		  padding-bottom: 16px; 
	}
</style>