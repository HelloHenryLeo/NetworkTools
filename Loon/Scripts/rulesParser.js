let obj = $response.body;
obj = obj.replace(/HOST/gi,'DOMAIN');
obj = obj.replace(/IP6-CIDR/gi,'IP-CIDR6');

$done({body:obj}); 
