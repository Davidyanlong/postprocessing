import test from "ava";
import { ClearMaskPass } from "../../build/postprocessing.umd.js";

test("can be created and destroyed", t => {

	const object = new ClearMaskPass();
	object.dispose();

	t.truthy(object);

});
