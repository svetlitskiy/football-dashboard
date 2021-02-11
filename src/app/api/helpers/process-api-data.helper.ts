export function processApiDataHelper<T>(data: unknown): T {
  let ret: unknown;

  if (Array.isArray(data)) {
    ret = data.map((item: unknown) => processApiDataHelper(item));
  } else if (data === null) {
    ret = data;
  } else if (typeof data === 'object') {
    ret = {};
    // @ts-ignore
    Object.keys(data).forEach((key: string) => {
      // @ts-ignore
      ret[_getKeyName(key)] = processApiDataHelper(data[key]);
    });
  } else {
    ret = data;
  }

  return ret as T;
}

function _getKeyName(key: string): string {
  let ret: string = key
    .replace(new RegExp('id$'), '_id')
    .replace(new RegExp('_+'), '_')
    .split('_')
    .map((item: string) => item[0].toUpperCase() + item.substr(1))
    .join('');

  ret = ret[0].toLowerCase() + ret.slice(1);

  return ret;
}
