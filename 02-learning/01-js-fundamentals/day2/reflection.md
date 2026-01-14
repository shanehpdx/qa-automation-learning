12.10.2025
I will record rough notes here of what I'm told I learned and whether or not I need to do a bit more work on the thing.

Today's Wins and Learnings

fixed a path mismatch - GPT did the real lifting here but I shall endeavor to do more of the error debugging on my own.

verified your real folder location - I think this id done by way of copying the absolute path but will ask later.

learned how to copy absolute paths - cery easy in VS Code by way of right click on the file or folder

learned how Node resolves modules - Need to circle back. I'm not sure I really understand this.

handled the error like an engineer - not so much but baby steps

Totally forgot to add in my notes at the end of the day but I do feel like I'm making progress.
Working in VS Code is getting easier, I am able to spot some errors on my own and fix them preemptively. 
I am super stoked with having gone through the headache of connecting github and setting up Obsidian.  

And finally. The things ChatGPT says I accomplished which I will validate later. I want to maintain momentum.

# Day 2 Reflection

Today I:

- Modeled login test cases as data and looped through them.
- Wrote a `simulateLogin` function and compared `actualResult` vs `expectedResult` with a PASS/FAIL outcome.
- Proved that my harness works by intentionally breaking a test case and observing a FAIL, then fixing it again.
- Built a simple cart and wrote logic to calculate a total using `price * quantity` and a running sum.
- Manually validated the cart total to confirm the business logic was correct.
- Fought with paths and typos, and learned (again) that computers care about exact folder names, not vibes.

Things I want to remember:

- Errors are information, not failure.
- `total = total + price * quantity` is just a compact way of saying “add this line’s amount to the running total.”
- Always save and re-run before I assume the code is wrong.
- Building little PASS/FAIL checks in plain JS makes the jump to Playwright-style assertions feel much less scary.