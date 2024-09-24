export const enumToPgEnum = (myEnum: any): [string, ...string[]] => {
  return Object.values(myEnum).map((value: any) => `${value}`) as [
    string,
    ...string[]
  ];
};
