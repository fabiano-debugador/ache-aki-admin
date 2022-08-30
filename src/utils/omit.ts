export function omit(obj: any, ...props: Array<string>) {
  const result = { ...obj };
  props.forEach(function (prop: string) {
    delete result[prop];
  });
  return result;
}
