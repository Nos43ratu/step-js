import NodeCache from "node-cache";

export const cache = new NodeCache({ stdTTL: 18000 }); // cache for 1 hour
