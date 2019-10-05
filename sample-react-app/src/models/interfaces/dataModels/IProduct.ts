export default interface IProduct {
    productID: number,
    productName: string,
    supplierID?:number,
    categoryID?:number
    quantityPerUnit: string,
    unitPrice?: number,
    unitsInStock?:number,
    unitsOnOrder?:number,
    reorderLevel?:number,
    discontinued: boolean
}