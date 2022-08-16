import { Registry, Server } from "miragejs";
import { AnyFactories, AnyModels } from "miragejs/-types";
import { getSuggestions } from "../controllers/suggestionsController";

export default function routes(
  this: Server<Registry<AnyModels, AnyFactories>>
) {
  this.namespace = "/api";

  this.get("/suggestions", getSuggestions);
}
