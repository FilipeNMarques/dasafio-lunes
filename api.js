// get_balance Bitcoin
//https://chain.so/api/v2/get_address_balance/BTC/17JzE6xsyu4kZbLosvAKUXHdbU9arAp8Uf/500
//get_balance Litecoin
//https://chain.so/api/v2/get_address_balance/LTC/LUuFZapk26TZyHqbYQHZA3vMigKFaoQKdM/500

//get_price Bitcoin
// https://chain.so/api/v2/get_price/btc/USD
//get_price Litecoin
// https://chain.so/api/v2/get_price/LTC/USD






$.get( "https://chain.so/api/v2/get_info/DOGE", function( response ) {
  $( "body" )
    .append( "Name: " + response.data.name + "<br/>" ) // Dogecoin
    .append( "Total Blocks: " + response.data.blocks + "</br>"); //  current block count
}, "json" );