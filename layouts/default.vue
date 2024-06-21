<template>

    <div>
        <NavBar></NavBar>
        <main>
          <slot></slot>
        </main>
        <Footer></Footer>
    </div>
</template>

<script setup>
 console.log("Layout Page Loaded");
</script>