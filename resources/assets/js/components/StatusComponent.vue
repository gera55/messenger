<template>
	<b-img rounded="circle" blank width="10" height="10" alt="Status" 
    :title="online ? 'Conectado' : 'Desconectado'"
    :blank-color="online ? 'lightgreen' : 'gray'" />
</template>

<script>
	export default {
    	props: {
            online: Boolean
        },
    	data() {
    		return {
    			
    		};
    	},
        mounted() {
        }
    }
</script>