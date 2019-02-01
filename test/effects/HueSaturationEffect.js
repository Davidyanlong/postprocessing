import test from "ava";
import { HueSaturationEffect } from "../../build/postprocessing.umd.js";

test("can be created and destroyed", t => {

	const object = new HueSaturationEffect();
	object.dispose();

	t.truthy(object);

});
