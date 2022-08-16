import { Request } from "miragejs";
import { AnyFactories, AnyModels, Registry } from "miragejs/-types";
import Schema from "miragejs/orm/schema";

export function getSuggestions(
  schema: Schema<Registry<AnyModels, AnyFactories>>,
  request: Request
) {
  return schema.db.suggestions;
}
