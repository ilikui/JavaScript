
/**
 * 创建一个book类
 */
class Book{
constructor(price,nums)
    {

            this.price = price;

            this.nums = nums;
        
    }

/**
 * 静态方法
 * @param {*} price 
 * @param {*} nums 
 * @returns 
 */
    static totalPrices(price,nums){

       // console.log(price* nums);
        return  price* nums;
    }


}



let book = new Book();

book.nums=12;

console.log(book.nums);



