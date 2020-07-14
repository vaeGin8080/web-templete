import request from "@/utils/request";

export function api(query) {
  return request({
    url: "",
    method: "post",
    data: query,
  });
}
