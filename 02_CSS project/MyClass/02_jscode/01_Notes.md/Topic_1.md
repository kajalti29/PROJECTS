<!-- what is js ? -->
Javascript is a high-level, interprited and object-oriented programming language used to make websites interactive and dynamic.It work in the brower and also on the server.

<!-- Features -->
<!-- Lightweight – Simple aur fast. -->
<!-- Dynamic – Variables ka type run-time par decide hota hai. -->
<!-- Event-Driven – User actions par kaam karta hai. -->
<!-- Prototype-based – Classes ki jagah prototypes use karta hai. -->

---------------------------------------------------------------------------------------------------------------------

<!-- What is variable ? -->
A variable is a container used to store data(value) in a program.

naming rules:-
1] A variable name can start only with - a letter, underscore_ and dollar($).
2] No number at start.
3] No space.
4] Reserved keywords can not be used.
5] Variable name are case-sensitive.

JavaScript has three ways to declare variables:

* Let :- Variable cannot re-declared but can be update.
         It is a block scop(work only inside {})
         Hoisted but not initialized(Temporal dead zone means error aata hai)

         console.log(a); // Error (a is in TDZ)
         let a = 10;
         console.log(a); // ✔ 10

<!-- Example: let message = "Hello Word";
             message = "kajalti";
             console.log(message);
              -->

* Const :- Variable cannot be re-declared and cannot be update.

Example:- 