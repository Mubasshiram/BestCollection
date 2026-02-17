1) What is the difference between null and undefined?
ans.
যখন কোনো ভ্যারিয়েবল ডিক্লেয়ার করা হয় কিন্তু তাকে কোনো মান দেওয়া হয় না, তখন তার মান হয় undefined।
null মানে হলো ইচ্ছা করে খালি মান দেওয়া।এটা প্রোগ্রামার নিজে সেট করে।

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
Ans.map() একটি নতুন array তৈরি করে। পুরাতন array এর প্রতিটি উপাদানের উপর কাজ করে নতুন মান রিটার্ন করে।
forEach() শুধু প্রতিটি উপাদানের উপর কাজ করে। এটি নতুন array রিটার্ন করে না।

3) What is the difference between == and ===?
Ans. ==(Loose Equality):
*শুধু মান (value) চেক করে।
*প্রয়োজনে type পরিবর্তন করে নেয়।
===(Loose Equality):
*শুধু মান (value) চেক করে।
*প্রয়োজনে type পরিবর্তন করে নেয়।

4) What is the significance of async/await in fetching API data?
Ans.এটি asynchronous কোড সহজভাবে লেখার উপায়। Promise handle করতে সাহায্য করে। কোড পড়তে সহজ হয়।
error handle করা সহজ হয় 

5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Ans.Scope মানে হলো কোনো ভ্যারিয়েবল কোথায় ব্যবহার করা যাবে
Global Scope:
বাইরে ডিক্লেয়ার করা ভ্যারিয়েবল।
যেকোনো জায়গা থেকে ব্যবহার করা যায়।

Function Scope:
ফাংশনের ভিতরে ডিক্লেয়ার করা ভ্যারিয়েবল।
শুধু সেই ফাংশনের ভিতরে ব্যবহার করা যায়।


Block Scope:
{} এর ভিতরে ডিক্লেয়ার করা ভ্যারিয়েবল।
শুধু সেই block এর ভিতরে কাজ করে।
let এবং const block scope মানে।