import test from "ava";
import { ColorAverageEffect } from "../../build/postprocessing.umd.js";

test("can be created and destroyed", t => {

	const object = new ColorAverageEffect();
	object.dispose();

	t.truthy(object);

});
