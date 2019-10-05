import service from "./service";
export const getProducts =( ): Promise<any>=>{
    return service.get("product/getAll");
}