# db-input-converter
Solution to one of the coding puzzles I stumbled upon.

The coding assignment I received asked me to convert an array like input into a string that can be easily read.

This:
[ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]

Into this:
"a < b OR (c == d AND e != f)"

My algorithm can work with any number of logic clauses if it is provided a valid input ([ <logical_operator>, <value_one>, <value_two> ]).

It makes use of recursion and closure.
