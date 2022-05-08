// keyとvalueが書かれたプロパティーのみかそのvalueが関数となっているものが関数

function fruit(name, price) {
    const result = name + "の値段は" + price + "円です。"
    return result
   };
fruit("ブドウ",500)   

function addTax(price, func) {
    // priceは値段
    // funcは実⾏する関数名
    // 税込み価格を計算して四捨五⼊して整数にしている(スコープ内でしか参照できません。)
    const taxPrice = Math.round(price * 1.10);
     func(taxPrice,price);
   }
   // トマトの税込み価格をコンソールに表⽰させる処理
   const price=function(taxPrice){
       const tomato="トマト"
       console.log(tomato+"の値段は"+taxPrice+"円です。")
   }
   addTax(300,price)
   // ⽟ねぎの税込み価格をコンソールに表⽰させる処理
   const price2=function(taxPrice,price){
    const name="玉ねぎ"
    console.log(name+"の値段は"+taxPrice+"円です。")
}
   addTax(200,price2)