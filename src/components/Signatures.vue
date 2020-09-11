<template>
  <div id="signatures" class="hidden print">
    <div id="sellerSignature">
      <hr />
      <h6>Osoba upoważniona do wystawienia</h6>
    </div>
    <div id="buyerSignature">
      <hr />
      <h6>Osoba upoważniona do odbioru</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signatures",
};
</script>

<style scoped>
@media print {
  .print{
    display: block;
  }
  #sellerSignature{
    position: absolute;
    bottom: 5%;
    left: 0%;
  }
  #buyerSignature{
    position: absolute;
    bottom: 5%;
    left: 65%;
  }
}
</style>
