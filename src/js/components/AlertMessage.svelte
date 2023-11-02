<script>
    export let message = "";
    function handleClick(event) {
        document.body.removeChild(this.parentElement);
    }
</script>

<div class="alert"> 
    <p>{message}</p>
    <span on:click={handleClick}>X</span>
</div>

