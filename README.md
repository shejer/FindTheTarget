# Find the target

_Goal: To create a simple math program that will be able to find a Target Number that is hidden (or not) within the Host Number.   The program would have a pre-set list of rules that it would need to work through to find or not find the Target Number._

Rules within the program used to determine whether or not the Target Number is hidden within the Host Number;

1. Only addition and subtraction can be used.
2. The program can only use the whole numbers that the program identifies within the Host Number.
3. The program must work through each combination of single, double, triple, and quadruple-digit
   numbers, in the order they appear.
4. The use of each whole number starts from the left and moves through to the right
5. There are no negative numbers. In math we know that 8-3 =5. In this program if the Host Number
   was 15038, and if we were looking for a #5, we see the 38… well normally 3-8 would be -5, but  
    because there or no negative numbers and the answer is 5.

6. As the program works through the combinations moving from left to right, if a number IS NOT USED,
   it CAN NOT be reintroduced into any part of the solution (even if it was used as a single number, it
   can not be reintroduced into the equation as part of a larger 2 or 3 digit number)
7. In order for the Target Number to be valid, the FIRST AND LAST NUMBER in the Host Number MUST
   have been used in one of the equations that make up the Target number. If either one is not used, and the Target Number is found, the Target Number is FALSE and is not to be recognized.
8. Once an = is used, that part of the equation is complete. At that point either the digit within the
   target has been found OR, that same digit can be used as part of the next equation... see examples.

Below are some examples as well as the rules of the program...

Host Number: 15031
Target number: 397 & 763

_*THE HOST NUMBER*_

When input into the Host Number field the program must break down the Host Number (in this example: 15031) into any whole numbers within it.  These numbers must be kept in the order they appear within the Host Number starting from the left and working to the right.  They can not be moved.

The whole numbers in 15031 are as follows:

1,5,0,3,1 and then 15,31 and then 150 and then 1503, 5031

The whole numbers consist of 1's, 10's, 100's, and 1000's, and again, always in the order, they appear.

Host Number: 15031
Target number: 397 & 763

**Example 1:**

Target #  397

Moving left to right'

    1) (1+5 = 6)  (0+3=3)  6-3=3
    2) (1+5 = 6)  (0+3=3)  6+3=9
    3) (5+0=5) (3-1+2)   5+2=7

Example using the above Target #  763

    1)  (1-5=4) (0+3=3)  4+3=7
    2) (1+5=6)  6
    3) (5+0=5) (3-1=2)  5-2=3

NOTE: with this example, because we did not use the number 1 in the 3rd equation to find the 3, we would not be able to reintroduce it back into the equation later.

**Example 2:**

Target #  3085
Host # 51417

    1) (5+1=6) (4-1=3)   6-3=3
    2) 5 - (1+4) = 0
    3) (5-1+4) + 4 = 8
    4) (1-4=3) (1+7=8)  3-8=5

NOTE: In this example 8-3 =5, but 3-8 also equals 5.  Under normal conditions, 3-8 would be -5, but in this program, there are no negative numbers and the answer is 5.

**Example 3:**

Target #: 397
Host Number: 22194

    1) 2 + (2-1+1) 2+1= 3
    2) (2+1=3) + 94 = 97

**Example 4:**

Target #: 321
Host Number: 33303

    1) (3-3=0) +3 = 3
    2)  (( (3+3=6)-30=24 )) - (0+3=3)=21

**Example 5:**

Target #: 1822
Host Number: 12537

    1) 1-2= 1
    2) 1 + (2+5=7)= 8
    3) 5-3= 2
    4) 2 – (3-7=4) = 2

NOT VALID.. in Step 3 the 1 and 2 were not used.. so in Step 4 we reintroduced the 2 back into the equation… therefor not valid.

**Example 6:**

Target #: 2131
Host Number: 39422

    1) 3- (9-4=5) = 2
    2) 9+4 =13
    3) (9-4=5) – (2+2=4)  5-4=1

After we found 2, we found 9+4 = 13… because the first digit in the Host # (3) was not used in the 2nd equation, it can not be brought back into any other future equations necessary to find the next number.

These are but a few examples.  The flow of the equation is always the same.  The trick is identifying the whole numbers, keeping them in order and following the few simple rules as stated.


These are examples of a positive Target Number. These can be used to test the program once compete.

| Target | Host  |
|--------|-------|
| 325    | 6811  |
| 333    | 10061 |
| 419    | 10540 |
| 441    | 10540 |
| 441    | 10934 |
| 517    | 11034 |
| 518    | 10934 |
