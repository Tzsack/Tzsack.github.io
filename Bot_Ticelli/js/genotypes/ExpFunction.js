/**
 * 
 */

class ExpFunction {
	
	static random() { 
		var f = random_int(func_array.length);
		return func_array[f];
	}
	
	constructor(func, defaultArgs, name) {
		this.defaultArgs = defaultArgs;
		this.func = func;
		this.name = name;
	}
	
	arity() {
		return this.defaultArgs.length;
	}
	
	evaluate(args) {
		if (args.length >= this.arity())
			return this.func(args);
		else {
			var _args = [];
			for (var i = 0; i < this.arity(); i++) {
				if (i < args.length && args[i] != NaN)
					_args.push(args[i]);
				else
					_args.push(this.defaultArgs[i]);
			}
			return this.func(_args);
		}
	}
	
}

const addF = new ExpFunction(
		function(vars) {
			var res = 0;
			for (var i = 0; i < vars.length; i++)
				res += vars[i];
			return res;
		},
		[0,0],
		"sum"
)

const mulF = new ExpFunction(
		function(vars) {
			var res = 1;
			for (var i = 0; i < vars.length; i++)
				res *= vars[i];
			return res;
		},
		[1,1],
		"mul"
)

const powF = new ExpFunction(
		function(vars) {
			return Math.pow(Math.abs(vars[0]), vars[1]);
		},
		[1,1],
		"pow"
)

const logF = new ExpFunction(
		function(vars) {
			var res = Math.log(Math.abs(vars[1])) / Math.log(Math.abs(vars[0]));
			if (Math.abs(res) == Infinity)
				return NaN;
			return res;
		},
		[1, Math.E],
		"log*"
)

const sinF = new ExpFunction(
		function(vars) {
			return Math.sin(vars[0]);
		},
		[0],
		"sin"
)

const cosF = new ExpFunction(
		function(vars) {
			return Math.cos(vars[0]);
		},
		[0],
		"cos"
)

const tanF = new ExpFunction(
		function(vars) {
			return Math.tan(vars[0]);
		},
		[0],
		"tan"
)

const absF = new ExpFunction(
		function(vars) {
			return Math.abs(vars[0]);
		},
		[0],
		"abs"
)

const modF = new ExpFunction(
		function(vars) {
			return vars[0] % vars[1];
		},
		[0,1],
		"mod"
)

const atanF = new ExpFunction(
		function(vars) {
			return Math.atan(vars[0]);
		},
		[0],
		"atan"
)

const idF = new ExpFunction(
		function(vars) {
			return vars[0];
		},
		[0],
		""
)

const divF = new ExpFunction(
		function(vars) {
			if (vars[1] == 0)
				return NaN;
			return vars[0] / vars[1];
		},
		[1,1],
		"div"
)

//const func_array = [absF, addF, atanF, cosF, idF, logF, modF, mulF, powF, sinF, tanF];
const func_array = [absF, atanF, cosF, idF, logF, modF, sinF, divF];
//const func_array = [sinF, idF];