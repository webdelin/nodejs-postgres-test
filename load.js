var file_url = "https://productdata.awin.com/datafeed/download/apikey/c63faee675e6580e15736cfc8886ecbf/language/de/cid/599,422,433,530,434,532,428,474,475,476,477,423,440,441,442,446,424,451,448,453,449,452,450,425,455,457,459,460,456,458,426,616,463,464,465,466,467,427,625,597,473,469,617,470,430,615,483,484,485,488,596,362,366,367,368,371,369,363,372,373,374,377,375,536,535,364,378,380,381,365,383,385,386,390,392,394,396,397,399,402,404,407/columns/aw_deep_link,product_name,aw_product_id,merchant_product_id,merchant_image_url,description,merchant_category,search_price,merchant_name,merchant_id,category_name,category_id,aw_image_url,currency,store_price,delivery_cost,merchant_deep_link,language,last_updated,display_price,data_feed_id,brand_name,brand_id,colour,product_short_description,specifications,condition,product_model,model_number,dimensions,keywords,promotional_text,product_type,commission_group,merchant_product_category_path,merchant_product_second_category,merchant_product_third_category,rrp_price,saving,savings_percent,base_price,base_price_amount,base_price_text,product_price_old,delivery_restrictions,delivery_weight,warranty,terms_of_contract,delivery_time,in_stock,stock_quantity,valid_from,valid_to,is_for_sale,web_offer,pre_order,stock_status,size_stock_status,size_stock_amount,merchant_thumb_url,large_image,alternate_image,aw_thumb_url,alternate_image_two,alternate_image_three,alternate_image_four,reviews,average_rating,rating,number_available,custom_1,custom_2,custom_3,custom_4,custom_5,custom_6,custom_7,custom_8,custom_9,ean,isbn,upc,mpn,parent_product_id,product_GTIN,basket_link,ShoppingNL%3Asize,ShoppingNL%3Amaterial,ShoppingNL%3Apattern,ShoppingNL%3Aenergy_label,ShoppingNL%3Aenergy_label_link,ShoppingNL%3Aenergy_label_logo,ShoppingNL%3Agoogle_taxonomy/format/csv/delimiter/%2C/compression/zip/";

var fs = require('fs');
var request = require('request');
var progress = require('request-progress');
let unzip = require('unzip');
var csv_name = 'awin';
// The options argument is optional so you can omit it 
progress(request(file_url), {
    // throttle: 2000,                    // Throttle the progress event to 2000ms, defaults to 1000ms 
    // delay: 1000,                       // Only start to emit after 1000ms delay, defaults to 0ms 
    // lengthHeader: 'x-transfer-length'  // Length header to use, defaults to content-length 
})
.on('progress', function (state) {
    // The state is an object that looks like this: 
    // { 
    //     percent: 0.5,               // Overall percent (between 0 to 1) 
    //     speed: 554732,              // The download speed in bytes/sec 
    //     size: { 
    //         total: 90044871,        // The total payload size in bytes 
    //         transferred: 27610959   // The transferred payload size in bytes 
    //     }, 
    //     time: { 
    //         elapsed: 36.235,        // The total elapsed seconds since the start (3 decimals) 
    //         remaining: 81.403       // The remaining seconds to finish (3 decimals) 
    //     } 
    // } 
    console.log('progress', state);
})
.on('error', function (err) {
    // Do something with err 
})
.on('end', function () {
		// Do something after request finishes 
		fs.createReadStream('csv/' + csv_name + '.zip').pipe(unzip.Extract({ path: 'csv' }));
})
.pipe(fs.createWriteStream('csv/' + csv_name + '.zip'));
//fs.createReadStream('csv/zanox/' + csv_name + '.zip').pipe(unzip.Extract({ path: 'csv/zanox' }));
