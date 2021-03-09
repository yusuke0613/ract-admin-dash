/* eslint-disable */
import { DB } from "./demo-db";

import { Entity } from "../types";
import url from "url";
import querystring from "querystring";
import { HttpMethod } from "../store/types";
import { getSeachFilters } from "../utils/app-utils";

const ds = Object.assign({}, DB);
const EXPAND = "_expand";

function getModel(action: string) {
  if (action.includes("/")) {
    return action.substring(0, action.indexOf("/"));
  } else {
    return action;
  }
}

function getId(action: string): string {
  if (action.includes("/")) {
    return action.substring(action.indexOf("/"));
  } else {
    return "";
  }
}

function getExpand(qs: TODO) {
  if (EXPAND in qs) {
    return qs[EXPAND];
  } else return "";
}

function parseRequest(req: string) {
  const parsedUrl = url.parse(req);
  const parsedQs = querystring.parse(parsedUrl.query);
  const model = getModel(parsedUrl.pathname);
  const anNo = getId(parsedUrl.pathname);
  const exp = getExpand(parsedQs);
  const filters = getSeachFilters(parsedQs);
  return { model, anNo, exp, filters };
}

export function getData(action: string): Promise<TODO> {
  const { model, anNo, exp, filters } = parseRequest(action);
  return new Promise(function (resolve, _reject) {
    const expandModel = exp
      ? exp === "category"
        ? "categories"
        : exp + "s"
      : exp;

    let result: TODO;
    let expand: string, expandId: string;

    if (model in ds) {
      if (anNo) {
        result = ds[model].find(
          (d: { anNo: string }) => d.anNo === anNo.replace("/", "")
        );
        if (expandModel) {
          expand = expandModel.substr(0, expandModel.length - 1);
          // expandId = result[expand + "Id"] as number;
          result[expand] =
            ds[expandModel][
              ds[expandModel].find((d: { anNo: string }) => d.anNo === expandId)
            ];
        }
      } else {
        result = ds[model].map((m: { [x: string]: TODO }) => {
          if (expandModel) {
            // expand =
            //   expandModel === "categories"
            //     ? "category"
            //     : expandModel.substr(0, expandModel.length - 1);
            // expandId = m[expand + "Id"] as number;
            m[expand] =
              ds[expandModel][
                ds[expandModel].findIndex(
                  (d: { anNo: string }) => d.anNo === expandId
                )
              ];
          }
          return m;
        });
      }

      if (
        filters !== null &&
        filters !== undefined &&
        Object.keys(filters).length > 0
      ) {
        result = result.filter((row) =>
          Object.keys(filters).every((prop) => filters[prop](prop, row))
        );
      }
    }
    setTimeout(resolve, 300, { data: result });
  });
}

export function postData(action: string, data: Entity): Promise<TODO> {
  const { model } = parseRequest(action);
  return new Promise(function (resolve, _reject) {
    ds[model].push(data);
    setTimeout(resolve, 300, { data: data });
  });
}

export function putData(action: string, data: Entity): Promise<TODO> {
  const { model, anNo } = parseRequest(action);
  return new Promise(function (resolve, _reject) {
    const idx = ds[model].findIndex((d: { id: string }) => d.id === anNo);
    ds[model][idx] = Object.assign({}, data);
    setTimeout(resolve, 300, { data: data });
  });
}

// export function deleteData(action: string): Promise<TODO> {
//   const { model, anNo } = parseRequest(action);
//   return new Promise(function (resolve, _reject) {
//     if (anNo) {
//       ds[model].splice(
//         ds[model].findIndex((d: Entity) => d.id === anNo),
//         1
//       );
//     }
//     setTimeout(resolve, 300, { data: anNo });
//   });
// }

export function login(
  action: string,
  _method: HttpMethod,
  data: TODO
): Promise<TODO> {
  return new Promise(function (resolve, _reject) {
    if (data.username === "admin@test.com" && data.password === "password") {
      const { accessToken: accessToken, user } = ds.token;
      setTimeout(resolve, 300, {
        token: accessToken,
        user,
      });
    } else {
      _reject({
        code: 403,
        error: "Your name or password is wrong",
      });
    }
  });
}

export function callApi(
  endpoint,
  method: HttpMethod,
  data?: TODO,
  filters?: TODO
) {
  switch (method) {
    case HttpMethod.GET:
      return getData(endpoint);
    case HttpMethod.PUT:
      return putData(endpoint, data);
    case HttpMethod.POST:
      return postData(endpoint, data);
    case HttpMethod.DELETE:
    //eturn deleteData(endpoint);
    default:
      return null;
  }
}

export const CALL_API = Symbol("Call API");
