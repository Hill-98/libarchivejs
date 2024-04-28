import { Worker } from "worker_threads";
import { dirname } from "path";
import { fileURLToPath } from "url";
import * as Comlink from "comlink";
import nodeEndpoint from "comlink/dist/esm/node-adapter";
import { Archive } from "./libarchive";
export * from "./libarchive";

const __dirname = dirname(fileURLToPath(import.meta.url));

Archive.init({
  getWorker: () => new Worker(`${__dirname}/worker-bundle-node.mjs`),
  createClient: (worker) => Comlink.wrap(nodeEndpoint(worker)),
});
