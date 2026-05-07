Debouncing:

- Typing Slow - 200ms
- Typing Fast - 30ms

Performance -
Searching "IPhone Pro Max"
e.g. 1000 People Searching at a time

- 14 Letter \* 1000 = 14000 API Call
- With Debouncing - 3 - 4 \* 1000 = 3000 - 4000 API Call

- Debouncing with 200 ms
- If Difference beteen Two Key Strokes is < 200 ms - Decline API Call
- If > 200 ms - Make an API Call


Cache:

- Time Complexity to Search in Array = 0(n)

[i, ip, iph, ipho, iphon, iphone]

- Time Complexity to Search in Object = 0(1)

{
  i,
  ip,
  iph,
  ipho,
  iphon,
  iphone
}

- new Map()

- Time Complexity is better in new Map() than Object. In Object it is better than Array

- Live Chat >>>>> Infinite Scroll >>>>> Pagination