import { ColiDeclarationType, ColiObject } from "../_abstract";

export abstract class Declaration extends ColiObject {
  constructor(readonly __type: ColiDeclarationType) {
    super(__type);
  }
}
