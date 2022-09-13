import { omit } from "./omit";
import { Api } from "../services/api";

const update = async (endpoint: string, datas: any) => {
  const pickFields = omit(datas, "id", "idLogin");
  const { data: response } = await Api.put(
    `${endpoint}${datas.id}`,
    pickFields
  );
  return response.data;
};

const list = async () => {
  const response = await Api.get("product/category/all/" + 1);

  return response.data.category;
};
export { update, list };
