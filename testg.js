import { getMatches, removeMatches } from "./lib/gitignore-executer.js";
import { dirMapFlat } from "./lib/dirMap.js";
import fix from "./lib/es_patches.js"
fix(import.meta);
console.log(getMatches(dirMapFlat(__dirname),".gitignore",__dirname));
console.log(dirMapFlat(__dirname + "/packages"))
removeMatches("./",".gitignore","./")