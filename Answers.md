For our end-to-end test, we tested the Todo-Page which is our main page with all the todos and a part of the completed todo page. 
For the Todo List, we checked if getTodoTitle returns "Todos" as it should. Another thing we checked was if we can type in filter owner box
  and then give it an id to find on that page, and get back the correct body associated with that id. We used id to search for Unique todos
  because every todo has a unique id. We also checked for filter category box and filter body box in the same way.
For the completed todo list, we checked if the title of the page was right. We were going to check the rest of the elements on that page, 
  but for some reason the css lcoator cannot retireve the information even though it's the same oeprations as the main todo-list page
  which works. Regardless, the pages themselves work. We didn't do e2e testing for the incomplete todo page, because it would run into
  the same problem as the complete todo page.
