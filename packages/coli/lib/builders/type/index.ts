export class Type {
  constructor(readonly type: string) {}
}

export class Types {
  static struct(obj: object): Type {
    return new Type(JSON.stringify(obj));
  }
  static string: Type = new Type("string");
  static any: Type = new Type("any");
  static number: Type = new Type("number");
  static bigint: Type = new Type("bigint");
  static object: Type = new Type("object");
  static boolean: Type = new Type("boolean");
  static unknown: Type = new Type("unknown");
  static void: Type = new Type("void");
  static undefined: Type = new Type("undefined");
  static never: Type = new Type("never");
  static getAllTypes() {
    return Object.keys(this);
  }
}
