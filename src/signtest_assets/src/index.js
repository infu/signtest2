import { createActor } from "../../declarations/signtest";
import { LedgerIdentity } from "./test/nns_identity.ts";

document.querySelector("form").addEventListener("submit", async (e) => {
  let identity = await LedgerIdentity.create();

  const signtest = createActor(process.env.SIGNTEST_CANISTER_ID, {
    agentOptions: { identity },
  });

  e.preventDefault();
  const button = e.target.querySelector("button");

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const count = await signtest.add(3);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = "Sum " + count;

  return false;
});
