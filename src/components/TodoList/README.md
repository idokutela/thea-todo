# TodoList
A stateless `dumb` list of Todos. To see the stateful component,
look at `TodoWidget`.

Even if it is stateless, todolist is not without interest.
Its structure is:

 - TodoInput
 - ul
   - Item
   - SwapButton
   - Item
   - SwapButton
   - Item
   - ...

There are various ways to achieve the interleaving of items and
swap buttons. Here, we map out the item data to Items,
then do a reduction, for each item that isn’t the first,
pushing a swap button onto the list.
