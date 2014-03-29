(Easy): Tree Generation
=======================

Your goal is to draw a tree given the base-width of the tree (the number of characters on the bottom-most row of the triangle section). This "tree" must be drawn through ASCII art-style graphics on standard console output. It will consist of a 1x3 trunk on the bottom, and a triangle shape on the top. The tree must be centered, with the leaves growing from a base of N-characters, up to a top-layer of 1 character. Each layer reduces by 2 character, so the bottom might be 7, while shrinks to 5, 3, and 1 on top layers. See example output.


Sample Input

    13 = +

Sample Output

          +
         +++
        +++++
       +++++++
      +++++++++
     +++++++++++
    +++++++++++++
         ===
