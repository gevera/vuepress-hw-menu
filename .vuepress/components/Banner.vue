<template>
	<div class="banner"><slot></slot></div>
</template>
<style scoped>
    @font-face {
    font-family: 'Birmingham';
    font-style: normal;
    src: url('/Birmingham.ttf');
  }
	.banner {
		  text-align: center;
		  font-family: 'Birmingham';
		  color: white;
			font-weight: bold;
		  background: #C70000;
		  padding: 11px;
		  padding-bottom: 16px;
			line-height: 1.5;
	}
</style>
