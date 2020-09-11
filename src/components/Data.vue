<template>
  <div id="data" class="overflow-hidden pb-4">
    <div id="invoiceNumber" class="text-center text-2xl font-bold my-8">
      <h1>Faktura nr: <input class="text-center focus:outline-none focus:shadow-outline rounded-lg p-2 my-2 appearance-none leading-normal" type="text" placeholder="01/01/2020" /></h1>
    </div>
    <div id="invoiceDate" class="text-center my-2 md:text-right">
      <p>Data wystawienia: <input type="date" /></p>
    </div>
    <div id="invoicePlace" class="text-center md:text-right">
      <p>Miejsce wystawienia: <input type="text" placeholder="Warszawa" /></p>
    </div>
    <div class="m-16">
      <div id="seller" class=" mx-auto block float-left" >
        <p class="font-bold pl-1">Sprzedawca:</p> 
        <p><input class="focus:outline-none focus:shadow-outline rounded-lg p-1 mb-1 block w-full appearance-none leading-normal" type="text" placeholder="Nazwa firmy" /></p>
        <textarea class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal">Dane firmy... </textarea>
      </div>
      <div id="buyer" class="float-right">
        <p class="font-bold pl-1">Nabywca:</p>
        <p> <input class="focus:outline-none focus:shadow-outline rounded-lg p-1 mb-1 block w-full appearance-none leading-normal" type="text" placeholder="Nazwa firmy" /></p>
        <textarea class="focus:outline-none focus:shadow-outline rounded-lg p-1 block w-full appearance-none leading-normal">Dane firmy... </textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invoice",
}
</script>
