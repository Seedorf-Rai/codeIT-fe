<template>

    <div>
        <NavBar></NavBar>
        <main>
          <slot></slot>
        </main>
        <footer>
            this is footer
        </footer>
    </div>
</template>

<script setup>
 console.log("Layout Page Loaded");
</script>