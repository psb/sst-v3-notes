import { Resource } from "sst";
import { Example } from "@sst-v3-notes/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
